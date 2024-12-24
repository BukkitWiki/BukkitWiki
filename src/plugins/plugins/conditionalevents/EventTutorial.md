---
title: "事件教程"
order: 2
---

::: tip 每次修改配置文件都需要 `/ce reload` 重载插件
:::

## 类型
填写要检测的事件类型
```yaml
type: block_interact
```
更多类型参考此页面
```component PageLink
path: './event types/'
```

## Conditions 条件
该事件执行的条件
```yaml
conditions:
- '%victim% == PLAYER'
- '%item% == DIAMOND_SWORD'
- '%item_name% == Super Sword'
- '%random_1-10% >= 8'
```
参考此页面
```component PageLink
path: './Conditions.md'
```

## Actions 动作
事件条件满足时执行的动作
```yaml
actions:
  default:
  - "cancel_event: true"
  - "message: &cYou can't break blocks on this world."
  - "playsound: BLOCK_NOTE_BLOCK_PLING;10;0.1"
```
参考此页面
```component PageLink
path: './actions/'
```

## Action Groups 动作组
动作需要配置在动作组中。除非有特殊指定，否则当事件条件满足时会默认执行`default`动作组。  
```yaml
actions:
  default: []
  cooldown: []
```
使用[execute](./Conditions.md#条件执行)选项可以执行不同组的动作组

## Ignore With Permission 忽略权限
当玩家拥有某个权限时会忽略这个事件
```yaml
ignore_with_permission: conditionalevents.ignore.event4
```

## Allow Math formulas in Conditions 开启数学公式
如果想在条件中用数学公式，必须启用此配置
```yaml
allow_math_formulas_in_conditions: true
conditions:
- '%command% equals /test-kills'
- '%statistic_player_kills% >= %statistic_deaths%*2'
```
## One Time 仅一次
如果启用`One Time`配置则此事件的`default`动作组只会执行一次，如果想让事件下次激活的时候还执行动作可以添加一个名为`one_time`的动作组

```yaml
one_time: true
actions:
  one_time:
  - "message: &cYou can claim this reward just once!"
```

::: warning 动作组必须叫`one_time`
:::

## Cooldown 冷却
定义事件的冷却时间 单位秒  
如果想在事件冷却期间执行动作可以额外设置一个名为`cooldown`的动作组
::: warning 动作组必须叫`cooldown`
:::

::: warning 管理员会无视事件冷却
:::

```yaml
cooldown: 3600
actions:
  cooldown:
  - "cancel_event: true"
  - "message: &cYou need to wait &e%time% &cbefore claiming your reward again."
```

## Enabled 启用
是否启用事件

```yaml
enabled: false
```

## Repetitive Time 重复
如果事件类型设为 `repetitive` 或 `repetitive_server` 则此配置为重复的间隔时间长单位Ticks
```yaml
type: repetitive
repetitive_time: 10
```
## Prevent Cooldown/One Time Activation 防止冷却/仅一次 的动作组
常用在有`execute`配置的事件中，可以定义几个不会冷却或一次性的动作组
```yaml
prevent_cooldown_activation:
- "actions2"
prevent_one_time_activation:
- "actions2"
- "actions3"
```

## Custom Event Data 自定义事件数据
用于[自定义事件](./CustomEvents.md)
```yaml
custom_event_data:
  event: dt.ajneb97.api.TurretPlaceEvent
  player_variable: getPlayer()
  variables_to_capture:
  - '%turret_world%;getLocation().getWorld().getName()'
```