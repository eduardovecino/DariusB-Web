import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import LocaleSwitcher from "../../../components/LocalSwitcher/locale-switcher";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";


type WorkPageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function WorkPage(props: WorkPageProps) {
  const router = useRouter();
  const { defaultLocale } = router;
  const { t, i18n } = useTranslation("common");

  return (
    <div>
      <h1>{t('work')}</h1>
      <p>Current locale: {props.locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(props.locale)}</p>

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
      ...(await serverSideTranslations( (locale || 'en'), ["common"]))
    },
  };
};



