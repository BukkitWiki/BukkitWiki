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
- frame 边框
- resource 加点属性源配置

## 边框

当type为frame此物品为一个没有任何功能的边框物品
只需要填入一个item物品配置

## 加点属性源配置

### id
对应resources.yml中的一级键名

### maxChance
概率最大值
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
