---
description: TrMenu 菜单文件字符串颜色代码
---

# 多彩颜色

## 原生 16 色 (对于 **任意**)
```text
(& or §) + (0-9 or a-f)
```

## Hex 颜色 (对于 **1.16+**)
```text
&{FFFFFF} or &{#FFFFFF} or &{256,256,256}
```

## 渐变
```text
Usage:
<gradient(or 'gradient')#<speed(ignorable)>:<hex range>>This is a Gradient, It's are beautifully! Do U like it?<loop(or 'l')>

E.g:
<g#2:#ffffff:#bbbbbb>text<l>
<g#2:#ffffff:#bbbbbb:#cccccc:#777777>text<l>
<g:#ffffff:#bbbbbb>text<l>
```

## 彩虹
```text
Usage:
<rainbow(or 'r')#<speed>:<saturation>:<brightness>>This is a Rainbow, It's are beautifully!<loop(or 'l')>

E.g:
<r#2:75:100>This is a Rainbow, It's are beaut?<l>
<r#15:20:50>This is a Rainbow, It's are beaut?<l>
```