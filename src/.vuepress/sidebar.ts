import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: '本站栏目',
      icon: "catppuccin:csharp",
      prefix: 'guide/',
      children: "structure",
      collapsible: true
    },
    "/plugins/",
    "/resources/",
    "/books/",
    "/tools/"
  ],
  "/plugins/" : "structure",
  "/resources/":"structure",
  "/books/" : "structure",
  "/tools/" : "structure"
});
