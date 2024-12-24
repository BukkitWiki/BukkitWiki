---
title: "MythicLootEnhance —— 限时掉落倍率"
shortTitle: "MythicLootEnhance"
isOriginal: true
tag: ['付费']
dir:
  link: true
---

## 简介

::: info 给玩家提供限时的掉落倍增效果
:::

- 增加玩家活跃度
- 活动必备神器
- 支持一键设置全体玩家
- 全套变量支持可适配视图
- 购买联系QQ1520622465  
![](https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/Snipaste_2024-11-15_16-06-04.jpg)
## 演示视频

<BiliBili bvid="BV17dmoYUEjE" />


## PAPI变量

本插件提供以下PAPI变量:

### %mythicloot_rate_[玩家名]%
获取玩家当前倍率
- 格式: `%mythicloot_rate_[玩家名]%`
- 示例: `%mythicloot_rate%` - 返回当前玩家倍率
- 示例: `%mythicloot_rate_dakuo%` - 返回玩家dakuo的倍率

### %mythicloot_rateFormat_[玩家名]_[基数]%
获取玩家当前倍率并乘以基数(默认为1)
- 格式: `%mythicloot_rateFormat_[玩家名]_[基数]%`
- 示例: `%mythicloot_rateFormat%` - 返回当前玩家倍率
- 示例: `%mythicloot_rateFormat_dakuo%` - 返回玩家dakuo的倍率
- 示例: `%mythicloot_rateFormat_dakuo_100%` - 返回玩家dakuo的倍率乘以100

### %mythicloot_time_[玩家名]%
获取玩家当前倍率的到期时间
- 格式: `%mythicloot_time_[玩家名]%`
- 示例: `%mythicloot_time%` - 返回当前玩家倍率到期时间
- 示例: `%mythicloot_time_dakuo%` - 返回玩家dakuo的倍率到期时间

### %mythicloot_remain_[玩家名]%
获取玩家当前倍率的剩余时间(秒)
- 格式: `%mythicloot_remain_[玩家名]%`
- 示例: `%mythicloot_remain%` - 返回当前玩家倍率剩余时间
- 示例: `%mythicloot_remain_dakuo%` - 返回玩家dakuo的倍率剩余时间

> 注意: 变量中如需使用下划线,请使用反斜杠转义,如: `my\_player`