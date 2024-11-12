---
title: '变量'
---

# 变量

## 全局变量
适用于所有事件的变量

- **%player%** (玩家名称)
- **%random_min_max%** (随机数 例如: %random_1_10% 将返回一个介于1和10之间的一个随机数)
- **%playerarmor_\<type>%** (玩家装备的材质 请将\<type>换成你想获取的部位(helmet, chestplate, leggings or boots) 例如: %playerarmor_helmet% 获取玩家头部装备的材质)
- **%playerarmor_name_\<type>%** (玩家装备的名字)
- **%block_at_\<x>_\<y>_\<z>_\<world>%** (位于特定位置方块的材质)
- **%block_data_at_\<x>_\<y>_\<z>_\<world>%** (在 1.8-1.12 版本中会返回一个数值，在 1.13+ 版本中会返回一个包含多个方块属性的文本。例如，楼梯方块具有方向属性，或小麦方块具有成长值的属性)
- **%playerblock_below_\<distance>%** (玩家下方一定距离的方块材质 例如: %playerblock_below_1% 将返回玩家正下方的方块材质)
- **%playerblock_above_\<distance>%** (玩家上方一定距离的方块的材质。例如：%playerblock_above_5% 将返回玩家上方 5 个方块的材质)
- **%playerblock_inside%** (玩家所处方块的材质，比如水或一些特殊方块，或站在头方块/半砖上时)
- **%player_is_outside%** (检查玩家是否在外部，或者头顶上是否没有方块。它将返回`true` 或 `false`)
- **%random_player%** (随机选择一名玩家，如果找不到玩家则返回 `none`)
- **%random_player_\<world>%** (在某个世界随机选择一名玩家，如果找不到玩家则返回 `none`)
- **%randomword_\<word1>-\<word2>-\<wordN>%** (从提供的列表中随机选择一个单词。每个单词之间应以"-"分隔)
- **%is_nearby_\<x>_\<y>_\<z>_\<world>_\<radius>%** (检查玩家是否在特定坐标附近。它将返回 `true` 或 `false`)
- **%world_time_\<world>%** （某个世界的时间，以刻度为单位）
- **%world_is_raining%** (检查玩家所在的世界是否正在下雨。它将返回 `true` 或 `false`)
- **%is_number_\<variable>%** (检查某个变量是否位数字 它将返回 `true` 或 `false`)
- **%empty%** (返回空文本的特殊变量)

在所有事件的条件和操作中都可以使用 [PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders) 变量

## 物品变量
这些变量可用于大多数和物品有关的事件

