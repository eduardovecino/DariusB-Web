import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import Link from "next/link";
import { useRouter } from "next/router";
import LocaleSwitcher from '../components/LocalSwitcher/locale-switcher';
type ContactPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function ContactPage(props: ContactPageProps) {
  const router = useRouter();
  const { defaultLocale } = router;
  console.log(props.locale);
  return (
    <div>
      <h1 >Contact</h1>
      <p>Current locale: {props.locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(props.locales)}</p>

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

export const getServerSideProps: GetServerSideProps<Props> = async ({
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
