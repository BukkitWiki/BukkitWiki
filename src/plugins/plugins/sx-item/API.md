---
title: 'API'
---

## ItemManager
  
### 加载物品

加载由你的配置文件传递的物品，通常我们可以把物品配置上传云端

例如自己的管理系统 或者是OSS镜像 来实现多服同步配置文件

java: 
```java
/**
 * 加载物品列表
 * 注意事项:
 * 1. 不可以覆盖其他group的key值
 * 2. 不会被SX重载时清除
 * 3. 每次加载清空上次的存储
 * 4. 覆盖会清空之前的值
 *
 * @param group     组名
 * @param directory 文件夹
 */
public void loadItem(String group,File directory)
public void loadItem(String group,ConfigurationSection...configs)
public void loadItem(String group,Map<String, ConfigurationSection> configs)
```

### 获取一个物品
java:
```java
/**
 * 获取一个物品
 *
 * @param itemName  物品名
 * @param player 玩家
 * @param args 额外参数(局部变量) K,V,K,V 形式传递
 *
 */
public ItemStack getItem(String itemName,@Nonnull Player player,Object...args)

//用法:
        SXItem.getItemManager().getItem("item_name",player,"key","value")
```

### 存入物品
分为 SXITEM 模式 (Default)

无损 Import 模式 (Import)
java:
```java
/**
 * 保存物品
 *
 * @param key  编号
 * @param item 物品
 * @param type 类型 Default / Import
 * @Return boolean
 * @throws IOException IOException
 */
public boolean saveItem(String key,ItemStack item,String type)throws IOException
```

### 数字ID兼容

老东西们 这是适合1.7.10遗老的玩具
数字ID转换

java:
``` java
/**
 * 获取物品材质
 *
 * @param key 索引
 * @Return 材质
 */
public static Material getMaterial(String key)
```

## Event

### MM死亡后物品放入背包事件
java:
``` java
class SXItemMythicMobsGiveToInventoryEvent {

// 物品抽象
private final IGenerator item;

// 获得物品的玩家
private final Player player;

// 怪物类型
private final String mobType;

// 物品实例
private final ItemStack itemStack;

// 是否取消
private boolean cancelled;

}
```

### 插件重载事件
java:

``` java
SXItemReloadEvent
```

### 物品更新与生成
java:

``` java
SXItemSpawnEvent // 物品生成
SXItemUpdateEvent // 物品更新
```
例子 兼容ItemsAdder 来自拓展工具包

kotlin:
```kotlin
@SubscribeEvent(priority = EventPriority.LOWEST)
fun itemsAdder(event: SXItemSpawnEvent) {
    val items = event.ig.config?.getString("ItemsAdder") ?: return
    val ia = CustomStack.getInstance(items)?.itemStack ?: return
    val customData = ia.itemMeta?.customModelData ?: return
    val item = event.item ?: return
    item.modifyMeta<ItemMeta> {
        setCustomModelData(customData)
    }
    val old = item.itemMeta?.clone() ?: return
    item.type = ia.type
    item.itemMeta = old
}

@SubscribeEvent(priority = EventPriority.LOWEST)
fun itemsAdder(event: SXItemUpdateEvent) {
    val items = event.ig.config?.getString("ItemsAdder") ?: return
    val ia = CustomStack.getInstance(items)?.itemStack ?: return
    val customData = ia.itemMeta?.customModelData ?: return
    val item = event.item ?: return
    item.modifyMeta<ItemMeta> {
        setCustomModelData(customData)
    }
    val old = item.itemMeta?.clone() ?: return
    item.type = ia.type
    item.itemMeta = old
}
```

不被保护的NBT是不会被继承的 通常为Lore MetaData  
自定义NBT可以通过保护的手段来不被更新  
但是原版的NBT 比如 Lore就要通过这种方式  
或者是可以把lore放入NBT 然后Lore中进行\<s>引用  
也可以实现动态跟进  