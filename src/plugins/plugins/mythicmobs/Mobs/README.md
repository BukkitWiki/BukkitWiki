---
title: '怪物'
dir:
  link: true
---

MythicMobs 是基于自定义实体/怪物的插件，提供了丰富的选项和属性供您使用。以下是您可以添加到自定义生物中的全部选项/属性列表。

下面的大部分选项都是可选的，意味着每次创建新怪物时，您不需要配置整个列表。真正需要的是 `Internal_Name` 和 `Type`。

内容目录:

- [怪物配置解析](#怪物配置解析)
  - [Internal_Name 内部名称](#internal_name-内部名称)
  - [Type 类型](#type-类型)
  - [Display 显示名称](#display-显示名称)
  - [Health 生命值](#health-生命值)
  - [Damage 伤害值](#damage-伤害值)
  - [Armor 护甲值](#armor-护甲值)
  - [HealthBar 血量条](#healthbar-血量条)
  - [BossBar Boss条](#bossbar-Boss条)
  - [Faction 派系](#faction-派系)
  - [Mount 坐骑](#mount-坐骑)
  - [Display Options 显示配置](#display-options-显示配置)
  - [Options 其他配置](#options-其他配置)
  - [Modules 模块](#modules-模块)
  - [AIGoalSelectors AI目标选择器](#aigoalselectors-AI目标选择器)
  - [AITargetSelectors AI目标选择器](#aitargetselectors-AI目标选择器)
  - [Drops 掉落物](#drops-掉落物)
  - [DamageModifiers 伤害修改](#damagemodifiers-伤害修改)
  - [Equipment 装备](#equipment-装备)
  - [KillMessages 击杀信息](#killmessages-击杀信息)
  - [LevelModifiers 等级修改](#levelmodifiers-等级修改)
  - [Disguise 伪装](#disguise-伪装)
  - [Skills 技能](#skills-技能)
  - [Nameplate 铭牌](#nameplate-铭牌)
  - [Hearing 听力](#hearing-听力)
  - [Variables 变量](#variables-变量)
  - [Trades 交易](#trades-交易)
- [Examples 示例](#example-示例)

## 怪物配置解析

### Internal_Name 内部名称

你要给你的怪物一个独一无二的内部名称，并且不能和其他怪物的内部名称冲突，也不允许有空格

```yaml
example_name:
```

### Type 类型

该字段指定了怪物的实体类型。可用的实体类型可以在  [spigot javadocs](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html) 上找到，[这里](#TODO:怪物类型)列出了可用的所有类型。

> 在 MythicMobs 更新对某个实体类型添加支持之前，原版新增的新实体类型的部分怪物属性将无法运行
> 有些实体类型可能会对部分配置有不同的影响，简易阅读[不稳定实体类型](#TODO:不稳定实体类型)页面，以便更好地选择使用的实体。

```yaml
example_mob:
  Type: zombie
```

```yaml
another_mob:
  Type: ZOMBIE
```

### Display 显示名称

设置怪物的显示名称。可以配置颜色代码和[占位符](#TODO:占位符)。怪物的显示名称不会主动更新，必须使用 [mechanic 中的 setname](#TODO:setname页面) 更新

```yaml
example_mob:
  Type: zombie
  Display: 示例怪物
```

```yaml
example_mob:
  Type: zombie
  Display: 示例怪物 <caster.hp> <red><&heart></red>
```

### Health 生命值

设置怪物的基础最大生命值，最大生命值没有上限限制，但Spigot 会将最大生命值上限限定为 `2048`。这可以在 Spigot 的配置文件 `服务端根目录\spigot.yml` 中更改。
在怪物手持或携带任何带有修改生命值属性的物品时，都会影响怪物的最大生命值。

```yaml
example_mob:
  Type: zombie
  Display: 示例怪物
  Health: 30
```

### Damage 伤害值

设置怪物近战攻击伤害的基础值。
1 点伤害等于 0.5 颗心。该属性不会影响范围攻击造成的伤害，如箭或药水。在怪物手持或携带任何带有修改伤害值属性的物品时，都会影响怪物的最大伤害。

```yaml
example_mob:
  Type: zombie
  Display: 示例怪物
  Damage: 20
```

### Armor 护甲值

设置怪物护甲属性的基础值，最大护甲值上限为 30。

```yaml
example_mob:
  Type: zombie
  Display: 坦克
  Armor: 25
```

### HealthBar 血量条

当怪物受到伤害时，会在怪物上方创建一个血量的全息图

```yaml
example_mob:
  Type: zombie
  Display: 健康小子
  Health: 1000
  HealthBar:
    Enabled: true
    Offset: 1.45
```

### BossBar Boss条

配置怪物受到攻击时显示 BossBar，可以通过配置修改BossBar 的样式，修改样式请查看(此页面)[#TODO:BossBar页面]

```yaml
example_mob:
  Type: zombie
  Armor: 25
  BossBar:
    Enabled: true
    Title: 坦克
    Range: 20
    Color: RED
    Style: NOTCHED_6
    CreateFog: true
    DarkenSky: true
    PlayMusic: true
```

### Faction 派系

设置怪物的派系，用于(自定义AI配置)[#TODO:AI配置]或(目标过滤)[#TODO:目标过滤]。请注意派系名称要区分大小写。

```yaml
example_mob:
  Type: zombie
  Armor: 25
  Faction: Tank
```

### Mount 坐骑

设置怪物的坐骑。必须是另外一个 MythicMobs 

```yaml
another_example:
  Type: chicken
  Mount: example_mo
```

### Display Options 显示配置

实体展示的配置。可用选项可以在(此页面)[#TODO:显示配置]找到。

### Options 其他配置

这是一个特殊字段，包括许多子选项，例如持久化怪物、击退抗性、跟随范围、移动速度等等。可用的选项可以在(此页面)[#TODO:其他选项页面]找到

```yaml
slow_persistent_mob:
  Type: husk
  Options:
    MovementSpeed: 0.025
    Despawn: PERSISTENT
```

### Modules 模块

该字段允许启用或禁用模块，如(仇恨表)[#TODO:仇恨表]或(免疫表)[#TODO:免疫表]

```yaml
example_mob:
  Type: husk
  Modules:
    ThreatTable: false
    ImmunityTable: false
```

### AIGoalSelectors AI目标选择器

配置怪物的(AI目标)[#TODO:AI目标]

```yaml
dummy_mob:
  Type: zombie
  AIGoalSelectors:
    - clear
```

```yaml
passive_mob:
  Type: zombie
  AIGoalSelectors:
    - clear
    - randomstroll
    - randomlookaround
```

### AITargetSelectors AI目标选择器

配置怪物的(AI目标)[#TODO:AI目标]

```yaml
neutral_mob:
  Type: zombie
  AIGoalSelectors:
    - clear
    - meleeattack
    - randomstroll
    - randomlookaround
  AITargetSelectors:
    - clear
    - attacker
```

### Drops 掉落物

配置怪物击杀之后的物品掉落物。更多信息请查看[掉落物](#TODO:掉落物)

```yaml
example_mob:
  Type: zombie
  Options:
    PreventOtherDrops: true
  Drops:
    - diamond 32 1
    - netherite_ingot 12 0.5
```

### DamageModifiers 伤害修改

修改怪物从不同伤害源受到的伤害。例如：使怪物免疫近战伤害，增加远程伤害。更多信息请查看[伤害修改](#TODO:伤害修正)

```yaml
example_mob:
  Type: zombie
  DamageModifiers:
    - ENTITY_ATTACK 0
    - PROJECTILE 1.25
```

### Equipment 装备

配置在怪物生成时的装备。更多信息请查看[装备](#TODO:装备)

```yaml
example_mob:
  Type: zombie
  Options:
    PreventRandomEquipment: true
  Equipment:
    - diamond_sword HAND
    - diamond_helmet{name=<green>COMMON</green> helmet} HEAD
```

### KillMessages 击杀信息

自定义怪物击杀玩家时发送的(击杀信息)[#TODO:击杀信息]

```yaml
example_mob:
  Type: zombie
  Display: 坦克
  KillMessages:
    - <caster.name> 是的 <target.name>!!
    - 你太弱了 <target.name>!!
```

### LevelModifiers 等级修改

配置当怪物拥有等级时，基于等级修改的其他属性

```yaml
example_mob:
  Type: zombie
  Display: 人机
  LevelModifiers:
    Damage: 2
    Health: 0.25
```

### Disguise 伪装

改变怪物的外观。需要在服务器上安装 [LibsDisguises](#TODO:LibsDisguises插件) 并正常运行。请参阅[此页](#TODO:LibsDisguises插件)获取更多信息。

```yaml
# 这个怪物将伪装成一个鸡的模型
example_mob:
  Type: zombie
  Disguise: chicken
```

### Skills 技能

技能是 MythicMobs 中不可缺少的功能之一。请参阅 “[技能](#TODO:技能)” 页面开始制作属于你的技能。

```yaml
#当玩家右键这个怪物时，怪物和玩家会交换位置
example_mob:
  Type: zombie
  Skills:
    - swap @trigger ~onInteract
```

### Nameplate 铭牌

启用了此配置之后会打开怪物头顶的铭牌，可以使用换行符 `\n`

```yaml
ExampleMob:
  Type: PIG
  Display: "你好\n世界！"
  Nameplate:
    Enabled: true
    # 铭牌偏移
    Offset: 1.8 
    # 铭牌压缩
    Scale: 2
    # 如果设置了，强制让铭牌与 ModelEngine 插件中的模型实体一起工作。
    Mounted: true
```

### Hearing 听力

允许怪物像[监守者](https://zh.minecraft.wiki/w/%E7%9B%91%E5%AE%88%E8%80%85)一样可以听到声音
打开此选型之后将启用新的 [~onHear](#TODO:onHear) 触发器

```yaml
ICanHearYou:
  Type: ZOMBIE
  Hearing:
    Enabled: true
  Skills:
  - message{m="I can hear you <trigger.name>! <skill.var.volume>? Way too loud!"} @trigger
```

### Variables 变量

配置怪物在生成时设置变量

```yaml
VariableZombie:
     Type: ZOMBIE
     Variables:
       SomeVariable: something
       AnIntVariable: int/2
       AFloatVariable: float/420.69
```

在这个示例中设置了
- 一个字段 (String) 类型值为 `something` 名为 `SomeVariable` 的变量
- 一个整数 (int) 类型值为 `2` 名为 `AnIntVariable` 的变量
- 一个小数 (float) 类型值为 `420.69` 名为 `AFloatVariable` 的变量

### Trades 交易

自定义村民的交易。村民必须拥有一个职业，且职业等级达到2级，才能保留其自定义交易

```yaml
MerchantTest:
  Type: VILLAGER
  Display: '&6商人测试'
  Options:
    Profession: CLERIC
    Type: DESERT
    Level: 2
  Trades:
    1:
      Item1: 5 EMERALD
      Item2: 5 DIAMOND
      Result: DIAMOND_SWORD
      MaxUses: 5
    2:
      Item1: 64 EMERALD
      Result: mmoitems.SWORD.CUTLASS
      MaxUses: 1
    3:
      Item1: 32 EMERALD
      Item2: 1 PAPER
      Result: 1 CUSTOM_ITEM
      MaxUses: 1
```

## Example 示例

> 更多示例请参见[此页面](#TODO:页面)