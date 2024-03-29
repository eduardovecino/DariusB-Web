import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from './work.module.css'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import LocaleSwitcher from '../../../components/LocalSwitcher/locale-switcher';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

type WorkPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

function WorkPage(props: WorkPageProps) {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const { defaultLocale } = router;
  const [workIndex, setWorkIndex] = useState<number | null>(null); // State to store the work index
  const [work, setWork] = useState<{ title: string; text: string; } | null>(null); // State to store the work data

    // Load JSON file based on the selected locale
    useEffect(() => {
        const loadJson = async () => {
          try {
            const json = await import(`../../../public/locales/${i18n.language}/common.json`);
            if (workIndex !== null && `work${workIndex}` in json.default.works) {
              setWork(json.default.works[`work${workIndex}`]);
            } else {
              setWork(null); // Reset work data if workIndex is null or invalid
            }
          } catch (error) {
            console.error('Error loading JSON file:', error);
          }
        };

      loadJson();
    }, [i18n.language, workIndex]); // Update when locale or workIndex changes

    // Update workIndex when query parameter changes
    useEffect(() => {
      const index = Number(router.query.workIndex); // Convert string to number
      if (!isNaN(index)) {
        setWorkIndex(index); // Set the work index if it's a valid number
      }
    }, [router.query.workIndex]); // Update when workIndex changes

    if (!work) {
      return <div>Loading...</div>; // Render loading state if work data is not available yet
    }

  return (
    <div style={{height: '100%', paddingLeft:'12px', paddingRight:'12px'}}>
      <LocaleSwitcher></LocaleSwitcher>
      <a className={styles.title}> Darius Bogdanowicz</a>
      <div style={{ display:'flex', overflow:'hidden' }}>
        <div className={styles.column}>
          <div className={styles.content}>
            <h3 className={styles.titleHead}>{t(work.title)}</h3>
            <p> {t(work.text)}</p>
          </div>
        </div>
        <div className={styles.column}>
            <div className={styles.content}>
              <div  className={styles.boxImageApp} style={{paddingTop: '40px', paddingBottom: '80px', alignItems: 'flex-start'}}>
                <iframe src="https://player.vimeo.com/video/182263841?h=b391f90c78" width="640" height="360" ></iframe>
              </div>
            </div>
          </div>
         </div>
    </div>
  );
}

export default WorkPage;

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
