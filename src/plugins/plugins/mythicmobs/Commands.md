---
title: '命令和权限'
---

## 命令
MythicMobs拥有一个简单的命令结构，输入/mythicmobs可以所有子命令命令的菜单，每一级子命令都会提供一个帮助菜单。所有用[]包围的命令参数都是必填参数，<>则是可选参数。

### 标志
在一些命令的第一个参数前可以加入一组标识用于改变命令的执行方式。
|标志|说明|可用命令|示例|
|---|----|------|-----|
|-s|关闭命令的消息提醒|`mm mobs spawn` <br> `mm item give` <br>`mm test cast` <br>`mm test mechanic`|`/mm test cast -s [metaskill]` 执行一个技能但不会向玩家发送消息提醒|
|-p|以指定玩家的身份执行命令|`mm mobs spawn`|`/mm m s -p <player> [mobname]`|
|-t|在目标位置执行命令|`mm mobs spawn`|`/mm m s -t [mobname]`|
|-n|将生成怪物的原因由`命令生成`修改为`自然生成`|`mm mobs spawn`|`/mm m s -n [mobname]`|
|-p|杀死包括持久化类型在内的所有怪物|`mm mobs killall`|`/mm m killall -p`|
|-f|杀死所有指定派系的怪物|`mm mobs kill`|`/mm m kill -f [派系名称]`|
|-d|如果背包已满，将物品丢到地上|`mm item give`|`/mm i give -d [物品名]`|

<br>

### 基础命令
- /mm (别名: /mythicmobs) 插件的基本命令。显示所有子命令
- /mm debug [level] (别名: /mm d [level]) 设置插件调试等级。0=关闭
- /mm debugmode [true/false] 启用调试模式,启用之后会禁用随机生成器、怪物生成器以及其他会导致调试困难的随机事件。
- /mm reload (别名: /mm r)重载插件
- /mm save 强制保存所有存活的怪物和生成器。
- /mm version 显示MythicMobs的版本

### 物品命令
- /mm items (别名: /mm i) 显示所有物品相关的命令
- /mm items get [物品id] <数量> 给自己mm中的物品
- /mm items give [玩家名] [物品id] <数量> 给指定玩家mm中的物品
- /mm items give -s [玩家名] [物品id] <数量> 给指定玩家mm中的物品但不发送消息提醒
- /mm items give -d [玩家名] [物品id] <数量> 给指定玩家mm中的物品，如果玩家背包已满则将多余的物品丢到地上。
- /mm items list 列出所有已经配置的mm物品
- /mm items import <物品id> [fileName] 将手上拿的物品导入到items文件夹。（文件夹默认为`物品id.yml`）
- /mm items browse 打开一个包含所有mm物品的gui（仅限付费版插件）

### 怪物命令
- /mm mobs (别名: /mm m) 显示所有怪物相关的命令
- /mm mobs info [怪物id] 显示有关怪物的信息
- /mm mobs list 显示服务器已经加载的怪物列表
- /mm mobs listactive 显示已经生成的怪物列表，以及每个怪物的数量
- /mm mobs kill [怪物id] 杀死指定id的所有怪物
- /mm mobs killall 杀死所有已经生成的怪物
- /mm mobs killall -p 删除所有持久化怪物
- /mm mobs spawn [怪物id]:`<level>` `<amount>` <world,x,y,z,yaw,pitch> 携带参数生成指定怪物
- /mm mobs spawn -s [怪物id]:`<level>` `<amount>` `<world,x,y,z,yaw,pitch>` 静默地携带参数生成指定怪物
- /mm mobs stats 统计服务器上加载了多少怪物

### 怪物蛋指令
- /mm egg (别名: /mm e) 显示所有有关怪物蛋相关的命令
- /mm egg get [怪物id] <数量> 给自己指定的怪物蛋
- /mm egg give [玩家名] [怪物id] <数量> 给指定玩家指定的怪物蛋

### 刷新点命令
- 刷怪点的大多数命令中可以使用特殊过滤器和通配符来代替刷怪点id，从而实现在多个刷怪点中同时执行命令
- 使用 g:组名 对整组刷怪点执行命令
- 使用 r:半径 对指定半径范围内的所有刷怪点执行命令
- 使用 ? 表示单字符通配符 例如： `/mm s set ?at leashrange 32` 这条命令将会影响名为 Cat、Rat和Fat的刷怪点，但不会影响名为Matt的刷怪点。
- 使用 * 表示任意数量的字符通配符 例如： `/mm s set T* leashrange 32` 将会影响所有以T开头的刷怪点
- 使用 * 作为刷怪点名称将会影响到所有刷怪点
- /mm spawners (别名: /mm s) 显示所有有关刷怪点的命令
- /mm s create [刷怪点id] [怪物id]
  - 在玩家指向的方块位置创建一个新的刷怪点
- /mm s set [刷怪点id] [配置项] [值]
  - 更改刷怪点的设置。所有配置项请见 #TODO:刷怪点介绍页
- /mm s addcondition [刷怪点id] [条件] [值]
  - 添加一个刷怪点刷怪条件，在刷怪计时结束后判断条件是否继续生成
  - #TODO: 刷怪条件
- /mm s removecondition [刷怪点id] [条件]
  - 移除一个刷怪条件
- /mm s info [刷怪点id]
  - 显示刷怪点的信息
- /mm s listnear <范围>
  - 显示指定范围的所有刷怪点名称
  - 范围单位为区块
- /mm s resettimers [刷怪点id]
  - 重置指定刷怪点的计时器
- /mm s activate [刷怪点id] 激活指定的刷怪点
- /mm s cut [搜索内容]
  - 类似电脑中的剪切功能，搜索并剪切指定文本的刷怪点
  - 剪切之后使用/mm s paste粘贴出来
- /mm s cut g:A组
  - 剪切A组中的所有刷怪点
- /mm s cut r:200
  - 剪切200个格子为半径的所有刷怪点
- /mm s cut Elementals_ 
  - 剪切所有名称以Elementals_开头的刷怪点
- /mm s cut 剪切所有刷怪点 请小心使用此命令
- /mm s paste
  - 将一组剪切的刷怪点粘贴到一个新的`相对位置`
  - 刷怪点可以多次粘贴
- /mm s undo
  - 撤销之前的剪切操作，并将其放回原处
  - 类似电脑中的ctrl+z操作

### 插针命令
#TODO:插针命令

### 实用命令
- /mm test cast [技能名] 释放一个技能
- /mm test mechanic [路线] 运行一个线路
- /mm i get [掉落表] 从掉落表中获取物品

### 信号命令
- /mm signal `<UUID>` <信号>
  - 用于向怪物发出切换特定技能的信号
  - 仅在使用怪物UUID时有效，不可以使用怪物名称
  - 通常用在 tellraw 命令
  - 所有玩家都有权限执行此命令。但是玩家在没有权限的时候获取不到怪物的UUID和内部信号名称

## 权限
目前，MythicMobs只支持为部分命令提供了权限节点

### 一般权限
- mythicmobs.admin 授予插件的完全访问权限

### 命令
- mythicmobs.command.`<command>` 单个命令权限
- mythicmobs.command.info `/mm info` 命令的权限
- mythicmobs.command.mobs.list `/mm mobs list` 命令的权限
- mythicmobs.command.signal `/mm signal <mob.uuid> <signal>` 命令的权限
- mythicmobs.command.test.cast 使用`/mm test cast`命令的权限
- mythicmobs.command.test.addthreat 使用`/mm test addthreat`命令的权限
- mythicmobs.command.test.reducethreat 使用`/mm test reducethreat` 命令的权限