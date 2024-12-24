---
title: '主配置文件'
---

## 示例配置文件

```yaml

database:
  # 数据库类型 支持sqlite、mysql
  type: sqlite
  mysql:
    host: localhost
    port: 3306
    user: root
    password: 123456
    database: minecraft

# 进度条配置
processBar:
  point: '■'
  blank: '□'
  total: 20
  format: '%point%%blank% [%rate%%]'


default:
  actionbar:
    enable: true
    text: '%process%'
  bossbar:
    enable: true
    color: green
    text: '正在采集中... 倒计时 %time% 秒.'
    style: SOLID
  sound:
    enable: true
    tick: 'BLOCK_ANVIL_LAND'
    end: 'ENTITY_PLAYER_LEVELUP'



# 体力管理配置
stamina:
  # 默认最大体力值
  default-max: 100
  # 体力恢复间隔(秒)
  regen-interval: 60
  # 每次恢复量
  regen-amount: 5
  # 体力不足时的提示
  no-stamina-message: "&c你的体力不足,无法继续采集!"

# 全局消息配置
messages:
  # 开始采集时的消息
  start: "&a开始采集..."
  # 采集成功时的消息
  success: "&a采集成功!"
  # 采集失败时的消息
  fail: "&c采集失败!"
  # 采集冷却中的消息
  cooldown: "&c该采集点正在冷却中,剩余时间: %time%秒"
  # 没有权限时的消息
  no-permission: "&c你没有权限采集此物品!"
  # 走出范围时的消息
  leave-range: "&c你已离开采集范围,采集已取消!"
  # 移动取消时的消息
  move-cancel: "&c你移动了,采集已取消!"
  # 正在采集中的消息
  gathering: "&c你正在采集其他物品,请等待完成!"
  # 资源耗尽时的消息
  no-resource: "&c该采集点资源已耗尽,请等待恢复..."
  # 背包已满时的消息
  inventory-full: "&c你的背包已满,无法继续采集!"
  # 采集被打断时的消息
  interrupt: "&c采集被打断!"
  # 进入采集点时的消息
  enter-range: "&a你已进入采集点范围!"
  # 离开采集点时的消息
  exit-range: "&c你已离开采集点范围!"
  # 不在采集点范围内时的消息
  not-in-range: "&c你不在任何采集点范围内!"
  # 不在开启时间内的消息
  not-open: "&c该采集点当前未开放!"

```