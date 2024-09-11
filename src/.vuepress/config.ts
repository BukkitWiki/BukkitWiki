import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "BukkitWiki",
  description: "Minecraft多人联机文档库",

  theme,

  head: [
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-CCGWVPNMF9'
      }
    ],
    
  [
    'script',
    {},
    "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-CCGWVPNMF9');"
  ] 
  ] 


  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
