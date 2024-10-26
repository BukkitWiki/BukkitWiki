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
  - 'XABCXXXXX'
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
    points:
      normal: 1
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
            - '可用属性点: %rupoint_points_normal%'
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
        - '&6可用属性点: %rupoint_points_normal%'
  B:
    type: 'resource'
    id: hujia
    points:
      normal: 1
    before: |-
        const random = Math.random()
        if(random < 0.5){
            return true;
        }else{
            player.sendMessage('触发了执行前检查')
            return false;
        }
    after: |-
      const random = Math.random()
      if(random < 0.5){
        player.sendMessage('触发了执行后脚本')
      }
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
        - '&6可用属性点: %rupoint_points_normal%'
  C:
    type: 'resource'
    id: baoji
    points:
      high: 5
    money: 100
    maxChance: 100
    chance: 10
    msg:
      - '成功给暴击率加点'
    msgFalse:
      - '加点失败'
    item:
      material: 'egg'
      name: '暴击率'
      lore:
        - '&7----------------'
        - '&a当前效果:'
        - '&f%resource_attribute%'
        - '&a当前属性点: %point%'
        - '&b成功率: %chance%%'
        - '&7--------------'
        - '&6可用属性点: %rupoint_points_high%'
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
