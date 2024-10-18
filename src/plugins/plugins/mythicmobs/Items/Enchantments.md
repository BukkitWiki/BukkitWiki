# Enchantments 附魔

附魔属性用于给使用 MythicMobs 制作的物品施加附魔效果。这些附魔可以应用于任何物品，并且可以超过 Minecraft 自然设定的附魔等级上限。然而，如果将某些附魔应用于它们原本不适合的物品上，可能没有任何效果。

## Syntax 语法

```yaml
internal_itemname:
  Id: <material>
  Enchantments:
  - <enchantment> <level>
  - <enchantment> <level>
  - ...
```

 **\<enchantment>**  
要应用于指定物品的附魔类型。

**\<level>**  
指定附魔的等级。

## Available Enchantments 可用附魔

可用[附魔列表](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html)可以在 spigot javadocs 中找到  
如果还有其他提供者，也可以通过 `namespace:enchant_name` 语法添加附魔

## Example 示例

```yaml
lethal_pickaxe:
  Id: diamond_pickaxe
  Enchantments:
  - DAMAGE_ALL 3
  - KNOCKBACK 1
```