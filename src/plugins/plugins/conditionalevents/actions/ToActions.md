---
title: '"至"动作'
---

这些是特殊标签，可让您对特定用户组执行操作。这些标记需要添加在操作之前

## TO ALL 至所有人

它将对服务器上的所有玩家执行操作。格式：`to_all: <action>`

```yaml
- 'to_all: message: &a%player% just leveled up!'
- 'to_all: message: &7Hello &a%to:player% &7your level is &a%to:player_level%&7!'
```

## TO Target 目标

这是针对player_attack、player_kill和entity_interact事件的特殊动作。此操作将对目标执行动作。格式：`to_target: <action>`

```yaml
 - 'to_target: give_potion_effect: POISON;120;1'
 - 'to_target: message: &cYou were poisoned by &e%player%&c!'
```

## TO World 世界

它将对某一个世界中的所有玩家执行动作。格式：`to_world: <世界名>: <action>`

```yaml
- 'to_world: spawn: message: &6This message is sended to all players in the SPAWN world.'
- 'to_world: %player_world%: message: &6Hello to this world!'
```

## TO Range 范围

它会对一定范围内的所有玩家执行该操作。您可以选择是否将参与此事件的玩家包括在内。格式：`to_range: <范围>;<是否包含本玩家>: <action>`

```yaml
- 'to_range: 10;true: message: &6This message is sended to all players in a radius of 10 blocks!'
- 'to_range: 10;false: message: &6%player% says: &7Hello %to:player%!'
```

## TO PLAYER 玩家

它将对指定玩家执行动作。格式：`to_player: <玩家名>: <action>`

```yaml
- 'to_player: %arg_1%: message: &d[PM] &8[&e%player% -> &eYou&8]&7: &f%args_substring_2-99%'
```

### 示例

```yaml
example:
    type: player_command
    conditions:
    - "%main_command% == /message"
    - "%args_length% < 2 execute error1"
    - "%parseother_{arg_1}_{player_online}% == no execute error2"
    actions:
      default:
      - "cancel_event: true"
      - "message: &d[PM] &8[&eYou &7-> &e%arg_1%&8]&7: &f%args_substring_2-99%"
      - "to_player: %arg_1%: message: &d[PM] &8[&e%player% -> &eYou&8]&7: &f%args_substring_2-99%"
      error1:
      - "cancel_event: true"
      - "message: &cYou must use &7/message <player> <text>"
      error2:
      - "cancel_event: true"
      - "message: &cThat player is not online."
```

此示例转中文为:
```yaml
example:
    type: player_command
    conditions:
    - "%main_command% == /message"
    - "%args_length% < 2 execute error1"
    - "%parseother_{arg_1}_{player_online}% == no execute error2"
    actions:
      default:
      - "cancel_event: true"
      - "message: &d[PM] &8[&e你 &7-> &e%arg_1%&8]&7: &f%args_substring_2-99%"
      - "to_player: %arg_1%: message: &d[PM] &8[&e%player% -> &e你&8]&7: &f%args_substring_2-99%"
      error1:
      - "cancel_event: true"
      - "message: &c参数错误 正确格式为:&7/message <玩家名> <内容>"
      error2:
      - "cancel_event: true"
      - "message: &c指定玩家未在线."
```

这是一个私信系统的示例。当玩家使用 `/message <player> <text>` 命令时，如果所选玩家在线，则会向该玩家和使用该命令的玩家发送一条信息。

## TO CONDITION 条件

它将对所有满足特定条件的玩家执行操作。必须事先在配置中定义条件组，如下所示：
```yaml
Config:
  to_condition_groups:
    group1:
    - "%player_world% == spawn"
    group2:
    - ...
    group3:
    - ...
```
::: info 您可以按照常规 **条件** 相同的格式创建多个条件组，但不包括 `execute` 选项
:::

接下来，可以在 to_condition 操作中使用先前创建的条件组 "group1"，格式如下：`to_condition: <group>: <action>`

```yaml
- 'to_condition: group1: message: &7This message will be received by anyone who accomplish the <group1> condition'
```

### 示例

```yaml
Config:
  to_condition_groups:
    group1:
    - "%player_has_permission_conditionalevents.somepermission% == yes"
test:
    type: player_command
    conditions:
    - "%command% == /test"
    actions:
      default:
      - "cancel_event: true"
      - "to_condition: group1: message: &7Hello to people with permissions."
```
此示例转中文为:
```yaml
Config:
  to_condition_groups:
    group1:
    - "%player_has_permission_conditionalevents.somepermission% == yes"
test:
    type: player_command
    conditions:
    - "%command% == /test"
    actions:
      default:
      - "cancel_event: true"
      - "to_condition: group1: message: &7你拥有测试权限."
```

上一个事件添加了一个/test命令，该命令会向拥有 conditionalevents.somepermission 权限的所有玩家发送信息