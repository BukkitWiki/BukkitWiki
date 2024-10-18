# Potions 药水

这个属性用于给基于药水的物品应用药水效果。请注意，药水效果可以添加到任何类型的物品上，但只有在药水上才会实际起作用。  
以下是一个例子:

## Format 格式

```yaml
internal_itemname:
  Id: potion
  Options:
    Color: 0,0,0 #红 (红,绿,蓝) 格式
  PotionEffects:
    - <type> <duration> <level>
```

### \<type>

应该应用的药水效果类型。请参阅下面的所有类型列表。

### \<duration>

药水效果的持续时间以 tick 为单位 (20 tick等于 1 秒) 。

### \<level>

药水效果的等级修饰符。0 = 等级 I，1 = 等级 II，等等。

## Potion Effects 药水效果

完整的药水效果列表可以在 [Spigot Java](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) 文档中找到。

## Examples 示例

```yaml
SupremeHealingPotion:
      Id: potion
      Display: '&6至尊治疗药水'
      Options:
        Color: 239,103,216
        HideFlags: true
      PotionEffects:
      - HEAL 60 1
      - CONFUSION 20 0
      Lore:
      - '&8一瓶极强效的治疗药水'
      - '&8能够治愈即便是极其严重的伤口。'
      - '&c注意: 可能会导致肝衰竭。'
```