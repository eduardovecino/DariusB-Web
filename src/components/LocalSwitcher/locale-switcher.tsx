import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from './locale-switcher.module.css'
import { changeLanguage } from "i18next";

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const { t, i18n } = useTranslation('common');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  let nL: string;

  const handleChangeLanguage = (newLocale: string) => {
    i18n.changeLanguage(newLocale);
    nL = newLocale;
  };

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      let newLocal: string | undefined = url.split('/')[1];
      if (!locales?.includes(newLocal)) {
        newLocal = activeLocale;
      }
   
      setIsDisabled(newLocal === activeLocale);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [activeLocale, locales]);

  function  setStatus(e:any) {
    console.log('setStatus' + e)
  }
  return (
    <div className={styles.positionRight}>
        {locales && locales.map(locale => (
          <div key={locale}>
            <button
              className={(nL === locale) ? 'activeButton' : '' }
              type="button"
              onClick={(e) => [e.preventDefault(), setStatus(e), handleChangeLanguage(locale)]}
              disabled={false}>
              {locale}
            </button>
          </div>
        )) }
    </div>
  );
}