import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import worksStyles from './work/work.module.css'
import buttons from './../components/MenuComponent/menu-component.module.css'
import { useRouter } from "next/router";
import LocaleSwitcher from "./../components/LocalSwitcher/locale-switcher"
import picture from "./../assets/img/darius-bio.jpeg";
import { useTranslation } from "react-i18next";
import style from './contactabout.module.css'

type AboutPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function AboutPage(props: AboutPageProps) {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const { defaultLocale } = router;

  const goHome = () => {
    router.push('/'); // Navigate to the root route
  };
  function redirectToContact() {
    window.location.href = "/contact";
  }
  return (
    <div style={{height: '-webkit-fill-available', overflow:'hidden'}}>
      {/* <LocaleSwitcher /> */}
      <a className={worksStyles.title} onClick={goHome}>{t(`author`)}</a>

       {/* Content */}
       <div style={{ display:'flex', overflow:'hidden' }}>
        {/* Column left */}
        <div className={worksStyles.column}>
          <div className={worksStyles.content}>
            <h3 className={worksStyles.titleHead}>{t(`about`)}</h3>
            <p>{t(`about_description`)}</p>
          </div>
        </div>
        
        {/* Column left */}
        <div className={worksStyles.column}>
            <div className={worksStyles.content}>
              <div  className={worksStyles.boxImageApp} style={{paddingTop: '40px', paddingBottom: '80px', alignItems: 'flex-start'}}>
                <img className={style.styleImg}  src={picture.src}/>
                <p>{t(`about_footer_picture`)}</p>
             </div>
            </div>
        </div>
      </div>

      <div className={buttons.footerGroup}>
        <div className={buttons.footerButtonGroup}>
            <button className={buttons.footerButton} onClick={() => redirectToContact()}>{t(`about_contact`)}</button>
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
