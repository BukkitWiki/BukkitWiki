---
title: 'TimerCommand —— 延时执行命令'
shortTitle: 'TimerCommand'
isOriginal: true
tag: ['免费','原创']
dir:
  link: true
---

## 插件简介
可选择延时不延时执行命令组，支持随机命令
::: tip QQ交流群： 642468469
:::

## 图片展示
![](https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/20241208130004.png)
![](https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/20241208125937.png)
## 下载地址
QQ群文件下载 或 Minebbs(还没发)  
::: tip 本插件已开源 求star 源码地址: [TimerCommand](https://github.com/Coderkuo/TimerCommand)
:::

## 插件命令 完整命令为`/timercommand` 缩写为`/tc`
- `/tc help` 查看帮助
- `/tc reload` 重载插件
- `/tc exec <命令> <参数...>` 执行命令
- `/tc execOther <命令> <玩家名> <参数...>` 让其他玩家执行命令
- `/tc info <命令>` 查看命令信息
- `/tc list` 查看所有命令

## 配置文件

`config.yml`
```yaml
# 进度条配置
processBar:
  # 进度条符号
  point: '■'
  # 进度条空白符号
  blank: '□'
  # 进度条总长度
  total: 20
  # 进度条格式
  format: '%point%%blank% [%rate%%]'

# 缺省配置 当没有指定时使用
default:
  actionbar:
    enable: true
    text: '%process%'
  bossBar:
    enable: true
    color: green
    text: '命令执行中... 倒计时 %time% 秒.'
    style: SOLID
  sound:
    enable: true
    tick: 'BLOCK_ANVIL_LAND'
    end: 'ENTITY_PLAYER_LEVELUP'


```

`commands.yml`
```yaml


# 基础命令示例
basic_command:
  # 延迟执行时间(秒)
  time: 10
  # 是否允许移动 (默认true)
  allowMove: true
  # 命令执行者配置
  commands:
    # 控制台执行的命令
    console:
      - 'say 这是控制台命令'
    # 以OP权限执行的命令  
    op:
      - 'gamemode creative %player_name%'
    # 以玩家身份执行的命令
    player:
      - 'msg %player_name% 这是玩家命令'

# 界面显示示例      
display_command:
  time: 5
  # ActionBar配置
  actionbar:
    enable: true 
    text: '正在执行: %process%'
  # BossBar配置  
  bossbar:
    enable: true
    color: GREEN
    text: '倒计时: %time%秒'
    style: SOLID
  # 音效配置
  sound:
    enable: true
    tick: 'BLOCK_NOTE_BLOCK_HARP'
    end: 'ENTITY_PLAYER_LEVELUP'
  commands:
    console:
      - 'say 执行完成'

# 随机命令示例
random_command:
  time: 3
  commands:
    console:
      # 随机执行其中一条命令
      - type: random
        commands:
          - 'give %player_name% diamond'
          - 'give %player_name% gold_ingot' 
          - 'give %player_name% iron_ingot'

# 概率命令示例          
chance_command:
  time: 0
  commands:
    console:
      # 50%概率执行
      - type: chance
        chance: 0.5
        command: 'give %player_name% diamond'

# 权重随机示例
weight_command:
  time: 0
  commands:
    console:
      # 按权重随机执行
      - type: weight
        commands:
          - weight: 50
            command: 'give %player_name% diamond'
          - weight: 30  
            command: 'give %player_name% gold_ingot'
          - weight: 20
            command: 'give %player_name% iron_ingot'

# 复合命令示例
compound_command:
  time: 5
  commands:
    console:
      # 50%概率触发随机命令
      - type: chance
        chance: 0.5
        command:
          type: random
          commands:
            - 'give %player_name% diamond'
            - 'give %player_name% gold_ingot'
            - 'give %player_name% iron_ingot'

``` 