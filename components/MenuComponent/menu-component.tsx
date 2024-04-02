
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from './menu-component.module.css'
import { useTranslation } from 'react-i18next';
import jsonSize from '../../public/locales/en/common.json'
import picture from '../../src/assets/img/Festival.jpeg'

import picture2 from '../../public/img/Festival.jpeg'



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
  function redirectToAbout() {
    window.location.href = "/about";
  }
  const goHome = () => {
    router.push('/'); // Navigate to the root route
  };

  const [bgChange, setBgChange] = useState(
    {backgroundImage: `url(${picture2.src})`}
  );
  const [activatedId, setActivatedState] = useState<number | null>(null);


  async function handleMouseEnter(work:any, index:any) {
    const pictureBackground = (await import( `../../public/img/${work.picture}`)); // this is async
    setBgChange({ 
      backgroundImage: `url(${pictureBackground.default.src})`,
    })
    setActivatedState(index);
  };

  return (
    <div style={bgChange}>
      <h3 className={styles.title} onClick={goHome} style={{position:'fixed'}}>{t(`author`)}</h3>
      <div className={styles.OptionList}>
        {Object.values(works).map((work, index) => (
          <button 
            id={String(index)} 
            onMouseEnter={() => handleMouseEnter(work, index)} 
            className={activatedId === index ? styles.buttonActiveStyle :  styles.buttonSimpleStyle} 
            key={index} 
            onClick={() => handleWorkClick(index)}>
              {t(`works.work${index}.title`)}
          </button>
        ))}

      </div>
      <div className={styles.footerButtonGroup}>
        <button className={styles.footerButton} onClick={() => redirectToAbout()}>{t(`about`)}</button>
        <button className={styles.footerButton} onClick={() => redirectToContact()}>{t(`contact`)}</button>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.animatedText}>
            <span>👉🏻 Buy my the New Book "Festival". A novel winner of the IV Antonio Gala Prize </span>
            <span>👉🏻 Buy my the New Book "Festival". A novel winner of the IV Antonio Gala Prize </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MenuComponentPage;
