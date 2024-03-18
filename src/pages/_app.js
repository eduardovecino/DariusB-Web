import { useRouter } from "next/router";
import { FormattedMessage, IntlProvider } from "react-intl";
import { PrimeReactProvider } from "primereact/api";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import fr from '../../public/locales/fr/common.json';
import es from '../../public/locales/es/common.json';
import en from '../../public/locales/en/common.json';
import { appWithTranslation } from 'next-i18next';
require('../styles/main.css');

// Initialize i18next outside the component
i18next
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },   // React already does escaping
    lng: i18next.language ? i18next.language : 'en', // Set default language
    resources: {
      en: { common: en },
      fr: { common: fr },
      es: { common: es },
    },
    detection:{
      order: ["path", "navigator"]
    }
  });
function MyApp({ Component, pageProps }) {
  const { locale, defaultLocale } = useRouter();

  return (
    <IntlProvider locale={locale} defaultLocale={defaultLocale}>
      <PrimeReactProvider>
        <Component {...pageProps} />
      </PrimeReactProvider>
    </IntlProvider>
  );
}

export default appWithTranslation(MyApp);