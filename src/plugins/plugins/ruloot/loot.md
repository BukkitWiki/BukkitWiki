---
title: '战力品分配配置'
---

## 示例配置文件

```yaml
Example:
  # 目标
  target: '测试怪物'
  # 规则
  rule:
    - condition:
        - type: 'js'
          script: |-
            if(damage > 10){
                return true;
            }
      reward:
        - type: 'mm'
          id: 'xxx'
          amount: '10'
        - type: 'msg'
          msg:
            - ''
    - condition:
        - type: 'js'
          script: |-
            if(rank < 5){
                return true;
            }
      reward:
        - type: 'mm'
          id: 'xxx1'
          amount: '10'
  # 保底奖励
  guaranteedReward:
    condition: 
      - type: 'js'
        script: |-
          if(damage > 10){
              return true;
          }
    reward:
      - type: 'mm'
        id: '保底奖励'
  # 悬浮信息
  hover:
    - '伤害统计:'
    - '总伤害: %damage_total%'
    - '[1] %player_name% 造成伤害: %damage% (%percentage%)'
    - '[2] %player_name% 造成伤害: %damage% (%percentage%)'
    - '[3] %player_name% 造成伤害: %damage% (%percentage%)'
    - '[4] %player_name% 造成伤害: %damage% (%percentage%)'
    - '[5] %player_name% 造成伤害: %damage% (%percentage%)'
  # 消息
  msg:
    - '-=-=-=-=-=-=-=-=-=-=-'
    - '世界Boss: [%mob_name%] 被击败'
    - '[\[详细信息\]](hover=%hover%)'
    - '-=-=-=-=-=-=-=-=-=-=-'

```

## 配置文件结构

### Target 目标
::: tip 此选项可空 为空时 可选择在`MythicMobs`的怪物配置文件中设置 `ruloot: 战利品分配配置id`  
就像这样:  
![](https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/20241208122207.png)
:::

一般情况Target设置的是`怪物id` 或 `group:组名`

### Rule 规则
规则中分为`condition`条件和`reward`奖励

#### Condition 条件
条件中可以使用`js`脚本也可以使用`kether`脚本
最终要返回一个Boolean类型的值

```js
condition:
- type: 'js'
    script: |-
    if(damage > 10){
        return true;
    }
```

``` kether
condition:
- type: 'kether'
  script: |-
    不会写
```

::: warning 
此处要重要提醒一下 脚本中可以使用的所有变量
- `player` 对应Bukkit中的玩家对象
- `mob` 对应MythicMobs中的怪物对象
- `damage` 对应玩家造成的总伤害
- `rank` 对应玩家的排名
- `percentage` 对应玩家造成的伤害百分比
- `totalDamage` 对应怪物所承受的总伤害
:::

##### 1.0.5 版本新增

#### 伤害判断

```yaml
- type: 'damage'
  damage: 100 # 大于等于此值
```

#### 排名判断

```yaml
- type: 'rank'
  rank: 1 # 等于此值
```

#### 百分比判断

```yaml
- type: 'percentage'
  percentage: 100 # 大于等于此值
```

#### Reward 奖励
奖励有一个固定格式
```yaml
reward:
  - type: 奖励类型
    ...奖励参数
```

#### MythicMobs 物品奖励

```yaml
- type: 'mm'
  id: 'xxx' # MythicMobs物品id
  amount: '10' # 数量 可写脚本
```

#### 发送消息

```yaml
- type: 'msg'
  msg:
    - 'xxx'
```

#### NeigeItems 物品奖励

```yaml
- type: 'ni'
  id: 'xxx' # NeigeItems物品id
  amount: '10' # 数量 可写脚本
```

#### Sx2 物品奖励

```yaml
- type: 'sx'
  id: 'xxx' # SxItems物品id
  amount: '10' # 数量 可写脚本
```

#### SX-Items 物品奖励

```yaml
- type: 'sxi'
  id: 'xxx' # SX-Items物品id
  amount: '10' # 数量 可写脚本
```

#### 经验奖励

```yaml
- type: 'exp'
  exp: 100
```

#### 命令奖励
命令中有内部变量 
- '%damage%' 对应玩家造成的伤害
- '%rank%' 对应玩家排名
- '%percentage%' 对应玩家造成的伤害百分比
- '%totalDamage%' 对应怪物承受的总伤害
- 也可以使用papi变量

```yaml
- type: 'cmd'
  # 控制台指令
  console: 
    - 'say 你获得了战利品'
  # 管理员指令
  op:
    - ''
  # 玩家指令
  player:
    - ''
```

#### js 脚本奖励

```yaml
- type: 'js'
  script: |-
    player.sendMessage('你获得了战利品');
```

#### kether 脚本奖励

```yaml
- type: 'kether'
  script: |-
    不会写
```

### guaranteedReward 保底奖励
和上面奖励一样(其实挺多余的 后期有新奇玩法再加)

### hover 悬浮信息
一个文本信息列表 最终会替换到 msg中的%hover%变量
可以使用papi变量

### msg 消息
击杀后发送给全体玩家的消息
消息格式是[Taboolib的行内复合文本](https://taboolib.feishu.cn/wiki/Gp8ywJfMEi7UIgkUFLZc1mi5nvh)
