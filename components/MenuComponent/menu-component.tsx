
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
        <button className={styles.buttonSimpleStyle} onClick={() => redirectToContact()}>{t(`contact`)}</button>
        <button className={styles.buttonSimpleStyle} onClick={() => redirectToAbout()}>{t(`about`)}</button>

      </div>
    </div>
  );
}

export default MenuComponentPage;
