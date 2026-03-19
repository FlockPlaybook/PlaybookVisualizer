import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Playbook Visualizer',
  tagline: 'Flock Tech — Roles y Responsabilidades',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://flockplaybook.github.io',
  baseUrl: '/PlaybookVisualizer/',

  organizationName: 'FlockPlaybook',
  projectName: 'PlaybookVisualizer',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  clientModules: ['./src/clientModules/collapseAll.js'],

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/FlockPlaybook/PlaybookVisualizer/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Playbook Visualizer',
      logo: {
        alt: 'Flock Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'html',
          position: 'left',
          value: '<button class="flock-collapse-btn" onclick="window.__flockCollapseAll&&window.__flockCollapseAll()" title="Colapsar todas las categorías"><svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="4" height="4" rx="0.5" stroke="currentColor" stroke-width="1.4"/><rect x="7" y="1" width="4" height="4" rx="0.5" stroke="currentColor" stroke-width="1.4"/><rect x="1" y="7" width="4" height="4" rx="0.5" stroke="currentColor" stroke-width="1.4"/><rect x="7" y="7" width="4" height="4" rx="0.5" stroke="currentColor" stroke-width="1.4"/></svg>Colapsar todo</button>',
        },
        {
          href: 'https://github.com/FlockPlaybook/PlaybookVisualizer',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Flock. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
