---
description: TrMenu 内置事件
---

# Events

## CustomDatabaseEvent
* 自定义数据库
```kotlin
package me.arasple.mc.trmenu.api.event

import me.arasple.mc.trmenu.module.internal.database.Database
import taboolib.platform.type.BukkitProxyEvent

/**
 * @Author sky
 * @Since 2020-08-14 14:52
 */
class CustomDatabaseEvent(val name: String, var database: Database? = null) : BukkitProxyEvent() {

    override val allowCancelled: Boolean
        get() = false
}
```


## MenuOpenEvent
* 菜单打开事件
```kotlin
package me.arasple.mc.trmenu.api.event

import me.arasple.mc.trmenu.module.display.Menu
import me.arasple.mc.trmenu.module.display.MenuSession
import taboolib.platform.type.BukkitProxyEvent

/**
 * @author Arasple
 * @date 2021/1/29 17:34
 */
class MenuOpenEvent(val session: MenuSession, val menu: Menu, val page: Int, val reason: Reason = Reason.UNKNOWN) :
    BukkitProxyEvent() {

    enum class Reason {

        RELOAD,

        PLAYER_COMMAND,

        CONSOLE,

        BINDING_COMMANDS,

        BINDING_ITEMS,

        BINDING_SHORTCUT,

        UNKNOWN

    }

}
```


## MenuPageChangeEvent
* 菜单翻页事件
```kotlin
package me.arasple.mc.trmenu.api.event

import me.arasple.mc.trmenu.module.display.MenuSession
import taboolib.platform.type.BukkitProxyEvent

/**
 * @author Arasple
 * @date 2021/2/4 11:33
 */
class MenuPageChangeEvent(val session: MenuSession, val from: Int, val to: Int, val override: Boolean) : BukkitProxyEvent()
```


## MenuCloseEvent
* 菜单关闭事件
```kotlin
package me.arasple.mc.trmenu.api.event

import me.arasple.mc.trmenu.module.display.MenuSession
import taboolib.platform.type.BukkitProxyEvent

/**
 * @author Arasple
 * @date 2021/1/29 17:34
 */
class MenuCloseEvent(val session: MenuSession) : BukkitProxyEvent()
```