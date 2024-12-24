---
title: "命令和权限"
---

## 命令

::: info 别名不可用时 使用完整命令 `/conditionalevents`
:::

| 命令                                                                             | 描述                                             |
|--------------------------------------------------------------------------------|------------------------------------------------|
| /ce help                                                                       | 显示插件命令帮助                                       |
| /ce reload                                                                     | 重载配置文件                                         |
| /ce verify                                                                     | 检查所有事件是否有错误                                    |
| /ce reset \<player>/* \<event>/all                                             | 重置 某个玩家/所有玩家 的 某个事件/所有事件 数据                    |
| /ce debug \<event> (可选)\<player>                                               | 启用/禁用事件的调试模式，建议在控制台使用此命令否则会干扰聊天，可以选择仅调试一个玩家的事件 |
| /ce enable \<event>                                                            | 启用事件                                           |
| /ce disable \<event>                                                           | 禁用事件                                           |
| /ce call \<event> (可选)%变量1%=\值1;%变量N%=\值N (可选)player:\<player> (可选)silent:true | 调用事件 如果不需要反馈信息`/ce call event1 silent:true`    |
| /ce item \<save/remove> \<name>                                                | 保存物品                                           |


## 权限
| 权限                                        | 描述                |
|-------------------------------------------|-------------------|
| conditionalevents.admin                   | 访问插件所有命令          |
| conditionalevents.bypasscooldown.\<event> | 允许玩家完全绕过某个事件的冷却时间 |

