---
title: '结果配置'
dir:
  order: 3
---
作物成熟之后收获获得的物品

## 配置节点

- type 代表结果执行类型 共有 `mc` `seed` `mm` `modify` `vault` `cmd` 几种类型
- maxChance 最大概率
- chance 概率

### type
代表结果执行类型
#### mc
原版mc物品

``` yaml
type: 'mc'
maxChance: 1000
chance: 900
item:
- material: iron_ingot
  amount: 1-10
  msg:
    - '通过采集铁锭种子获得了%amount%个铁锭'
```

#### seed
本插件中的种子物品
必填 `id` 种子内部id `amount` 数量
此处的amount可以填写整数或 xx-xx 整数区间字符串

``` yaml
type: 'seed'
maxChance: 100
chance: 80
msg-false:
  - '很遗憾,本次采集没有掉落种子'
id: 'iron_seed'
amount: 1-3
```
#### mm
MythicMobs插件物品
- id mm物品的内部id
- amount 数量
- placeholder 变量
  - 变量名
      - 变量随机列表

例如下面的示例配置文件：
在获取物品之后会自动替换物品中的 %quality% 为 随机出来list中的value并执行list中的script脚本

``` yaml
type: 'mm'
id: 'test'
maxChance: 1000
chance: 900
amount: 1
placeholder:
  quality:
    - value: '普通'
      chance: 800
      script: |-
        player.msg('普普通通')
    - value: '良好'
      chance: 100
    - value: '优秀'
      chance: 80
    - value: '精英'
      chance: 15
    - value: '传说'
      chance: 5
```

#### vault
金币奖励
``` yaml
type: 'vault'
maxChance: 1000
chance: 900
amount: 100-200
```

#### cmd
命令奖励
``` yaml
type: 'cmd'
maxChance: 1000
chance: 900
cmd:
  player:
    - 'xx'
  console:
    - 'xx'
  op:
    - 'xx'
```
#### modify
对种子物品的改变，`适用于RPG类型的物品增强`

使用此配置需要掌握一点点正则表达式的知识或让ChatGPT为你生成正则表达式

具体执行流程如下：
> 1.find查找到目标字符串并将匹配之后的变量加以命名之后存储
>
> 2.update 输入上一步存储的变量并更新此变量的值并存储
>
> 3.replace 替换指定字符串并更新上一步存储的变量

- update 修改物品的配置
  - type 类型 支持 `lore` `name`
  - find 查找的字符串 需要组匹配的正则表达式
  - replce 查找到之后字符串替换的字符串 变量为组匹配之后的组名加%%
  - update
    - 变量名
      - type 支持 `script` `list`
      - script或list

- after update执行之后执行的配置

``` yaml
      type: 'modify'
      maxChance: 1000
      chance: 900
      back: true
      update:
        - type: 'lore'
          find: '物理伤害: (?<num>\S+)'
          replace: '&a物理伤害: &6%num%'
          update:
            num:
              type: script
              script: |-
                return +originUnColored+Random.nextInt(0,100)+""
        - type: 'lore'
          find: '品质: (?<quality>\S+)'
          replace: '品质: %quality%'
          update:
            quality:
              type: list
              list:
                - value: '普通'
                  chance: 800
                  script: |-
                    player.sendMessage('普普通通')
                - value: '良好'
                  chance: 100
                - value: '优秀'
                  chance: 80
                - value: '精英'
                  chance: 15
                - value: '传说'
                  chance: 5
      after:
        - type: lore
          find: '物理伤害: (?<num>\S+)'
          replace: '物理伤害: %num%'
          findOther:
            - '品质: (?<quality>\S+)'
          update:
            num:
              type: script
              script: |-
                let newValue = +originUnColored+Random.nextInt(0,100)
                if (other.quality == '良好'){
                    newValue += 10
                    player.sendMessage('由于品质是良好 所以物理伤害增加了10点')
                }
                return newValue+""
```

## 示例配置

``` yaml
result:
  - type: 'mc'
    maxChance: 1000
    chance: 900
    item:
    - material: iron_ingot
        amount: 1-10
        msg:
        - '通过采集铁锭种子获得了%amount%个铁锭'
```