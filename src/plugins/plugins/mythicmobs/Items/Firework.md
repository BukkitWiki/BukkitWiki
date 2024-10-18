# Firework 烟花

这个属性用于修改烟花或烟火之星的效果。每个烟花或烟火之星都需要该属性。

### Format 格式

```yaml
ItemName:
  Id: material
  Firework:
    Colors:
    FadeColors:
    Flicker:
    Trail:
```

## 烟花配置解析

### Colors 颜色

要添加到烟花效果中的三原色列表。颜色必须使用 RGB(红，绿，蓝) 格式。

```yaml
# 添加红色(255,0,0)，绿色(0,255,0)，和蓝色(0,0,255)
# 到烟花效果中
example_item:
  Id: firework_charge
  Firework:
    Colors:
      - 255,0,0
      - 0,255,0
      - 0,0,255
```

### FadeColors 渐变色

与 [colors](#colors) 选项类似，但将颜色添加到淡入效果中而不是直接应用。

```yaml
example_item:
  Id: firework_charge
  Firework:
    Colors:
      - 255,0,0
      - 0,255,0
      - 0,0,255
    FadeColors:
      - 255,0,255
      - 0,255,0
```

### Flicker 闪烁

烟花效果是否闪烁

```yaml
example_item:
  Id: firework_charge
  Firework:
    Flicker: true
```

### Trail 尾迹

烟花效果是否有尾迹

```yaml
example_item:
  Id: firework_charge
  Firework:
    Trail: true
```