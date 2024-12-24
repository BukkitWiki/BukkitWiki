---
title: "其他事件"
order: 4
---

## ENTITY INTERACT 交互
玩家右键点击实体时调用的事件
```yaml
example:
  type: entity_interact
  conditions:
  - '%entity% == PLAYER'
  - '%player_is_sneaking% == yes'
  actions:
    default:
    - "player_command: trade %target:player_name%"
```
::: info 变量
- ConditionalEvents [实体变量](../Variables.md#实体变量)
- ConditionalEvents [物品变量](../Variables.md#物品变量) (针对玩家手中的物品)
:::
::: tip 在此事件中，你可以使用目标玩家变量和to_target动作
:::

## ENTITY SPAWN 实体生成
当实体（动物或怪物）即将生成时调用的事件
```yaml
example:
  type: entity_spawn
  conditions:
  - '%entity% == WITHER'
  - '%entity_world% == survival'
  actions:
    default:
    - "cancel_event: true"
```
::: info 变量
- %reason% 原因 参考[此页面](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/CreatureSpawnEvent.SpawnReason.html)
- ConditionalEvents [实体变量](../Variables.md#实体变量)
:::
::: warning 这不是一个玩家事件，因此不能使用玩家变量或玩家动作
:::
## CONSOLE COMMAND 控制台命令
控制台执行命令时调用的事件
```yaml
example:
  type: console_command
  conditions:
  - '%command% startsWith addperm'
  actions:
    default:
    - 'cancel_event: true'
    - 'console_command: lp group %arg_1% permission set %arg_2%'
```
::: info 变量
- %command% (完整命令)
- %main_command% (不带参数的主命令)
- %arg_X% (命令X位置上的参数。如果命令是 /test hello world, `%arg_1%`变量就是`hello`,`arg_2`变量就是`world`)
- %arg_length% (命令的参数数量)
- %arg_substring_\<arg1>-\<arg2>% (根据arg1和arg2从命令中获取文本，如果命令是`/test 这是 一个 超长 的 文本 数据`,此时使用`%arg_substring_1-6%`变量获取到的内容就是`这是 一个 超长 的 文本 数据`。如果你不在意参数的长度，可以用一个大数字(如100)代替6)
:::
::: warning 这不是一个玩家事件，因此不能使用玩家变量或玩家动作
:::
## SERVER START 服务器启动
服务器启动且插件启动时调用的事件
```yaml
example:
  type: server_start
  actions:
    default:
    - "console_command: ce enable event1"
```
::: info 该事件没有变量，但仍可使用ConditionalEvents 变量和 PlaceholderAPI 变量
:::
::: warning 这不是一个玩家事件，因此不能使用玩家变量或玩家动作
:::
## SERVER STOP 服务器停止
服务器停止运行时且插件禁用时调用的事件
```yaml
example:
  type: server_stop
  actions:
    default:
    - "to_all: message: &c&lCLOSING SERVER, WE ARE BACK SOON."
```
::: info 该事件没有变量，但仍可使用ConditionalEvents 变量和 PlaceholderAPI 变量
:::
::: warning 这不是一个玩家事件，因此不能使用玩家变量或玩家动作
:::
## REPETITIVE 重复
重复事件的工作原理是定期检查每个玩家的条件。时间在repetitive_time选项中定义。该选项定义了检查条件的时间段，单位为 TICKS（20 ticks = 1 秒）
```yaml
example:
  type: repetitive
  repetitive_time: 10
  conditions:
  - '%player_world% == plotworld'
  - '%player_gamemode% != CREATIVE'
  actions:
    default:
    - 'gamemode: CREATIVE'
    - 'actionbar: &6Changing gamemode to creative.;100'
```
::: info 该事件没有变量，但仍可使用ConditionalEvents 变量和 PlaceholderAPI 变量
:::
## REPETITIVE SERVER 服务器重复
服务器重复事件的工作原理是定期检查服务器的条件（如本地时间，但没有玩家变量）。时间在repetitive_time选项中定义。该选项以 TICKS（20 ticks = 1 秒）为单位定义了检查条件的时间段
```yaml
example:
  type: repetitive_server
  repetitive_time: 1200
  actions:
    default:
    - 'to_all: message: &7There are &a%server_online% &7players on the server.'
```
::: info 该事件没有变量，但仍可使用ConditionalEvents 变量和 PlaceholderAPI 变量
:::
::: warning 这不是一个玩家事件，因此不能使用玩家变量或玩家动作
:::
## CALL 调用
调用事件是一个特殊事件，只能通过另一个事件的调用（使用 call_event 动作）或使用/ce 调用命令来执行
```yaml
example:
    type: player_command
    conditions:
    - "%main_command% == /test"
    actions:
      default:
      - "cancel_event: true"
      - "message: This is a test message from event 'example'"
      - "call_event: example2"
example2:
    type: call
    actions:
      default:
      - "message: This message will be sent only when event 'example2' is called"
```
您还可以将变量从一个事件传递到另一个事件
```yaml
example:
    type: player_command
    conditions:
    - "%main_command% == /test"
    actions:
      default:
      - "cancel_event: true"
      - "message: This is a test message from event 'example'"
      - "call_event: example2;%example_variable%=Something"
example2:
    type: call
    conditions:
    - "%example_variable% == Something"
    actions:
      default:
      - "message: This message will be sent only when event 'example2' is called"
```
::: info 该事件没有变量，但仍可使用 ConditionalEvents 变量或 PlaceholderAPI 变量
:::
::: tip 如果调用的原始事件是玩家事件，那么该事件也是玩家事件
:::

## CUSTOM 自定义
任何您想要的自定义事件。您可以使用其他插件中的事件，更多信息请参阅[自定义事件](../CustomEvents.md)页面