---
title: '土壤配置'
dir:
  link: true
  collapsible: false
---

### 配置项
- increase 使用此土地对作物进度的增幅
- permission[可选] 权限判断
- permissionFalseMsg 当权限不足时向玩家发送的文本


### 示例配置
``` yaml
normal:
  increase: 0
  item:
    material: 'farmland'
    name: '&7普通土地'

vip:
  increase: 0.5
  permission: 'xxx.vip'
  permissionFalseMsg:
    - '权限不足'
  item:
    material: 'farmland'
    name: '&evip土地'
    lore:
      - '&6成长速度增幅50%'
```