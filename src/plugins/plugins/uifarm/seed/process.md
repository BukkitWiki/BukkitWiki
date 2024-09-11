---
title: '进度配置'
dir:
  order: 2
---

### 配置节点

- list 进度配置
  - input 达到此进度需要输入的物品 `可选` 详细请参考[input配置](#input)
  - objective 进度 当进度达到多少之后进入此进度
  - item 此进度的展示物品

- done 结果配置 和list中的配置一样不过是单独拿出来了

### input
配置节点:
- type 输入物品的检测类型 共四种检测类型 `nbt` `name` `lore` `material`
    - nbt
       检测的内容就是配置中的nbt配置
    - name
       检测内容是配置中的name配置
    - lore
       检测内容是配置中的lore配置
    - material 
       检测内容是配置中的material配置

- take 是否拿取输入的物品
- msg 当作物需要输入物品时发送给玩家的消息
- (nbt、name、lore、material) 根据type配置的内容
- item 当触发此input时gui中展示的物品


``` yaml
input:
  type: nbt
  take: true
  msg:
    - '请放入宝石辅助道具'
  nbt:
    - farm:
        type: 'prop'
        name: '宝石增强辅助道具'
  item:
    material: 'redstone_torch'
    name: '请放入宝石辅助道具'
```


### 示例配置

``` yaml
  process:
    list:
      - objective: 0
        item:
          material: 'wheat_seeds'
          name: '&f&l铁锭种子'
      - objective: 10
        item:
          material: 'cobblestone'
          name: '第一阶段'
      - objective: 50
        item:
          material: 'stone'
          name: '第二阶段'
      - objective: 70
        item:
          material: 'raw_iron'
          name: '第三阶段'
    done:
      item:
        material: 'iron_ingot'
        name: '第四阶段 [可收获]'

```
