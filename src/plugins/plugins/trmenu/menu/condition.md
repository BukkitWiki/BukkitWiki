# 条件

## 引入

“条件表达式” 是可用在以下场景中使用的单个字符串

* 动作参数
* 反应（动作组）条件
* 子图标筛选条件

其执行结果应当返回布尔值（Boolean），即 `true` / `false`

目前，TrMenu 以支持 Kether , JavaScript , JEXL 三种类型的表达式作为条件编译使用

其中默认情况下统一调用 Kether \*\(推荐\)

## 使用

Kether 表达式直接使用，JavaScript 表达式需加以 `js:`  前缀且规范变量处理，JEXL 表达式需加以 `jexl:`  前缀且规范变量处理

例如创建一个当玩家有 `vip.user` 权限或余额大于等于 `1000` 时才成立的条件

* Kether: `any [ perm *vip.user money *1000 ]` 
* JavaSctipt: `js: player.hasPermission("vip.user") || utils.hasMoney(player, 1000.0)` 
* JEXL `jexl: player.hasPermission("vip.user") or utils.hasMoney(player, 1000.0)`

三种语法的格式可用通过 `SCRIPT` 章节进一步学习

## 进阶

```component PageLink
path: ../script/kether.md
```
```component PageLink
path: ../script/javascript.md
```
```component PageLink
path: ../script/jexl.md
```


> 深入了解三种语法的结构和在 TrMenu 中的应用场景，制作更强大的菜单

