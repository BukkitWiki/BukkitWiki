import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "BukkitWiki",
  description: "Minecraft多人联机文档库",

  theme,

  


  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
