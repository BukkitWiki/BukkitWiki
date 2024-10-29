# Example

> 以下代码依照 TabooLib 插件方式演示
```kotlin
package com.github.username

import taboolib.common.platform.event.SubscribeEvent

/**
 * @project Example
 *
 * @author Score2
 * @since 2021/10/23 22:35
 */
object Demo {
    
    @SubscribeEvent
    fun e(e: MenuOpenEvent) {
        println("玩家: ${e.session.viewer.name} 打开了菜单: ${e.menu.id}")
    }
    
}
```