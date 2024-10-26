---
title: 'SX-Item'
dir:
  link: true
---
<VPBanner
  title="SX-Item"
  content="物品管理插件"
  logo="https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/7252.jpg"
  :actions='[
    {
      text: "下载",
      link:"https://github.com/Saukiya/SX-Item/releases",
    },
    {
      text: "仓库",
      link: "https://github.com/Saukiya/SX-Item",
      type: "default",
    },
  ]'
/>

## 前言

本文原文链接：[https://www.maplex.top/archives/sxitem](https://www.maplex.top/archives/sxitem)  

经历了 三四年的迭代 (2018~至今) 从 最初的 SX-Attribute2.0 迭代到 SX-Attribute 3.0
现在将SX-Attribute3.0的物品功能分离出来（重写）

1. 易用性
2. 快捷性
3. 自定义性
4. 多关联
5. 稳健性

::: warning
SX-Attribute用户请不要直接迁移物品库到SX-Item  
两者之间拥有细微的差别
:::

::: tip 注：开发者均为专业开发者从事或学习软件行业
:::


## 获取插件

官方链接: [https://github.com/Saukiya/SX-Item/releases](https://github.com/Saukiya/SX-Item/releases)

## 常见问题
- SX-Item 会有 PickListener 刷物品的BUG吗？
  - 不会, 请你在拓展插件中 在扣除物品环节之前 延迟1tick
- SX-Item 操作NBT会不会大量使用 Copy 占用内存?
  - 不会, 本插件使用了NBTWrapper用代理的方式操作NBT不产生冗余对象
- 我想加载自己的配置文件自己管理!
  - 可以的 在ItemManager类中操作loadItem(组名,文件)
  - 具体见[API页面](API)
