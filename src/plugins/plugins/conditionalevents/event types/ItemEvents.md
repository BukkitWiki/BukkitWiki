---
title: "物品事件"
order: 3
---

## ITEM INTERACT 交互
玩家点击物品时调用的事件
```yaml
example:
  type: item_interact
  conditions:
  - '%item% == REDSTONE'
  actions:
    default:
    - 'cancel_event: true'
    - "message: &cYou can''t use redstone."
```
::: info 变量
- %action_type% 动作类型 可能是: RIGHT_CLICK, LEFT_CLICK, SHIFT_RIGHT_CLICK, SHIFT_LEFT_CLICK
- ConditionalEvents [物品变量](../Variables.md#物品变量)
:::

## ITEM CONSUME 消耗物品
玩家消耗物品(例如吃食物)时调用的事件
```yaml
example:
  type: item_consume
  conditions:
  - '%item% == GOLDEN_APPLE'
  - '%random_1_10% >= 8'
  actions:
    default:
    - "give_potion_effect: INCREASE_DAMAGE;120;1;false"
```
::: info 变量
- ConditionalEvents [物品变量](../Variables.md#物品变量)
:::

## ITEM PICKUP 捡起物品
玩家捡拾物品时调用的事件
```yaml
example:
  type: item_pickup
  conditions:
  - '%player_world% == minigames'
  actions:
    default:
    - "cancel_event: true"
```
::: info 变量
- ConditionalEvents [物品变量](../Variables.md#物品变量)
:::

## ITEM MOVE 移动物品
当玩家试图移动容器中的物品时调用的事件
```yaml
example:
  type: item_move
  conditions:
  - "%inventory_type% == ANVIL"
  actions:
    default:
    - "message: &cNope!"
    - "cancel_event: true"
```
::: info 变量
- %inventory_type% 容器类型 参考[此页面](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryType.html)
- %inventory_title% 容器标题
- %slot% 点击位置
- ConditionalEvents [物品变量](../Variables.md#物品变量)
:::

## ITEM CRAFT 合成
当玩家即将合成一个物品时调用的事件
```yaml
example:
  type: item_craft
  conditions:
  - "%item% == WRITABLE_BOOK"
  actions:
    default:
    - "message: &cYou can't craft writable books!"
    - "cancel_event: true"
```
::: info 变量
- ConditionalEvents [物品变量](../Variables.md#物品变量)
:::
## ITEM DROP 丢弃物品
当玩家丢弃物品时调用的事件
```yaml
example:
  type: item_drop
  conditions:
  - '%player_world% == minigames'
  actions:
    default:
    - "cancel_event: true"
```
::: info 变量
- ConditionalEvents [物品变量](../Variables.md#物品变量)
:::
## ITEM SELECT 选择物品
当玩家在快捷栏中选中物品时调用的事件
```yaml
example:
  type: item_select
  conditions:
  - '%item% == DIAMOND_SWORD'
  - '%item_name% == Super Diamond Sword'
  - '%select_type% == SELECT'
  actions:
    default:
    - "actionbar: &6Equipping your Super Diamond Sword;60"
```
::: info 变量
- %select_type% 可能是 SELECT 或 DESELECT
- ConditionalEvents [物品变量](../Variables.md#物品变量)
:::
## ITEM ENCHANT 附魔
当玩家为物品附魔时调用的事件
```yaml
example:
  type: item_enchant
  conditions:
  - "%item% contains _SWORD"
  - "%enchantment_list% contains DURABILITY"
  actions:
    default:
    - "cancel_event: true"
    - "message: &cYou can't enchant swords with durability!"
```
::: info 变量
- %enchantment_list% 物品的附魔列表 它将返回一个这样的文本: `<enchantment1>:<level1>;<enchantment2>:<level2>;...`
- ConditionalEvents [物品变量](../Variables.md#物品变量)
:::
## ITEM REPAIR 维修
当玩家修复物品时调用的事件
```yaml
example:
  type: item_repair
  conditions:
  - "%item% == NETHERITE_SWORD"
  - "%rename_text% == Super Sword"
  actions:
    default:
    - "cancel_event: true"
    - "message: &cYou can't rename a netherite sword to that name!"
```
::: info 变量
- %rename_text% 物品的新名称
- ConditionalEvents [物品变量](../Variables.md#物品变量)
:::
::: warning 仅适用于 1.13 以上版本
:::