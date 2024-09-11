---
title: '种子配置'
dir:
  link: true
  order: 2
---

## 配置节点
- desc 种子描述 字符串
- objective 进度目标 整数
- [grass 除草配置（定时输入物品）](./grass.md)
- item 种子展示物品
- [process 进度配置](./process.md)
- [result 结果配置](./result.md)


## 示例配置

### 铁锭种子

``` yaml
iron_seed:
  desc: '铁锭种子'
  objective: 100
  grass:
    take: false
    chance: 20
    maxChance: 100
    msg:
      - '请给铁锭种子除草'
    clippers:
      - "example"
    append: '[请除草]'
    appendLore: '[请除草]'
  item:
    material: 'wheat_seeds'
    name: '&f&l铁锭种子'
  process:
    list:
      - objective: 0
        item:
          material: 'wheat_seeds'
          name: '&f&l铁锭种子'
      - objective: 10
        item:
          material: 'cobblestone'
          name: '第一阶段'
      - objective: 50
        item:
          material: 'stone'
          name: '第二阶段'
      - objective: 70
        item:
          material: 'raw_iron'
          name: '第三阶段'
    done:
      item:
        material: 'iron_ingot'
        name: '第四阶段 [可收获]'
  result:
    - type: 'mc'
      maxChance: 1000
      chance: 900
      item:
        - material: iron_ingot
          amount: 1-10
          msg:
            - '通过采集铁锭种子获得了%amount%个铁锭'
    - type: 'seed'
      maxChance: 100
      chance: 80
      msg-false:
        - '很遗憾,本次采集没有掉落种子'
      id: 'iron_seed'
      amount: 1-3
    - type: 'mm'
      id: 'test'
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

### 宝石增强

``` yaml
gem:
  desc: '宝石增强'
  objective: 100
  process:
    done:
      input:
        type: nbt
        take: true
        msg:
          - '请放入宝石辅助道具'
        nbt:
          - farm:
              type: 'prop'
              name: '宝石增强辅助道具'
        item:
          material: 'redstone_torch'
          name: '请放入宝石辅助道具'
      item:
        material: 'emerald'
        name: '宝石 [可收获]'
  result:
    - type: 'modify'
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