
import { useRouter } from 'next/router';
import React from 'react';
import styles from './menu-component.module.css'
import { useTranslation } from 'react-i18next';
import jsonSize from '../../public/locales/en/common.json'


function MenuComponentPage() {
  const { t, i18n } = useTranslation("common");
  const works = jsonSize.works;
  const router = useRouter();

  const handleWorkClick = (workIndex: number) => {
    const workTitle = t(`works.work${workIndex}.title`);
    router.push(`/work/${encodeURIComponent(workTitle)}?workIndex=${workIndex}`);
  };
  function redirectToContact() {
    window.location.href = "/contact";
  }

  return (
    <div>
      <h3 className={styles.title} style={{position:'fixed'}}>Darius Bogdanowicz</h3>
      <div className={styles.OptionList}>
        {Object.values(works).map((work, index) => (
          <button className={styles.buttonStyle}key={index} onClick={() => handleWorkClick(index)}>
            {t(`works.work${index}.title`)}
          </button>
        ))}
        <button className={styles.buttonStyle} onClick={() => redirectToContact()}>Contact</button>
      </div>
    </div>
  );
}

export default MenuComponentPage;
