// import Link from 'next/link';
// import React from 'react';
// import styles from './menu-component.module.css'
// import { useTranslation } from 'react-i18next';
// import i18next from 'i18next';
// import jsonSize from '../../public/locales/en/common.json'


// function MenuPage() {
//   const { t, i18n } = useTranslation("common");
//   const working = jsonSize.works
//   // console.log(Object.keys(works).length)


//   return (
//     <div>
//       <h3 className={styles.title}>Darius Bogdanowicz</h3>
//       <div className={styles.OptionList}>
//         {/* <Link href="/">To home page</Link>
//         {/* <Link href="/work">To Work page</Link> */}
//         {Object.values(working).map((work,index) => (
//            <Link 
//               href={'/work/'+t(`works.work${[index]}.title`)}>
//                 {t(`works.work${[index]}.title`)}
//             </Link> 
//         ))} 
//         <Link href="/contact">Contact</Link>
//       </div>
//     </div>
//   );
// }

// export default MenuPage;

import { useRouter } from 'next/router';
import React from 'react';
import styles from './menu-component.module.css'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import jsonSize from '../../public/locales/en/common.json'
import Link from 'next/link';


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
      <h3 className={styles.title}>Darius Bogdanowicz</h3>
      <div className={styles.OptionList}>
        {Object.values(works).map((work, index) => (
          <button key={index} onClick={() => handleWorkClick(index)}>
            {t(`works.work${index}.title`)}
          </button>
        ))}
        <button onClick={() => redirectToContact()}>Contact</button>
      </div>
    </div>
  );
}

export default MenuComponentPage;
