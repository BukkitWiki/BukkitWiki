---
title: '使用说明'
order: 1
---
<style>
table th:first-of-type {
    width: 15%;
}
</style>

## 基础用法
细节都在默认生成的配置文件中有体现

```yaml
Default-1:
  Name: <s:DefaultPrefix>&c炎之洗礼<s:DefaultSuffix> <s:<l:品质>Color><l:品质>
  ID: <l:<l:职业>ID>
  Lore:
    - '&6品质等级: <s:<l:品质>Color><l:品质>'
    - '<b:<l:品质>:优秀:史诗>&6限制职业: <l:职业>'
    - '&6物品类型: 主武器'
    - '&6限制等级: <c:int 10 * <s:<l:品质>基数>>级'
    - '&c攻击力: +<l:攻击力>'
    - '<l:攻一-10>'
    - '<l:攻二-10>'
    - '<l:攻三-10>'
    - '<l:材质>'
    - '<s:<l:品质>宝石孔>'
    #   - '&7耐久度: <c:int <r:300_350> * <s:<l:品质>基数>>/<c:int 400 * <s:<l:品质>基数>>'
    - '&7耐久度: <c:int <d:0.6_0.9> * <l:耐久度>>/<l:耐久度>'
    - '<b:<l:品质>:史诗>&c已绑定'
    - '&a到期时间: <t:10m>'
    #   - '&a到期时间: <t:600>'
    - '<b:<l:品质>:优秀:史诗>                                    '
    - '<b:<l:品质>:优秀:史诗><s:DefaultLore>'
  EnchantList:
    - <s:<l:职业>附魔>
  ClearAttribute: true
  Random:
    攻击力: <c:20 * <s:<l:品质>基数>>
    耐久度: <c:int <r:350_400> * <s:<l:品质>基数>>
  NBT:
    arg1.arg2: 测试NBT
    sx:
    attribute:
      - '词条一'
      - '词条二'
      - '词条三'
      - 'SX-Attribute预留属性接口'
      - '如需使用随机则需学习高等随机'
  ProtectNBT: #保护附魔NBT不被更新
    - "Enchantments"
```

## 随机节点

形如 \<key:value> 格式  
key是结构的类型  
value是参与结构运行的内容

例如 <d:0.6_0.9> 实际上就是个小数随机 0.6~0.9之间的数 抽取一个

结构汇总：
|   名称   | Key | 例子                                       | 说明                                        |
| :------: | --- | ------------------------ | -------------------------- |
| 整行判读 | b   | <b:匹配名:匹配词1:匹配词2:匹配词3:匹配词4> |                                             |
| 时间格式 | t   | <t:1Y1M1D1h1m1s>                           |                                             |
|  计算器  | c   | <c:+6+> 或 <c:int 7+7.5>                   | 使用压栈计算器实现                          |
| 锁定随机 | l   | <l:某个随机组>                             | 使用l:后同步此值                            |
| 一般随机 | s   | <s:某个随机组>                             | 使用s: 每次重新获取                         |
| 小数随机 | d   | <d:0.6_0.9>                                |                                             |
| 整数随机 | i   | <i:1_25565>                                |                                             |
| 脚本随机 | j   | <j:script.eval#<l:品质>,<d:0.5_1.0>>       | <j:文件名.方法名#参数>                      |
| UUID随机 | u   | <u:random> 或 <u:文字>                     | 生成一个完全随机的UUI或者根据字符串生成UUID |

::: warning 注：如果在高版本使用 JS 需要使用 momojs 这种拓展库  
:::

## 随机组

### 权重与概率

传统SX2.0写法:
```yaml
品质:
  - 2: "普通"
  - 1: "优秀"
```
前面数字就是本条的权重
也可使用js的形式
```javascript
function drawResult(docker, args) {
    const result = Math.random() < 0.333 ? '优秀' : '普通';
    return result;
}
```
<j:script.drawResult>

### 多条随机
通常你可以这样写

``` yaml
射手附魔:
  - - ARROW_DAMAGE:<r:0_2>
    - ARROW_INFINITE:<r:0_1>
  - - ARROW_DAMAGE:<r:0_2>
    - ARROW_FIRE:<r:0_2>
  - - ARROW_DAMAGE:<r:0_2>
    - DURABILITY:<r:0_1>
```

