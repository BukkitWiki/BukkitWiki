---
description: 图标交互反应
---

# 交互

## 示例

```yaml
'Close':
  update: [-1, 5, -1, -1]
  display:
    material: Red Stained Glass Pane
    name: ['&cC&7lose', '&cCl&7ose', '&cClo&7se', '&cClos&7e', '&cClose']
  # 动作部分
  actions:
    # 点击类型 - 反应
    all: close
```

```yaml
  '*':
    update: [-1, 5, 20, -1]
    display: # ...
    # 动作部分
    actions:
      # 点击类型（左键）
      left:
        - 'set-meta: icon_server_hide true'
        - 'sound: BLOCK_NOTE_BLOCK_BIT-1-0'
        - 'refresh: *'
```

## 类型

> ALL
>
> LEFT
>
> RIGHT
>
> SHIFT\_LEFT
>
> SHIFT\_RIGHT
>
> OFFHAND (注意,目前无法在1.12.2上使用)
>
> NUMBER\_KEY
>
> NUMBER\_KEY\_1
>
> NUMBER\_KEY\_2
>
> NUMBER\_KEY\_3
>
> NUMBER\_KEY\_4
>
> NUMBER\_KEY\_5
>
> NUMBER\_KEY\_6
>
> NUMBER\_KEY\_7
>
> NUMBER\_KEY\_8
>
> NUMBER\_KEY\_9
>
> MIDDLE
>
> DROP
>
> CONTROL\_DROP
>
> ABROAD\_LEFT\_EMPTY
>
> ABROAD\_RIGHT\_EMPTY
>
> ABROAD\_LEFT\_ITEM
>
> ABROAD\_RIGHT\_ITEM
>
> LEFT\_MOUSE\_DRAG\_ADD
>
> RIGHT\_MOUSE\_DRAG\_ADD
>
> MIDDLE\_MOUSE\_DRAG\_ADD
>
> DOUBLE\_CLICK

## 反应

```component PageLink
path: ../action/reactions.md
```




