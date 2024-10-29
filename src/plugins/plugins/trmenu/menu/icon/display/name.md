---
description: 物品显示的名称，支持动态
---

# 名称

## 示例

```yaml
  'Next':
    display:
      material: 'Cyan Stained Glass Pane'
      name: '&bN&3ext Page'
```

```yaml
  'Close':
    update: [25, 5, -1, -1]
    display:
      materials:
      - 'Red Stained Glass Pane'
      - 'Orange Stained Glass Pane'
      # 动态名称，更新周期 5 ticks
      name: ['&cC&7lose', '&cCl&7ose', '&cClo&7se', '&cClos&7e', '&cClose']
```

