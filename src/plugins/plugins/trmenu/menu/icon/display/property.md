# 属性

## 数量

```yaml
# 静态数量
amount: 10

# 动态数量 (需要是返回数值的变量)
amount: '${js: varInt("%server_time_s%") + 1}'
```

## 发光

```yaml
# 直接设置布尔值，开启或关闭（默认：关闭）
# 实质是为物品添加一个附魔效果 & 隐藏附魔显示的标签，因此不能让所有物品都发光
shiny: true

# 动态效果（条件表达式）
shiny: 'all [perm *vip.user money *100]'
```

## 标签

```yaml
flags:
- 'HIDE_ENCHANTS'
- 'HIDE_ATTRIBUTES'
```

> 可用物品标签
>
> * HIDE\_ENCHANTS
> * HIDE\_ATTRIBUTES
> * HIDE\_UNBREAKABLE
> * HIDE\_POTION\_EFFECTS
> * HIDE\_DESTROYS
> * HIDE\_PLACED\_ON

## NBT

```yaml
nbt:
  balabala: 12345
```

* 支持使用变量

