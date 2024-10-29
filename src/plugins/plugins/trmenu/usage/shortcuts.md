# 快捷绑定

## 配置

```yaml
Shortcuts:
  Offhand: []
  Sneaking-Offhand:
    - condition: 'perm *trmenu.shortcut'
      execute: 'open: Example'
      deny: 'return'
  Right-Click-Player: 'open: Profile'
  Sneaking-Right-Click-Player: [ ]
  PlayerInventory-Border-Left: [ ]
  PlayerInventory-Border-Right: [ ]
  PlayerInventory-Border-Middle: [ ]
```

## 类型

* 切换副手 OFFHAND
* 蹲下 + 切换副手 SNEAKING\_OFFHAND
* 右键玩家 RIGHT\_CLICK\_PLAYER
* 蹲下 + 右键玩家 SNEAKING\_RIGHT\_CLICK\_PLAYER
* （生存模式下）点击玩家背包外界 PLAYER\_INVENTORY\_BORDER\_LEFT/RIGHT/MIDDLE

## 注意

* 当 **动作组** 执行结果为 true，将会取消这个事件（例如切换副手）
* 为防止干扰游戏体验，所有 \[蹲下 + 操作\] 的快捷组合需要在 **1.5s** 内完成才能触发
* 右键玩家的快捷方式将默认传入菜单参数为目标玩家的名称

