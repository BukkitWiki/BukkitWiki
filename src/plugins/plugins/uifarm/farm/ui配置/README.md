---
title: 'UI配置'
dir:
  link: true
---

``` yaml
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

## title
GUI标题
## layout
抽象字符布局
## slots
槽位配置
<br>
[详细配置](./slots.md)