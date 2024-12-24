---
title: "事件动作"
---

只对特定事件有效的特殊动作

## KEEP ITEMS 保留物品
这个动作仅适用于`player_death`事件。允许玩家在死亡时保留物品或经验。可以传入的参数：`items`,`xp`,`all`
```yaml
keep_items: items
keep_items: all
```

## CANCEL DROP 取消掉落
此动作仅适用于`block_break`和`player_kill`事件。它将取消事件即将掉落的物品。仅在1.13以上版本有效
```yaml
cancel_drop: true
```

## SET DAMAGE 设置伤害值
此动作仅适用于`player_attack`和`player_damage`事件。修改造成的伤害值
```yaml
# 设置一个自定义数值
set_damage: 15

# 在原数值基础上的百分比数值
set_damage: 150%
set_damage: 25%
```

## HIDE JOIN MESSAGE 隐藏加入信息
此动作仅适用于`player_join`事件。隐藏玩家加入信息
```yaml
hide_join_message: true
```
## HIDE LEAVE MESSAGE 隐藏退出信息
此动作仅适用于`player_leave`事件。隐藏玩家退出信息
```yaml
hide_leave_message: true
```
## SET DEATH MESSAGE 设置死亡信息
此动作仅适用于`player_death`事件。设置死亡信息 可以设置为`no`来隐藏死亡信息
```yaml
set_death_message: "You died!"
set_death_message: no
```

## PREVENT JOIN 阻止加入
此动作只适用于`player_pre_join`事件类型。设置一个自定义信息并阻止玩家加入服务器
```yaml
prevent_join: &c&lERROR!\n&7You can't access this account with that IP.
```

## SET ITEM 设置物品
此动作只适用于`player_fish`事件。可以修改钓上来的物品
```yaml
set_item: <item_properties>
set_item: id:DIAMOND;name:&bSuspicious Diamond
```
必须要保证玩家真的钓上来物品了才可以执行此动作，所以要加两个条件，例如下面示例：
```yaml
example:
  type: player_fish
  conditions:
  - "%state% == CAUGHT_FISH" #Required
  - "%caught_type% == DROPPED_ITEM" #Required
  actions:
    default:
    - "set_item: id:DIAMOND;name:&bSuspicious Diamond"
```

## SET EVENT XP 设置经验
此动作仅适用于`block_break`和`player_fish`事件类型。允许修改打破方块或钓鱼时掉落的经验。设置为 0 则不会掉落经验
```yaml
set_event_xp: 0
```