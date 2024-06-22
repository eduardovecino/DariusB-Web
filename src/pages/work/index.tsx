import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import LocaleSwitcher from "../../../components/LocalSwitcher/locale-switcher";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";


type WorkPageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function WorkPage(props: WorkPageProps) {
  const router = useRouter();
  const { defaultLocale } = router;
  const { t, i18n } = useTranslation("common");

  return (
    <div>
      hola
    </div>
  );
}

type Props = {
  locale?: string;
  locales?: string[];
};

// export const getStaticProps: GetStaticProps<Props> = async ({
//   locale,
//   locales
// }) => {
//   return {
//     props: {
//       locale,
//       locales,
//       ...(await serverSideTranslations( (locale || 'en'), ["common"]))
//     },
//   };
// };



const fetchSomeData = async () => {
  // Simulate fetching data
  // Replace this with your actual fetch logic
  return {
    locale: undefined, // Simulate a potentially undefined value
    // other data
  };
};


export async function getStaticProps() {
  
  try {
    // Fetch your data here
    const data = await fetchSomeData(); // Replace with your actual data fetching logic

    // Ensure `locale` is not `undefined`
    const locale = data.locale !== undefined ? data.locale : null;

    return {
      props: {
        locale,
        // other props
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        locale: null, // Set default value in case of error
        // other props with default values if necessary
      },
    };
  }
}



