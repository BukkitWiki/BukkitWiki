# Banner Layers 旗帜层

![](https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/mm_items_bannerlayers.png)


要在 MythicMobs 中制作复杂的旗帜物品，你可以使用以下语法。MythicMobs 没有对你可以使用的旗帜层数进行硬性限制，你可以通过这种方式超过 Minecraft 的默认上限 6 层。但是，超过 6 层可能会导致异常行为/延迟。

旗帜层数也适用于盾牌。

## Syntax 语法

```yaml
Banner:
  Id: <banner/shield>
  #对于旗帜，基础颜色由物品 ID 决定。
  BannerLayers:
  - <color> <pattern>
  - <color> <pattern>
```

## Patterns 图案

可用的[图案](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/banner/PatternType.html)列表可以在 spigot javadocs 中找到。

## Examples 示例

```yaml
SkeletonKingBannerShield:
  Id: shield
  Display: <dark_red>骷髅王的旗帜</dark_red>
  BannerLayers:
  - RED BASE
  - WHITE CURLY_BORDER
  - WHITE STRIPE_CENTER
  - BLACK STRIPE_BOTTOM
  - WHITE CREEPER
  - YELLOW STRIPE_TOP
  - BLACK TRIANGLES_TOP
```

```yaml
SkeletonKingBanner:
  Id: orange_banner
  Display: <dark_red>骷髅王的旗帜</dark_red>
  BannerLayers:
  - RED BASE
  - WHITE CURLY_BORDER
  - WHITE STRIPE_CENTER
  - BLACK STRIPE_BOTTOM
  - WHITE CREEPER
  - YELLOW STRIPE_TOP
  - BLACK TRIANGLES_TOP
```