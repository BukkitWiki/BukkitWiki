---
description: 单条动作支持的参数
---

# 参数

## 延时

> {delay=\[TICKS\]}

```yaml
# 延时 1sec 发送消息
- 'tell: Delayed Message {delay=20}'
```

## 概率

> {chance=\[rate\]}

```yaml
- 'give-item: material:DIAMOND {chance=0.8}'
```

## 条件

> {condition=&lt;Expression&gt;}

```yaml
- 'tell: VIP User Message {condition=perm *user.vip}'
```

## 遍历

> {players=&lt;Expression&gt;}

```yaml
- 'tell: A Broadcast Message {players}'

- 'tell: An admin broadcast message {players: perm *admin}'
```

* 循环为所有满足条件的在线玩家执行该动作



