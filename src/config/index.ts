import lightRuler from "../assets/images/light-ruler.png";
import videoRoll from "../assets/images/videoroll.png";
import uehelper from "../assets/images/uehelper.png";
import parcel from "../assets/images/parcel.png";
import logo from "../assets/images/logo.png";

export function getRouter() {
  return {
    Home: {
      name: "Home",
      path: "",
    },
    Blog: {
      name: "Blog",
      path: "blog",
    },
    Project: {
      name: "Portfolio",
      path: "portfolio/",
    },
    Contributions: {
      name: "Contributions",
      path: "contributions/",
    },
    About: {
      name: "About",
      path: "about/",
    },
  };
}

export const PER_PAGE_NUM = 6;

export function getContributions() {
  return [
    {
      date: "2025-12-07",
      project: "vitejs/vite",
      type: "Documentation",
      description: "#21227: docs(migration): use devDependencies in package.json",
      url: "https://github.com/vitejs/vite/commit/1b5d9bd1b9753caf06bc3345b456a927e730de3b",
      tags: ["markdown"],
      stars: "https://flat.badgen.net/github/stars/vitejs/vite",
    },
    {
      date: "2025-11-08",
      project: "vitejs/vite",
      type: "Documentation",
      description: "#21083: docs(rolldown): use devDependencies in package.json",
      url: "https://github.com/vitejs/vite/commit/e56c9e6fe14f7209967c4f3613aed1838cf10e84",
      tags: ["markdown"],
      stars: "https://flat.badgen.net/github/stars/vitejs/vite",
    },
    {
      date: "2025-06-15",
      project: "mdn/translated-content",
      type: "Documentation",
      description: "#27639: zh-cn: add the translation of the Summarizer interface.",
      url: "https://github.com/mdn/translated-content/commit/99d457dd6762890188c483c1309e01986b4fbf28",
      tags: ["markdown"],
      stars: "https://flat.badgen.net/github/stars/mdn/translated-content",
    },
    {
      date: "2025-04-25",
      project: "mdn/translated-content",
      type: "Documentation",
      description: "#26973: [zh-cn] Fix the unrecognizable symbols",
      url: "https://github.com/mdn/translated-content/pull/26973",
      tags: ["markdown"],
      stars: "https://flat.badgen.net/github/stars/mdn/translated-content",
    },
    {
      date: "2024-08-14",
      project: "vueuse/vueuse",
      type: "Issue",
      description: "#4147: useWebsocket heartbeat message is allowed to be set to function.",
      url: "https://github.com/vueuse/vueuse/issues/4147",
      tags: ["Issue"],
      stars: "https://flat.badgen.net/github/stars/vueuse/vueuse",
    },
    {
      date: "2024-03-16",
      project: "youzan/vant",
      type: "New Feature",
      description: "#12693: docs: change tab's 'Before Change' into a real async function",
      url: "https://github.com/youzan/vant/pull/12693",
      tags: ["New Feature"],
      stars: "https://flat.badgen.net/github/stars/youzan/vant",
    },
    {
      date: "2024-03-16",
      project: "youzan/vant",
      type: "Issue",
      description: "#12689: [Feature Request] Tab组件在官网Demo中的异步切换，完全看不出来异步效果",
      url: "https://github.com/youzan/vant/issues/12689",
      tags: ["Issue"],
      stars: "https://flat.badgen.net/github/stars/youzan/vant",
    },
    {
      date: "2024-01-24",
      project: "withastro/docs",
      type: "Documentation",
      description: "#6395: i18n(zh-CN): Add supabase.mdx",
      url: "https://github.com/withastro/docs/pull/6395",
      tags: ["MDX"],
      stars: "https://flat.badgen.net/github/stars/withastro/docs",
    },
    {
      date: "2023-09-18",
      project: "antvis/X6",
      type: "Issue",
      description: "#3907: [x6-plugin-selection]: When the canvas is scaled(graph enable panning), the highlight box will be out of place sometimes.",
      url: "https://github.com/antvis/X6/issues/3907",
      tags: ["Issue"],
      stars: "https://flat.badgen.net/github/stars/antvis/X6",
    },
    {
      date: "2023-07-12",
      project: "antvis/X6",
      type: "New Feature",
      description: "#3761: feat: x6-vue-shape supports getting nodes and graph in the props.",
      url: "https://github.com/antvis/X6/pull/3761",
      tags: ["New Feature"],
      stars: "https://flat.badgen.net/github/stars/antvis/X6",
    },
    {
      date: "2023-07-09",
      project: "antvis/X6",
      type: "Issue",
      description: "#3756: x6-vue-shape是否可以支持除了provide，在h渲染函数通过props传入方法",
      url: "https://github.com/antvis/X6/issues/3756",
      tags: ["Issue"],
      stars: "https://flat.badgen.net/github/stars/antvis/X6",
    },
    {
      date: "2023-04-20",
      project: "PlasmoHQ/plasmo",
      type: "Issue",
      description: "#555: [RFC] Add more function-based templates.",
      url: "https://github.com/PlasmoHQ/plasmo/issues/555",
      tags: ["Issue"],
      stars: "https://flat.badgen.net/github/stars/PlasmoHQ/plasmo",
    },
    {
      date: "2023-03-31",
      project: "Lusito/webextension-polyfill-ts",
      type: "Issue",
      description: "#91: Tabs.sendMessage is missing callback?: function",
      url: "https://github.com/Lusito/webextension-polyfill-ts/issues/91",
      tags: ["Issue"],
      stars: "https://flat.badgen.net/github/stars/Lusito/webextension-polyfill-ts",
    },
    {
      date: "2023-03-23",
      project: "mdn/translated-content",
      type: "Documentation",
      description: `#12346: [zh] Add "CSS Properties and Values API" translation`,
      url: "https://github.com/mdn/translated-content/pull/12346",
      tags: ["markdown"],
      stars: "https://flat.badgen.net/github/stars/mdn/translated-content",
    },
    {
      date: "2023-03-06",
      project: "darkreader/darkreader",
      type: "New Feature",
      description: `#12346: Add 'deepswap.ai' to global dark list`,
      url: "https://github.com/darkreader/darkreader/pull/10812",
      tags: ["New Feature"],
      stars: "https://flat.badgen.net/github/stars/darkreader/darkreader",
    },
    {
      date: "2023-02-21",
      project: "mdn/translated-content",
      type: "Documentation",
      description: `#11673: Add "Audio and video manipulation" translation`,
      url: "https://github.com/mdn/translated-content/pull/11673",
      tags: ["markdown"],
      stars: "https://flat.badgen.net/github/stars/mdn/translated-content",
    },
    {
      date: "2022-08-29",
      project: "youzan/vant",
      type: "Issue",
      description: `#10992: [Feature Request] 支持parcel的按需加载`,
      url: "https://github.com/youzan/vant/issues/10992",
      tags: ["Issue"],
      stars: "https://flat.badgen.net/github/stars/youzan/vant",
    },
    {
      date: "2022-08-12",
      project: "parcel-bundler/website",
      type: "Bug Fix",
      description: `#1022: Fixed PluginSearch page's badRequest error`,
      url: "https://github.com/parcel-bundler/website/pull/1044",
      tags: ["Bug Fix"],
      stars: "https://flat.badgen.net/github/stars/parcel-bundler/website",
    },
    {
      date: "2022-04-19",
      project: "parcel-bundler/website",
      type: "Issue",
      description: `#1022: Plugin search results are not up to date`,
      url: "https://github.com/parcel-bundler/website/issues/1022",
      tags: ["Issue"],
      stars: "https://flat.badgen.net/github/stars/parcel-bundler/website",
    },
    {
      date: "2022-04-18",
      project: "mdn/content",
      type: "Documentation",
      description: `#15081: List backdrop-filter as property that creates stacking context`,
      url: "https://github.com/mdn/content/pull/15081",
      tags: ["markdown"],
      stars: "https://flat.badgen.net/github/stars/mdn/content",
    },
    {
      date: "2022-04-18",
      project: "mdn/content",
      type: "Documentation",
      description: `#15080: The stacking context is missing the backdrop-filter property`,
      url: "https://github.com/mdn/content/issues/15080",
      tags: ["markdown"],
      stars: "https://flat.badgen.net/github/stars/mdn/content",
    },
  ];
}

