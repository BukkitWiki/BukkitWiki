---
title: '更新日志'
order: 2
---



## 5.8.0 (Dev Builds 开发版本)

### Items 物品

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

### General 常规

- 在 `config-general.yml` 中添加了 `ThreadPoolSize` 选项，以限制 Mythic 使用的异步线程数量。默认值为 -1 ( 无限制 )

- 增加了 `toggleTimer` utility 命令。

- 为 `spawner create` 和 `spawner move` 命令增加了 `-p` 参数，以便在玩家所在位置创建/移动。

### Mechanics 机制

#### Projectiles 弹射物

- 弹射物 MEG 类型更新。

- 为 MEG 弹射物 增加了相关配置: `bulletScale` 、`bulletColor` 、`bulletGlowing` 、`bulletGlowColor`

#### Variables 变量

- 增加了 `DOUBLE` 变量类型。

### Targeters 目标

- 为 `@EntitiesInCone` 目标选择器添加了 `usePitch=true` 选项。

### Random Spawners 随机刷怪笼

- 允许在随机刷新点中使用占位符。

### Placeholders 占位符

- 增加了 \<caster.type> 和 \<caster.type.name> 占位符。

### Bugs / Other 漏洞/其他

- 为 `CustomComponentRegistry` API 添加了一些新功能。

- 将物品的数据标签移至 PDC 取消使用 NBT，修复了 1.21 中 Spigot 反序列化的问题。

- 修复了数据统计的加载问题。

- 修复了统计时可能出现 StackOverflowError 的问题。

- 修复了不可用的父占位符。

- 修复了 EntitieslnCone 中范围的计算错误。

- 修复了丢失的 caster 占位符 并添加了 c.aliases。

- 修复了 entity_effect/mobSpell 粒子问题。

- 修复了 BukkitItemStack 中的 NPE。

- 修复了 auras 中的 NPE。

- 修复了从控制台向怪物发信号时的 NPE。

- 修复了技能参数未传递给条件动作调用的技能的问题。

- 修复了 "下拉聊天信息" 中的空行不显示的问题。

- 修复了因使用实体元数据而导致的内存泄漏。

- 修复了 onSpawnOrLoad 事件无法触发的错误。

- 修复了旧版本中引入的粒子垃圾邮件?错误。

- 修复了插件在 1.19.4 中无法加载的问题。

- 修复了无效粒子数据导致的问题。

- 修复了计算最大世界高度时出现的 y 越界错误。

- 修复了威胁表中出现 NPE 和计算错误的问题。

- 将 <caster.name> 改为 <caster.type.name>，从而修复了 setName 循环问题。

- 修复了掠夺性爆炸导致物品无法堆叠的问题。

## 5.7.1

### General 常规

添加了对 1.21.1 的支持。

## 5.7.0

`注意: 对 1.21 的支持是一次变化很大的更新，可能仍然会存在一些错误。如果你遇到了错误，请通过提交 Issue 或在 Discord 的` **mythic-121-testing** `频道中告诉我们。`

### General 常规

- 添加了对 1.20.5、1.20.6 和 1.21 的支持

- 删除了对 1.16.4、1.18.2、1.19.1、1.19.2 和 1.19.3 的支持。

- 生物和技能上的各种选项现在可以设置一个可掉落物，并将使用其中的随机物品，例如物品生物类型。

### Mobs 生物

- 新增支持的新实体类型: , ,和.`Armadillo Bogged Breeze`

- 为启用了Hearing.Enabled: true的生物添加了新的HEARING能力，需要1.20+版本。

- 增加了#TODO() [~onHear]() 触发器，用于响应听到的声音。

- 为僵尸和骷髅添加了 `PreventConversion` 选项。

- 更改了直接在生物默认值上定义的变量，使其始终保存。

### Skills 技能

#### Mechanics 机制

- 添加了粒子: , , , , , 和 `white_smoke dust_plume gust gust_emitter gust_dusttrial_spawner_detection`

- Particle 在 1.21 中被 Mojang 删除 `mobSpellAmbient`

- 允许使用和机制来针对特定位置进行操作，以便实现基于位置的占位符功能。`command message`

- 将机制重命名为，以明确其用途并避免命名冲突。`setItemDisplay setDisplayEntityItem`

#### NEW: `Log` 新增功能: `Log`

- `log{message="Debug to console with variables <caster.var.test>"}`

#### NEW: `SetTextDisplay` 新增功能: `SetTextDisplay`

- `setTextDisplay{text="这是个测试"} @Target`

#### NEW: `Taunt` 新增功能: `Taunt`

- 将施法者的威胁值设为目标当前目标的 110% ，并强制他们攻击施法者。需要威胁表支持。

#### NEW: `openTrades` 新增功能: `openTrades`

- `openTrades (openTrade, trade)` 向目标玩家打开一个商人菜单的机制。

- 添加的属性 - 确定玩家是否与实际的村民交易 ( 即掉落交易经验等 )。`realTrade/real`

#### NEW: `setChunkForceLoaded` 新增功能: `setChunkForceLoaded`

- 将目标位置的区块设置为强制加载。

#### DropItem 掉落物

- 向掉落物机制添加了技能，该机制以放置的物品实体为目标。`then=`

#### Conditions 条件

- 添加了 & 条件。`onPass[Skill] onFail[Skill]`

#### NEW: `boundingBoxesOverlap` 新增功能: `boundingBoxesOverlap`

#### NEW: `distanceFromPin` 新增功能: `distanceFromPin`

- `distanceFromPin{pin=X;distance=<5}`

