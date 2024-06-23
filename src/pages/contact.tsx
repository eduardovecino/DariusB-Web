import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import buttons from '../components/MenuComponent/menu-component.module.css'
import style from './contactabout.module.css'
import { useRouter } from "next/router";
import LocaleSwitcher from "../components/LocalSwitcher/locale-switcher";
import { useTranslation } from "react-i18next";

type ContactPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function ContactPage(props: ContactPageProps) {
  const { t, i18n } = useTranslation("common");

  const router = useRouter();
  const { defaultLocale } = router;
  
  const goHome = () => {
    router.push('/'); // Navigate to the root route
  };

  function redirectToAbout() {
    window.location.href = "/about";
  }

  return (
    <div className={style.contactBox}>
      <LocaleSwitcher />
      <a className={buttons.title} onClick={goHome}>{t(`author`)}</a>
        <div className={style.contactStyledBox}>
          <h1 className={style.buttonSimpleStyle}>{t(`about_contact`)}</h1>
          <p className={style.contactInfo}>{t(`about_telf_number`)}</p>
          <p className={style.contactInfo} >{t(`about_mail`)}</p>
        </div>
        <div className={buttons.footerGroup}>
        <div className={buttons.footerButtonGroup}>
            <button className={buttons.footerButton} onClick={() => redirectToAbout()}>{t(`about`)}</button>
          </div>
          <footer className={buttons.footer}>
            <div className={buttons.footerContent}>
              <div className={buttons.animatedText}>
              <span>{t(`news`)} </span>
              <span>{t(`news`)} </span>
              </div>
            </div>
          </footer>
      </div>
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
