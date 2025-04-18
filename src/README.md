---
home: true
icon: ic:outline-home
title: 主页
heroImage: http://bukkit.wiki/logo.svg
# heroFullScreen: true
bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: Bukkit.Wiki
tagline: Minecraft 多人联机文档库
actions:
  - text: 使用指南
    icon: mdi:compass-outline
    link: ./guide/
    type: primary

highlights:
  - description: '快捷入口'
    features:
      - title: 插件
        icon: catppuccin:wxt
        details: 多人联机服务器插件资源
        link: /plugins/

      - title: 衍生资源
        icon: catppuccin:unity
        details: 包括但不限于插件配置、游戏地图、皮肤、脚本资源等
        link: /resources/

      - title: 文字教程
        icon: catppuccin:lib
        details: 开服教程、插件使用技巧、原版游戏技巧等等
        link: /books/

      - title: 工具箱
        icon: catppuccin:makefile
        details: 开服工具箱
        link: /tools/

head:
  - - meta
    - name: keywords
      content: '我的世界服务器文档'
    - name: keywords
      content: '我的世界中文服务器文档'

copyright: false
footer: <span>友情链接：<a target='_blank' href="https://souts.cn/" alt="Souts博客">Souts</a></span><span> - </span><a target='_blank' href="https://mcnav.fun/" alt="星导航">星导航</a><br/>BukkitWiki | 版权所有 © 2024
---
<script setup>
const updateDate = '2024/11/13'


const data = [
  {
    name: 'ConditionalEvents',
    desc: '事件驱动的脚本插件'
  },
  {
    name: 'Trmenu',
    desc: '菜单插件'
  },
  {
    name: 'MythicMobs',
    desc: '',

  }
]

</script>

<br>
<br>

::: center 
<h2 class='vp-feature-header'><a class="header-anchor" id="热门项目" href="#热门项目"  style="font-size:28px;font-weight:600;color: var(--text-color-lighter);">热门项目</a></h2>
:::
::: right
更新时间: {{ updateDate }}
:::

<div class="vp-card-container">
  <SiteInfo
    v-for="i in data"
    style="height: 220px;width: 320px"
    :name="i.name"
    :desc="i.desc"
    :url="i.url?i.url:('https://bukkit.wiki/plugins/plugins/'+i.name.toLowerCase())"
    :logo="i.logo?i.logo:('http://bukkit.wiki/logo.svg')"
    :preview="i.preview?i.preview:('http://bukkit.wiki/assets/image/card.png')"
  />
</div>