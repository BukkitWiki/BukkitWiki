---
description: 容器显示标题
---

# 标题

## 示例

```yaml
#
# 菜单的标题, 支持动态标题周期切换
# 标题支持配置颜色 & 函数变量
#
Title:
  - 'Hello, TrMenu!'
  - 'Hello, %player_name%!'
  - 'Support Animated Titles'

#
# 若有多个标题, 动态切换的周期 (ticks)
#
Title-Update: 40
```

```yaml
#
# 静态标题
#
Title: 'TrMenu Menu'

#
# 此项可以不用写，默认值即是 -1
#
# Title-Update: -1
```

## 注意

* 容器标题本身是不支持修改的，动态标题实现的原理是通过发送  `PacketWindowOpen` 包再打开一个新的容器，并重新发送容器内所有物品的数据包
* 动态标题的周期性更新是全局菜单适用，不支持分页独立配置
* 若需不同页面不同标题，有两种实现方式
  * 动态标题配置函数变量，对页码进行判断
  * 配置静态标题，切页后调用动作二次修改标题

