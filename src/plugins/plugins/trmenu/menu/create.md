# 创建

## 基础

TrMenu 的菜单是以 **YAML** \(.yml\) 文件格式配置、读取加载的

因此，创建一个新的菜单，你可以通过新建一个 YAML 文件开始

## 路径

菜单文件可以放在默认菜单目录 （menus）中或自定义路径（需要自行配置）

菜单文件名（不包括拓展名后缀）即是菜单的唯一 ID，

重复 ID 的菜单仍然会被加载，但会影响开启命令的正常工作

## 配置

菜单的配置项将在接下来的章节详细解析

请先浏览下方所提供的示例模式，快速了解菜单基本结构

```yaml
# 容器显示的标题
Title: 'TrMenu'

# 容器标题刷新的时间
Title-Update: 40

# 菜单布局
Layout: []

# 菜单布局 - 玩家容器
PlayerInventory: []

# 菜单选项
Options:
  # 是否启用参数
  Arguments: false
  # 默认参数填充
  Default-Arguments: [ ]
  # 非上锁槽位
  Free-Slots:
    - 71
    - 72
  # 默认页码
  Default-Layout: 0
  # 是否隐藏玩家容器物品
  Hide-Player-Inventory: false
  # 最小点击延时
  Min-Click-Delay: 200
  # 强制依赖的 PlaceholderAPI 拓展
  Depend-Expansions: [ 'server', 'player', 'progress', 'animations' ]

# 菜单绑定
Bindings:
  # 命令
  Commands:
    - '(?i)example(-)?(gui)?(s)?'
  # 物品特征
  Items:
    - 'material:compass'
    - 'material:clock,lore:OPEN_MENU'
    - 'texture:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNDRmNDUyZDk5OGVhYmFjNDY0MmM2YjBmZTVhOGY0ZTJlNjczZWRjYWUyYTZkZmQ5ZTZhMmU4NmU3ODZlZGFjMCJ9fX0='

# 菜单事件反应
Events:
  # 开启事件
  Open:
    - condition: 'perm *trmenu.use'
      actions:
        - 'sound: BLOCK_CHEST_OPEN-1-0'
      deny:
        - 'sound: ENTITY_ITEM_BREAK-1-0'
        - 'title: `&c&lPermission Required` `&7&lYou need permission &6&ltrmenu.use &7&lto open this menu` 15 20 15'
        - 'return'
  # 关闭事件
  Close:
    - 'sound: BLOCK_CHEST_CLOSE-1-0'

# 菜单的图标主体
Icons:
  # 图标 Id
  'Close':
    # 显示属性更新频率
    update: []
    # 子图标重新计算频率
    refresh: -1
    # 显示部分
    display: []
    # 动作部分
    actions: []

# 定时任务
Tasks:
  # 任务 ID
  tikTok:
    # 任务周期 (in ticks)
    period: 80
    # 任务反应 (reactions)
    task:
      - condition: '$ sender.isOp()'
        actions:
          - 'sound: BLOCK_NOTE_BLOCK_BIT-1-2'

# 内置自定义 JavaScript 函数
Functions:
  id: 'content'

```

### 结构

* 标题
  * 单个或多个标题
  * 标题更新周期
* 布局
  * 菜单布局
  * 玩家容器布局
* 选项
  * 默认补全参数
  * 默认布局页码
  * 是否隐藏玩家容器物品
  * 自由槽位
  * 防频繁点击间隔
  * 需要依赖的 PlaceholderAPI 拓展
* 绑定
  * 绑定正则命令
  * 绑定物品特征
* 事件
  * 开启菜单执行动作
  * 关闭菜单执行动作
* 图标
* 内置脚本
* 周期任务

### 菜单国际化(社区版新增)

太复杂了，自己去看[TrMenu PR #64](https://github.com/Dreeam-qwq/TrMenu/pull/64)
