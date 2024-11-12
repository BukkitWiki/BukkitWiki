---
title: "插件事件"
order: 5
---

## 公民右键NPC CITIZENS RIGHT CLICK NPC
::: warning 需要[公民插件](https://www.spigotmc.org/resources/citizens.13811/)
:::
当玩家右键点击公民NPC时调用的事件
```yaml
example:
  type: citizens_right_click_npc
  conditions:
  - '%npc_id% == 50'
  actions:
    default:
    - "player_command: rtp"
```
::: info 变量
- %npc_id% 点击的NPC的ID
- %npc_name% 点击的NPC名称
:::

## 进入wg区域 WGEVENTS REGION ENTER
::: warning 需要 [WorldGuard插件](https://www.spigotmc.org/resources/worldguard-events.65176/)
:::
当玩家进入 WorldGuard 区域时调用的事件
```yaml
example:
  type: wgevents_region_enter
  conditions:
  - '%region% == main_city'
  actions:
    default:
    - "title: 20;40;20;&6&lENTERING AREA;&7City of Kryngel"
```

::: info 变量
- %region% 进入的区域
:::

## 离开wg区域 WGEVENTS REGION LEAVE
::: warning 需要 [WorldGuard插件](https://www.spigotmc.org/resources/worldguard-events.65176/)
:::
当玩家离开 WorldGuard 区域时调用的事件
```yaml
example:
  type: wgevents_region_leave
  conditions:
    - '%region% == main_city'
  actions:
    default:
      - "title: 20;40;20;&6&lLEAVING AREA;&7City of Kryngel"
```
::: info 变量
- %region% 离开的区域
:::

## plib 收到消息 PROTOCOLLIB RECEIVE MESSAGE
::: warning 需要 [ProtocolLib插件](https://www.spigotmc.org/resources/protocollib.1997/)
:::
玩家收到聊天消息时调用的事件
```yaml
example:
  type: protocollib_receive_message
  conditions:
  - "%normal_message% contains &cWelcome to the server."
  actions:
    default:
    - "cancel_event: true"
```
::: info 变量
- %normal_message% 收到的信息，包括颜色代码
- %normal_message_without_color_codes%（收到的信息没有颜色代码）
- %json_message%（收到的信息的完整 JSON 格式）
:::