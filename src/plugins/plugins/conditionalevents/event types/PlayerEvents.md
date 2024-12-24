---
title: '玩家事件'
order: 1
---

# 玩家事件

## PLAYER JOIN 玩家加入服务器事件

玩家加入服务器时调用的事件

```yaml
example:
  type: player_join
  actions:
    default:
      - 'message: &e欢迎 %player% 进入本服务器.'
```

## PLAYER LEAVE 玩家离开服务器事件

玩家离开服务器时调用的事件
```yaml
example:
  type: player_leave
  actions:
    default:
      - 'to_all: message: &e%player% 推出了本服务器.'
```

## PLAYER PRE JOIN 玩家预进入服务器事件

玩家尝试加入服务器时调用的事件
```yaml
example:
  type: player_pre_join
  conditions:
  - "%name% == Ajneb"
  - "%ip% != 192.168.0.1"
  actions:
    default:
    - "console_message: &8[&c&lALERT&8] &7A user with IP &e%ip% &7tried to join the server using and administrator account."
    - "prevent_join: &c&lERROR!\n&7You can't access this account with that IP."
```

::: info 变量
- %name% (视图进入服务器的玩家名称)
- %ip% (玩家的ip)
- %uuid% (玩家的uuid)
:::

::: warning 这不是一个玩家事件，这意味着你不能使用玩家变量或玩家操作。不要混淆，它被称为 "玩家预加入"，但它是一个不包含玩家数据的特殊事件。
:::

::: warning 您不能对该事件使用cancel_event操作。如果要阻止玩家加入，请使用prevent_join操作
:::

## PLAYER RESPAWN 重生
玩家重生时调用的事件
```yaml
example:
  type: player_respawn
  conditions:
  - '%player_world% == pvp1'
  actions:
    default:
    - "teleport: lobby;0;60;0;90;0"
    - "message: &cYou died. Teleporting you back to the PvP Lobby..."
```
::: info 该事件没有自带的变量，但可使用 ConditionalEvents 变量或 PlaceholderAPI 变量
:::

## PLAYER DEATH 死亡事件

玩家死亡时调用的事件

```yaml
example:
  type: player_death
  actions:
    default:
    - 'message: &7You died because of: &c%cause%'
```

::: info 变量
- %cause% 死亡原因 参考[此页面](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageEvent.DamageCause.html)
- %killer_type% 如果玩家死于某个实体此变量为实体类型  参考[此页面](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)
- %killer_name% 如果玩家死于某个实体此变量为该实体的名称，不包含颜色代码
- %killer_color_format_name% 如果玩家死于某个实体此变量为该实体的名称，包含颜色代码
:::

## PLAYER COMMAND 命令
玩家执行命令时调用的事件

```yaml
example:
  type: player_command
  conditions:
  - '%main_command% equalsIgnoreCase //calc or %main_command% equalsIgnoreCase //solve'
  actions:
    default:
    - 'cancel_event: true'
    - 'kick: &cWhat are you trying to do?'
```

::: info 变量
- %command% (完整命令)
- %main_command% (不带参数的主命令)
- %arg_X% (命令X位置上的参数。如果命令是 /test hello world, `%arg_1%`变量就是`hello`,`arg_2`变量就是`world`)
- %arg_length% (命令的参数数量)
- %arg_substring_\<arg1>-\<arg2>% (根据arg1和arg2从命令中获取文本，如果命令是`/test 这是 一个 超长 的 文本 数据`,此时使用`%arg_substring_1-6%`变量获取到的内容就是`这是 一个 超长 的 文本 数据`。如果你不在意参数的长度，可以用一个大数字(如100)代替6)
:::

## PLAYER CHAT 聊天
当玩家在聊天中发送信息时调用的事件

```yaml
example:
  type: player_chat
  conditions:
  - '%message% contains hacker'
  actions:
    default:
    - 'cancel_event: true'
    - 'message: &cIf you found a hacker please report them on our Discord.'
```

::: info 变量
- %message% (聊天信息)
:::

## PLAYER LEVELUP 等级
当玩家等级改变时调用的事件

```yaml
example:
  type: player_levelup
  actions:
    default:
    - 'message: &aLevel &6&l%old_level% &7-> &6%new_level%'
```
::: info 变量
- %old_level% (玩家之前的等级)
- %new_level% (玩家的新等级)
:::

## PLAYER WORLD CHANGE 切换世界

当玩家切换到另一个世界时调用的事件

```yaml
example:
  type: player_world_change
  actions:
    default:
    - 'message: &7Moving to &e%world_to% &7world'
```

::: info 变量
- %world_from% (前一个世界)
- %world_to% (切换到的世界)
- %online_players_from% (前一个世界的在线玩家数量)
- %online_players_to% (切换到的世界中的在线玩家数量)
:::

## PLAYER ATTACK 攻击
玩家攻击实体时调用的事件

