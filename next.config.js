// @ts-check

/* @type {import('next').NextConfig}
 */
// const nextConfig = {
//   i18n: {
//     locales: ["en", "fr", "es"],
//     defaultLocale: "en",
//   },
//   // output: 'export',
// };

// module.exports = nextConfig;

/** 
 * @type {import('next').NextConfig} 
 **/
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
};

module.exports = nextConfig;