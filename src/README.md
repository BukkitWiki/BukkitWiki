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


copyright: false
footer: 使用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a> 主题 | MIT 协议, 版权所有 © 2019-至今 Mr.Hope
---
<script setup>
const data = [
  {
    name: 'Taboolib',
    desc: '跨平台服务端插件开发框架'
  },
  {
    name: 'Trmenu',
    desc: '菜单'
  }
]

</script>

<br>
<br>

::: center 
<h2 class='vp-feature-header'><a class="header-anchor" id="热门项目" href="#热门项目"  style="font-weight:600;color: var(--text-color-lighter);">热门项目</a></h2>
:::
::: right
更新时间: 2024/9/11
:::

<div class="vp-card-container">
  <SiteInfo
    v-for="i in data"
    style="height: 220px;width: 320px"
    :name="i.name"
    :desc="i.desc"
    url="https://mister-hope.com"
    logo="https://mister-hope.com/logo.svg"
    preview="https://theme-hope.vuejs.press/assets/image/mrhope.jpg"
  />
</div>