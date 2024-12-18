---
title: 刷新点配置
---

## 示例配置

```yaml
#
# 刷新点示例
# 当刷新点刷新时,会向所有人发送消息
#
Example:
  # 刷新模式: 
  # normal - 普通模式,条件不满足直接返回
  # retry - 重试模式,条件不满足会一直重试直到满足条件
  spawner_mode: 'normal'
  # 怪物id
  id: 'test'
  # 等级
  level: 1
  # 刷新时间 格式为: 秒 分 时 日 月 周 示例: 0 0 20 * * ? 表示每天20点刷新 可以百度搜索cron表达式生成器
  cron: '0 0 20 * * ?'
  # 刷新成功时发送的消息
  msg:
    - '&a刷新点刷新了'
  falseMsg:
    - '&c刷新点刷新失败'
  # 刷新前倒计时提醒
  last:
    30:
      - '&a示例刷新点还有 30 秒刷新'
    10:
      - '&a示例刷新点还有 10 秒刷新'
    5:
      - '&a示例刷新点还有 5 秒刷新'
    3:
      - '&a示例刷新点还有 3 秒刷新'
    1:
      - '&a示例刷新点还有 1 秒刷新'
  # 刷新位置 可以在游戏中使用 /ruloot spawner set <id> 设置刷新点位置
  location:
    world: 'world'
    x: 0
    y: 64
    z: 0
  # 刷新范围,在此范围内随机选择位置刷新
  range: 10
  # 刷新数量
  amount: 1
  # 刷新条件
  conditions:
    # 在线玩家数量条件
    - type: 'min_players'
      min: 5
    # 范围内玩家数量条件
    - type: 'min_players_on_range'
      range: 50
      minPlayers: 3
    # 概率
    - type: 'chance'
      value: 100
    # 变量 只能用不基于玩家的变量
    #- type: 'placeholder'
    #  placeholder: '%player_name_1%'
    #  value: '100'
    # 天气条件
    #- type: 'weather'
    #  weather: 'sunny'
    # # Kether脚本条件
    # - type: 'kether'
    #   script: ''
    # JavaScript脚本条件
    # - type: 'js'
    #   script: ''
  # 刷新成功后执行的指令
  commands:
    - 'say 刷新了一个Boss!'
```