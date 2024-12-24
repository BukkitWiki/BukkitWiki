---
title: 'RuLoot —— 战利品分配+刷新点管理'
shortTitle: 'RuLoot'
isOriginal: true
tag: ['付费','原创']
dir:
  link: true
---

## 简介

一个用于管理怪物刷新点和战利品分配的插件。
::: info QQ交流群 642468469 
:::

## 功能特点

插件特点:
- 脚本驱动 高度自定义
- 强大的怪物刷新点管理系统✅
  - 支持 Cron 表达式定时刷新怪物✅
  - 可自定义刷新范围和数量✅
  - 精确控制刷新位置✅
  - 支持多个刷新点同时运行✅
- 完善的战利品分配系统✅
  - 使用脚本进行战利品分配✅
  - 支持脚本控制战利品分配✅
  - 支持保底奖励 随意按照排名、伤害、变量分配奖励✅
  - 支持 命令、消息、mm物品库、ni物品库、sx物品库、sxi物品库 等战利品来源✅
![](https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/Snipaste_2024-12-08_11-15-31.jpg)
![](https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/20241208121731.png)

## 命令列表

- `/ruloot reload` - 重载插件配置
- `/ruloot spawner set <id>` - 设置刷新点位置
- `/ruloot spawner info <id>` - 查看刷新点信息
- `/ruloot spawner list` - 查看所有刷新点
- `/ruloot spawner tp <id>` - 传送到指定刷新点

## 配置文件
文件夹结构
- `config.yml` 主配置文件
- `groups.yml` 组配置文件
  - ```yaml
    example:
      # 怪物id列表
      mobs:
        - '测试怪物'
        - '测试怪物2'
    ```
- [`loot` 战利品分配配置文件夹](./loot.md)
- [`spawner` 刷新点配置文件夹](./spawners.md)

