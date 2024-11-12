---
title: '开始'
order: 1
---

## 要求

1. 核心
::: warning 本插件仅支持 Spigot 或 Paper 及其分支的核心（不支持Craftbukkit）
:::
2. PAPI
::: info   
PlaceholderAPI将作为可选依赖，但是建议安装。  
在部分特定条件中需要使用PAPI的变量来判断  
[https://www.spigotmc.org/resources/placeholderapi.6245/](https://www.spigotmc.org/resources/placeholderapi.6245/)
:::
::: warning
在使用变量前，请按照要求下载PAPI的拓展。  
如果需要使用**Player**拓展中的变量，需要使用下面命令下载:
- `/papi ecloud download Player`
- `/papi reload`
:::

## 安装

只需要将下载好的ConditionalEvents文件放入plugins文件夹之后启动服务器即可

## Config.yml文件

这是整个插件的主配置文件，在新建事件的时候也可以在这个文件的Events下配置

## Events文件夹

在这个文件夹中你可以创建单独的文件来管理你的事件。

::: warning 每个事件都要使用唯一的名称
:::

## 你的第一个事件

接下来让我们创建一个阻止玩家在"spawn"世界中破坏方块的事件

首先，我们必须考虑事件本身。我们想要阻止什么？玩家正在做什么？破坏方块。所以，对于这个事件，我们可以使用 [block_break](./event%20typs/BlockEvents.md#block-break-破坏方块) 事件类型，它会在每次玩家尝试破坏方块时触发。

```yaml
Events:
  event1:
    type: block_break
```

接下来我们需要考虑是否需要在事件中检查条件。在本例中，我们希望阻止在名为“spawn”的世界中破坏方块，因此第一个条件是检测当前玩家所在的世界。为此，我们可以使用PlaceholderAPI插件中的Player扩展。这个扩展提供了变量 %player_world%，可以返回玩家当前所在的世界。要使用该变量，请务必运行以下命令来下载Player扩展：/papi ecloud download Player

既然我们已经有了该变量，现在我们需要按照以下格式创建一个条件： `<value> <conditional> <value>` 我们要检查 `%player_world%` 是否等于 `spawn`。第一个值将是 `%player_world%`，条件符号是 `==`，第二个值是 `spawn`。所有条件符号可以在[这里](./Conditions.md#不同类型的条件)找到。

```yaml
Events:
  event1:
    type: block_break
    conditions:
    - "%player_world% == spawn"
```
最后，我们可以为玩家尝试在名为“spawn”的世界中破坏方块时执行的操作添加动作。ConditionalEvents 提供了许多动作。在这种情况下，我们需要阻止玩家破坏方块。要阻止或拦截一个事件，可以使用 cancel_event: true 操作。然后，可以发送一条消息，通知玩家在此世界中不允许破坏方块。

为了使这些动作生效，需要添加 `actions` 配置，然后添加一个`default`配置。`default`配置实际上是一个动作组。事件可以根据不同情况执行多个动作组，但这些是更高级的内容，会在wiki的后续部分进行解释。
```yaml
Events:
  event1:
    type: block_break
    conditions:
    - "%player_world% == spawn"
    actions:
      default:
      - "cancel_event: true"
      - "message: &cYou can't break blocks on this world!"
      
```
至此事件就配置完了！现在，玩家将无法在名为“spawn”的世界中破坏方块