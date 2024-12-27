---
title: 'RuMonthlyCard —— 原神式月卡插件'
shortTitle: 'RuMonthlyCard'
isOriginal: true
tag: ['付费']
dir:
  link: true
---

## 功能特色
- 🎁 支持多种月卡类型，可自由配置不同月卡的奖励内容
- 💰 灵活的购买条件设置，支持金币、点券等多种购买方式
- 🎯 即时奖励与每日奖励双重福利
- 🏷️ 自定义月卡前缀显示，支持优先级设置
- 💾 数据持久化存储，支持MySQL和SQLite
- 🔄 玩家上线自动领取奖励，也可手动领取
- 🎮 完整的命令系统，方便管理员和玩家使用
- 🔌 提供丰富的PlaceholderAPI变量支持
- ⚡ 高性能设计，支持数据缓存

::: info QQ交流群 642468469
:::

![](https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/Snipaste_2024-12-27_22-41-51.jpg)


## PlaceholderAPI 变量

本插件提供以下PlaceholderAPI变量:

### 查询自己的月卡信息

- `%rumonthlycard_has_<月卡ID>%` - 返回是否拥有指定月卡 (true/false)
- `%rumonthlycard_days_<月卡ID>%` - 返回指定月卡剩余天数
- `%rumonthlycard_lastclaim_<月卡ID>%` - 返回指定月卡上次领取时间戳
- `%rumonthlycard_prefix%` - 返回前缀

### 查询他人的月卡信息

- `%rumonthlycard_otherhas_<玩家名>_<月卡ID>%` - 返回指定玩家是否拥有指定月卡 (true/false)
- `%rumonthlycard_otherdays_<玩家名>_<月卡ID>%` - 返回指定玩家的指定月卡剩余天数
- `%rumonthlycard_otherlastclaim_<玩家名>_<月卡ID>%` - 返回指定玩家的指定月卡上次领取时间戳
- `%rumonthlycard_otherprefix_<玩家名>%` - 返回指定玩家的前缀


## 命令

### 基础命令
- `/rumonthlycard` (别名: `/card`, `/monthcard`, `/mc`, `/rmc`) - 显示帮助信息

### 玩家命令
- `/rumonthlycard claim` - 手动领取每日奖励
- `/rumonthlycard info` - 查看自己的月卡信息
- `/rumonthlycard buy <月卡ID>` - 购买指定月卡
- `/rumonthlycard list` - 查看所有可用月卡

### 管理员命令
- `/rumonthlycard reload` - 重载插件配置
- `/rumonthlycard add <玩家> <月卡ID> <天数>` - 给指定玩家添加月卡
- `/rumonthlycard buy <月卡ID> <玩家>` - 给指定玩家购买月卡
- `/rumonthlycard info <玩家>` - 查看指定玩家的月卡信息
- `/rumonthlycard delete <玩家> [月卡ID]` - 删除指定玩家的月卡(不指定月卡ID则删除所有)
- `/rumonthlycard resetClaim <玩家> [月卡ID]` - 重置指定玩家的月卡领取记录(不指定月卡ID则重置所有)

### 权限
- `rumonthlycard.admin` - 管理员权限
- `rumonthlycard.buy` - 购买月卡权限
- `rumonthlycard.info` - 查看月卡信息权限
- `rumonthlycard.claim` - 领取奖励权限(默认所有人都有)


## 配置文件

```yaml
basic: # 月卡id
  display_name: "普通月卡"
  # 用于变量
  prefix: "&8[&4普通月卡&8]"
  prefix_priority: 1 # 前缀优先级 当同时拥有多个前缀时，优先级高的前缀会显示
  buy:
    - type: money
      amount: 100
      msg:
        - '余额不足'
    - type: points
      amount: 100
    - type: kether
      check: ''
      take: ''
    - type: js
      check: ''
      take: ''
    - type: custom_papi
      check: '%player_level% >= 10'
      takeCmd:
        console:
          - ''
        admin:
          - ''
        player:
          - ''
  duration_days: 30  # 持续时间 30天
  # 奖励配置
  # 允许的奖励类型有: item, cmd, kether, js, msg, money, points
  rewards:
    instant: # 购买后即时奖励
      - type: item
        item:
          material: IRON_INGOT
        amount: 10
      - type: cmd
        console:
          - ''
        admin:
          - ''
        player:
          - ''
      - type: kether
        script: |-
          xxx
      - type: js
        script: |-
          xxx
      - type: msg
        msg:
          - '购买成功'
    daily: # 每日奖励
      - type: money
        amount: 50
      - type: item
        item:
          material: COAL
        amount: 3

```