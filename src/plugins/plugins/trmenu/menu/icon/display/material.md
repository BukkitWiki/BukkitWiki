# 材质

## 普通材质

```yaml
material: 'Red Stained Glass Pane'
```

```yaml
material: 'Wool:3'
```

* **材质实现动画的方式就是写成集合形式，将在设定周期内循环切换**
* 普通材质也支持使用函数变量

## 物品仓库

* TrMenu 内置的物品存储调用功能，通过子命令 Item 实现

```yaml
material: 'repo:myCustomItem'

material: 'repo:%custom_variable_whichreturnstheid%'
```

## 转化格式 JSON

* 通过 `/trmenu item toJson` 转化得到的物品文本格式
* 该方法能支持一切形式的物品

```yaml
material: '{"item":{Count:1b,id:"minecraft:grass_block"}}'
```
## 模组物品

在 3.3.3a 之后支持直接引入mod物品,无需NBT(3.3.3a之前只能通过NBT)

```yaml
material: 'mod:torcherino:compressed_lanterino'
material: 'mod:原版模组命名域,可通过give查看'
```

### 支持的混合端

| 服务端                   | 支持状态   |
|:----------------------|:-----|
| CatSever              | 未知   |
| Arclight(1.20.1Forge) | 通过测试 |
| Mohist(1.20.1Forge)   | 通过测试 |

## 头颅材质


### 玩家头颅

```yaml
material: 'head:%player_name%'

material: 'head:BlackSky'
```

* TrMenu 采用本地 NMS 读取在线玩家的皮肤 + 异步联网读取离线正版玩家 皮肤材质的形式，不卡线程
* 已对 SkinsRestorer 进行完整支持，能够获取到玩家显示的皮肤！

### 自定义纹理头颅

```yaml
material: 'head:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNDRmNDUyZDk5OGVhYmFjNDY0MmM2YjBmZTVhOGY0ZTJlNjczZWRjYWUyYTZkZmQ5ZTZhMmU4NmU3ODZlZGFjMCJ9fX0='

material: 'head:44f452d998eabac4642c6b0fe5a8f4e2e673edcae2a6dfd9e6a2e86e786edac0'
```

## 物品源

* TrMenu 对挂钩插件物品支持的实现
* 统一格式为 `source:<ID>:<INPUT>`

### HeadDatabase

```yaml
material: 'source:HeadDatabase:myHead'

material: 'source:HDB:random'
```

### Oraxen

```yaml
material: 'source:ORAXEN:itemId'
```

### ItemsAdder

```yaml
material: 'source:ITEMSADDER:itemId'
material: 'source:IA:anotherItemId'
```

### Zaphkiel

```yaml
material: 'source:ZAPHKIEL:itemId'
material: 'source:ZL:itemId'
```

### SXItem

```yaml
material: 'source:SXITEM:itemId'
material: 'source:SI:itemId'
```

### NeigeItems

```yaml
material: 'source:NEIGEITEMS:itemId'
material: 'source:NI:itemId'
```

### EcoItems

```yaml
material: 'source:ECOITEMS:itemId'
material: 'source:EI:itemId'
```

### MMOItems

```yaml
material: 'source:MMOITEMS:type:itemId'
material: 'source:MI:type:itemId'
```

### MagicGem

```yaml
material: 'source:MAGICGEM:itemId'
material: 'source:MG:itemId'
```

### AzureFlow

```yaml
material: 'source:AZUREFLOW:itemId'
material: 'source:AF:itemId'
```

### HMCCosmetics

```yaml
material: 'source:HMCCosmetics:itemId'
material: 'source:HMC:itemId'
```

### MagicCosmetics

#### 装备

```yaml
material: 'source:MAGICE:itemId'
material: 'source:MagicCosmeticsE:itemId'
```

#### 时装

```yaml
material: 'source:MAGICI:itemId'
material: 'source:MagicCosmeticsI:itemId'
```

### MythicMobs

```yaml
material: 'source:MYTHICMOBS:itemId'
material: 'source:MM:itemId'
```

### 自定义物品源(JS物品源)

**该功能非常强大,可以在无需菜单插件支持的情况下，获取自定义物品**

以 TrMenu 不支持的插件[HeadDB](https://github.com/TheSilentPro/HeadDB) 为例

通过查询文档可知，该插件的API类为tsp.headdb.core.api.HeadAPI

于是就有

```yaml
material: 'source:JS:Java.type("tsp.headdb.core.api.HeadAPI").getHeadByExactName(你的头颅名称).getItem(player)
```

如果你在映射中创建了`headapi`,对应`tsp.headdb.core.api.HeadAPI`,那你可以这么用

```yaml
material: 'source:JS:headapi.getHeadByExactName(你的头颅名称).getItem(player)
```

如果安装了GraalJs 语言扩展，可以这么干

```yaml
material: 'source:JS:Packages.tsp.headdb.core.api.HeadAPI.getHeadByExactName(你的头颅名称).getItem(player)
```

(其实这里还要进行空值判断，但我懒得写了）

## \* 材质参数

### 附加值

```yaml
material: '3{data=2}'
```

### Model Data

```yaml
# 1.14+
material: 'coal{model-data=15}'
```

### 皮革染色

```yaml
material: 'leather chestplate {dye=255,255,0}'
```

### 旗帜模式

```yaml
material: 'white banner {banner=RED MOJANG,WHITE}'
```

