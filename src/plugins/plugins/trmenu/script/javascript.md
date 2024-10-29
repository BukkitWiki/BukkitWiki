---
description: 本节需要有一定的 Java / JavaScript 或类似编程基础方便理解
---

# JavaScript

## 对象

TrMenu 的 JavaScript 引擎目前提供以下对象

* `bukkitServer` 即 Bukkit.getServer\(\)
* `utils` 即 me.arasple.mc.trmenu.module.internal.script.js.Assist.INSTANCE
* `player` 即 玩家本身
* `session` 即 me.arasple.mc.trmenu.module.display.MenuSession

### 插件挂钩

可以在 JavaScript 中调用挂钩的插件,比如我想调用 EcoItems 的 API 来获得物品,可以通过`ecoitems.getItem("my_item")`来获得

聪明的你应该已经发现了,绑定到 JavaScript 命名空间的名称是插件名字的全小写

目前支持挂钩的

* EcoItems
* Floodgate
* HeadDatabase
* HMCCosmetics
* ItemsAdder
* MagicCosmetics (注意:这个插件的 JS 命名空间是 magicAPI)
* MagicGem
* MMOItems
* NBTAPI
* NeigeItems
* Oraxen
* PlayerPoints
* SkinsRestorer
* Skulls
* SXItem
* Triton
* Vault
* Zaphkiel
* MythicMobs

如果你并不想要，可以关闭`Export-Hook-Plugin`

### Java 命名空间

#### 别名

在`settings.yml`中的`Bindings.Binding-Map`可以将类以别名导出到 JS 命名空间

比如
```yaml

Bindings:
  Binding-Map:
    "Bukkit": "org.bukkit.Bukkit"
    "EntityType": "org.bukkit.entity.EntityType"
```

#### 奇技淫巧

```javascript
java.lang["System"].out.println("TrMenu 真 NB")
```

### Java.type

创建别名

```javascript
var System = Java.type("java.lang.System")
System.out.println("TrMenu 真 NB")
```

## 函数

TrMenu 的 JavaScript 引擎目前提供以下函数

* `vars(String input)`  返回替换函数变量
* `varInt(String input)` 替换变量并转换为整型

## 注意

* TrMenu 的 JavaScript 均会预编译缓存，一切变量使用都需要通过函数处理
* 表示 “或” 的符号为 `||` , 表示 “与” 的符号为 `&&`

## 实例

* 判断有无权限
  * 可直接调用 player 对象的方法，`player.hasPermission("perm")` 

## utils

[TrMenu/Assist.kt](https://github.com/TrPlugins/TrMenu/blob/stable/v3/plugin/src/main/kotlin/trplugins/menu/module/internal/script/js/Assist.kt)
## TrMenu GraalJS

**该功能仍处于实验性**

让 TrMenu 使用 GraalJS,根据性能测试,GraalJS 的执行性能在 Nashorn 的两倍以上,并且支持最新的JS语法

### 安装

GraalJS 需要在 GraalVM 上才可以完全发挥性能,其他 JDK 也能用

[下载 TrMenu GraalJS](https://github.com/lilingfengdev/TrMenu-Graal/releases/download/latest/TrMenu-Graal-all.jar),作为插件进行安装

### 语法扩展

#### 包加载

```javascript
Java.addToClasspath(location)
```

将指定位置.jar（文件或目录路径字符串）添加到 Java 的类路径中

#### JS执行

```javascript
load(source)
```

加载（解析并执行）指定的 JavaScript 源代码

#### 包访问

GraalVM JavaScript 提供了一个全局属性：`Packages`

```javascript
Packages.java.lang.System.out.println("TrMenu 真 NB")
```

#### TODO

不想写了(:,还有()