---
title: 'AutoDamage —— 官方杀戮插件'
shortTitle: 'AutoDamage'
isOriginal: true
tag: ['付费']
dir:
  link: true
---

## 简介
一款能让玩家开启杀戮的插件

::: info QQ交流群 642468469
:::



## 演示视频

<BiliBili bvid="BV1rCB6YnEsh" />

## 配置文件

```yaml

# 龙核配置 在开启时会打开这个hud 暂停时关闭
#dragonCore:
#  hud: ''

# 移动检测 不检测Y轴 只检测XZ
move:
  # 是否不允许移动
  cantMove: true
  # 是否在移动后自动停止
  stopOnMove: true


default:
  range: 3.5
  speed: 5
  amount: 1

start:
  msg:
    - '你开启了官方杀戮'
  # 开启后执行命令 [console] 控制台执行 [player] 玩家执行 [admin] 管理员执行
  commands:
    - '[console] tell {player} 你开启了官方杀戮'

stop:
  msg:
    - '你关闭了官方杀戮'
  commands:
    - '[console] tell {player} 你关闭了官方杀戮'

permission:
  'vip_xxx':
    range: 5
    speed: 3
    amount: 2
```