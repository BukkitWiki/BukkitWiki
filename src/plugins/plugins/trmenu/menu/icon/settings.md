---
description: 图标设置项均与 显示部分、交互部分 同级节点
---

# 设置

## 更新周期

* 更新周期包括 4 个（材质，名称，Lore，槽位）
* 你可以通过配置数组的形式独立设置它们

```yaml
# 设置一个值，同时应用到 材质，名称，Lore，槽位 中
update: 20
```

```yaml
# 不完全设置
# 分别设置材质，名称，Lore的更新周期为 20, -1, 15
# 槽位的更新周期将选取其中最高的一个，即 20
update: [20, -1, 15]
```

```yaml
# 完全配置, 即按顺序分别对应
update: [-1, 5, 25, 30]
```

* 不配置更新周期项，图标将默认不更新
* 更新周期应与默认图标同级节点，子图标不支持自定义更新周期
* 插件会根据属性是否需要更新（包含动画、变量）自动分配周期，因此不必在这麻烦配置

## 刷新周期

* 按优先级、条件重新计算子图标
* 只有存在子图标时，此项才有效
* 使用动作 Refresh，可以主动刷新图标，达到同样效果

```yaml
refresh: 20
```

## 图标槽位

* 针对静态槽位的图标，推荐通过 **布局** 功能来定义图标槽位
* 手动配置槽位将覆写布局的配置

```yaml
slots: 6
```

```yaml
slots:
 - 1
 - 2
 - 3
 # 4-6 = [4, 5, 6]
 - '4-6'
 - '${js: varInt("%player_health%")}'
 - 7
```

```yaml
# 动态槽位，List<List<Int>> 嵌套模式
slots:
- - 0
  - 1
- - 1
  - 2
- - 2
  - 3
```

## \* 继承

```yaml
inherit: true
```

* 无论配置与否，默认子图标都将继承主图标的**材质**
* 开启子图标继承，将额外继承主图标的**名称，Lore**
* “继承” 是指子图标未配置的前提下，继承状态下子图标仍然可以通过配置来覆写
* 默认继承与否可通过编辑 `settings.yml` 文件来设置

## \* 条件

子图标的属性，条件计算结果为真时才可能显示此子图标

```yaml
condition: 'perm *trmenu.use'
```

## \* 优先级

决定该子图标的权重（筛选子图标时的顺序先后）

```yaml
priority: 20
```

* 该项仅对子图标有效
* 若不设置，则默认优先级为 **0**
* 选取条件子图标时，按优先级**升序**依次计算子图标到满足条件的为止，即优先级最小的图标最先计算

在实际配置 YAML 文件时，此项为非必须项

插件会根据图标的 “配置位置” ，按顺序自动的分配一定优先级，例如

```yaml
Icons:
  'A':
    display:
      material: grass_block
    icons:
      - condition: 'perm *op'
        display:
          material: beacon
      - condition: 'perm *mvp.user'
        display:
          material: diamond block
      - condition: 'perm *vip.user'
        display:
          material: gold block
```

会先计算条件为 `perm *op` 的子图标，再依次 `perm *mvp.user` 、`perm *vip.user`

