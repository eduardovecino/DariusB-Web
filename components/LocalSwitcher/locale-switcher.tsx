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
import { useEffect } from "react";
import { useTranslation } from "react-i18next";


export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  // Check if locales is defined to prevent potential errors
  const otherLocales = locales ? locales.filter(locale => locale !== activeLocale) : [];

  // Retrieve route data outside the map function
  const { pathname, query, asPath } = router;
  const { locale, defaultLocale, events } = useRouter();
  const { t, i18n } = useTranslation("common");
  
  
  useEffect(() => {
    const handleRouteChange = (url) => {
      let newLocale = url.split('/')[1];
      if (!newLocale) {
        newLocale = defaultLocale;
      }
      if (newLocale && i18n.language !== newLocale) {
        i18n.changeLanguage(newLocale);
      }
    };

    events.on('routeChangeComplete', handleRouteChange);

    return () => {
      events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);



console.log(activeLocale)
  return (
    <div>
      <p>Locale switcher:</p>
      <ul>
        {otherLocales.map(locale => (
          
          <li className="list" key={locale}>
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
