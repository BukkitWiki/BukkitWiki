---
description: 初次安装本插件后，会在插件目录下产生一些文件
---

# 配置

## 文件

::: tabs

@tab lang/zh\_CN.yml
TLocale 语言文件, 你可以编辑本插件几乎所有的消息
@tab data/globalData.yml
全局缓存数据变量存储的地方

服务器开启状态下请勿编辑

@tab data/itemRepository.yml
物品仓库数据存储的地方

服务器开启状态下请勿编辑
@tab menus
默认的菜单加载目录

菜单文件（YAML）可放在该目录或其子目录下，将会被插件自动加载
@tab settings.yml
TrMenu 的主配置文件
:::



## 设置

```yaml
#
# 插件的选项
#
Options:
  # 性能模式: High, Normal, Low
  Running-Performance: Normal
  # 多线程
  Multi-Thread: true
  # 异步载入菜单
  Async-Load-Menus: true
  # 是否启用并发加载菜单
  # 启用后会导致多级捕获器顺序错乱
  Load-Menu-Concurrent: false

#
# 插件的玩家数据储存方式
#
Database:
  # 储存方法: LOCAL, MONGODB
  Method: LOCAL
  Url:
    Client: 'mongodb://localhost:3307'
    Database: trixey
    Collection: menu

#
# 菜单加载器
#
Loader:
  # 自定义加载目录
  Menu-Files:
    - 'plugins/CustomMenusFolder'

#
# 菜单设置
#
Menu:
  # 选项
  Settings:
    # 绑定物品触发开启菜单的最低间隔 (防止频刷)
    Bound-Item-Interval: 3
  # 图标
  Icon:
    # 是否默认开启子图标继承主图标
    Inherit: false
    # 显示物品
    Item:
      # 默认名称颜色
      Default-Name-Color: "&7"
      # 默认Lore颜色
      Default-Lore-Color: "&7"
      # 优先着色
      # 若开启，则先替换颜色再处理函数变量
      Pre-Color: false

#
# 动作相关
# 开启Kether宽容解析语句后无需添加 * 号
#
Action:
  Using-Component: true
  # 捕获器
  Inputer:
    # 取消词（正则）
    Cancel-Words:
      - 'cancel|quit|end'
      - 'q'
  Kether:
    # 开启Kether语句宽容解析
    Allow-Tolerance-Parser: true

#
# 快捷绑定执行的动作
# 具体注解详见 [USAGE-快捷绑定] 章节
#
Shortcuts:
  Offhand: []
  Sneaking-Offhand:
    - condition: 'perm *trmenu.shortcut'
      execute: 'open: Example'
      deny: 'return'
  Right-Click-Player: 'open: Profile'
  Sneaking-Right-Click-Player: [ ]
  PlayerInventory-Border-Left: [ ]
  PlayerInventory-Border-Right: [ ]
  PlayerInventory-Border-Middle: [ ]

#
# 注册自定义命令
# 具体注解详见 [USAGE-命令注册] 章节
#
RegisterCommands:
  openMenus:
    aliases: [ ]
    permission: null
    execute:
      - 'tell: &7Argument `example` Required!'
    arguments:
      example: 'open: example'

#
# JS/JEXL 命名导出
# 具体注解详见 [SCRIPT-JAVASCRIPT] 章节
#

Script:
  Export-Hook-Plugin: true
  Mozilla-Compat: true
  Binding-Map:
```

## 语言

TODO

