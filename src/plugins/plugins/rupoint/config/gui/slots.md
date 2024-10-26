---
title: '槽位配置详解'

---


## 示例配置

```yaml
slots:
  X:
    type: 'frame'
    item:
      material: 'gray_stained_glass_pane'
      name: '边框'
  A:
    type: 'resource'
    id: gongji
    maxChance: 100
    chance: 80
    successSound: 'ENTITY_PLAYER_LEVELUP'
    failSound: 'entity_villager_no'
    msg:
      - '成功给攻击力加点'
    msgFalse:
      - '加点失败'
    list:
      - check: 'point>10'
        item:
          material: 'apple'
          name: '攻击[进阶]'
          lore:
            - '此阶段每次加点会增加20点物理攻击'
            - '----------------'
            - '当前效果:'
            - '%resource_attribute%'
            - '当前属性点: %point%'
            - '加点成功几率: %chance%'
            - '&b成功率: %chance%%'
            - '--------------'
            - '可用属性点: %point_me%'
    item:
      material: 'apple'
      name: '攻击'
      lore:
        - '&7----------------'
        - '&a当前效果:'
        - '&f%resource_attribute%'
        - '&a当前属性点: %point%'
        - '&b成功率: %chance%%'
        - '&7--------------'
        - '&6可用属性点: %point_me%'
  B:
    type: 'resource'
    id: hujia
    maxChance: 100
    chance: |-
      let now = +(80 - (point*10))
      if (now < 10){
        now=10
      }
      return +now
    msg:
      - '成功给护甲值加点'
    msgFalse:
      - '加点失败'
    item:
      material: 'golden_chestplate'
      name: '护甲'
      lore:
        - '&7----------------'
        - '&a当前效果:'
        - '&f%resource_attribute%'
        - '&a当前属性点: %point%'
        - '&b成功率: %chance%%'
        - '&7--------------'
        - '&6可用属性点: %point_me%'
```

### type
槽位类型  
- [frame 边框](#边框)
- [resource 加点属性源配置](#加点属性源配置)
- [cmd 命令](#命令)

## 边框

当type为frame此物品为一个没有任何功能的边框物品
只需要填入一个item物品配置

## 命令

示例
``` yaml
D:
  type: 'cmd'
  item:
    material: stone
  console:
    - '这里是控制台执行命令'
  admin:
    - '这里是以管理员身份执行的命令'
  player:
    - '这里是以玩家自身身份执行的命令'
```

## 加点属性源配置

### id(必填)
对应resources.yml中的一级键名
### points(必填)
消耗的属性点及数量  
支持整数或js表达式
``` yaml
points:
  normal: 1
  high: |-
    return (player.getLevel())
```
### before
在加点执行前（在检查玩家是否拥有属性点之后）运行的js脚本
``` yaml
before: |-
  const random = Math.random()
  if(random < 0.5){
      return true;
  }else{
      player.sendMessage('触发了执行前检查')
      return false;
  }
```
需要一个Boolean类型返回值(true,false) 返回true代表会继续执行 返回false代表不会继续执行  

### after

会在加点执行后执行 无论是否加点成功都会执行
``` yaml
after: |-
  const random = Math.random()
  if(random < 0.5){
    player.sendMessage('触发了执行后脚本')
  }
```

### money
加点消耗的金币 支持整数或js表达式
``` yaml
money: 100
```
### maxChance
概率最大值 仅支持整数
### chance
概率值 可填整数或js表达式
### successSound
加点成功后播放的音效
### failSound
加点失败后播放的音效
### msg
加点成功后发送的消息
### msgFalse
加点失败后发送的消息
### list (可选)
当前属性在加点到一定程度之后展示不同的物品
check内可填写整数或单行表达式
### item
展示的物品
