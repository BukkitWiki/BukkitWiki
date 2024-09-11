---
title: '农场'
dir: 
  link: true
  order: 1
---


::: tip 在配置文件文件夹下的farm文件夹下面的所有.yml文件都将被视为一个农场
:::


### 配置节点


- `name`
  农场名字
- `permission(可选)`
  权限节点
  检查是否可打开农场，如果没有这个权限会向玩家发送`permission_false`的文字信息
- `permissionFalse(可选)`
  权限判定失败后发送的消息
- [`ui` gui配置 ](./ui配置/)

### 示例文件
```yml
name: 示例农场
permission: 'xxx.xxx'

common: &common
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

ui:
  title: '示例农场'
  layout:
    - 'XXXXXXXXX'
    - 'XABCDEFGX'
    - 'XXXXXXXXX'
  slots:
    X:
      type: frame
      item:
        name: '边框'
        material: 'white_stained_glass_pane'
    A:
      type: slot
      id: 'example-1' # 槽位id 每个槽位都要设置一个唯一id
      <<: *common
    B:
      type: slot
      id: 'example-2'
      <<: *common
    C:
      type: slot
      id: 'example-3'
      <<: *common
    D:
      type: slot
      id: 'example-4'
      <<: *common
    E:
      type: slot
      id: 'example-5'
      <<: *common
    F:
      type: slot
      id: 'example-6'
      <<: *common
    G:
      type: slot
      id: 'example-7'
      <<: *common
```
