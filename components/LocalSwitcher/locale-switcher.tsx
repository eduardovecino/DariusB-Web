// import Link from "next/link";
// import { useRouter } from "next/router";
// import '../LocalSwitcher/locale-switcher'

// export default function LocaleSwitcher() {
//   const router = useRouter();
//   const { locales, locale: activeLocale } = router;

//   const otherLocales = (locales || []).filter(
//     (locale) => locale !== activeLocale,
//   );

//   return (
//     <div>
//       <p>Locale switcher:</p>
//       <ul>
//         {otherLocales.map((locale) => {
//           console.log(locale)
//           const { pathname, query, asPath } = router;
//           return (
//             <li className="list" key={locale}>
//               <Link
//                 href={{ pathname, query }}
//                 as={asPath}
//                 locale={locale}
//                 legacyBehavior
//               >
//                 {locale}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }


import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from './locale-switcher.module.css'
/*
export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  // Check if locales is defined to prevent potential errors
  // const otherLocales = locales ? locales.filter(locale => locale !== activeLocale) : [];
  const otherLocales: string[] | undefined= locales;
  
  // Retrieve route data outside the map function
  const { pathname, query, asPath } = router;
  const { locale, defaultLocale, events } = useRouter();
  const { t, i18n } = useTranslation("common");

  
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      let newLocal: string | undefined = url.split('/')[1];
      if (newLocal !== ('fr' || 'es')){
        newLocal = activeLocale;
      }
      if (!newLocal) {
        newLocal = defaultLocale;
      }
      if (newLocal && i18n.language !== newLocal) {
        i18n.changeLanguage(newLocal);
      }
    };

    events.on('routeChangeComplete', handleRouteChange);

    return () => {
      events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);



console.log("Activate Locale: " +activeLocale)
  return (
    <div className={styles.positionRight}>
      <ul>
        {otherLocales.map(locale => (
          <li key={locale}>
            <Link
              href={{ pathname, query }}
              as={asPath}
              locale={locale}
              legacyBehavior>
              {locale}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
*/

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