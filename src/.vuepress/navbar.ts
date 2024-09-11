import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: '本站栏目',
    icon: 'catppuccin:csharp',
    link: '/guide/'
  },
  "/plugins/",
  "/resources/",
  "/books/",
  "/tools/",
]);
