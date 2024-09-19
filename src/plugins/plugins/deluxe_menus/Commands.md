---
title: '命令和权限'
---

插件的命令和权限列表

::: info "/dm open"是管理员命令，普通玩家不应该用它来打开菜单。应该为每个菜单设置“open_command”（打开命令）
:::

## 命令

| 命令 | 权限 | 描述 |
| --- | --- | --- |
| `/dm` | - | 显示插件的一些信息 |
| `/dm open <menu>` | `deluxemenus.open` | 打开指定的菜单 |
| `/dm open <menu> <player>` | `deluxemenus.open.others` | 为指定玩家打开指定的菜单 |
| `/dm open <menu> -p:<target>` | `deluxemenus.placeholdersfor` | 打开指定菜单，菜单中的变量将解析为目标玩家的数据 |
| `/dm open <menu> <viewer> -p:<target>` | `deluxemenus.placeholdersfor` | 为指定玩家打开菜单，但变量将解析为目标玩家的数据 |
| `/dm list` | `deluxemenus.list` | 列出已加载的菜单 |
| `/dm execute <player> <action>` | 需要玩家是Op | 让某个玩家执行某个动作 |
| `/dm dump <menu-name>` | `deluxemenus.admin` | 输出某个菜单的调试信息（如服务器版本、Java版本） |
| `/dm dump config` | `deluxemenus.admin` | 输出config.yml和其他调试信息（如服务器版本、Java版本） |
| `/dm reload` | `deluxemenus.reload` | 重载插件文件 |
| `/dm reload <menu>` | `deluxemenus.reload` | 重载指定菜单 |

## 命令别名

- `/deluxemenus`
- `/deluxemenu`
- `/dmenu`

## 权限

| 权限 | 描述 |
| --- | --- |
| `deluxemenus.openrequirement.bypass.*` | 绕过所有菜单的打开要求 |
| `deluxemenus.openrequirement.bypass.<menu>` | 绕过指定菜单的打开要求 |
| `deluxemenus.placeholdersfor.exempt` | 阻止其他玩家在命令 `/DM Open <Menu> -p:<You>` 中将你用作目标 |

::: info 小于号和大于号(<>) 之间的所有文本都是占位符/变量，请用不带小于号和大于号(<>) 的值替换。
:::