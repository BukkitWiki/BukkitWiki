---
title: 'ArchitecturyAPI 与 Bukkit 互通讯技巧'
---

## 什么是ArchitecturyAPI？

ArchitecturyAPI是一个**可选**的中间库，开发者可以利用它来简化多平台(Forge/Fabric/NeoForge)的MOD开发

## Mod部分注册通讯

``` java
public class ModPackets {
    public static final ResourceLocation KEY_PRESS = new ResourceLocation("easykey", "keypress");
    public static final ResourceLocation KEY_REGISTER = new ResourceLocation("easykey", "keyregister");
    public static final ResourceLocation KEY_CONFIG_RESET = new ResourceLocation("easykey", "keyconfigreset");

    public static void register() {

        NetworkManager.registerReceiver(NetworkManager.Side.S2C, KEY_REGISTER, ((buf, context) -> {
            String json = buf.readUtf();
            Gson gson = new Gson();
            Type keyConfigTypeToken = new TypeToken<List<KeyConfig>>() {}.getType();
            List<KeyConfig> configs = gson.fromJson(json, keyConfigTypeToken);
            System.out.println(configs);
            InputListener.configs.addAll(configs);
            InputListener.configs.sort((b1, b2) -> Integer.compare(b2.getCode().length, b1.getCode().length));
        }));

        NetworkManager.registerReceiver(NetworkManager.Side.S2C,KEY_CONFIG_RESET, ((buf, context) -> {
            InputListener.configs.clear();
        }));
    }

    public static void sendKeyPress(String name) {
        FriendlyByteBuf buf = new FriendlyByteBuf(Unpooled.buffer());
        buf.writeUtf(name);
        NetworkManager.sendToServer(KEY_PRESS, buf);
    }
    
}
```

::: warning
记住这几个id 这是在Bukkit中接收和发送的数据包的第一个字段  
``` java
new ResourceLocation("easykey", "keypress");  
new ResourceLocation("easykey", "keyregister");  
new ResourceLocation("easykey", "keyconfigreset");
```
:::

通过调用**NetworkManager**的**registerReceiver**方法注册接收器  
Side.S2C 代表服务器发送给客户端的接收器  
Side.C2S 代表客户端发给服务器的接收器  
不过此文章中由于是利用Bukkit接收数据所以不涉及客户端发给服务器接收器的注册
``` java
public final class NetworkManager {
    public static void registerReceiver(Side side, ResourceLocation id, NetworkReceiver receiver) {
        registerReceiver(side, id, Collections.emptyList(), receiver);
    }
}
```

不要忘了在主类注册
```java
public class Easykey {
    public static final String MOD_ID = "easykey";

    public static void init() {
        ModPackets.register();
    }
}
```

## Bukkit部分通讯

在插件启动时调用  
`Bukkit.getMessenger().registerIncomingPluginChannel`  
`Bukkit.getMessenger().registerOutgoingPluginChannel`  
这两个方法注册通讯通道

``` kotlin
object EasyKey : Plugin() {

    const val CHANNEL = "architectury:network"

    @Config
    lateinit var config: Configuration

    override fun onEnable() {
        Bukkit.getMessenger().registerIncomingPluginChannel(BukkitPlugin.getInstance(), CHANNEL, Listener)
        Bukkit.getMessenger().registerOutgoingPluginChannel(BukkitPlugin.getInstance(), CHANNEL)

        info("Successfully running EasyKey!")
    }
}
```

值得注意的是 在Bukkit中注册通道的名字并不是在mod中注册的接收器的id

由于architectury需要跨平台的关系，它注册了一个公用的通道`architectury:network`来处理所有mod的数据


### Bukkit接收Mod数据 

`Bukkit.getMessenger().registerIncomingPluginChannel`代表注册一个消息接收器，第三个参数需要传入一个实现`PluginMessageListener`接口的实例对象  
就像这样
```kotlin

object Listener : PluginMessageListener {

    override fun onPluginMessageReceived(s: String, p1: Player, bytes: ByteArray?) {
        val buf = Unpooled.wrappedBuffer(bytes)
        val friendlyByteBuf = FriendlyByteBuf(buf)
        val channel = friendlyByteBuf.readUtf()
        if (channel == "easykey:keypress") {
            val name = friendlyByteBuf.readUtf()
            KeyEvent(name, p1).call()
        }
    }

}
```
这个类就是用于处理传入插件的数据包用的  
在数据包中第一个字段为**在Mod中注册的接收器id**


### Bukkit发送数据

``` kotlin
private fun send(player:Player,buf: ByteBuf){
    player.sendPluginMessage(BukkitPlugin.getInstance(), "architectury:network", buf.array())
}
```
使用Player#sendPluginMessage给Mod发送插件数据(实际上就是发给玩家的客户端但是可以理解为发送给mod)
::: tip 注意：发送数据包中第一个字段为 在Mod中注册的接收器id
:::


## 后言

以上代码来自 [EasyKey](/plugins/plugins/easykey/)

插件API版本：  
spigot1.20.4   

Mod版本:  
``` properties
architectury_version=11.1.17
fabric_loader_version=0.16.5
fabric_api_version=0.97.2+1.20.4
forge_version=1.20.4-49.1.0
```