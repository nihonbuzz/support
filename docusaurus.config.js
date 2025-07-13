// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import 'dotenv/config';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nihonbuzz Support',
  tagline: 'Nihonbuzz Support',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://support.nihonbuzz.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nihonbuzz', // Usually your GitHub org/user name.
  projectName: 'support', // Usually your repo name.

  // onBrokenLinks: 'throw',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
    localeConfigs: {
      id: {
        label: 'Bahasa Indonesia',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/nihonbuzz/support/blob/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // themes: ['@docusaurus/theme-search-algolia'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Nihonbuzz Support',
        logo: {
          alt: 'Nihonbuzz Support Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Pusat Bantuan',
          },
          {
            href: 'https://academy.nihonbuzz.org',
            label: 'Kembali ke Academy',
            position: 'right',
          },
        ],
      },
      algolia: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        contextualSearch: true,
        searchParameters: {},
        // searchPagePath: 'search',
        insights: false,

        replaceSearchResultPathname: {
          from: '/docs/', 
          to: '/',
        },

        // OPTIONAL: hanya perlu jika kamu punya tautan eksternal
        externalUrlRegex: 'external\\.com|domain\\.com',
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Panduan',
            items: [
              { label: 'Mulai', to: '/mulai/apa-itu-academy' },
              { label: 'Belajar', to: '/belajar/mengikuti-kursus' },
              { label: 'Marketplace', to: '/marketplace/cara-pembelian' },
              { label: 'Komunitas', to: '/komunitas/forum-diskusi' },
              { label: 'Akun', to: '/akun/edit-profil' },
              { label: 'Instruktur', to: '/mentor/buat-kursus' },
            ],
          },
          {
            title: 'Tautan Terkait',
            items: [
              { label: 'Nihonbuzz Academy', href: 'https://academy.nihonbuzz.org' },
              { label: 'Formulir Kontak', href: 'https://academy.nihonbuzz.org/contact' },
            ],
          },
          {
            title: 'Sosial Media',
            items: [
              { label: 'Instagram', href: 'https://instagram.com/nihon_buzz' },
              { label: 'YouTube', href: 'https://youtube.com/@nihonbuzz' },
              { label: 'TikTok', href: 'https://tiktok.com/@nihonbuzz' },
            ],
          },
        ],
        copyright: `Copyright © 2025 - ${new Date().getFullYear()} Nihonbuzz, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
