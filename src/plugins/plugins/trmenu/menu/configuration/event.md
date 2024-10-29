---
description: 对菜单的一些事件执行条件动作反应
---

# 事件

## 示例

```yaml
#
# 菜单的事件处理
#
Events:
  # 开启菜单
  Open:
    - condition: 'perm *trmenu.use'
      actions:
        - 'sound: BLOCK_CHEST_OPEN-1-0'
      deny:
        - 'sound: ENTITY_ITEM_BREAK-1-0'
        - 'title: `&c&lPermission Required` `&7&lYou need permission &6&ltrmenu.use &7&lto open this menu` 15 20 15'
        - 'return'
  # 关闭菜单
  Close:
    - 'sound: BLOCK_CHEST_CLOSE-1-0'

```

## 注意

* 事件配置的对象均是反应（动作组）
* 若执行 RETURN 动作，则事件将取消

