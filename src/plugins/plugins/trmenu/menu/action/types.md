# 类型

## 发送文本

> 向玩家发送一条普通消息

```yaml
- 'tell: Hello There'
```

```yaml
- 'tell: Hello There;There is a message'
- 'tell: First Line\nSecond Line!'
```

在 3.3.2e 之后，tell 支持发送 TabooLib Components 文本，以实现更加复杂的对话

如果你不需要,可以关闭`Using-Component`

[教程](https://plugins.ptms.ink/function/components/basic)

## 强制聊天

> 让玩家发送一条消息到聊天框

```yaml
- 'chat: Hello Everyone!'
```

## 发送音效

> 向玩家播放目标音效

```yaml
- 'sound: BLOCK_ANVIL_HIT-1-2'
```

```yaml
- 'sound: BLOCK_BEEHIVE_ENTER-1-2;BLOCK_BUBBLE_COLUMN_WHIRLPOOL_INSIDE-1-0'
```

## 发送 Title

> 向玩家展示一条 Title 信息

```yaml
# 用 \s 代替标题中需要使用的空格
- 'title: WELCOME %player_name%~ 20 20 10'

# 用 ` 括起内容，支持直接用空格
- 'title: `&c&lPermission Required` `&7&lYou need permission &6&ltrmenu.use &7&lto open this menu` 15 20 15'
```

* TITLE 后对应的三个整数型参数分别为 FadeIn, Stay, FadeOut \(渐入、停留、渐出\) 的时间，可以不设置

## 发送 Actionbar

> 向玩家展示一条 Actionbar 信息

```yaml
- 'actionbar: Hello There'
```

## 发送 Tellraw

> 向玩家发送一条原版 Json 消息，或利用 TrMenu 轻松构建一条

::: code-tabs

@tab 原版 JSON
```yaml
- 'json: {"text":"Hello World!"}'
```
@tab 构建消息 1
```yaml
- 'json: Hello World! <ClickMe@command=spawn@hover=to spawn> <--- Click That'
```
@tab 构建消息 2
```yaml
- 'json: &3Hello, &b%player_name%&3, Buy Ranks on our <&2&nstore@url=https://store.example.net> &3site.'
```
:::


## 执行命令

> 调用对象执行命令

### 玩家身份

```yaml
- 'command: spawn'
```

```yaml
# 以 ; 分隔，可以执行多个命令
# 下方动作等同于
# - 'command: spawn'
# - 'command: say I am Back'

- 'command: spawn ; say I am Back'
```

### Operator 身份

```yaml
- 'op: kick {meta:input}'
```

```yaml
- 'op: kick {meta:input} ; broadcast I just kicked {meta:input}'
```
::: danger
实现以 Op 执行命令的方法是 **授予 OP，执行操作，撤销 OP**

在可以用 **CONSOLE** 控制台执行命令实现需求的情况下，**不推荐**使用此动作
:::

### Console 控制台

```yaml
- 'console: lp perm add %player_name% vip.user; give %player_name% diamond 64'
```

## 跨服传送

> BungeeCord 群组下，跨服传送玩家到目标服务器

```yaml
- 'server: Lobby'
```

## 菜单

### 关闭菜单

```yaml
- 'close'
```

### 关闭菜单 \(静默\)

> 通过此形式关闭菜单，将不会执行 Events.Close 的动作组

```yaml
- 'force-close'
```

### 开启菜单

```yaml
- 'open: Example'
```

```yaml
# 打开菜单 Shop-Handler,
# 指定参数为 [APPLE, 10, 1]

- 'open: Shop-Handler APPLE 10 1'
```

```yaml
# 打开菜单 Browser 的指定页码 3

- 'open: Browser:3'
```

### 开启菜单 \(静默\)

> 通过此形式开启菜单，将不会执行 Events.Open 的动作组

```yaml
- 'force-open: <Menu>:[Page]'
```

### 切换页码

```yaml
- 'page: 0'
```

```yaml
- 'page: %trmenu_menu_next%'
```

### 设置容器标题

```yaml
- 'set-title: CUSTOM_TITLE'
```

* 会被动态标题覆盖

### 设置菜单参数

```yaml
- 'set-arguments: Custom\sArgument 10 Hello'
```

### 刷新图标

```yaml
# 刷新菜单所有活动图标
- 'refresh'

# 刷新菜单 ID 为 Bee 图标
- 'refresh: Bee'

# 刷新菜单 ID 为 A, B, C 的三个图标
- 'refresh: A;B;C'
```

* 这里的 “刷新” 是重新计算筛选子图标，而非更新动画

### 更新图标

> 使用方法同上，能够更新指定图标 Lore、名称 等显示属性 & 函数变量

```yaml
- 'update: Bee'
```

### 重置菜单

> 重置所有图标的动画属性缓存

```yaml
- 'reset'
```

### 数据操作

> TrMenu 所提供的数据功能分三类
>
> Meta - 临时数据，关服后不会存储
>
> Data - 存储数据（可通过配置 TabooLib 实现跨服）
>
> GlobalData - 全局本地文件存储的数据，不针对玩家

* 操作类型 SET \[key\] \[value\]、DEL \[key\]
* 下面以 Meta 为例

```yaml
- 'set-meta: customMeta customValue'
- 'set-meta: customMeta customValue; customKey2 customValue 2'

- 'del-meta: customMeta'
- 'del-meta: customMeta;customKey2'

- 'del-meta: (?i)customs?-?(meta|key)'
```

## 功能


### 编辑物品

这个action非常复杂，能不能学会就看你自己了

表达式`edit-item: <operation> <item> <op_type> <操作参数>`

其中，目前支持的`op_type`有

* `material` 材质
* `name` 名称
* `lore` LORE
* `flags` 标志
* `customModelData` 自定义模型数据
* `enchantment` 附魔(社区版新增)
* `color` 颜色(社区版新增)

### 扣除和给予物品

```yaml
# 扣除一组钻石
- 'take-item: material:DIAMOND,amount:64'

# 扣除一组铁锭和半组金锭
- 'take-item: material:IRON_INGOT,amount:64;material:GOLD_INGOT,amount:32'
```

```yaml
# 给予物品
- 'give-item: material:DIAMOND,amount:32,name:&bCustom Diamond'
```

### 控制经济货币

```yaml
- 'give-money: %server_time_s%'
- 'give-money: 100'
```

```yaml
- 'take-money: 100'
```

```yaml
- 'set-money: 500'
```

* Money 控制仅支持和 Vault 挂钩的经济系统
* 除 Money 以外，还支持 Points （挂钩 PlayerPoints），操作同理，这里不再赘述 

### 捕获器

> TrMenu 提供的强大的捕获器功能 & 实现可输入 GUI 的设计

#### 类型

> CHAT 聊天框
>
> SIGN 告示牌
>
> ANVIL 铁砧
>
> BOOK 书

#### 变量

> {meta: input} 最后一次输入的内容

#### 配置
::: code-tabs
@tab 聊天框
```yaml
- catcher:
    amount:
      type: SIGN
      start: 'actionbar: &b&lPlease input a valid number'
      cancel: 'tell: &8Cancelled'
      end:
       - 'set-args: {0} {1} {2} `${js: Math.min(Math.max(varInt("{meta:input}"), 1), 64)}`'
       - 'menu: Shop-Handler-Purchase'
```
@tab 铁砧
```yaml
- catcher:
    amount:
      type: ANVIL
      item-left: '{"type":"DIAMOND_SWORD","data":0,"amount":1,"meta":{"Damage":{"type":"INT","data":0}}}'
      start: 'actionbar: &b&lPlease input a online player'
      cancel: 'tell: &8Cancelled'
      end:
        - condition: 'js: utils.isPlayerOnline(vars("{meta:input}"))'
          actions: 'tell: &aPlayer {meta:input} is online'
          deny: 'tell: &cPlayer {meta:input} is offline'
```
:::

## 逻辑

### 延时

> 延时执行该动作之后的所有动作

```yaml
- 'tell: The diamond reward will be distributed in 3 seconds'
- 'delay: 60'
- 'give-item: material:DIAMOND'
```

### 中断

> 中断之后所有动作的执行，并使该反应组结果为 FALSE

```yaml
- 'return'
```

## 脚本

### JavaScript 脚本执行

> 预编译执行 JavaScript 脚本

```yaml
- 'js: player.sendMessage("Hello World!")'
```

### Kether 脚本执行

```yaml
- 'ke: tell *"Hello World!"'
- 'tell color *"Hello &bTrMenu"'
```

* 我们对 Kether 语法完整支持，且强烈推荐使用，若不指定 TrMenu 动作名称
* 将默认采用 Kether 脚本执行！如下

```yaml
Events:
  Open: |-
    if perm *trmenu.use then {
      tell *"You have permission"
    } else {
      tell *"You dont have permission"
    }
```

