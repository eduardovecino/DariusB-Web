import Link from "next/link";
import { useRouter } from "next/router";
import LocaleSwitcher from "../../components/LocalSwitcher/locale-switcher";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import MenuPage from "../../components/MenuComponent/menu-component";

export default function IndexPage() {
  const { locale, defaultLocale, events } = useRouter();
  const { t, i18n } = useTranslation("common");


  return (
    <div>
      <LocaleSwitcher />
      <br/>
      <h1>{t('welcome')}</h1>
      <MenuPage/>
    </div>
  );
}

