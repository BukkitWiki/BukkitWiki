---
title: "Config.yml"
---

```yaml
Config:
  # 是否在管理员（OP）玩家上线时通知插件更新
  update_notification: true
  
  # 是否在使用 /ce debug 命令时显示动作信息
  debug_actions: true
  
  # 定义自动保存玩家数据的时间间隔（分钟）
  data_save_time: 5

  # 如果您使用 ConditionalEvents 创建包含 player_command 事件的指令，
  # 可以在这里注册这些指令，以便它们出现在自动补全中。忽略 "/"
  # 重要提示：
  # 如果更改此选项，必须重启服务器
  register_commands:
  - "hello"

  # 此选项仅对 to_condition 动作有效。
  # 您可以按照通常的格式在此定义条件组
  to_condition_groups:
    group1:
    - "%player_has_permission_conditionalevents.somepermission% == yes"
    
  # 启用此选项以使用 ConditionalEvents 的新变量替换方法。
  # 该方法允许替换/解析嵌套多层变量的变量。
  # 例如 %block_at_{player_x}_{math_0:0_{player_y}-1}_{player_z}_{player_world}%。 
  experimental:
    variable_replacement: false
```