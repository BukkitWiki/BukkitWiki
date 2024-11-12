---
title: "自定义事件"
---

## 说明
ConditionalEvents 允许监听任何您想监听的事件，包括其他插件的事件。下面的示例向你展示如何监听自定义事件
::: warning 本节主要面向有 Java 知识并了解如何创建 Minecraft 插件的基础知识的人。如果您有不明白的地方，请随时通过私信（在 Spigot 上）或在插件讨论中与作者联系
:::

下面是一个**自定义事件**的示例，来自作者的`DefensiveTurrets`插件的放置事件。
```yaml
example1:
    type: custom
    custom_event_data:
      event: dt.ajneb97.api.TurretPlaceEvent
      player_variable: getPlayer()
      variables_to_capture:
      - '%turret_world%;getLocation().getWorld().getName()'
    conditions:
    - '%turret_world% equals spawn'
    actions:
      default:
      - 'cancel_event: true'
      - "message: &cYou can''t place turrets on this world."
```
## event
该选项定义了事件的Class路径 如果要监听 spigot/bukkit 事件，可以在 Spigot javadocs 中获取该值：进入[此页面](https://hub.spigotmc.org/javadocs/spigot/allclasses-index.html)  
搜索事件并点击它。在第一行中，您将看到该类的 "package name"，例如 org.bukkit.event.player.PlayerLevelChangeEvent

## player_variable
填入一个能够返回玩家对象的方法名。对于 spigot/bukkit 事件，大多数情况下是 getPlayer()。
如果是非玩家事件，请移除player_variable选项
```yaml
player_variable: "getPlayer()"
```

## variables_to_capture
定义要获取的变量名和方法名
格式为: `<变量名>;<方法名>`
```yaml
variables_to_capture:
 - '%turret_world%;getLocation().getWorld().getName()'
```