---
title: GUI
---

## 语法
标准GUI配置文件格式如下
```yaml
menu_title: "TEXT"
open_command: COMMAND
open_requirement: EXPRESSION
open_commands:
  - "[ACTIONTYPE] ACTION"
  - "[ACTIONTYPE] ACTION"
inventory_type: "TEXT"
size: #
update_interval: #
items:
```

## 菜单标题
```yaml
menu_title: "TEXT"
```
显示在菜单顶部的菜单标题，此处可以使用PAPI变量及颜色代码

## 打开命令
```yaml
open_command: COMMAND
```

多个指令
```yaml
open_command:
  - COMMAND
  - COMMAND2
```

用于打开菜单的命令，只能是一个单词（中间不能加空格）
::: info 要禁用打开指令只需要删除open_command这一行即可
:::

## 打开菜单条件
```yaml
open_requirement:
 requirements:
   TEXT:
     type: <type>
```
设置玩家打开菜单所需条件，更多信息请查看[条件](#TODO("条件"))页面

## 打开后执行动作
``` yaml
open_commands:
  - "[ACTIONTYPE] ACTION"
  - "[ACTIONTYPE] ACTION"
```
当玩家打开菜单时执行的操作

## 关闭执行动作
``` yaml
close_commands:
  - "[ACTIONTYPE] ACTION"
  - "[ACTIONTYPE] ACTION"
```
::: warning 只有在玩家点击带关闭操作(`[close]`)的物品而关闭菜单时才会运行
:::

## 菜单类型
``` yaml
inventory_type: "TEXT"
```
默认值：`CHEST` <br/><br/>
支持的类型：
- `ANVIL` 铁砧
- `BARREL` 桶
- `BEACON` 信标
- `BLAST_FURNACE` 高炉
- `BREWING` 酿造台
- `CARTOGRAPHY` 制图台
- `DISPENSER` 发射器
- `DROPPER` 投掷器
- `ENCHANTING` 附魔台
- `ENDER_CHEST` 末影箱
- `FURNACE` 熔炉
- `GRINDSTONE` 砂轮
- `HOPPER` 漏斗
- `LOOM` 织布机
- `PLAYER` 玩家
- `SHULKER_BOX` 潜影盒
- `SMOKER` 烟熏炉
- `WORKBENCH` 工作台

## 尺寸
``` yaml
size: #
```
默认值: `54`

支持值: 
- 9
- 18
- 27
- 36
- 45
- 54

用于设置菜单的大小 

## 注册命令
``` yaml
register_command: true
```
是否向服务器注册打开命令
::: info 服务器需要重新启动
:::

## 参数
``` yaml
args:
- "TEXT"
- "TEXT"
- "TEXT"
```
在玩家输入打开命令时可在命令后面加入`参数` 命令后面的`参数`将和此处的配置一一对应 以便在菜单中调用参数

```yaml
/COMMAND 第一个参数 第二个参数 或者 更多 更多
```
```yaml
args:
- first
- second
- last
```
- 此时在菜单中使用 {first} 就会返回 `第一个参数` 
- 同样 {second} 会返回 `第二个参数`
- 不过在菜单中调用 {last} 会返回 `或者 更多 更多` 这是由于菜单中只定义了三个参数但是玩家输入了三个以上的参数。按照1对1的规则来判断就会剩余两个参数没有变量名接收，所以最后一个 `last` 就会接受结尾的所有变量



