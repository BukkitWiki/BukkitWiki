---
title: 动作
dir:
  link: true
---

## Message 消息
向玩家发送消息
```yaml
message: &aGreat %player%! You''ve just received $5000!
```

## Centered Message 居中信息
向玩家发送一条居中的消息
```yaml
centered_message: &c&lWELCOME TO THE SERVER
```

## Console Message 控制台消息
向控制台发送消息
```yaml
console_message: %player_name% left the server with IP %player_ip%
```

## JSON Message JSON信息
向玩家发送JSON消息。可以使用[此工具](https://minecraft.tools/en/json_text.php)生成json消息
```yaml
json_message: {"text":"Welcome to the server","underlined":true,"color":"red"}
```
## Mini Message MiniMessage信息
向玩家发送MiniMessage消息 ==仅限于Paper1.19.4以上版本==
可使用[此工具](https://docs.advntr.dev/minimessage/index.html)生成MiniMessage消息
```yaml
mini_message: Welcome to the <b><color:#91ff52>SERVER</color></b>!
```

## Console Command 控制台命令
以控制台的身份执行命令
```yaml
console_command: eco give %player% 5000
```

## Player Command 玩家指令
以玩家的身份执行命令
```yaml
player_command: warp survival
```

## Player Command as OP 以管理员身份执行命令
以管理员身份执行命令（不推荐）
```yaml
player_command_as_op: help
```

## Player Send Chat 玩家发送聊天
以玩家身份发送聊天信息，同样可以发送指令
```yaml
player_send_chat: &2Hello
player_send_chat: /rewards
```

## Teleport 传送
传送玩家 格式为: `"teleport: world;x;y;z;yaw;pitch"`

```yaml
teleport: lobby;0;60;0;90;0
```

## Give Potion Effect 药水效果
给玩家添加一个药水效果 格式为: `"give_potion_effect: effect;duration_in_ticks;level;show_particles"`
所有药水效果参看[此页面](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html)
```yaml
give_potion_effect: POISON;120;1;false
```

## Remove Potion Effect 移除药水效果
移除玩家身上的药水效果
```yaml
remove_potion_effect: POISON
```

## Cancel Event 取消事件
是否取消事件 格式为: `"cancel_event: true/false"`
```yaml
cancel_event: true
```

## Kick 踢出服务器
将玩家踢出服务器
```yaml
kick: &cWhat are you trying to do?
```

## Play Sound 播放音效
向玩家播放音效 格式为: `"playsound: sound;volume;pitch;(optional, location)<x>,<y>,<z>,<world>"`
所有音效参考[此页面](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Sound.html)
1.8及以下版本参考[此页面](https://helpch.at/docs/1.8.8/index.html?org/bukkit/Sound.html)
```yaml
playsound: BLOCK_NOTE_BLOCK_PLING;10;0.1

# 在某个坐标播放
playsound: BLOCK_NOTE_BLOCK_PLING;10;2;100,60,-127,world
```

## Play Sound Resource Pack 播放材质包音效
向玩家播放材质包中的音效 格式与Play Sound相同
```yaml
playsound_resource_pack: my_custom_sound;10;1

# 在某个坐标播放
playsound_resource_pack: my_custom_sound;10;2;100,60,-127,world
```

## Stop Sound 停止播放音效
停止玩家播放的音效
格式为: `stopsound: <sound>` 仅适用于1.10以上版本  
停止播放所有声音`stopsound: all` ==仅适用于1.17以上版本==

```yaml
stopsound: BLOCK_NOTE_BLOCK_PLING
stopsound: all
```

## Gamemode 游戏模式
为玩家设置游戏模式，允许的值有 `SURVIVAL`, `CREATIVE`, `ADVENTURE`, `SPECTATOR`
```yaml
gamemode: CREATIVE
```

## Send To Server 切换服务器
在BC服务器中切换子服
```yaml
send_to_server: lobby
```

## ActionBar
向玩家发送ActionBar信息 格式为: `"actionbar：内容;持续时间"`(持续时间以ticks为单位) 在重复事件中,使用0表示无闪烁播放actionbar
```yaml
actionbar: &6Welcome to the server;120
```

## Title 标题
向玩家发送标题 格式为: `"title: 淡入时长;停留时长;淡出时长;标题;子标题"`(淡入、停留、淡出的时长均以ticks为单位) 标题和子标题如果有哪个不需要请填写`none`
```yaml
title: 20;40;20;&6This is a title;none
```

## Damage 伤害
给玩家造成指定数量的伤害
```yaml
damage: 5
```

## Set On Fire 点燃
以Ticks为单位，在一定时间内点燃玩家
```yaml
set_on_fire: 60
```

## Freeze 冻结
以Ticks为单位，在一定时间内冻结玩家
==仅适用于1.17以上版本==
```yaml
freeze: 300
```

## Heal 治疗
治疗玩家指定数量的血量
```yaml
heal: 5
```

## Set Food Level 设置饱食度
设置玩家当前的饱食度 应介于0和20之间
```yaml
set_food_level: 20
```

## Clear Inventory 清理背包
清理玩家背包
```yaml
clear_inventory
```

## Wait 等待
执行下一步动作前等待X秒
```yaml
 - 'message: &a3'
 - 'wait: 1'
 - 'message: &a2'
 - 'wait: 1'
 - 'message: &a1'
 - 'wait: 1'
 - 'message: &aGo!'
```

## Wait Ticks 等待(单位ticks)
执行下一步动作前等待X个Ticks
```yaml
 - 'message: &a3'
 - 'wait_ticks: 20'
 - 'message: &a2'
```

## Remove Item 拿取物品
从玩家背包中拿取X数量的物品 格式为: `remove_item: <type>;<amount>;datavalue: <datavalue>;name: <name>;lorecontains: <lore_line>`

::: warning Datavalue、name和lorecontains均为可选，不要使用颜色代码 
:::
::: info 所有物品类型参考[此页面](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html) 1.8以下版本参考[此页面](https://helpch.at/docs/1.8/org/bukkit/Material.html) 
:::

还可以使用PlaceholderAPI的[CheckItem扩展](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders#checkitem) 格式为: `remove_item: %checkitem_remove_,,<...>%`


::: tabs
@tab 示例1
```yaml
# This will remove x5 Diamonds from the player inventory.
remove_item: DIAMOND;5
```
@tab 示例2
```yaml
# This will remove x5 Diamonds named 'Unique Diamond' 
# from the player inventory.
remove_item: DIAMOND;5;name: Unique Diamond
```
@tab 示例3
```yaml
# This will remove x1 Coal Block named "Burst Turret"
# from the player inventory.
# You must download the CheckItem expansion from PlaceholderAPI
# using /papi ecloud download CheckItem
remove_item: %checkitem_remove_mat:COAL_BLOCK,nameequals:&aBurst &6Turret,amt:1%
```
:::

## Remove Item Slot 从某个槽位拿取物品
从玩家背包的某个槽位中拿取X数量的物品 格式为: `remove_item_slot: <slot>;<amount>`
::: info 有效槽位: HAND, OFF_HAND, HELMET, CHESTPLATE, LEGGINGS, BOOTS 也可使用数字表示槽位 参考[此页面](https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b2/Items_slot_number.png/revision/latest/scale-to-width-down/352?cb=20170708121246)
:::

## Firework 烟花
在玩家所在位置生成烟花 格式: `firework: colors:<color1>,<color2> type:<type> fade:<color1>,<color2> power:<power> (optional)location:<x>;<y>;<z>;<world>`

::: warning fade选项是可选的 其余都是必填的 允许添加2种以上颜色 
:::

::: tabs
@tab 示例1
```yaml
firework: colors:YELLOW,RED type:BALL fade:AQUA power:0
```
@tab 示例2
```yaml
firework: colors:BLACK,WHITE type:BURST power:1 location:%block_x%;%block_y%;%block_z%;%block_world%
```
:::

## Lightning Strike 雷击
在特定位置生成不会造成伤害的雷击效果 格式: `lightning_strike: <world>;<x>;<y>;<z>`
```yaml
lightning_strike: %victim_block_world%;%victim_block_x%;%victim_block_y%;%victim_block_z%
```

## Particle 粒子
在玩家所在位置生成粒子 格式: `particle: effect:<effect_name> offset:<x>;<y>;<z> speed:<speed> amount:<amount> (optional)location:<x>;<y>;<z>;<world>`

::: info 粒子所有名称参考[此页面](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html)
:::

::: warning 仅适用于1.9以上版本
:::

::: tabs
@tab 示例1
```yaml
particle: effect:EXPLOSION_LARGE offset:0.1;0.1;0.1 speed:1 amount:5
```
@tab 示例2
```yaml
particle: effect:REDSTONE;25;229;198 offset:0.1;0.1;0.1 speed:0.1 amount:2 location:%block_x%;%block_y%;%block_z%;%block_world%
```

:::

## Give Item 给予物品
给玩家物品 格式: `give_item: id:<id>;<property>:<value>;<propertyN>:<valueN>`

::: info 所有参数    

> 基础参数
> id:\<id> (必填，所有id参考[此页面](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html))  
> amount:\<amount> (数量)  
> durability:\<durability> (耐久)  
> custom_model_data:\<custom_model_data>  
> name:\<name>  
> lore:\<lore第一行>|\<lore第N行>  
> enchants:<附魔1>-<等级>|<附魔N>-<等级> (所有附魔参考[此页面](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html))  
> flags:\<flag1>|\<flagN> (所有flag参考[此页面](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/ItemFlag.html))
 
> 头参数
> skull_texture:\<skull_texture> (材质 参考[此页面](https://minecraft-heads.com/custom-heads))
> skull_owner:\<skull_owner> (玩家姓名)
> skull_id:\<skull_id> (SkullId 参考[此页面](https://minecraft-heads.com/custom-heads))

> 槽位参数
> slot:\<slot> (把给予的物品放在某个槽位上 有效槽位:  HAND, OFF_HAND, HELMET, CHESTPLATE, LEGGINGS, BOOTS 或使用数字槽位 参考[此页面](https://mcutils.com/inventory-slots))

> 保存的物品
> saved_item:\<name> (使用`/ce item save`命令可保存物品，如果想发送保存的物品请使用此参数)
:::

::: tabs
@tab 示例1
```yaml
give_item: id:IRON_HELMET;amount:1;name:&6Basic Helmet
```
@tab 示例2
```yaml
give_item: id:NETHERITE_SWORD;amount:1;name:&4&lNether Sword;lore:&7This sword was forged in the cursed|&7lands of the Nether...;flags:HIDE_ATTRIBUTES;enchants:FIRE_ASPECT-2
```
@tab 示例3
```yaml
give_item: id:PLAYER_HEAD;amount:16;skull_owner:%player_name%
```
@tab 示例4
```yaml
give_item: id:NETHERITE_SWORD;amount:1;slot:OFF_HAND;slot_replace:true
```
@tab 示例5
```yaml
give_item: saved_item:super_sword
```
:::

## Drop Item 掉落物品
在特定位置掉落物品 格式: `drop_item: location:<x>,<y>,<z>,<world>;id:<id>;<property>:<value>;<propertyN>:<valueN>`

::: info 所有参数
> id:\<id> (必填，所有id参考[此页面](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html))  
> 所有`give_items`的参数此处也可用
:::
```yaml
drop_item: location:%block_x%,%block_y%,%block_z%,%block_world%;id:DIAMOND;name:&bUnique Diamond
```

## Set Block 设置方块
在某个位置放置方块 格式: `set_block: location:<x>,<y>,<z>,<world>;id:<id>;block_data:<block_data>`
仅适用于1.13以上版本
::: 所有可填参数
> id:\<id> (必填 所有id参考[此页面](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html))
> location:\<x>,\<y>,\<z>,\<world> (位置 必填)

> 可选参数
> Block data
> 可为即将放置的方块设置方块数据
> 格式为: `<property1>=<value1>,<propertyN>=<valueN>`
> 所有数据参考[此页面](https://minecraft.fandom.com/wiki/Java_Edition_data_values#Block_states)

> 头参数
> skull_texture:\<skull_texture> (材质 参考[此页面](https://minecraft-heads.com/custom-heads))
> skull_owner:\<skull_owner> (玩家姓名)
:::

::: tabs
@tab 示例1
```yaml
set_block: location:50,50,-256,world;id:DIAMOND_BLOCK
```
@tab 示例2
```yaml
# Useful to regenerate blocks
set_block: location:%block_x%,%block_y%,%block_z%,%block_world%;id:%block%;block_data:%block_data%
```
@tab 示例3
```yaml
set_block: location:50,50,-256,world;id:CHEST;block_data:facing=north
```

:::

## Summon 召唤
在特定位置生成一个实体 格式: `summon: location:<x>,<y>,<z>,<world>;entity:<entity>;<property>:<value>;<propertyN>:<valueN>`

::: info 所有参数
> `entity:<entity>` (实体类型 *必填 参考[此页面](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html))  
> `location:<x>,<y>,<z>,<world>` (位置 *必填)

> 可选参数  
> `custom_name:<custom_name>` (显示在实体上方的自定义名称)  
> `health:<health>` (实体最大生命值)  
> `amount:<amount>` (要生成的实体数量)

> 装备参数
> `equipment:<helmet>,<chestplate>,<leggings>,<boots>`  
> 实体的装备，填写[类型名](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) 如果有哪个部位不想放置装备请填写 `none`  
> `<helmet>`可以填写头base64数据  
> ==也可使用`/ce save item`保存的物品 格式为`saved_item:<name>`==
:::

::: tabs
@tab 示例1
```yaml
summon: location:0,68,0,spawn;entity:SHEEP
```
@tab 示例2
```yaml
summon: location:0,68,0,spawn;entity:SKELETON;custom_name:&cShadow Warrior;health:80
```

@tab 示例3
```yaml
summon: location:%player_x%,%player_y%,%player_z%,%player_world%;entity:ZOMBIE;custom_name:&4Aberration;equipment:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZDJhMmFlNzQ5ZDAzYWU1Y2U3MmJjMmEyNmQyZTJhNThjZDVmMmU0MGM4ODMxODRiZjk2YzZhMjcwMDc4MmQyNiJ9fX0=,IRON_CHESTPLATE,none,none;amount:4
```
@tab 示例4
```yaml
summon: location:0,90,0,world;entity:ZOMBIE;equipment:none,saved_item:orange_chestplate,none,none;amount:1
```

:::

## Call Event 调用事件
执行调用事件 格式: `call_event: <event_name>;%variable1%=<value1>;%variableN%=<valueN>`

::: tip 可传递参数
:::

```yaml
example:
    type: player_command
    conditions:
    - "%main_command% == /test"
    actions:
      default:
      - "cancel_event: true"
      - "message: This is a test message from event 'example'"
      - "call_event: example2;%example_variable%=Something"

example2:
    type: call
    conditions:
    - "%example_variable% == Something"
    actions:
      default:
      - "message: This message will be sent only when event 'example2' is called"
```

## Execute Action Group 执行动作组
随机执行事件中的另一个动作组 格式: `execute_action_group: <group1>:<prob1>;<groupN>:<probN>`  
`<group>` 是动作组名称 `<prob>`是选择这个动作组的概率(整数) 总数可以不是100
::: tip 如果只想执行一个动作组而不是随机执行 可以使用 `execute_action_group: <group1>:100`
:::

```yaml
example:
    type: player_command
    conditions:
    - "%main_command% == /randomfirework"
    actions:
      default:
      - "cancel_event: true"
      - "execute_action_group: firework1:70;firework2:30;firework3:30"
      firework1:
      - "firework: colors:YELLOW,RED type:BALL fade:AQUA power:0"
      firework2:
      - "firework: colors:BLACK,WHITE type:BURST power:1"
      firework3:
      - "firework: colors:GREEN,BLUE type:BURST power:1"
```