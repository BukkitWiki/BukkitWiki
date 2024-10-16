---
title: 'GUI配置'
dir:
  link: true
---


插件启动后生成的示例配置文件如下：
``` yaml
title: '示例加点面板'
permission: 'xxx.xx'
msg:
  - '权限不足'

layout:
  - 'XXXXXXXXX'
  - 'XABXXXXXX'
  - 'XXXXXXXXX'

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


## 逐行解析

### title
GUI标题
### permission
权限
### msg
当权限不足时给玩家发送此消息
### layout
抽象字符布局
### slots
槽位配置
