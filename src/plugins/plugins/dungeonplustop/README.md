---
title: 'DungeonPlusTop —— dp地牢排行榜'
shortTitle: 'DungeonPlusTop'
isOriginal: true
tag: ['付费']
dir:
  link: true
---

## 简介
用于记录dp地牢通关时间的排行榜插件

::: info QQ交流群 642468469
:::

## 图片展示
![](https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/Snipaste_2024-12-19_05-07-41.jpg)


## 变量说明

本插件提供以下变量供使用:

### 排行榜相关变量
- `%dungeonplustop_top_<副本名>_<排名>_name%` - 获取指定排名的玩家名称
- `%dungeonplustop_top_<副本名>_<排名>_time%` - 获取指定排名的通关时间(秒.毫秒)
- `%dungeonplustop_top_<副本名>_<排名>_timeformat%` - 获取指定排名的通关时间(中文格式)
- `%dungeonplustop_top_<副本名>_<排名>_createtime%` - 获取指定排名的记录创建时间
- `%dungeonplustop_top_<副本名>_<排名>_players%` - 获取指定排名的所有参与玩家(逗号分隔)
- `%dungeonplustop_top_<副本名>_<排名>_leader%` - 获取指定排名的队长名称
- `%dungeonplustop_top_<副本名>_<排名>_format%` - 获取指定排名的格式化信息(可在配置文件中自定义)

### 玩家相关变量
- `%dungeonplustop_rank_<副本名>_[玩家名]%` - 获取指定玩家在该副本的排名
- `%dungeonplustop_time_<副本名>_[玩家名]%` - 获取指定玩家在该副本的最佳时间

注意:
- `<>` 表示必填参数
- `[]` 表示可选参数,不填则默认为当前玩家
- 如果副本名称中包含下划线,需要使用 `\` 转义,如: `my\_dungeon`

## 配置文件 
```yaml

database:
  type: sqlite
  mysql:
    host: localhost
    port: 3306
    user: root
    password: 123456
    database: minecraft

# 排行榜大小
top_size: 10

# 每个玩家是否只保留最好记录
top_once: false

# 排行榜格式 可用变量:
# name - 地牢名称
# time_format - 格式化后的时间 (例如: 1小时2分钟3秒)
# time - 原始时间 (毫秒)
# players - 参与的玩家列表
# leader - 队长名称
# rank - 当前排名
# create_time - 记录创建时间 (例如: 2024年1月1日 12时30分15秒)
top_format: '{name} {time_format} {players}'

# 过滤玩家名
filter:
  - 'filter-name'

# 当有新记录时发送的消息
# 可用变量
new_record_msg:
  - '&7&m                                                '
  - '&b&l ▶ &f恭喜你创造了新的记录!'
  - '&b&l ▶ &f副本: &b{name}'
  - '&b&l ▶ &f耗时: &b{time_format}'
  - '&b&l ▶ &f参与玩家: &b{players}'
  - '&b&l ▶ &f记录时间: &b{create_time}'
  - '&7&m                                                '

# 当有新记录时发送给所有玩家的消息
# 可用变量
new_record_msg_all:
  - '&7&m                                                '
  - '&e&l ⚡ &f恭喜玩家 &e{leader} &f创造了新的记录!'
  - '&e&l ⚡ &f副本: &e{name}'
  - '&e&l ⚡ &f耗时: &e{time_format}'
  - '&e&l ⚡ &f排名: &e第{rank}名'
  - '&e&l ⚡ &f参与玩家: &e{players}'
  - '&e&l ⚡ &f记录时间: &e{create_time}'
  - '&7&m                                                '

# 当有新记录时执行的命令 控制台命令
# 可用变量
new_record_cmd:
  - ''
```