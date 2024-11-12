---
title: '条件'
---

## 基本功能
该配置将为事件增加一些条件。如果条件满足，则执行默认动作
条件列表中的每一行都指一个必须为真的条件。您可以使用所有类型的变量，甚至包括PlaceholderAPI或ConditionalEvents变量。
详细可以参考[事件类型](./event%20typs/)页面中的变量或[变量页面](./Variables.md)
::: info 例如这段配置就代表了 受害者必须是其他玩家 使用的物品必须是钻石剑 物品名必须要是"超级剑"
```yaml
conditions:
- '%victim% == PLAYER'
- '%item% == DIAMOND_SWORD'
- '%item_name% == 超级剑'
```
:::

::: tip 在一行中写使用 'and' 分隔符写多个条件
```yaml
conditions:
- '%victim% == PLAYER and %item% == DIAMOND_SWORD and %item_name% == 超级剑'
```
:::

::: info 还可以使用 'or' 分隔符来表示 `或` 也就是 同一行中多个条件满足一个条件即可
```yaml
conditions:
- '%command% startsWith //calc or %command% startsWith //solve or %command% startsWith //eval'
```
:::

::: warning 同一行中只能使用一种类型的条件分隔符。也就是说，不能在同一条件行中混合使用 OR 和 AND。
:::

## 高级功能
::: info 在同一行中比较两个变量
```yaml
conditions:
- '%item_name% !contains %player_name%'
```
:::
::: info 使用数学公式来比较变量，但请在事件中明确写出开启数学运算的配置 `allow_math_formulas_in_conditions: true`
```yaml
conditions:
- '%command% equals /test-kills'
- '%statistic_player_kills% >= %statistic_deaths%*2'

conditions:
- '%player_x% == (%player_z%*3)-1000'
```
:::

## 不同类型的条件

### 文本类型

- equals, ==  (等于) 
- !equals, != (不等于)
- equalsIgnoreCase (无视大小写的等于)
- !equalsIgnoreCase (无视大小写的不等于)
- startsWith (字符串是否以...开头)
- !startsWith (字符串是否不以...开头)
- contains (包含)
- !contains (不包含)
- endsWith (字符串是否以...结尾)
- !endsWith   (字符串是否不以...结尾)
- matches (正则匹配)
- !matches (正则匹配取反)

### 数字类型
- equals, ==  (等于)
- !equals, != (不等于)
- \>= (大于等于)
- <= (小于等于)
- \> (大于)
- < (等于)

## 条件执行
如果你希望根据条件的不同结果执行不同的动作，可以使用此配置  
例如:
```yaml
example:
    type: player_join
    conditions:
    - '%vault_rank% equals admin execute actions1'
    - '%vault_rank% equals vip execute actions2'
    actions:
      default:
      - 'to_all: message: &a%player% &ejoined the game.'
      actions1:
      - 'to_all: message: &4&lADMIN &c%player% &ejoined the game.'
      actions2:
      - 'to_all: message: &b&lVIP &a%player% &ejoined the game.'
```
上方这个示例表示：在玩家进入服务器时检查玩家的vault_rank变量是否为admin，如果是则执行actions1动作，如果是vip则执行actions2动作，否则执行default动作

::: warning 如果 "execute" 没有执行 则继续向下判断条件。直到 "execute" 下面没有再定义其他条件，则执行default动作
:::

### 条件执行的 AND 条件
在条件执行中和普通条件一样也可以使用AND
```yaml
example:
    type: player_join
    conditions:
    - '%vault_rank% equals admin execute actions1'
    - '%vault_rank% equals vip and %player_level% > 20 execute actions2'
    actions:
      default: []
      actions1:
      - 'to_all: message: &4&lADMIN &c%player% &ejoined the game.'
      actions2:
      - 'to_all: message: &b&lVIP &a%player% &ejoined the game.'
```

### 参数
在条件执行中，可以添加参数，以便在某些情况下减少动作组的数量

例如，假设我们现在有下面这个事件：
```yaml {19,27}
# This event will check when a player uses the /vip <player> command 
# and set the specified player to the vip rank. 
# An error will show when the player doesn't have permissions. Another
# error will show when the player doesn't use arguments.
vip_rank:
    type: player_command
    conditions:
    - "%main_command% == /vip"
    - "%player_has_permission_conditionalevents.admin% != yes execute error_action1"
    - "%args_length% < 1 execute error_action2"
    actions:
      default:
      - "cancel_event: true"
      - "player_command: lp user %arg_1% parent set vip"
      error_action1:
      - "cancel_event: true"
      - "centered_message: &c&m                    &r &c&lERROR! &c&m                    "
      - "centered_message:  "
      - "centered_message: &c权限不足"
      - "centered_message:  "
      - "centered_message: &c&m                                                    "
      - "playsound: BLOCK_NOTE_BLOCK_PLING;10;0.1"
      error_action2:
      - "cancel_event: true"
      - "centered_message: &c&m                    &r &c&lERROR! &c&m                    "
      - "centered_message:  "
      - "centered_message: &c参数错误 正确格式为&7/vip <player>"
      - "centered_message:  "
      - "centered_message: &c&m                                                    "
      - "playsound: BLOCK_NOTE_BLOCK_PLING;10;0.1"
```
在示例中 `error_action1`和`error_action2`两个动作中存在太多重复内容，只有错误信息是不同的。此时就可以拿出不同的部分，把不同的部分当作参数由调用处传入。
参数用花括号`{}`在条件执行的动作组名称后指定，可以使用`;`指定多个参数
::: info `execute error_action{%变量1%=变量1的内容;%变量2%=变量2的内容}`
:::

