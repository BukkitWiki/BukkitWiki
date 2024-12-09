---
title: 更新日志
---

## 1.0.5

### 刷新点
增加刷新点模式配置
normal - 普通模式,条件不满足直接返回冷却 如图所示  
![](https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/20241210013334.png)  
retry - 重试模式,条件不满足会一直重试直到满足条件 如图所示  
![](https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/20241210013355.png)

刷新点条件配置修改格式 增加更多可选条件配置
```yaml
  # 刷新条件 能用的都在下方
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
```
### 战利品
增加三个条件  
damage - 伤害判断  
rank - 排名判断  
percentage - 百分比判断  
``` yaml
condition:
- type: 'damage' # 伤害判断 大于等于此值
  damage: 100
- type: 'rank' # 排名判断 等于此值
  rank: 1
- type: 'percentage' # 百分比判断 大于等于此值
  percentage: 100
```
增加三个奖励  
js - 脚本奖励  
kether - kether脚本奖励  
exp - 经验奖励  
```yaml
reward:
- type: 'js'
  script: |-
    player.sendMessage('你获得了战利品');
- type: 'kether'
  script: |-
    不会写
- type: 'exp'
  exp: 100
```



## 1.0.0
- 初始化
