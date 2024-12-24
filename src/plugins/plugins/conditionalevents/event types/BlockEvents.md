---
title: '方块事件'
order: 2
---

# 方块事件

## BLOCK INTERACT 方块交互

> 当玩家与方块交互时调用的事件

```yaml
example:
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
```
::: info 变量
- %action_type% (RIGHT_CLICK,LEFT_CLICK,SHIFT_RIGHT_CLICK,SHIFT_LEFT_CLICK) 或 PHYSICAL 如果想检测玩家是不是在压力板上面时请使用PHYSICAL
- ConditionalEvents [方块变量](../Variables.md#方块变量)
- ConditionalEvents [物品变量](../Variables.md#物品变量) (针对玩家手中的物品)
:::

## BLOCK BREAK 破坏方块
当玩家破坏方块时调用的事件
```yaml
example:
  type: block_break
  conditions:
  - '%block_head_texture% != %empty%'
  actions:
    default:
    - 'cancel_event: true'
    - "message: &cYou can''t break heads with texture!"
    - 'playsound: BLOCK_NOTE_BLOCK_PLING;10;0.1'
```

::: info 变量
- ConditionalEvents [方块变量](../Variables.md#方块变量)
- ConditionalEvents [物品变量](../Variables.md#物品变量) (针对玩家手中的物品)
:::

## BLOCK PLACE 放置方块
当玩家放置方块时调用的事件
```yaml
example:
  type: block_place
  conditions:
    - '%block_world% == spawn'
  actions:
    default:
      - 'cancel_event: true'
      - "message: &cYou can''t place blocks on this world."
      - 'playsound: BLOCK_NOTE_BLOCK_PLING;10;0.1'
```

::: info 变量
- ConditionalEvents [方块变量](../Variables.md#方块变量)
- ConditionalEvents [物品变量](../Variables.md#物品变量) (针对玩家手中的物品)
:::