当然你也可以用 js
注意：因为脚本引擎限制 无法使用 [] 创建数组 请使用 Utils.mutableList();
``` javascript
function subAttribute(docker, args) {
    var amount = args[0];
    var level = parseInt(args[1]);
    var mutab = parseFloat(args[2]);
    var def = level * 0.25 * mutab + 5;

    var lore = Utils.mutableList();
    for (var i = 1; i <= amount; i++) {
        var attr = docker.replace("<s:副属性>");
        var value = Utils.randomDouble(def - level * 0.5, def + level * 0.25);
        if (attr.indexOf("率") != -1) {
            lore.add(" &7" + attr + ":&f " + value.toFixed(2) + "%");
        } else {
            lore.add(" &7" + attr + ":&f " + value.toFixed(2));
        }
    }
    return lore;
}
```

## 全局随机组与局部随机组

### 全局随即组
指的是写在 RandomString 文件夹的随机组

可以在任意位置调用

### 局部随机组
``` yaml
Lore:
  - '&7覆盖全局变量结果-> <s:DefaultPrefix>'
  - '&7全局和局部混合结果-> <s:DefaultLore>'
Random:
  DefaultPrefix: "Prefix"
  DefaultLore:
    # 2/3的概率随机到Lore，1/3的概率随机到全局变量
    - 2: "Lore"
    - 1: ~
```
优先级： 全局 > 局部

所以 局部会覆盖全局的值

## MythicMob Hook

### 掉落

``` yaml
废弃村镇_蜘蛛女王:
  Type: SPIDER
  Display: '&c蜘蛛女王'
  Health: 200
  Damage: 8
  SX-Drop:
    - 材料_水元素 1-6 1
    - 材料_蛛母复眼 1-2 1
    - 货币_拾取_随机 1 1 F:1 T:10
    - 阅历_拾取_随机 1 1 F:1 T:20
  Options:
    MovementSpeed: 0.3
    PreventOtherDrops: true
  Skills:
    - skill{s=蛛母_跃击} @target ~onTimer:150
    - skill{s=蛛母_召唤} @Self ~onTimer:350
    - skill{s=蛛母_召唤} @Self ~onSpawn
```
SX-Drop
然后和mm自带的掉落一样 物品名 数量 概率

但是后续可以跟随自定义参数 变量名:变量值

上述的例子对应的物品如下

``` yaml
货币_拾取_随机:
  Name: '&7货币'
  ID: <j:Default.getMoneyType#<l:Value>>
  Lore:
    - '&f '
    - '&f  价值: <l:Value>'
    - '&6 '
    - '&f  常用的货币  '
    - '&f '
    - '&7一曰 · 春风'
  Update: true
  Random:
    F: 0
    T: 0
    Value: <d:<l:F>_<l:T>>
  NBT:
    Money:
      value: <l:Value>
```

### 装备

```yaml
SX-Equipment:
  - 物品ID:位置 概率
  - 物品ID:位置 概率 局部变量
    - 物品ID:位置 概率 Key1:Value1 Key2:Value2
```

### 内置变量

如果物品从怪物身上掉落下来 可以使用以下变量

| 变量名            | 说明         |
| ----------------- | ------------ |
| mob_level         | 怪物等级     |
| mob_name_display  | 怪物显示名字 |
| mob_name_internal | 怪物内部ID   |
| mob_uuid          | 怪物UUID     |

例如：

``` yaml
货币_拾取_随机:
  Name: '&7货币'
  ID: <j:Default.getMoneyType#<l:Value>>
  Lore:
    - '&f '
    - '来源: <s:mob_name_display>'
```

这样就可以实现随机货币(物品)掉落了

## 动作拓展

想用SX-Item做一些道具？
试试这个吧

https://ray_hughes.gitee.io/fx-blog/2023/08/24/MythicItemStyrke

包含的内容:

- PAPI变量 显示玩家SXItem物品
- 快捷指令 给予 / 扣除 玩家的 SXItem物品
- 对SXItem物品的一些动作拓展 监听动作
- 对龙核插件的槽位拓展兼容
- 对MythicMobsItem物品同样兼容以上功能