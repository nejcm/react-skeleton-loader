// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const pkgName = 'react-skeleton-loader';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: pkgName,
  tagline: `Documentation for ${pkgName}`,
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://nejcm.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/${pkgName}/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nejcm', // Usually your GitHub org/user name.
  projectName: pkgName, // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: ['@docusaurus/theme-live-codeblock'],

  plugins: [
    [
      'docusaurus-plugin-react-docgen-typescript',
      /** @type {import('docusaurus-plugin-react-docgen-typescript').Options} */
      {
        // pass in a single string or an array of strings
        src: ['../lib/src/**/*.tsx'],
        parserOptions: {
          // pass parserOptions to react-docgen-typescript
          // here is a good starting point which filters out all
          // types from react
          propFilter: (prop) => {
            if (prop.parent) {
              return !prop.parent.fileName.includes('@types/react');
            }
            return true;
          },
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.svg',
      navbar: {
        title: pkgName,
        logo: {
          alt: '',
          src:  "img/logo.svg",
        },
        items: [
          {
            href: 'https://github.com/nejcm/react-skeleton-loader',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} ${pkgName}, nejcm.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    
};

module.exports = config;
