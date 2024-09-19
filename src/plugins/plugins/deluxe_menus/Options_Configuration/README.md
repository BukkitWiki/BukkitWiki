---
title: 配置
dir:
  link: true
---


DeluxeMenus 是一个高度可定制的插件，它有许多配置，能够让你更改任何内容，以制作符合你服务器布局的自定义菜单。它提供了用于管理GUI菜单的GUI配置，以及用于管理GUI菜单中每个物品的物品配置。

## 相关链接
#TODO(相关链接)

## 值关键词

| 关键字 | 描述 |
| --- | --- |
| `BOOLEAN` | 包含 `true` 和 `false` （如果与PlaceholderAPI变量一起使用，此值将为 `yes` 或 `no`，而不是 `true/false`。可以在PlaceholderAPI配置文件中更改，默认值为 `yes/no`） |
| `TEXT` | 包含任意文本 |
| `#` | 包含任意数字 |
| `COMMAND` | 包含 不带斜杠（/）的命令 |
| `SOUND` | 包含 声音名称 |
| `EXPRESSION` | 表达式 #TODO("EXPRESSION") |

### 动作类型

| 标签 | 描述 |
| --- | --- |
| `[player] <command>` | 以玩家身份执行命令 |
| `[console] <command>` | 从控制台执行命令 |
| `[commandevent] <command>` | 以玩家身份执行未注册的命令 **部分特殊情况需要使用这个** |
| `[placeholder] <papi-placeholders>` | 为玩家解析变量 |
| `[message] <text>` | 向玩家发送消息 支持变量和颜色代码 |
| `[broadcast] <text>` | 向所有在线玩家发送消息 支持变量和颜色代码 |
| `[minimessage] <text>` | 使用 MiniMessage 格式向玩家发送消息 |
| `[minibroadcast] <text>` | 使用 MiniMessage 格式向所有在线玩家发送消息 |
| `[openguimenu] <menu-name>` | 打开DeluxeMenus中的另一个GUI |
| `[connect] <server-name>` | 将玩家连接到同一个BungeeCord中的服务器 |
| `[close]` | 关闭当前打开的GUI |
| `[json] <JSON-text>` | 向玩家发送JSON消息 |
| `[jsonbroadcast] <JSON-text>` | 向所有在线玩家发送JSON消息 |
| `[refresh]` | 刷新当前菜单中的物品 |
| `[broadcastsound] <sound> <volume> <pitch>` | 向服务器上的所有玩家播放声音 |
| `[broadcastsoundworld] <sound> <volume> <pitch>` | 向世界中的所有玩家播放声音 |
| `[sound] <sound> <volume> <pitch>` | 为玩家播放声音 |
| `[takemoney] <amount>` | 从玩家那里扣除一定金币 此操作依赖Vault |
| `[givemoney] <amount>` | 给玩家一定金币 此操作依赖Vault |
| `[takeexp] #L` | 从玩家那里扣除一定数量的经验 如果是扣除等级，请在末尾加上 `L` |
| `[giveexp] #L` | 给玩家一定数量的经验 如果是给等级，请在末尾加上 `L` |
| `[givepermission] <perm.node>` | 给玩家一个权限 此操作依赖Vault |
| `[takepermission] <perm.node>` | 从玩家那里移除一个权限 此操作依赖Vault |
| `[meta] <set/remove/add/subtract/switch> <key> <type> <value>` | 修改玩家的元数据 `add/subtract` 适用于数字类型，`switch` 适用于布尔值，它将在 `true/false` 之间切换 |
| `[chat] <message>` | 以玩家身份发送消息 |

### 动作标签
这些标签可以与动作一起使用（例如：`[message] example<delay=20>`）。

| 标签 | 描述 |
| --- | --- |
| `<delay=<time>>` | 在指定的延迟后执行动作（以ticks为单位，20 ticks = 1秒） |
| `<chance=<chance>>` | 设置执行动作的几率。可以在0到100之间设置，0表示动作永远不会执行，100表示动作总是执行 |

需要注意的是，几率标签是针对每个动作的。所以如果你有两个动作，且它们的几率都是50%，那么最终可能没有动作执行，也可能两个都执行。


### RGB/Hex
如果你想在1.16+版本的DeluxeMenus中使用RGB/Hex颜色，你可以使用以下格式：`&#aaFF00`

### 变量
DeluxeMenus 提供了以下变量：

- `%deluxemenus_meta_<key>_<dataType>_<default_value>%`
- `%deluxemenus_meta_has_value_<key>_<dataType>%`


### 常规配置

#### Debug调试
> ```yaml 
>debug: STRING
>```
>默认值为：HIGHEST 有效值有: LOWEST,LOW,MEDIUM,HIGH,HIGHEST
>决定要在控制台显示哪些调试信息，基于其重要性。
>
>HIGHEST = 只显示优先级最高的调试信息 <br/>
>LOWEST = 显示所有调试信息 <br/>
>当调试等级设置为 MEDIUM、HIGH 或 HIGHER 时，才会显示堆栈追踪。

#### 检查更新
> ```yaml
> check_updates: BOOLEAN
> ```
> 默认值: `true`
> 启用/禁用检查插件的更新。 如果有可用的更新，会通知OP。