export function getProjects() {
  return [
    {
      icon: videoRoll.src,
      iconType: "img",
      name: "Video Roll",
      description:
        "📺 All-in-One browser extension to enhance your video watching experience.",
      url: "https://videoroll.app",
      tags: ["Browser Extension"],
      badges: [
        "https://img.shields.io/chrome-web-store/users/cokngoholafkeghnhhdlmiadlojpindm?icon=chrome&color=0f9d58",
        "https://img.shields.io/github/stars/gxy5202/videoroll",
      ],
    },
    {
      icon: "code", // 使用字符串标识
      iconType: "icon",
      name: "bun-tasks",
      description:
        "🚀 A parallel task runner for the Bun runtime inspired by concurrently.",
      url: "https://www.npmjs.com/package/bun-tasks",
      tags: ["Bun"],
      badges: [
        "https://flat.badgen.net/npm/dm/bun-tasks",
        "https://img.shields.io/github/stars/gxy5202/bun-tasks",
      ],
    },
    {
      icon: parcel.src,
      iconType: "img",
      name: "parcel-namer-hashless",
      description: "A parcel plugin that removes hash values from files.",
      url: "https://www.npmjs.com/package/parcel-namer-hashless",
      tags: ["TypeScript", "Plugin"],
      badges: [
        "https://flat.badgen.net/npm/dm/parcel-namer-hashless",
        "https://img.shields.io/github/stars/gxy5202/parcel-namer-hashless",
      ],
    },

    {
      icon: lightRuler.src,
      iconType: "img",
      name: "light-ruler",
      description:
        "A TypeScript-based web ruler component for layout measurement and visual debugging.",
      url: "https://github.com/gxy5202/light-ruler",
      tags: ["TypeScript", "Canvas"],
      badges: [
        "https://flat.badgen.net/npm/dm/light-ruler",
        "https://img.shields.io/github/stars/gxy5202/light-ruler",
        ,
      ],
    },
    {
      icon: "code",
      iconType: "icon",
      name: "audio-hacker",
      description:
        "🎧A magical library for controlling audio pitch and volume, based on jungle.js.",
      url: "https://github.com/gxy5202/audio-hacker",
      tags: ["TypeScript", "JavaScript"],
      badges: [
        "https://img.shields.io/github/stars/gxy5202/audio-hacker",
        "https://flat.badgen.net/npm/dm/audio-hacker",
      ],
    },
    {
      icon: logo.src,
      iconType: "img",
      name: "Astro blog",
      description:
        "Personal blog built with Astro, React, and TypeScript featuring modern design.",
      url: "https://github.com/gxy5202/gomi",
      tags: ["Astro", "React", "TypeScript"],
      badges: ["https://img.shields.io/github/stars/gxy5202/gomi"],
    },
    {
      icon: uehelper.src,
      iconType: "img",
      name: "UE Helper",
      description: "A chrome extension for Sefonsoft UE product",
      url: "https://github.com/gxy5202/UE-Helper-Chrome-Extension",
      tags: ["Browser Extension"],
      badges: [
        "https://img.shields.io/github/stars/gxy5202/UE-Helper-Chrome-Extension",
      ],
    },
    {
      icon: "code",
      iconType: "icon",
      name: "UE-Helper-VSCode-Extension",
      description:
        "An auto component settings generator vscode extension for Sefonsoft UE product",
      url: "https://github.com/gxy5202/UE-Helper-VSCode-Extension",
      tags: ["Nodejs"],
      badges: [
        "https://img.shields.io/github/stars/gxy5202/webpack5-vue3.0-vuex-ant-deisgn-vue",
      ],
    },
    {
      icon: "code",
      iconType: "icon",
      name: "zindex-controller",
      description:
        "A JavaScript library for managing z-index values in complex web applications.",
      url: "https://github.com/gxy5202/zIndexController",
      tags: ["JavaScript"],
      badges: ["https://img.shields.io/github/stars/gxy5202/zIndexController"],
    },
    {
      icon: "code",
      iconType: "icon",
      name: "f-markdown-editor",
      description: "markdown editor basedon byteMD",
      url: "https://github.com/gxy5202/f-markdown-editor",
      tags: ["Svelte"],
      badges: ["https://img.shields.io/github/stars/gxy5202/f-markdown-editor"],
    },
    {
      icon: "code",
      iconType: "icon",
      name: "Nesoft-Vote",
      description: "基于微信小程序的投票多功能系统(大学刚写前端时的垃圾代码)",
      url: "https://github.com/gxy5202/Nesoft-Vote",
      tags: ["WeChat Mini Program"],
      badges: ["https://img.shields.io/github/stars/gxy5202/Nesoft-Vote"],
    },
    {
      icon: "code",
      iconType: "icon",
      name: "webpack5-vue3.0-vuex-ant-deisgn-vue",
      description: "一个webpack5+vue3.0+vuex+ant-deisgn-vue的小示例",
      url: "https://github.com/gxy5202/webpack5-vue3.0-vuex-ant-deisgn-vue",
      tags: ["JavaScript"],
      badges: [
        "https://img.shields.io/github/stars/gxy5202/webpack5-vue3.0-vuex-ant-deisgn-vue",
      ],
    },
  ];
}
