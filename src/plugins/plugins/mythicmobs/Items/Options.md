# Options 其他配置

这里将列出所有可用选项。这些选项必须放在物品配置中的 `Options:` 标签下。

```yaml
example_item:
  Id: diamond
  Options:
    SomeOption: value
```

## Universal Options 通用选项

这些选项适用于所有物品:

### Repairable 无法修复

将物品的修复成本设置为最大值，使其在铁砧和/或附魔台完全不可编辑。  
这将覆盖RepairCost选项。  
默认为 `false`。

```yaml
  Options:
    Repairable: false
```

### RepairCost 修复成本

设置物品的修复成本。  
如果设置为小于 0，则使用默认值。  
默认为 `-1`。

```yaml
  Options:
    RepairCost: 10
```

### Unbreakable 无法破坏

设置物品的无法破坏标签。  
具有此属性设置为 true 的物品不会失去耐久度。  
默认为 `false`。

```yaml
  Options:
    Unbreakable: true
```

### HideFlags 隐藏标志

隐藏所有物品标志，使得附魔等在物品说明中不可见（请注意，物品仍然会发光显示附魔效果）。  
默认值为 `false`。

```yaml
  Options:
    HideFlags: true
```

### PreventStacking 堆叠

防止物品堆叠到相同物品上。  
默认为 `false`。

```yaml
  Options:
    PreventStacking: true
```

## Playerheads 玩家头颅

仅适用于玩家头颅类型的物品。

### Player 玩家纹理

设置玩家头颅的纹理。  
值必须是目标玩家的用户名。  
玩家头颅必须使用数据值为 3 才能生效。

```yaml
  Options:
    Player: Herobrine
```

### SkinTexture URL纹理

同时设置玩家头颅的纹理，但使用 SkinURL 代替。

> - 在浏览器中输入: https://sessionserver.mojang.com/session/minecraft/profile/trimmeduuidofplayerhere
> - 使用 http://mcuuid.net/ 来查找玩家的修剪过的 UUID。

玩家头颅必须使用数据值为 3 才能生效。  
此选项还支持 hashes。

```yaml
  Options:
    SkinTexture: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvODdlMGFhOTQzM2RiYTliNzU5MzJhMTFkYzk0ZDQwNmJkZTE5ZTg2MzUxNDIxNDkyYjNlZDM3OGM4ZTFhN2NjIn19fQ==
```

## Dyeable Items 染色物品

### Color 颜色

根据 RGB 设置将盔甲染色。0-255。  
也可以使用预定义的颜色。点击[此处](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/DyeColor.html)。  
可以使用 Windows 上的画图程序来选择颜色。打开它，然后选择 “编辑颜色” 以获取您的 RGB 值。  
仅适用于皮革盔甲、旗帜、盾牌等物品。

```yaml
  Options:
    Color: RED
```

```yaml
  Options:
    Color: 102,102,153
```

## Fireworks 烟花

FIREWORK 和 FIREWORK_CHARGE 物品的选项  
对于 Colors 和 FadeColors，您可以使用格式 **RED，GREEN，BLUE** 指定所需的颜色。

```yaml
  Firework:
    Colors:
    - 255,0,255
    - 0,0,0
    FadeColors:
    - 200,0,0
    Flicker: true
    Trail: true
```

## Book 成书

一整本成书选项

### Title 标题

成书的标题。  
默认为 `Unknown`。

```yaml
Title: <green>如何制作 YouTube 视频
```
### Author 作者

成书的作者。  
默认为 `Unknown`。

```yaml
  Author: CarsonJF
```

### Pages 页数

一个列表，每个条目都是书的一页。

```yaml
  Pages:
  - "Page 1"
  - "Page 2\n\与其他线路"
  - "Page 3"
```

## Examples 示例

```yaml
ClothSlippers:
  Id: 301
  Data: 0
  Display: '&f布鞋'
  Lore:
  - ''
  - '好柔软！'
  - ''
  Enchantments:
  - DURABILITY:1
  Options:
    Color: 200,200,200
```

包含许多可能的选项：

```yaml
TestHead:
  Id: 397
  Data: 3
  Options:
    Player: Rickyling
```

```yaml
dat_item_though:
  Id: banner
  Data: 4
  Display: '&c&l旗帜&r'
  Lore:
  - ''
  - '&r它<&sq>是完美的石头。'
  - '&c永远不要质疑这一点。'
  - ''
  Amount: 8
  Options:
    Color: 200,200,200
    Unbreakable: true
  Enchantments:
  - DURABILITY:1
  - ARROW_FIRE:10
```

烟花火箭示例

```yaml
FireworkGoBoom:
  Id: FIREWORK_ROCKET
  Display: '火箭'
  Firework:
    Colors:
    - 255,0,255
    - 0,0,0
    FadeColors:
    - 200,0,0
    Flicker: true
    Trail: true
```