import type {
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import LocaleSwitcher from "../../../components/LocalSwitcher/locale-switcher";

type WorkPageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function WorkPage(props: WorkPageProps) {
  const router = useRouter();
  const { defaultLocale, isFallback, query } = router;

  if (isFallback) {
    return "Loading...";
  }
  console.log(query);
  return (
    
    <div>
      <h1>{query.work}</h1>
      <LocaleSwitcher />
      <Link href="/">Menu</Link>
      <br />
    </div>
  );
}






type Props = {
  locale?: string;
  locales?: string[];
};

export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
  locales,
}) => {
  return {
    props: {
      locale,
      locales,
    },
  };
};

export const getStaticPaths: GetStaticPaths = ({ locales = [] }) => {
  const paths = [];

  for (const locale of locales) {
    paths.push({ params: { work: "festival" }, locale });
    paths.push({ params: { work: "whiteSheetII" }, locale });
    paths.push({ params: { work: "fairelAmouralAeroport" }, locale });
    paths.push({ params: { work: "salvandoLasDistancias" }, locale });
  }

  return {
    paths,
    fallback: true,
  };
};
