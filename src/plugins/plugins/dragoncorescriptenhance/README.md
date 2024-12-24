---
title: 'DragonCoreScriptEnhance —— 龙核脚本增强'
shortTitle: 'DragonCoreScriptEnhance'
isOriginal: true
tag: ['付费']
dir:
  link: true
---

## 简介
利用龙核的发包功能实现在服务端执行脚本并返回数据  
**大概功能可以看看配置文件**

::: info QQ交流群 642468469
:::

## 图片展示 
![](https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/20241219063030.png)

## 配置文件

```yaml

example:
  type: js
  script: |-
    return +player.替换变量('%player_level%') >= 10
  

args_example:
  type: js
  script: |-
    输出(args)

kether_example:
  type: kether
  script: |-
    check papi '%player_level%' >= 10
```

## 龙核中的使用方法
使用龙核方法
```text
方法.发包('dcscript','kether_example','func=按钮1','gui=testgui','bind=123')
```
第一个参数为固定内容 必须是 dcscript  
第二个参数时是插件中脚本的名称  
有三条可选配置 `gui` `func` `bind`  
- `gui` 是指回调时调用的菜单id  
- `func` 是指回调时调用的方法名  
- `bind` 是一个自定义的绑定信息 用于识别回调信息

其余所有参数将被视为`参数`传给脚本之中  
在脚本中使用 `args`或是`参数` 进行调用  

## 我使用的龙核配置

``` yaml
Functions: 
  按钮1: |-
    局部变量.参数.1 ? 方法.消息('当前等级大于等于10') : 方法.消息('当前等级小于10')

背景:
  type: texture
  x: (w-背景.width)/2 + 120
  y: (h-背景.height)/2
  width: 200
  height: 200
  texture: 174,71,252,90
a_图片:
  texture: 64,183,130
  x: 背景.x + 20
  y: 背景.y + 80
  scale: 2
  center: true
  shadow: true
  width: 80
  height: 20
  length: 100
  actions:
    click_left: |-
      方法.发包('dcscript','kether_example','func=按钮1','gui=testgui','bind=123')
```

::: info 在我的界面中存在一个按钮，当我点击的时候它会让服务端执行`kether_example`脚本，脚本执行完之后 服务端会让客户端执行 `testgui` 菜单中(也就是这个菜单)的 `按钮1` 方法,我增加了一个绑定信息为`123`
:::
::: tip 当玩家点击这个按钮之后，`按钮1`方法就会被执行
并且有伴随两个参数 
 - `局部变量.参数.0` 如果存在为调用时传的 `bind`值
 - `局部变量.参数.1` 为脚本的返回值
:::