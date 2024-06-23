import Link from "next/link";
import { useRouter } from "next/router";
import LocaleSwitcher from "../components/LocalSwitcher/locale-switcher";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import MenuComponentPage from "../components/MenuComponent/menu-component";
import { GetStaticProps } from "next";

type IndexPageProps = {
  translations: Record<string, any>;
};

export default function IndexPage({ translations }: IndexPageProps) {
  const { locale, defaultLocale, events } = useRouter();
  const { t, i18n } = useTranslation("common");

  useEffect(() => {
    i18n.addResourceBundle(locale as string, 'common', translations);
  }, [locale, i18n, translations]);

  return (
    <div>
      {/* <LocaleSwitcher/> */}
      <MenuComponentPage />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const json = await import(`../public/locales/${locale}/common.json`);

  return {
    props: {
      translations: json.default,
    },
  };
};
