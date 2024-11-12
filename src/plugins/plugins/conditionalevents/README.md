---
title: 'ConditionalEvents'
dir:
  link: true
---

<VPBanner
title="ConditionalEvents"
content="条件事件"
logo="https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/82271.jpg"
:actions='[
        {
            text: "原帖",
            link:"https://www.spigotmc.org/resources/82271/",
        },
        {
            text: "原文档",
            link: "https://ajneb97.gitbook.io/conditionalevents",
            type: "default"
        },
        {
            text: "仓库",
            link: "https://github.com/Ajneb97/ConditionalEvents",
            type: "default",
        },
]'
/>


## 说明
该插件允许您为某些事件添加不同的条件。如果这些条件得到满足，就会执行自定义操作。您可以利用此插件做无数种事情。为了更简单地了解该插件，这里有一些示例：

::: tabs

@tab 示例 1
如果玩家按下特定坐标上的按钮（或任何方块），您就可以为玩家执行一些操作，如执行命令、发送消息、应用一些药水效果等
```yaml
example1:
    type: block_interact
    conditions:
    - '%block_x% == 20'
    - '%block_y% == 60'
    - '%block_z% == 20'
    - '%block_world% == lobby'
    - '%block% == STONE_BUTTON'
    - '%action_type% == RIGHT_CLICK'
    actions:
      default:
      - "message: &aYou''ve received $500!"
      - "console_command: eco give %player% 500"
      - "playsound: ENTITY_PLAYER_LEVELUP;10;2"
```
@tab 示例2
如果玩家使用某种物品对其他玩家造成了伤害，那么受害者就有小概率获得毒药效果
```yaml
example2:
    type: player_attack
    conditions:
    - '%victim% == PLAYER'
    - '%item% == DIAMOND_SWORD'
    - '%item_name% == VIP Sword'
    - '%random_1_10% >= 8'
    actions:
      default:
      - 'message: &aYour diamond sword poison effect was activated!'
      - 'to_target: give_potion_effect: POISON;120;1'
      - 'to_target: message: &cYou were poisoned by &e%player%&c!'
```
@tab 示例3
通过 ConditionalEvents，您可以阻止命令的执行并踢出执行命令的玩家或向他们播放声音
```yaml
example3:
    type: player_command
    conditions:
    - '%command% startsWith //calc or %command% startsWith //solve or %command% startsWith
      //eval'
    actions:
      default:
      - 'cancel_event: true'
      - 'kick: &cWhat are you trying to do?'
    ignore_with_permission: conditionalevents.ignore.example3
```
@tab 示例4
您可以取消在某些世界中破坏或放置方块等事件
```yaml
example4:
  type: block_break
  conditions:
    - '%block_world% == spawn'
  actions:
    default:
      - "cancel_event: true"
      - "message: &cYou can''t break blocks on this world."
      - "playsound: BLOCK_NOTE_BLOCK_PLING;10;0.1"
  ignore_with_permission: conditionalevents.ignore.event4
```
@tab 示例5
您可以根据玩家所在的世界，在他们死后将他们传送到不同的地方。
```yaml
example5:
    type: player_respawn
    conditions:
    - '%player_world% equals pvp1 or %player_world% equals pvp2'
    actions:
      default:
      - "teleport: lobby;0;60;0;90;0"
      - "message: &cYou died. Teleporting you back to the PvP Lobby..."
```

@tab 示例6
您可以不断检查是否有玩家进入某个区域，并为他执行一些操作
```yaml
example6:
    type: repetitive
    repetitive_time: 10
    conditions:
    - '%player_world% equals spawn'
    - '%worldguard_region_name% equals survival_entrance'
    actions:
      default:
      - "console_command: warp %player% Survival"
```

@tab 示例7
您可以根据玩家的等级，向杀死其他玩家的玩家赠送金钱
```yaml
example7:
    type: player_kill
    conditions:
    - '%victim% == PLAYER'
    - '%target:vault_rank% == vip execute actions1'
    - '%target:vault_rank% == admin execute actions2'
    actions:
      default:
      - "message: &6You've killed &e%target:player%"
      - "message: &7You receive: &a$100"
      - "console_command: eco give %player% 100"
      actions1:
      - "message: &6You've killed &e%target:player%"
      - "message: &7Since it's a &bVIP &7player you get: &a$500"
      - "console_command: eco give %player% 500"
      actions2:
      - "message: &6You've killed &e%target:player%"
      - "message: &7Since it's an &4Admin &7player you get: &a$1000"
      - "console_command: eco give %player% 1000"
```
@tab 示例8
您可以创建一个命令来检查其他玩家的等级
```yaml
example8:
    type: player_command
    conditions:
    - "%main_command% == /checklevel"
    - "%args_length% < 1 execute error1"
    - "%parseother_{arg_1}_{player_online}% == no execute error2"
    actions:
      default:
      - "cancel_event: true"
      - "message: &aLevel of &e%arg_1% &ais: &e%otherplayer_level_{arg_1}%"
      error1:
      - "cancel_event: true"
      - "message: &cYou must use &7/checklevel <player>"
      error2:
      - "cancel_event: true"
      - "message: &cThat player is not online."
```

:::


## 关于本文档
::: tip
本文档由 BukkitWiki 官方团队进行翻译，如果发现内容翻译有问题，请提交给 BukkitWiki 官方团队或你想修改某个页面的内容请点击页面左下角的`在 GitHub 上编辑此页`

原文链接：[https://ajneb97.gitbook.io/conditionalevents](https://ajneb97.gitbook.io/conditionalevents)
:::

