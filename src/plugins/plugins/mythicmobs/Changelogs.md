---
title: '更新日志'
order: 2
---



## 5.8.0(Dev Builds)

### Items

- 给物品配置增加了食物配置，从而可以制作可使用的物品
```yaml
NetheritePops:
  Material: NETHERITE_SCRAP
  Display: 'Delicious Scraps'
  Food:
    Nutrition: 2
    Saturation: 2
    EatSeconds: 2
    CanAlwaysEat: true
    Effects:
    - regeneration{duration=60}```

```

## 5.7.2

### General
- 在`config-general.yml`中添加了`ThreadPoolSize`选项，以限制 Mythic 使用的异步线程数量。默认值为-1（无限制）。
- 增加了 `toggleTimer` utility命令
- 为`spawner create`和`spawner move`命令增加了`-p`参数，以便在玩家所在位置创建/移动。

### Mechanics
#### Projectiles
- 弹射物 MEG 类型更新
- 为 MEG 弹射物 增加了相关配置: `bulletScale`、`bulletColor`、`bulletGlowing`、`bulletGlowColor`

#### Variables
- 增加了 `DOUBLE` 变量类型

### Targeters
- 为`@EntitiesInCone`目标选择器添加了`usePitch=true`选项

### Random Spawners
- 允许在随机刷新点中使用占位符

### Placeholders
- 增加了 \<caster.type> 和 \<caster.type.name> 占位符

### Bugs / Other
- 为 `CustomComponentRegistry`API 添加了一些新功能
- 将物品的数据标签移至 PDC 取消使用NBT，修复了 1.21 中Spigot反序列化的问题
- 修复了数据统计的加载问题
- 修复了统计时可能出现 StackOverflowError 的问题
- 修复了不可用的父占位符
- 修复了 EntitieslnCone 中范围的计算错误
- 修复了丢失的 caster 占位符 并添加了 c.aliases
- 修复了 entity_effect/mobSpell 粒子问题
- 修复了 BukkitItemStack 中的 NPE
- 修复了 auras 中的 NPE
- 修复了从控制台向怪物发信号时的NPE
- 修复了技能参数未传递给条件动作调用的技能的问题
- 修复了 "下拉聊天信息 "中的空行不显示的问题
- 修复了因使用实体元数据而导致的内存泄漏
- 修复了 onSpawnOrLoad 事件无法触发的错误
- 修复了旧版本中引入的粒子垃圾邮件?错误
- 修复了插件在 1.19.4 中无法加载的问题
- 修复了无效粒子数据导致的问题
- 修复了计算最大世界高度时出现的 y 越界错误
- 修复了威胁表中出现 NPE 和计算错误的问题
- 将 <caster.name> 改为 <caster.type.name>，从而修复了 setName 循环问题
- 修复了掠夺性爆炸导致物品无法堆叠的问题。
