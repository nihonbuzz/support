// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import 'dotenv/config';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nihonbuzz Support',
  tagline: 'Nihonbuzz Support',
  favicon: 'img/favicon.ico',

  url: 'https://support.nihonbuzz.org',
  baseUrl: '/',

  organizationName: 'nihonbuzz',
  projectName: 'support',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'en', 'ja'],
    localeConfigs: {
      id: {
        label: 'Bahasa Indonesia',
      },
      en: {
        label: 'English',
      },
      ja: {
        label: '日本語',
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
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/nihonbuzz/support/blob/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'legal',
        path: 'docs-legal',
        routeBasePath: 'legal',
        sidebarPath: require.resolve('./sidebarsLegal.js'),
        editUrl: 'https://github.com/nihonbuzz/support/blob/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guideline',
        path: 'docs-guideline',
        routeBasePath: 'guideline',
        sidebarPath: require.resolve('./sidebarsGuideline.js'),
        editUrl: 'https://github.com/nihonbuzz/support/blob/main/',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'https://support.nihonbuzz.org/img/og-image-nihonbuzz.png',
      metadata: [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://support.nihonbuzz.org/img/og-image-nihonbuzz.png' },
        { property: 'og:image', content: 'https://support.nihonbuzz.org/img/og-image-nihonbuzz.png' },
      ],
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
            type: 'docSidebar',
            sidebarId: 'legalSidebar',
            docsPluginId: 'legal',
            position: 'left',
            label: 'Kebijakan Nihonbuzz',
          },
          {
            type: 'docSidebar',
            sidebarId: 'guidelineSidebar',
            docsPluginId: 'guideline',
            position: 'left',
            label: 'Brand Guideline',
          },
          {
            position: 'left',
            to: '/search',
            label: 'Cari',
          },
          {
            href: 'https://nihonbuzz.org',
            label: 'Nihonbuzz',
            position: 'right',
          },
          {
            href: 'https://academy.nihonbuzz.org',
            label: 'Nihonbuzz Academy',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      algolia: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        contextualSearch: false,
        searchParameters: {},
        searchPagePath: 'search',
        insights: false,

        replaceSearchResultPathname: {
          from: '/docs/',
          to: '/',
        },
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
              { label: 'Dukungan', to: '/' },
              { label: 'Brand Guideline', to: '/guideline' },
              { label: 'Nihonbuzz', href: 'https://nihonbuzz.org' },
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
          {
            title: 'Kebijakan',
            items: [
              { label: 'Kebijakan & Ketentuan', to: '/legal' },
              { label: 'Kebijakan Privasi', to: '/legal/privacy-policy' },
              { label: 'Syarat dan Ketentuan', to: '/legal/terms-of-service' },
              { label: 'Kebijakan Pengembalian Dana dan Pengembalian Barang', to: '/legal/refund-return-policy' },
              { label: 'Kebijakan Cookie', to: '/legal/cookie-policy' },
              { label: 'Perjanjian Pengguna', to: '/legal/user-agreement' },
              { label: 'Perjanjian Instruktur', to: '/legal/instructor-agreement' },
              { label: 'Kebijakan Perlindungan Anak', to: '/legal/child-protection-policy' },
              { label: 'Pemberitahuan Hak Cipta', to: '/legal/copyright-notice' },
              { label: 'Pemberitahuan DMCA', to: '/legal/dmca-notice' },
              { label: 'Keamanan Pembayaran', to: '/legal/payment-security-policy' },
              { label: 'Kekayaan Intelektual', to: '/legal/intellectual-property-policy' },
              { label: 'Disclaimer', to: '/legal/disclaimer' },
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
