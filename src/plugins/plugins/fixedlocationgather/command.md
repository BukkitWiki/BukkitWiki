---
title: '命令和权限'
---

## 命令和权限 主命令`fiexdlocationgather` 别名`gather` `flg` `caiji`

### 管理员命令

- `/gather reload` - 重载插件配置
  - 权限: `gather.admin`
  - 默认: OP

- `/gather tool` - 获取选点工具
  - 权限: `gather.admin`
  - 默认: OP

- `/gather setloc <采集点名称>` - 设置采集点范围
  - 权限: `gather.admin`
  - 默认: OP
  - 需要先使用选点工具选择两个点

- `/gather stamina add <玩家> <数量>` - 增加玩家体力值
  - 权限: `gather.admin`
  - 默认: OP

- `/gather stamina setmax <玩家> <数量>` - 设置玩家最大体力值
  - 权限: `gather.admin`
  - 默认: OP

### 玩家命令

- `/gather start` - 开始采集
  - 权限: `gather.start`
  - 默认: 所有玩家
