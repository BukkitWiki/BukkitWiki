---
title: 'RuSkillsGem —— 技能纹章'
shortTitle: 'RuSkillsGem'
isOriginal: true
tag: ['付费']
dir:
  link: true
---


## 简介
利用龙核槽位装备不同的纹章，根据纹章的不同释放同一个技能时会产生不同的效果
::: tip 强依赖 **龙核**和**MythicMobs**
:::


::: info QQ交流群 642468469
:::

## 视频演示

<BiliBili bvid="BV1qpkDYEEzx" />


## 配置文件
```yaml
# 示例配置
example:
  # 必须存在一个 当没有装备纹章的时候会执行第一个技能
  skills:
    - 'example1'
    - 'example2'
    - 'example3'
```
假设我有这么一条example的纹章，需要在物品库中添加纹章  
这里使用MM物品演示
```yaml
测试:
  Id: apple
  Display: '&a测试物品'
  NBT:
    ruskillsgem:
      id: example
      index: 1
测试1:
  Id: apple
  Display: '&a二级技能纹章'
  NBT:
    ruskillsgem:
      id: example
      index: 2
测试2:
  Id: apple
  Display: '&a三级技能纹章'
  NBT:
    ruskillsgem:
      id: example
      index: 3
```

创建三个技能纹章物品，特别的是在NBT中存在这样一个固定结构
```yaml
ruskillsgem:
  id: 插件配置文件中的id
  index: 激活第几个技能
```
然后在mm中创建对应三个等级的技能
```yaml
example1:
  Cooldown: 0
  Skills:
  - message{m="技能1"} @Self
example2:
  Cooldown: 0
  Skills:
  - message{m="技能2"} @Self
example3:
  Cooldown: 0
  Skills:
  - message{m="技能3"} @Self
```

此时在龙核槽位中放入纹章就会激活纹章的效果了。
::: tip 龙核槽位需要开启`attribute`配置
:::