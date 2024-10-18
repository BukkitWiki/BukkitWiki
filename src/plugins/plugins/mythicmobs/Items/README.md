---
title: '物品'
dir:
  link: true
---

![](https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/mm_items_image.png)

在 MythicMobs 中制作自定义物品非常简单。
不过，与怪物和技能不同的是，使用此插件制作的物品不附带任何特殊或独特的选项。使用 MythicMobs 制作的任何物品也可以通过 Minecraft 命令制作。但是使用 MythicMobs 配置制作物品会更方便。

在可用的物品选项中，只有 `internal_name` 和 `Id` 是必需的。所有其他选项/属性都是完全可选的。

你可以在 `\plugins\MythicMobs\Items` 文件夹中创建任意数量的文件，只要文件名以 .yml 结尾即可。

## 物品配置解析

### Internal_Name 内部名称

这个字段将是你在 MythicMobs 中内获取物品的方式，可以是任何你喜欢的名称。必须是字母数字，**不允许有空格**。

```yaml
example_item:
```

### Id 基础材质

为你的物品所使用的基础材质，可以是[这里](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)列出的任何有效物品。

```yaml
example_item:
  Id: leather_chestplate
```

### Template 模板

#TODO()
物品可以使用像怪物一样的[模板]()，同时引用其他物品。  
一次只能使用一个模板。

```yaml
MyItem:
  Template: MyOtherItem
```

### Display 显示名称

设置物品显示的名称。

```yaml
example_item:
  Id: leather_chestplate
  Display: <green>一个示例物品</green>
```

### Lore 描述

设置物品的Lore。你可以使用 `{min-max}` 、 `<random.#to#>` 或 `<random.float.#to#>` 生成一个随机数。

```yaml
example_item:
  Id: leather_chestplate
  Display: <green>一个示例物品</green>
  Lore:
    - <rainbow>这是一行彩虹色</rainbow>
    - <red>这是一行红色</red>
    - 这是一个随机生成的数字 > <random.-1to50>
    - <gradient:#5e4fa2:#f79459>一个非常漂亮的渐变</gradient>
    - 有一些符号，比如<&sq>, 不应该直接放入配置中。请使用占位符！
```

### CustomModelData 自定义材质数据

设置物品上的 `CustomModelData` 标签。`Model` 也是 `CustomModelData` 的另一个别称。

```yaml
example_item:
  Id: leather_chestplate
  Display: <green>一个示例物品</green>
  CustomModelData: 12345
```

```yaml
example_item:
  Id: leather_chestplate
  Display: <green>一个示例物品</green>
  Model: 12345
```

### Durability 耐久度

设置物品的耐久度减少量。以下示例将钻石剑的耐久度设置为1461，因为默认情况下它的耐久度为1561。

```yaml
example_item:
  Id: diamond_sword
  Durability: 100
  Display: <green>一个示例物品</green>
```

### Attributes 属性

特殊字段，允许向某些装备槽添加物品属性。参见[物品属性](Attributes.md)。

```yaml
example_item:
  Id: leather_chestplate
  Display: <green>一个示例物品</green>
  Attributes:
    Chest:
      Health: 25
```

### Amount 数量

设置当插件调用此物品时，默认给予的物品数量。

```yaml
example_item:
  Id: leather_chestplate
  Display: <green>一个示例物品</green>
  Amount: 1
```

### Options 其他配置

一个带有多个子选项的特殊字段。参见[其他配置](Options.md)。

```yaml
example_item:
  Id: leather_chestplate
  Display: <green>一个示例物品</green>
  Options:
    AppendType: true
    Color: 255,0,0
```

### Enchantments 附魔

任何物品都可以拥有任何附魔效果。可以在[此处](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html)找到可用的附魔列表。另请参阅[附魔](Enchantments.md)页面，了解如何配置物品的附魔效果。

```yaml
example_item:
  Id: leather_chestplate
  Display: <green>一个示例物品</green>
  Options:
    Color: 255,0,0
  Enchantments:
    - PROTECTION_ENVIRONMENTAL:2
    - THORNS:3
```

### Hide 隐藏内容

特殊字段允许从物品提示框中隐藏特定内容。所有可能的标志都可以在这里找到:

