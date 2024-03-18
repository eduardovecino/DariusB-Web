import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from './menu-component.module.css'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import LocaleSwitcher from '../../../components/LocalSwitcher/locale-switcher';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import MenuComponentPage from '../../../components/MenuComponent/menu-component';
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
    <div>
      <LocaleSwitcher></LocaleSwitcher>
      <h1>{t(work.title)}</h1>
      <p>{t(work.text)}</p>
      {/* Render other work details */}
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
