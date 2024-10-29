---
description: 配置菜单的一些选项属性
---

# 选项

## 示例

```yaml
#
# 菜单的选项设置
#
Options:
  # 是否启用菜单传参功能 （默认开启）
  Arguments: true
  # 默认填充参数
  Default-Arguments: []
  # 默认布局页码
  Default-Layout: 0
  # 自由槽位
  Free-Slots:
    - '71-73'
  # 是否隐藏玩家容器
  Hide-Player-Inventory: true
  # 防频繁点击的间隔
  Min-Click-Delay: 200
  # 强制需要依赖的 PlaceholderAPI 拓展变量
  Depend-Expansions: ['server', 'player', 'progress']
```

## 注意

* 若设置 **默认填充参数** ，则将自动补全玩家未提供的参数，例如
  * Default-Arguments: \["TabooLib", "Virus"\]
  * 玩家提供的参数为 \["TabooLib"\], 则第二个参数将自动补全为 Virus
* **默认菜单布局页码** 即在未指定页码的情况下默认打开菜单后初次显示的页码
* **依赖PAPI拓展** 菜单开启时将检测是否安装完整，否则拒绝开启并自动请求下载
* **启用纯发包模式** 进一步提高性能, 但是会牺牲一些附魔插件以及间歇泉翻译作为代价.
