---
title: '词条配置'
---

# 词条配置

# 示例配置

``` yaml
example:
  text: '测试属性'
  attribute:
    - type: 'normal'
      # 可用 PAPI 但要注意 PAPI在怪物身上无法解析
      lore:
        - '物理伤害: 100'
    - type: 'normal'
      filter: |-
        玩家.是否有权限("xxx.xxx")
      lore:
        - "真实伤害: %a%"
      script:
        a: |-
          玩家.getLevel()
```

## text
检测的词条 在此位置可写正则表达式

## attribute 属性
type 目前只有normal属性 也就是最终要交给属性插件的属性lore

filter 可选 过滤脚本 需要返回一个boolean值

lore 必填 最终的属性 可用PAPI 自定义脚本变量为 %自定义名%

script 用于实现在lore中写的自定义脚本变量 需要返回计算结果 最终会替换到lore中的%自定义名%