---
title: 'Lottery —— 彩票系统'
shortTitle: 'Lottery'
isOriginal: true
tag: ['免费','原创']
dir:
  link: true
---

## 插件简介
一个功能完善的彩票系统插件,支持定时开奖、多等级奖励、自动广播等功能。

::: tip 下载方式 加入qq交流群642468469
:::

## 插件特点
- 支持定时开奖(使用cron表达式配置)
- 灵活的奖池系统
- 多等级奖励设置
- 自动广播提醒
- 丰富的消息配置
- 支持自定义命令奖励

## 图片展示
![](https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/20241208182009.png)
![](https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/20241208181936.png)
![](https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/20241208181910.png)
![](https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/20241208181834.png)

## 插件命令 完整命令为`/lottery` 缩写为`/lt` `/caipiao` `/cp`
- `/lottery` - 查看帮助
- `/lottery buy <数量>` - 购买彩票 权限 `lottery.buy`
- `/lottery info` - 查看当前彩票信息
- `/lottery reload` - 重载插件配置
- `/lottery start` - 手动开始售卖
- `/lottery stop` - 手动停止售卖
- `/lottery draw` - 手动开奖

## 配置文件

```yaml


# 基础设置
settings:
  # 彩票开奖时间(cron表达式)
  draw-cron: "0 0 */1 * * ?"  # 每小时整点开奖
  # 每张彩票价格
  ticket-price: 100
  # 最小参与人数
  min-players: 5
  # 最小购买数量
  min-tickets: 1
  # 最大购买数量
  max-tickets: 10
  # 是否在开奖后立即开始新一轮
  immediate-start: true
  # 是否开启广播提醒
  broadcast: true
  # 开奖前提醒时间(秒)
  remind-before: [1800, 600, 300, 60]
  # 售卖前提醒时间(秒)
  sale-remind-before: [600, 300, 60]
  # 开奖后执行的命令
  draw-commands:
    - "say 本轮彩票已开奖完毕!"
    - "broadcast 感谢大家参与!"

# 奖池设置
prize-pool:
  # 初始奖池金额
  initial-amount: 10000
  # 每张彩票分配到奖池的比例(0-1)
  contribution-rate: 0.8
  
# 中奖设置
winning:
  # 一等奖
  first:
    # 中奖概率(百分比)
    chance: 1
    # 奖池分配比例
    pool-share: 0.5
    # 固定奖励
    rewards:
      - "give %player% diamond 5"
      - "exp give %player% 1000"
  # 二等奖
  second:
    chance: 5
    pool-share: 0.3
    rewards:
      - "give %player% gold_ingot 10"
      - "exp give %player% 500"
  # 三等奖
  third:
    chance: 10
    pool-share: 0.2
    rewards:
      - "give %player% iron_ingot 20"
      - "exp give %player% 200"
# 消息设置
messages:
  prefix: "&6[&b&l彩票系统&6] &r"
  purchase-success:
    - "&a▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃"
    - "&a恭喜您成功购买了 &6%amount% &a张彩票!"
    - "&a共花费 &e$%price%"
    - "&a祝您好运,希望您能中大奖!"
    - "&a▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃"
  insufficient-money:
    - "&c▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃"
    - "&c很抱歉,您的余额不足!"
    - "&c需要 &e$%price% &c才能购买彩票"
    - "&c▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃"
  draw-broadcast:
    - "&6▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃"
    - "&e&l彩票开奖时间到!"
    - "&e以下是本期中奖名单:"
    - "%winners%"
    - "&6▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃"
  invalid-amount:
    - "&c✖✖✖✖✖✖✖✖✖✖✖✖✖✖✖✖✖✖"
    - "&c很抱歉,您的购买数量不符合要求"
    - "&c每位玩家每轮只能购买 &e%min%-%max% &c张彩票"
    - "&c请重新输入合适的数量"
    - "&c✖✖✖✖✖✖✖✖✖✖✖✖✖✖✖✖✖✖"
  remind:
    - "&e&l⚡ 开奖提醒 ⚡"
    - "&e彩票即将开奖!"
    - "&e距离开奖还有 &6%time% &e分钟"
  sale-remind:
    - "&e&l⚡ 售卖提醒 ⚡" 
    - "&e彩票即将开始售卖!"
    - "&e距离开始售卖还有 &6%time% &e分钟"
  sale-start:
    - "&a▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃"
    - "&a&l新一轮彩票开始售卖啦!"
    - "&a单张价格: &e$%price%"
    - "&a当前奖池: &e$%pool%"
    - "&a▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃"
  not-on-sale:
    - "&c▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃"
    - "&c抱歉,彩票暂未开始售卖"
    - "&c请等待下一轮开始"
    - "&c▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃"
  win-message:
    - "&6✮✮✮✮✮✮✮✮✮✮✮✮✮✮✮✮✮✮"
    - "&a&l恭喜您获得了 &6%prize%等奖&a&l!"
    - "&a奖金: &e$%money%"
    - "&a奖励已经发放到您的账户"
    - "&6✮✮✮✮✮✮✮✮✮✮✮✮✮✮✮✮✮✮"
  refund-message:
    - "&e▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃"
    - "&e由于参与人数不足,本轮彩票取消"
    - "&e您购买的 &6%amount% &e张彩票已退款"
    - "&e退还金额: &a$%refund%"
    - "&e▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃"
  purchase-broadcast:
    - "&a&l玩家 &e%player% &a&l购买了 &6%amount% &a&l张彩票!"
    - "&a&l当前奖池: &e$%pool%"

```