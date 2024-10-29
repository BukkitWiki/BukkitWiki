---
description: 绑定菜单到快捷命令打开 & 物品特征
---

# 绑定

## 示例

```yaml
#
# 菜单绑定的快捷打开方式
#
Bindings:
  # 绑定命令, 支持正则
  Commands:
    - 'tester'
  # 绑定到物品特征
  Items:
    - 'material:compass'
```

## 注意

* 绑定命令支持**正则匹配**，例如 添加 \(?i\) 前缀可以忽略大小写
* 绑定命令支持**空格 & 其它参数**，插件将自动匹配并读取玩家提供的真实参数
* 了解绑定 **物品特征** 的详细写法，请查看下面章节

```component PageLink
path: ../../usage/item-matchers.md
```