- [如果你使用的是 **Spigot**，请点击这里](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemFlag.html)
- [如果你使用的是 **Paper**，请点击这里](https://jd.papermc.io/paper/1.21.1/)

> 如果服务器版本 < 1.20.5，你也可以使用 `HIDE_POTION_EFFECTS`。

```yaml
example_item:
  Id: leather_chestplate
  Display: <green>一个示例物品</green>
  Attributes:
    Chest:
      Health: 25
  Enchantments:
    - THORNS:3
  Options:
    Color: 255,0,0
  Hide:
    - ATTRIBUTES
    - ENCHANTS
```

### PotionEffects 药水效果

设置物品的药水效果。如果[基础材质](#id)不是`药水`、`喷溅型药水`、`滞留型药水`或`药水箭` 这些效果将不会起任何作用。参见[药水](Potion.md)。

```yaml
example_item:
  Id: potion
  Display: <#f99cb3>粉红药水
  Options:
    Color: 249,156,179
  PotionEffects:
    - CONFUSION 100 2
```

### BannerLayers 旗帜层

设置旗帜或盾牌的旗帜层。参见[旗帜层](Banner-Layers.md)。

```yaml
example_item:
  Id: yellow_banner
  BannerLayers:
    - RED BASE
    - WHITE CURLY_BORDER
    - WHITE STRIPE_CENTER
```

### CanPlaceOn 冒险放置

设置该物品可以放置在哪些方块上，如果玩家处于冒险模式。

```yaml
MyCoolAnvil:
  Id: ANVIL
  CanPlaceOn:
  - diamond_block
```

### CanBreak 冒险破坏

设置该物品可以破坏的方块，如果玩家处于冒险模式。

```yaml
MyCoolStick:
  Id: STICK
  CanBreak:
  - grass_block
  - diamond_block
  - obsidian
```

### Group 组

为物品设置所属的组 `/mm items browse`。

```yaml
example_item:
  Id: leather_chestplate
  Display: <green>一个示例物品</green>
  Group: 'Armor'
```

### NBT 标签

设置物品的 NBT 标签。这允许与其他插件进行交叉操作，或者仅用于存储自定义信息。  
在向物品添加 NBT 标签之前，您需要了解 [SNBT 格式](https://minecraft.fandom.com/wiki/NBT_format#SNBT_format)。可以通过在标签值前添加前缀来更改标签值的类型:

| Prefixes | int/ | float/ | double/ | byte/ | bool/ | boolean/ |
| - | - | - | - | - | - | - |

将以下 snbt: `{name1:123,name2:"sometext1",name3:{subname1:456,subname2:"sometext2"}}` 转换为 mythic 格式:

```yaml
example_item:
  Id: STICK
  NBT:
    name1: int/123
    name2: sometext1
    name3:
      subname1: int/456
      subname2: sometext2
```

```yaml
#带有 MYTHIC_TYPE 标签的物品
example_item:
  Id: stick
  NBT:
    MYTHIC_TYPE: example_item
```

```yaml
example_item:
  Id: diamond_sword
  NBT:
    CanDestroy:
      - stone
      - dirt
    Base:
      ATag: int/20
      SomeOtherTag: something
    SomeModifier:
      Value: double/0.25
      CanDoThis: boolean/true
    Denizen NBT:
      somedenizentag: a_string
```

```yaml
another_example_item:
  Id: diamond_sword
  NBT:
    Base:
      ATag: 20
      SomeOtherTag: something
    GemSlots:
      RedGem: 0
    Denizen NBT:
      somedenizentag: a_string
```

### Armor Trim NBT 特殊标签

```yaml
another_example_item: 
  Id: iron_chestplate
  NBT: 
    Trim: 
      material: minecraft:iron
      pattern: minecraft:shaper
```

```yaml
# 1.21+
Trim_1_21:
  Id: IRON_CHESTPLATE
  Options:
    Trim: amethyst.shaper
```

### Firework 烟花

设置多个烟花或烟火之星物品。
请参阅[烟花](Firework.md)以了解每个选项的详细说明。

```yaml
example_item:
  Id: firework
  Firework:
    Colors:
    - 255,0,255
    - 0,0,0
    FadeColors:
    - 200,0,0
    Flicker: true
    Trail: true
```

### Book 成书

一整本成书选项

```yaml
SomeBook:
  Id: WRITTEN_BOOK
  Title: <green>如何制作 YouTube 视频
  Author: CarsonJF
  Pages:
  - "Page 1"
  - "Page 2\n\与其他线路"
  - "Page 3"
```

### Food 食物

```yaml
NetheritePops:
  Material: NETHERITE_SCRAP
  Display: '美味的残羹剩饭'
  Food:
    Nutrition: 2
    Saturation: 2
    EatSeconds: 2
    CanAlwaysEat: true
    Effects:
    - regeneration{duration=60}
```

| Effects属性 | 别称 | 描述 | 默认 |
| - | - | - | - |
| duration | d | 效果持续时间 | 60 |
| level | l | 效果等级 实际是这个配置 +1 的等级 | 0 |
| ambientparticles | ambient, a | 是否存在环境粒子效果 | false |
| hasparticles | particles, p | 是否存在粒子效果 | true |
| hasicon | icon, i | 是否显示图标 | true |

## Examples 示例

#TODO()
更多物品示例可以在[示例]()部分找到。