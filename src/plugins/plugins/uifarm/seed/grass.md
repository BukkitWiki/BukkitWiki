---
title: '除草配置'
dir: 
  order: 1
---

### 配置节点

- take 是否扣除除草使用的物品
- chance 作物在生长中会生草的几率 1s判断一次
- maxChance 最大几率
- msg 生草之后发给玩家的消息
- clippers 剪刀id列表

在本插件中不存放任何剪刀物品 需要手动将id写到物品的nbt中
剪刀物品的nbt格式如下：
``` yaml
farm:
  type: clipper
  id: id
```
- append 在生草之后对gui中展示物品名字拼接的文字
- appendLore 在生草之后对gui中展示物品Lore拼接的文字


### 示例配置

``` yaml
  grass:
    take: false
    chance: 20
    maxChance: 100
    msg:
      - '请给铁锭种子除草'
    clippers:
      - "example"
    append: '[请除草]'
    appendLore: '[请除草]'
```
