---
description: 可自定义的周期任务，将在打开菜单后执行，关闭菜单后取消
---

# 周期任务

## 示例

```yaml
#
# 菜单自定义周期性任务
#
Tasks:
  # 任务 Id
  tikTok:
    # 周期 ( Ticks )
    period: 20
    # 反应
    task:
      - condition: '$ sender.isOp()'
        actions:
          - 'sound: BLOCK_NOTE_BLOCK_BIT-1-2'
```

## 注意

* 每个周期任务由 **任务 ID、周期、反应** 三部分组成
* 切换页码不会终止周期任务

