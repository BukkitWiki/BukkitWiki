---
title: '槽位配置'
---

## 示例

### 边框

``` yaml
X:
  type: frame
  item:
  name: '边框'
  material: 'white_stained_glass_pane'
```

### 农场槽位

``` yaml
A:
  type: slot
  id: 'example-1' # 槽位id 每个槽位都要设置一个唯一id
  increase: 0
  lock:
    money: 100
    item:
      material: "barrier"
      name: '已锁定'
      lore:
        - '点击左键花费100金币解锁'
  item:
    material: 'green_stained_glass_pane'
    name: '&c空'
    lore:
      - '请先放入土壤'
```

### 命令按钮

``` yaml
B: 
  type: cmd
  cmd:
    # 以玩家身份执行命令
    player:
      - 'xxx'
    # 后台执行命令
    console:
      - 'xxx'
    # 执行op命令
    op:
      - 'xxx'
```


## 配置详解

### frame 
无任何作用的边框

### cmd
命令按钮

### slot

#### increase
槽位增幅
代表种植在这个槽位上的作物成熟速度会增加指定数值

#### lock
锁定配置
一个新玩家初步打开gui时槽位将是锁定状态
在这个配置项中配置锁定相关设置

``` yaml
# 解锁需要的金币 （可选）
money: 100
# 解锁检查的脚本 （可选）
script: |-
  return true
# 未解锁时展示的物品
item:
    material: "barrier"
    name: '已锁定'
    lore:
    - '点击左键花费100金币解锁'
```

#### item
解锁但并未放入土壤时展示的物品