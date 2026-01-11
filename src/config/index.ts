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
