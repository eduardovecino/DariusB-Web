import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from './locale-switcher.module.css'

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const { t, i18n } = useTranslation('common');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const handleChangeLanguage = (newLocale: string) => {
    i18n.changeLanguage(newLocale);
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

  return (
    <div className={styles.positionRight}>
      <ul className={styles.OptionList}>
        {locales && locales.map(locale => (
          <li key={locale}>
            <button
              type="button"
              onClick={() => handleChangeLanguage(locale)}
              disabled={locale === activeLocale || isDisabled}
            >
              {locale}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}