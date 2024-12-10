---
title: '采集点配置'
---

## 示例配置文件

```yaml
# 示例采集点1
example1:
  # 采集点名称
  name: "示例采集点1"
  # 采集点位置
  location:
    pos1:
      world: "world"
      x: 0
      y: 64
      z: 0
    pos2:
      world: "world" 
      x: 3
      y: 66
      z: 3
  
  # 采集设置
  settings:
    # # 开启时间配置
    # open-time:
    #   # 是否启用开启时间限制
    #   enable: false
    #   # 开启时间段配置(24小时制)
    #   periods:
    #     - "00:00-23:59"
    #     # 示例: 多个时间段
    #     # - "08:00-12:00" 
    #     # - "14:00-18:00"
    # 采集时间(秒)
    duration: 5
    # 采集成功率(0-100)
    success-rate: 80
    # 是否需要权限
    permission: true
    # 权限节点(如果需要权限)
    permission-node: "gather.example1"
    # 采集冷却时间(秒)
    cooldown: 300
    # 走出范围是否取消采集
    cancel-on-leave: true
    # 移动但不走出范围是否取消采集
    cancel-on-move: false
    # 体力消耗
    stamina-cost: 10
    # 资源总量设置
    resource:
      # 初始总量
      initial: 1000
      # 每次采集消耗量
      cost: 10
      # 恢复间隔(秒)
      regen-interval: 300
      # 每次恢复量
      regen-amount: 5
  
  dragon-core:
    hud: 'gather-example1'
    description: 
      - '描述'
    # 图标
    icon: ''
    # 自定义数据
    data:
      key: 'value'

  # 自定义消息(可选,不配置则使用全局消息)
  messages:
    start: "&a开始采集高级矿石..."
    success: "&a成功采集到了高级矿石!"
    fail: "&c采集高级矿石失败!"
    no-resource: "&c该采集点资源已耗尽,请等待恢复..."
    enter-range: "&a你已进入高级矿石采集点!"
    exit-range: "&c你已离开高级矿石采集点!"
  
  # 采集进度条设置
  actionbar:
    enable: true
    text: '&a正在采集高级矿石... %progress% &7(剩余: %resource%)'
  
  bossbar:
    enable: true
    color: PURPLE
    text: '&d正在采集高级矿石... 剩余时间: %time%秒 &7(剩余: %resource%)'
    style: SEGMENTED_20

  sound:
    enable: true
    tick: 'BLOCK_NOTE_BLOCK_BELL'
    end: 'ENTITY_PLAYER_LEVELUP'
  
  # 采集前检查脚本
  checks:
    - type: js
      script: |-
        // 检查玩家等级是否达到10级
        if(player.getLevel() >= 10) {
          return true
        } else {
          player.sendMessage("§c需要10级以上才能采集!")
          return false
        }
#    - type: kether
#      script: |-

  # 奖励设置
  rewards:
    - type: cmd
      value: "give %player% diamond 1"
    - type: cmd
      value: "eco give %player% 100"
    - type: js
      script: |-
        player.sendMessage("§a你获得了100金币!")
    - type: kether
      script: |-
        tell 这是kether脚本奖励
    # - type: mm
    #   id: 'test'
    #   amount: 1
    # - type: ni
    #   id: 'test'
    #   amount: 1
    #   params:
    #     xx: xx
    - type: item
      item:
        material: DIAMOND
        amount: 1
        name: "&b闪耀钻石"
        lore:
          - "&7通过采集获得的钻石"
    - type: item
      item:
        material: EMERALD
        amount: 2
        name: "&a翡翠宝石"
        lore:
          - "&7通过采集获得的绿宝石"
```