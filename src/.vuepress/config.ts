import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "BukkitWiki",
  description: "Minecraft(我的世界)多人联机服务器文档库|我的世界服务器文档",

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
  ,[
    'script',
    {},
    "var _hmt=_hmt||[];(function(){var hm=document.createElement('script');hm.src='https://hm.baidu.com/hm.js?0d4853b25e20a42ca6c79d9b772e6b88';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(hm,s)})();"
  ]
  ] 


  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