上面示例改成参数传递的形式修改之后如下：
```yaml {5,6,15}
vip_rank:
    type: player_command
    conditions:
    - "%main_command% == /vip"
    - "%player_has_permission_conditionalevents.admin% != yes execute error_action{%error_message%=&c权限不足}"
    - "%args_length% < 1 execute error_action{%error_message%=&c参数错误 正确格式为&7/vip <player>}"
    actions:
      default:
      - "cancel_event: true"
      - "player_command: lp user %arg_1% parent set vip"
      error_action:
      - "cancel_event: true"
      - "centered_message: &c&m                    &r &c&lERROR! &c&m                    "
      - "centered_message:  "
      - "centered_message: %error_message%"
      - "centered_message:  "
      - "centered_message: &c&m                                                    "
      - "playsound: BLOCK_NOTE_BLOCK_PLING;10;0.1"
```
我们在执行的时候给error_action传递了一个参数叫`error_message`。然后在error_action中使用了传进来的参数`error_message`

## 示例

::: tabs

@tab 示例1
下面是一个玩家攻击事件的完整配置示例：
```yaml
example1:
    type: player_attack
    conditions:
    - '%victim% == PLAYER'
    - '%item% == DIAMOND_SWORD'
    - '%item_name% == 超级剑'
    - '%random_1_10% >= 8'
    actions:
      default:
      - 'message: &aYour diamond sword poison effect was activated!'
      - 'to_target: give_potion_effect: POISON;120;1'
```
当玩家使用名为`超级剑`的钻石剑攻击另一名玩家的时候，系统将随机生成一个数字，如果该数字大于等于8时会触发此事件。事件触发后会向玩家发送一条信息，目标玩家将受到中毒效果

@tab 示例2
```yaml
example2:
    type: block_interact
    conditions:
    - '%block_x% == 40'
    - '%block_y% == 60'
    - '%block_z% == 40'
    - '%block_world% equals lobby'
    - '%block% equals STONE_BUTTON'
    - '%action_type% equals RIGHT_CLICK'
    - '%statistic_jump% < 1000 execute actions2'
    actions:
      default:
      - "message: &aYou''ve received $5000!"
      - 'console_command: eco give %player% 5000'
      actions2:
      - 'message: &cYou need at least 1000 jumps to use this button.'
```
如果玩家在一个名为`lobby`的世界中右键点击一个坐标为`X`为40`Y`为60`Z`为40的石头按钮时会触发此事件  
如果玩家跳跃次数不超过1000次，则执行actions2动作，否则执行default动作

@tab 示例3
```yaml
example3:
    type: item_interact
    conditions:
    - '%item_name% endsWith 的斧头'
    - '%item_name% !contains %player_name%'
    actions:
      default:
      - "message: &cThis is not your axe so you can''t use it."
      - 'cancel_event: true'
```
如果在你的服务器上有一个名为 `XX的斧头`的物品，每个玩家都有一把自己的斧头，上面有他们自己的玩家名。如果玩家正在使用斧头是以`的斧头`结尾的名字，但是名字中的玩家名并不是使用斧头这个玩家的玩家名，此事件就会触发，并且会取消使用斧头的事件，并给玩家发送消息 该物品不属于他

@tab 示例4
下面是一个包含数学公式的示例

```yaml
example4:
    type: player_command
    allow_math_formulas_in_conditions: true
    conditions:
    - '%command% equals /test-kills'
    - '%statistic_player_kills% >= %statistic_deaths%*2 execute actions1'
    actions:
      actions1:
      - 'message: &aYou have a lot of kills, congrats!'
      - 'cancel_event: true'
      default:
      - 'message: &cYou need to have AT LEAST 2 times more kills than deaths'
      - 'message: &cto use this command. Currently these are your stats:'
      - 'message: &7Kills: &6%statistic_player_kills%'
      - 'message: &7Deaths: &6%statistic_deaths%'
      - 'cancel_event: true'
```
在本示例中创建了一个命令 `/test-kills` 当玩家发送此命令之后，插件会检查玩家的击杀数是否大于玩家的二倍死亡次数。如果击杀数大于二倍死亡次数，则会触发actions1动作，否则会触发default动作

@tab 示例5
```yaml
example5:
    type: player_chat
    conditions:
    - "%message% matches (.*)h+e+l+l+o+(.*)"
    actions:
      default:
      - "message: &8[&7Server&8] &eHello %player%!"
```
检查玩家是否发送了 与`hello`相似的消息
:::