- **%item%** (物品材质名 参考[此页面](https://bukkit.windit.net/javadoc/org/bukkit/Material.html))
- **%item_durability%** (物品的耐久值)
- **%item_amount%** (物品的数量)
- **%item_name%** (不含颜色代码的物品名)
- **%item_color_format_name%** (包括颜色代码的物品名)
- **%item_lore%** (物品的描述)
- **%item_color_format_lore%** (包括颜色代码的物品描述)
- **%item_lore_line_X%** (物品描述的第 X 行)
- **%item_color_format_lore_line_X%** (物品描述的第 X 行，包括颜色代码)
- **%item_custom_model_data%** (物品的Custom-Model-Data数据值)
- **%item_meta%** (物品更多信息的文本，例如药水效果)

对于 Player Swap Hand 事件 你可以使用%offhand:\<变量>% 从副手物品中获取变量  
例如：
 - %offhand:item%
 - %offhand:item_lore%

## 方块变量

这些变量可用于大多数和方块有关的事件

- **%block%** (方块材质名 参考[此页面](https://bukkit.windit.net/javadoc/org/bukkit/Material.html))
- **%block_x%** (方块的X坐标)
- **%block_y%** (方块的Y坐标)
- **%block_z%** (方块的Z坐标)
- **%block_world%** (方块所在的世界)
- **%block_head_texture%** (头方块的材质id，如果无效将返回空文本)
- **%block_below_<距离>%** (方块下方一定距离的方块类型。例如：%block_below_1% 将返回方块正下方的方块)
- **%block_above_<距离>%** (方块上方一定距离的方块类型。例如：%block_above_1% 将返回方块正上方的方块)

## 实体变量

这些变量可用于大多数和实体相关的事件

- **%entity%** (实体类型。参考[此页面](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html))
- **%entity_name%** (不含颜色代码的实体名称)
- **%entity_color_format_name%** (包含颜色代码的实体名称)
- **%entity_x%** (实体的X坐标)
- **%entity_y%** (实体的Y坐标)
- **%entity_z%** (实体的Z坐标)
- **%entity_world%** (实体所在的世界)
- **%entity_uuid%** (实体的uuid)

## 受害者变量 (直译)

这些变量可用于多个与受害者相关的事件

- **%victim%** (受害者实体类型。参考[此页面](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html))
- **%victim_name%** (不含颜色代码的受害者名称)
- **%victim_color_format_name%** (包含颜色代码的受害者名称)
- **%victim_x%** (受害者的X坐标)
- **%victim_y%** (受害者的Y坐标)
- **%victim_z%** (受害者的Z坐标)
- **%victim_world%** (受害者所在的世界)
- **%victim_uuid%** (受害者的uuid)
- **%victim_health%** (受害者实体的健康状况)

## 目标变量

在某些情况下，例如player_attack（玩家攻击）、player_kill（玩家击杀）或entity_interact（实体交互）事件，你需要从目标玩家处获取一个变量。为此，您只需在实际变量前添加"target: "即可

- 例如，如果要获取目标的玩家名称，就不能使用%player%，而需要使用%target:player%
- 如果需要获取目标玩家的等级，请使用%target:vault_rank%代替%vault_rank%

下面是一个完整的例子:

```yaml
example:
    type: player_attack
    conditions:
    - '%victim% equals PLAYER'
    - '%item% equals DIAMOND_SWORD'
    - '%item_name% equals Poison Sword'
    actions:
      default:
      - 'message: &aApplying poison to: &e%target:player%'
      - 'to_target: give_potion_effect: POISON;120;1'
      - 'to_target: message: &cYou were poisoned by &e%player%&c!'
```

## "至"变量 (直译)

使用 [至操作](./actions/ToActions)时，可以直接从选定的玩家中获取变量。只需要在实际变量前加`to:`即可

### 示例
```yaml
example:
  type: call
  actions:
    default:
    - "console_message: &7Sending a welcome message to all players"
    - "to_all: message: &eHello &c%to:player%, &ewelcome to the server!"

example2:
  type: player_command
  conditions:
  - "%main_command% == /hello"
  actions:
    default:
    - "cancel_event: true"
    - "to_range: 10;false: message: &6%player% says: &7Hello %to:player%!"
```

## 嵌套变量


在某些特殊情况下，您需要使用多个变量获得结果，将一个变量嵌套在另一个变量中。例如，使用 PlaceholderAPI 中的数学扩展，您可以使用多个 ConditionalEvents 变量创建一个公式

例如，如果要获取玩家所在世界的时间，需要使用`%world_time_<world>%`变量（来自 ConditionalEvents），加上`%player_world%`变量（来自 PlaceholderAPI）获取玩家所在世界名就可以实现。使用括号"{ }"来实现嵌套功能：
- %world_time_{player_world}%

### 示例
```yaml
# Checks the time of the world you are in.
# Remember to download the Player expansion using
# /papi ecloud download Player
example:
    type: player_command
    conditions:
    - "%command% == /world-time"
    actions:
      default:
      - "cancel_event: true"
      - "message: Time in your current world: %world_time_{player_world}%"
```

### 示例2

```yaml
# Gets the IP of another player by command.
# Remember to download the OtherPlayer expansion using
# /papi ecloud download OtherPlayer
example2:
    type: player_command
    conditions:
    - "%command% == /ip or %command% startsWith /ip "
    - "%player_has_permission_conditionalevents.admin% == no execute error1"
    - "%args_length% < 1 execute error2"
    actions:
      default:
      - "cancel_event: true"
      - "message: &7IP of &a%arg_1% &7is: %otherplayer_ip_{arg_1}%"
      error1:
      - "cancel_event: true"
      - "message: &cYou don't have permissions."
      error2:
      - "cancel_event: true"
      - "message: &cYou must use /ip <player>"
```
