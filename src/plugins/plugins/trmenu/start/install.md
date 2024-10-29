---
title: 安装 
---

从正规渠道获取到本插件的 JAR 文件后，安装到服务器

## 需求

::: info TrMenu 需要在联网条件下载安装
:::


| 服务端                      | 版本         |
|:-------------------------|:-----------|
| Spigot                   | 1.8-1.20.4 |
| Paper                    | 1.8-1.20.4 |
| CatSever \(Forge\)       | √          |
| Arclight \(Forge\)       | √          |
| Mohist \(Forge\)         | √          |
| Other unknown servers so | uncertain  |

* 推荐前置：[PlaceholderAPI](http://ci.extendedclip.com/job/PlaceholderAPI/) \(必须保证版本在 **v2.10.9 +**\) [Item NBT API](https://www.spigotmc.org/resources/nbt-api.7939/)

## 安装

* 将 **TrMenu.jar** 丢进 plugins 目录
* 重新启动服务器即可

## 兼容

已知冲突插件 & 解决方案：

* **LibsDisguises**
  * 原因：发包冲突
  * 解决方法：
    * 在 LibsDisguises 的配置文件中将 `Remove-Armor` 设置为 `false`

## 注意

::: warning 
TrMenu **不支持**一切形式的**热重载**，


强行进行热重载操作可能引发未知错误，请谨慎操作

包括但不限于：

* 通过 Plugman\(或类似插件\) 热重载 TrMenu
* 通过 /reload \(confirm\) 指令重启服务端
:::
