---
description: '[] 为必填参数，<> 为选填参数'
---

# 插件命令

## 主命令

> 插件的主命令
>
> 正常玩家无需设置任何权限

* 名称：`trmenu` `menu` 
* 权限: `trmenu.access` 

## List

> 列出已加载的菜单

* 权限: `trmenu.command.list` 
* 参数
  * &lt;Filter&gt; 过滤菜单名称

## Open

> 打开指定菜单
>
> 仅限 OP 可以使用指令打开，若需要玩家打开请给菜单编写 [Bindings](https://hhhhhy.gitbook.io/trmenu-v3/menu/configuration/bindings) 选项

* 权限: ~~`trmenu.command.open`~~
* 参数
  * \[ID\]:&lt;Page&gt; 菜单名称和指定页码
  * &lt;Player&gt; 指定玩家，不填则默认自己
  * &lt;菜单参数&gt; 传入的菜单参数，作为变量使用
* 示例
  * `trmenu open Example BlackSKY` 为 BlackSKY 玩家打开 Example 菜单
  * `trmenu open Shop:3` 为自己打开 Shop 菜单，页码 3

## Reload

> 重新载入菜单

* 权限: `trmenu.command.reload` 

## Template

> 模板创建功能，快速布局菜单（当前仅支持箱子容器）

* 权限: `trmenu.command.template` 
* 参数
  * &lt;Rows&gt; 菜单的行数大小（1~6）

## Action

> 测试 TrMenu 动作

* 权限: `trmenu.command.action` 
* 参数
  * \[ID\] 执行动作玩家对象的名称
  * \[Action\] 动作行
* 注意
  * 默认将向命令执行者打印动作返回 & 相关消耗
  * 隐藏此打印功能需要在动作行最前面加以 `#` 标记

## Item

> 管理控制物品

* 权限: `trmenu.command.item` 
* 参数
  * \[Method\] 操作类型
    * toJson 转换手中物品为 JSON 文本格式
    * fromJson 将参数2的文本内容转换为物品对象
    * save 保存物品到物品仓库
    * get 取得物品从物品仓库
    * delete 删除物品自物品仓库
  * &lt;Value&gt; 值

## Sounds

> 预览音效

* 权限: `trmenu.command.sounds` 
* 参数
  * &lt;Filter&gt; 过滤音效名称

## Debug

> 调试功能

* 权限: `trmenu.command.debug`