```yaml
example:
  type: player_attack
  conditions:
  - '%victim% == PLAYER'
  - '%item% == DIAMOND_SWORD'
  - '%item_name% == Super Sword'
  - '%random_1_10% >= 8'
  actions:
    default:
    - 'message: &aYour diamond sword poison effect was activated! &6%target:player_name% &ais now poisoned!'
    - 'to_target: give_potion_effect: POISON;120;1'
    - 'to_target: message: &cYou were poisoned by &e%player%&c!'
```

::: info 变量
- %damage% 玩家造成的伤害
- %original_damage% 玩家造成的原始伤害
- %attack_type% 伤害类型 （如果造成伤害的是弹射物则此变量有可能是: ARROW, TRIDENT, SNOWBALL，否则此变量为PLAYER）
- ConditionalEvents [物品变量](../Variables.md#物品变量) (针对玩家手中的物品)
- ConditionalEvents [受害者变量](../Variables.md#受害者变量-直译)
:::
::: tip 在此事件中，可以使用目标玩家变量和to_target操作 
:::

## PLAYER KILL 击杀
玩家击杀实体时调用的事件
```yaml
example:
  type: player_kill
  conditions:
  - '%victim% == COW'
  actions:
    default:
    - 'message: &aAre you happy killing this cow?'
```

::: info 变量
- ConditionalEvents [物品变量](../Variables.md#物品变量) (针对玩家手中的物品)
- ConditionalEvents [受害者变量](../Variables.md#受害者变量-直译)
:::
::: tip 在此事件中，可以使用目标玩家变量和to_target操作
:::
## PLAYER DAMAGE 受到伤害
玩家受到伤害时调用的事件
```yaml
example:
  type: player_damage
  conditions:
  - '%cause% == DROWNING'
  actions:
    default:
    - 'cancel_event: true'
```
::: info 变量
- %cause% 受伤原因 所有原因参考[此页面](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageEvent.DamageCause.html)
- %damage% 玩家受到的伤害
- %original_damage% 玩家受到的原始伤害
- %damager_type% 如果玩家受到的是来自实体的伤害，那么此变量为造成伤害实体的实体类型 所有类型参考[此页面](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)
- %damager_name% 造成伤害实体的名称，不包含颜色代码
- %damager_color_format_name% 造成伤害实体的名称，包含颜色代码
:::
## PLAYER ARMOR 穿戴装备
玩家穿戴或卸下装备时调用的事件
```yaml
example:
  type: player_armor
  conditions:
  - '%armor_type% == HELMET'
  - '%equip_type% == EQUIP'
  - '%item_name% == Super Diamond Helmet'
  - '%player_has_permission_items.super_diamond_helmet% == false'
  actions:
    default:
    - 'cancel_event: true'
    - "message: &cYou don't have permissions to equip that item!"
```
::: 变量
- %armor_type% 装备类型 可以是: HELMET, CHESTPLATE, LEGGINGS, BOOTS
- %equip_type% 装备类型 可能是: EQUIP,UNEQUIP
- ConditionalEvents [物品变量](../Variables.md#物品变量)
:::
::: warning 如果您使用的是 EssentialsX：EssentialsX 会更改玩家盔甲的交互方式，因此如果您想使用 player_armor 事件，请在 EssentialsX 配置中设置allow-direct-hat: false
:::

## PLAYER TELEPORT 传送
当玩家以某种方式传送时调用的事件
```yaml
example:
  type: player_teleport
  conditions:
  - "%cause% == NETHER_PORTAL"
  actions:
    default:
    - 'cancel_event: true'
    - "message: &cYou can't use nether portals!"
```
::: info 变量
- %cause% 传送原因 所有原因参考[此页面](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerTeleportEvent.TeleportCause.html)
- %from_x% 传送前坐标的X
- %from_x% 传送前坐标的Y
- %from_x% 传送前坐标的Z
- %from_world% 传送前坐标所在的世界
- %from_yaw% 传送前坐标的偏航角度
- %from_pitch% 传送前坐标的pitch
- %to_x% 传送后坐标的X
- %to_x% 传送后坐标的Y
- %to_x% 传送后坐标的Z
- %to_world% 传送后坐标所在的世界
- %to_yaw% 传送后坐标的偏航角度
- %to_pitch% 传送后坐标的pitch
:::

## PLAYER BED ENTER 上床
玩家上床时调用的事件
```yaml
example:
  type: player_bed_enter
  conditions:
  - "%result% == OK"
  - "%player_world% == spawn"
  actions:
    default:
    - "cancel_event: true"
    - "message: &cYou can't sleep on this world."
```

::: info 变量
- %result% 上床结果 参考[此页面](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerBedEnterEvent.BedEnterResult.html)
:::
::: warning 仅限于 1.13 以上版本
:::
## PLAYER SWAP HAND 主副手交换物品
当玩家使用快捷键交换主副手物品时调用的事件
```yaml
example:
  type: player_swap_hand
  actions:
    default:
    - "cancel_event: true"
```
::: info 变量
- ConditionalEvents [物品变量](../Variables.md#物品变量)
:::

## PLAYER FISH 钓鱼
玩家钓鱼时调用的事件
```yaml
example:
  type: player_fish
  conditions:
  - "%state% == CAUGHT_ENTITY"
  - "%caught_type% == COW or %caught_type% == PIG"
  actions:
    default:
    - "cancel_event: true"
    - "message: &cYou can't use a fishing rod on animals!"
```
::: info 变量
- %state% 当前钓鱼的状态 参考[此页面](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/player/PlayerFishEvent.State.html)
- %caught_type% 钓上来的实体 参考[此页面](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)
- ConditionalEvents [物品变量](../Variables.md#物品变量) 用于钓上来的物品 只有当%state%为CAUGHT_FISH且%caught_type%为DROPPED_ITEM时才能获取到物品
:::

## PLAYER OPEN INVENTORY 打开容器
玩家打开容器时调用的事件
```yaml
example:
  type: player_open_inventory
  conditions:
  - "%inventory_type% == MERCHANT"
  actions:
    default:
    - "message: &cVillager trading is disabled."
    - "cancel_event: true"
```
::: info 变量
- %inventory_type% 容器类型 参考[此页面](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryType.html)
- %inventory_title% 容器标题 不包含颜色代码
:::

## PLAYER CLOSE INVENTORY 关闭容器

玩家关闭容器时调用的事件
```yaml
example:
  type: player_close_inventory
  conditions:
  - "%inventory_type% == MERCHANT"
  actions:
    default:
    - "message: &cClosing villager trading..."
```
::: info 变量
- %inventory_type% 容器类型 参考[此页面](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryType.html)
- %inventory_title% 容器标题 不包含颜色代码
:::

## PLAYER CLICK INVENTORY 容器内点击事件
当玩家在容器内点击的事件
```yaml
example:
  type: player_click_inventory
  conditions:
  - "%inventory_title% == Custom Craftings"
  - "%slot% == 14"
  - "%item% == CHEST"
  - "%click_type% == LEFT"
  actions:
    default:
    - "message: &aLeft clicking on a Chest on slot 14 on inventory 'Custom Craftings'"
```

::: info 变量
- %inventory_type% 容器类型 参考[此页面](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryType.html)
- %inventory_title% 容器标题 不包含颜色代码
- %inventory_title_color_format% 包含颜色代码的容器标题
- %click_type% 点击类型 参考[此页面](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/ClickType.html)
- %action_type% 动作类型 参考[此页面](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryAction.html)
- %slot_type% 点击的槽位类型 参考[此页面](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/inventory/InventoryType.SlotType.html)
- %slot% 点击的位置
- ConditionalEvents [物品变量](../Variables.md#物品变量) 用于点击的物品
:::

## PLAYER STATISTIC 统计数据
当玩家统计数据增加时调用的时间
```yaml
example:
  type: player_statistic
  one_time: true
  conditions:
  - "%statistic_name% == MINE_BLOCK"
  - "%block% == EMERALD_ORE"
  - "%new_value% == 5"
  actions:
    default:
    - "centered_message: &a&lAchievement Unlocked!"
    - "centered_message:  "
    - "centered_message:  &eMine 5 Emerald Blocks."
    - "centered_message:  "
    - "centered_message:  &aRewards:"
    - "centered_message:  &7- $500"
    - "console_command: eco give %player% 500"
```

::: info 变量
- %statistic_name% 统计名称 参考[此页面](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Statistic.html)
- %new_value% 新值
- %previous_value% 之前的值
- %entity% 和此统计相关的实体类型 参考[此页面](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)
- %block% 和此统计相关的方块类型 参考[此页面](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)
:::

## PLAYER SNEAK 潜行
玩家切换潜行状态时调用的事件
```yaml
example:
  type: player_sneak
  conditions:
  - "%is_sneaking% == true execute actions1"
  actions:
    actions1:
    - "message: &eSneaking"
    default:
    - "message: &eCancelling sneak"
```
::: info 变量
- %is_sneaking% 玩家是否正在潜行 将返回`true`或`false`
:::

## PLAYER RUN 跑动
当玩家切换运动状态（开始或停止）时调用的事件
```yaml
example:
  type: player_run
  conditions:
  - "%is_running% == true execute actions1"
  actions:
    actions1:
    - "message: &eRunning"
    default:
    - "message: &eStopped running"
```
::: info 变量
- %is_running% 玩家是否正在奔跑 将返回 `true` 或 `false`
:::

## PLAYER REGAIN HEALTH 生命恢复
玩家恢复生命时调用的事件
```yaml
example:
  type: player_regain_health
  conditions:
  - "%reason% == SATIATED"
  actions:
    default:
    - 'cancel_event: true'
```
::: info 变量
- %reason% 生命恢复原因 参考[此页面](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityRegainHealthEvent.RegainReason.html)
- %amount% 恢复的数量
:::

## PLAYER CHANGE FOOD 饱食度
当玩家饱食度变化时调用的事件
```yaml
example:
  type: player_change_food
  conditions:
  - "%player_world% == minigames"
  actions:
    default:
    - "cancel_event: true"
```
::: info 变量
- %old_food_level% 之前的饱食度
- %new_food_level% 新饱食度
:::
::: warning 仅适用于 1.16 以上版本
:::