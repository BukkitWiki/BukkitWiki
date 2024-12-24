---
title: 'RuItemSave —— 物品保存工具'
shortTitle: 'RuItemSave'
isOriginal: true
tag: ['免费']
dir:
  link: true
---

一个用于保存和管理物品的插件

::: info QQ交流群 642468469
:::

## 图片展示
![](https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/Snipaste_2024-12-24_12-57-18.jpg)
![](https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/Snipaste_2024-12-24_12-57-35.jpg)

## 使用统计
![](https://bstats.org/signatures/bukkit/RuItemSave.svg)

## 命令

### 基础命令
- `/ruitemsave` 或 `/itemsave` 或 `/is` - 显示帮助信息
- `/is reload` - 重载插件

### 物品操作
- `/is save <组> <名称>` - 保存手中的物品
- `/is get <组> <名称> [数量] [是否静默发送]` - 获取指定物品
- `/is del <组> <名称>` - 删除指定物品
- `/is list` - 查看所有物品列表
- `/is list group [组名]` - 查看指定组的物品列表
- `/is list search <搜索词>` - 搜索物品
- `/is list page <页数>` - 查看指定页的物品列表
- `/is give <组> <名称> <玩家> [数量] [是否静默发送]` - 给予玩家物品

### 物品编辑
- `/is toString` - 查看手中物品的NBT信息
- `/is edit` - 打开物品编辑界面
- `/is edit name` - 交互式修改物品名称
- `/is edit name <名称>` - 直接修改物品名称
- `/is edit lore add` - 交互式添加物品描述
- `/is edit lore add <内容>` - 直接添加物品描述
- `/is edit lore set <行>` - 交互式修改指定行的物品描述
- `/is edit lore set <行> <内容>` - 直接修改指定行的物品描述
- `/is edit lore del <行>` - 删除指定行的物品描述