#### NEW: `distanceFromLocation` 新增功能: `distanceFromLocation`

- `distanceFromLocation` 条件。值 ,,,, 和可选 (默认为玩家当前世界，如果未提供世界名称)。`x y z distance/d world`

#### Targeters 目标

#### NEW: `@BlocksInPinRegion` 新增功能: `@BlocksInPinRegion`

#### NEW: `@HighestBlock` 新增功能: `@HighestBlock`

- 以原点位置的最高位置为目标。

#### NEW: `@TrackedPlayers` 新增功能: `@TrackedPlayers`

- 以渲染距离内且当前渲染生物的玩家为目标。

#### NEW: `@ChunksinWERegion` 新增功能: `@ChunksinWERegion`

- 添加了条件。`@ChunksinWERegion{region=X}`

#### Pin 针

- 添加了一个选项，如果目标是多个针，它将随机选择一个而不是全部。`random=true`

#### Placeholders 占位符

- 如果变量为 'true' 或 '1'，则计算结果为 true，否则为 false。`PlaceholderBoolean`

- 占位符添加了四舍五入支持，使用语法 `random.float <random.float.1to5{round=2}>`

### API

- 重构了 EquipSlots，以允许自定义插槽。

- MythicRPG 的各种 API 改进。

- 新增 dump item 组件数据的方法。

### Bugs / Other 漏洞/其他

- 改进了 world isLoaded 检查。

- 删除了 in damage mechanics 的别名以修复一些冲突。`typedamage Type`

- 删除了 adventure 着色，切换到使用 spigot 库加载器的原生 Adventure。

- 删除了冗余的旧版本检查。

- 修复了某些情况下统计工具提示中四舍五入的 bug。

- 修复了随机生成的 y 超出范围错误。

- 修复了在使用自定义铭牌时 setName 机制无法正确更新的问题。

- 修复了 papi 变量占位符中的 NPE。

- 修复了在玩家完成加载之前尝试解析玩家变量时的几个 NPE。

- 修复了占位符舍入的另外几个错误。

- 修复了属性槽在某些版本上不起作用的问题。

- 修复了颜色在 stat 格式中不起作用的问题。

- 修复了威胁表目标程序的异步错误。

- 修复了 NoSuchElementException，该异常导致在 1.21 上随机生成时服务器崩溃。

- 修复了 1.21 中 dumpNBTData 方法中的 NPE。

- 修复了 logic 向后的问题。`Spawners.DisableCommandSaving`

- 修复了 yaw 和 pitch 属性未保存在刷怪笼上的问题。

- 修复了刷怪笼不保存的问题。

- 修复了一堆损坏的目标。

- 修复了 VariableManager 中的 NPE。

- 修复了攻击速度属性（希望如此）。

- 修复了散布对具有实体目标的传送机制不起作用的问题。

- 修复了物品显示实体的错误。

- 修复了与药水的向后兼容性。

- 修复了护甲和攻击速度无法设置为 0 的问题。

- 修复了与 EntityManager 相关的错误。

- 修复了有关注册实体的一系列垃圾邮件错误。

- 修复了没有显示名称的生物蛋的 NPE。

- 修复了 piglin brutes 因原版覆盖而被破坏的问题。

- 修复了幼年村民的其他一些原版覆盖问题。

- 修复了 totem_of_undying 粒子。

- 修复了一堆粒子错误。

- 修复了默认药水等级是 2 而不是 1 的问题。

- 修复了使用 RBG 而不是 RGB 加载烟花颜色的问题。

- 修复了 onDamaged 光环可能对技能伤害不起作用的问题。

- 修复了兼容模式下的 ClassCastException。

- 修复了带有机制选项的 NPE。`targetInterval`

- 修复了散布对具有实体目标的传送机制不起作用的问题。

- 修复了召唤机制生物在某些情况下继承施法者的偏航。

- 修复了 1.21 上的条件。`hasPotionEffect`

- 修复了 1.21+ 上的自定义属性注册。

- 修复了威胁表目标程序的异步错误。

- 修复了 NoSuchElementException，该异常导致在 1.21 上随机生成时服务器崩溃。

- 修复了 1.21+ 上的自定义属性注册。

- 修复了随机生成的 y 超出范围错误。

- 修复了召唤机制生物在某些情况下继承施法者的偏航。

- 修复了 piglin brutes 因原版覆盖而被破坏的问题。

- 修复了幼年村民的其他一些原版覆盖问题。

- 修复了默认药水等级是 2 而不是 1 的问题。

- 修复了使用 RBG 而不是 RGB 加载烟花颜色的问题。

- 修复了 onDamaged 光环可能对技能伤害不起作用的问题。

- 修复了召唤机制生物在某些情况下继承施法者的偏航。

- 修复了 1.21 上的条件。`hasPotionEffect`

- 修复了 1.21+ 上的自定义属性注册。

- 修复了散布对具有实体目标的传送机制不起作用的问题。

- 修复了使用自定义铭牌时机制无法正确更新的问题。`setName`

- 修复了机制不移除 0 数量的物品的问题 `consumeSlotItem`

- 修复了 MythicMobItemGenerateEvent#setItemStack

- 修复了伤害修改和防御属性在某些情况下当最终伤害为零时不起作用的问题

- 修复了服务器关闭时不总是保存生物数据的问题

- 修复了近战攻击 AI 目标有时会导致僵尸卡顿或卡住的问题

- 修复了由于 papermc 错误导致区块加载后无法正确加载的持久实体

- 修复了阻止插件在 Arclight 上加载的错误

- 修复了导致插件在首次安装后需要重启的配置错误