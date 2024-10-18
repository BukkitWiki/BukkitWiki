# Attributes 属性

使用 MythicMobs 的物品属性系统接管 Minecraft 的属性系统。
它可以根据槽位的不同，为佩戴/使用物品的实体给予不同的属性。

- [Format 格式](#format-格式)
- [Slots 槽位](#slots-槽位)
- [Value 值](#value-值)
- [Operations 操作](#operations-操作)
- [Attributes 属性](#attributes-属性)
  - [AttackSpeed 攻击速度](#attackspeed-攻击速度)
  - [Armor 护甲值](#armor-护甲值)
  - [ArmorToughness 伤害减免](#armortoughness-伤害减免)
  - [Damage 伤害值](#damage-伤害值)
  - [Health 血量值](#health-血量值)
  - [Luck 幸运值](#luck-幸运值)
  - [KnockbackResistance 击退抗性](#knockbackresistance-击退抗性)
  - [MovementSpeed 移动速度](#movementspeed-移动速度)
  - [MaxAbsorption 伤害吸收](#maxabsorption-伤害吸收)
  - [Scale 实体大小](#scale-实体大小)
  - [StepHeight‌ 跨越高度‌](#stepheight-跨越高度‌)
  - [JumpHeight 跳跃高度](#jumpheight-跳跃高度)
  - [BlockInteractionRange 方块交互距离](#blockinteractionrange-方块交互距离)
  - [EntityInteractionRange 实体交互距离](#entityinteractionrange-实体交互距离)
  - [BlockBreakSpeed 破坏倍数](#blockbreakspeed-破坏倍数)
  - [Gravity 重力](#gravity-重力)
  - [SafeFallDistance 可下落数](#safefalldistance-可下落数)
  - [FallDamageMultiplier‌ 受坠落伤害](#falldamagemultiplier-受坠落伤害‌)
- [Examples 示例](#examples-示例)

## Format 格式

```yaml
Item:
  Id: item_id
  Attributes:
    [槽位]:
      [属性]: [值] <操作> 
```

## Slots 槽位

| 槽位 | 描述 |
| - | - |
| All | 将指定的属性应用于所有槽位。 |
| MainHand | 属性仅在主手持有物品时生效。 |
| OffHand | 属性仅在物品被手持时生效。 |
| Head | 属性仅在物品被穿戴在头盔槽位时生效。 |
| Chest | 属性仅在物品被穿戴在胸甲槽位时生效。 |
| Legs | 属性仅在物品被穿戴在护腿槽位时生效。 |
| Feet | 属性仅在物品被穿戴在靴子槽位时生效。 |

## Value 值

你可以输入绝对值或相对值:

- 要输入绝对值，只需将其写出即可

```yaml
      Damage: 10 ADD
```

- 要输入相对值，请在后面使用 % 符号

```yaml
      Damage: 10% ADD
```

## Operations 操作

| 操作 | 别称 | 描述 |
| - | - | - |
| ADD | 0, ADD_NUMBER | 将指定值与基础值相加或相减。 |
| MULTIPLY_BASE | 1, ADD_SCALAR | 将基础值乘以所有修饰符的值的总和。 |
| MULTIPLY | 2, MULTIPLY_SCALAR | 类似于 `MULTIPLY_BASE` 但它不是将所有的修饰符的值相加，而是将它们全部相乘。 |

[*请查看 MC wiki，了解是如何计算所有修饰符的值。*](https://minecraft.wiki/w/Attribute#Modifiers)

## Attributes 属性

以下是所有可以应用在物品上的属性。你可以使用像 `<random.#to#>` 或 `<random.float.#to#>` 这样的通用占位符。你可以在 [Minecraft Wiki ](https://minecraft.wiki/w/Attribute#Attributes)页面上了解更多关于这些属性的信息。

### AttackSpeed 攻击速度

确定一次完全充能的攻击的恢复速度。

```yaml
custom_item:
  Id: stick
  Attributes:
    MainHand:
      AttackSpeed: 0.1 MULTIPLY
```

### Armor 护甲值

设置护甲数量。1 个护甲等于 0.5 个护甲板。在原版中，护甲的最大值被限制在 30。

```yaml
custom_item:
  Id: diamond_chestplate
  Attributes:
    Chest:
      Armor: 2
```

### ArmorToughness 伤害减免

更改盔甲属性的伤害减免百分比。[MC wiki](https://minecraft.fandom.com/wiki/Armor#Armor_toughness)。

```yaml
custom_item:
  Id: diamond_chestplate
  Attributes:
    Chest:
      ArmorToughness: 0.5
```

### Damage 伤害值

设置近战攻击造成的伤害。1 点伤害等于 0.5 颗心（无护甲）的伤害值。

```yaml
custom_item:
  Id: stick
  Attributes:
    All:
      Damage: 0.2 ADD_SCALAR
```

### Health 血量值

当用户持有或穿戴该物品时，其最大生命值修饰符。1 点生命值等于 0.5 颗心。

```yaml
custom_item:
  Id: diamond_chestplate
  Attributes:
    MainHand:
      Health: 2 ADD
```

### Luck 幸运值

设置物品的幸运修饰符。这个修饰符会影响战利品表的结果，也会影响怪物掉落的物品。

```yaml
custom_item:
  Id: stick
  Attributes:
    OffHand:
      Luck: -10 ADD
```

### KnockbackResistance 击退抗性

设置水平方向上受到攻击时的击退抗性。

```yaml
custom_item:
  Id: diamond_chestplate
  Attributes:
    Chest:
      KnockbackResistance: 2 MULTIPLY_BASE
```

### MovementSpeed 移动速度

设置物品的移动速度修饰符。

```yaml
custom_item:
  Id: wooden_sword
  Attributes:
    All:
      MovementSpeed: -0.2 MULTIPLY_BASE
```

### MaxAbsorption 伤害吸收

这个怪物的最大伤害吸收量。  
决定了它们通过伤害吸收效果可以获得的最高生命值

```yaml
custom_item:
  Id: wooden_sword
  Attributes:
    All:
      MaxAbsorption: 1 ADD
```

### Scale 实体大小

实体大小的倍数

```yaml
custom_item:
  Id: wooden_sword
  Attributes:
    All:
      Scale: 2 ADD
```

### StepHeight‌ 跨越高度

实体在不跳跃的情况下可以跨越的最大方块数量。潜行只会防止从高于此属性的高度掉落物品。  
[5] 只有在玩家所在高度等于或小于该属性时才会发生这种情况

```yaml
custom_item:
  Id: wooden_sword
  Attributes:
    All:
      StepHeight‌: 2 ADD
```

### JumpHeight 跳跃高度

实体可以跳跃的高度，类似于跳跃提升效果

```yaml
custom_item:
  Id: wooden_sword
  Attributes:
    All:
      JumpHeight: 2 
```

### BlockInteractionRange 方块交互距离

玩家与方块的交互距离

```yaml
custom_item:
  Id: wooden_sword
  Attributes:
    All:
      BlockInteractionRange: 2 ADD
```

### EntityInteractionRange 实体交互距离

玩家与实体的交互距离

```yaml
custom_item:
  Id: wooden_sword
  Attributes:
    All:
      EntityInteractionRange: 2 ADD
```

### BlockBreakSpeed 破坏倍数

玩家破坏方块的速度倍数

```yaml
custom_item:
  Id: wooden_sword
  Attributes:
    All:
      BlockBreakSpeed: 2 ADD
```

### Gravity 重力

影响实体的重力效果

```yaml
custom_item:
  Id: wooden_sword
  Attributes:
    All:
      Gravity: 2 ADD
```

### SafeFallDistance 可下落数

实体在开始累积掉落伤害之前可以下落的方块数量。以及实体必须下落的最小方块数量才能产生掉落颗粒和声音

```yaml
custom_item:
  Id: wooden_sword
  Attributes:
    All:
      SafeFallDistance: 2 ADD
```

### FallDamageMultiplier‌ 受坠落伤害

实体所受到的坠落伤害倍数

```yaml
custom_item:
  Id: wooden_sword
  Attributes:
    All:
      FallDamageMultiplier‌: 2 ADD
```

## Examples 示例

这个示例物品在主手中使用时会提供 +10 的幸运值，但如果它在副手中使用，则会提供 +7 的幸运值和额外的 +2 伤害:

```yaml
lucky_charms:
  Id: potato_item
  Display: '破旧的幸运符'
  Attributes:
    MainHand:
      Luck: 10
    OffHand:
      Luck: 7
      Damage: 2
```

该示例物品无论放在哪个槽位，都会提供额外的 2 点生命值。但如果将这个物品穿戴在靴子槽位，还会额外增加 4% 的移动速度。

```yaml
happy_feet:
  Id: leather_boots
  Display: '企鹅隐藏'
  Attributes:
    All:
      Health: 2
    Feet:
      MovementSpeed: 0.04
```

每次生成这个物品时，它将带有 3 到 5 之间的随机伤害值，并且在主手中佩戴时具有 1% 到 5% 之间的随机速度加成:

```yaml
lucky_sword:
  Id: wood_sword
  Display: '<yellow>幸运剑</yellow>'
  Attributes:
    MainHand:
      Damage: 3-5
      MovementSpeed: 0.01-0.05 MULTIPLY_BASE
```