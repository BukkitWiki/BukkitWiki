# 命令注册

## 配置

```yaml
RegisterCommands: 
  # 主命令名称 
  openMenus: 
  # 子命令名称 
    aliases: [ ] 
    # 所需权限, 无需权限设置为 null 即可 
    permission: null 
    # 动作 
    execute: 
    - 'tell: &7Argument `example` Required!' 
    # 参数 
    arguments: 
    # /openMenu example 
    # 动作 
      example: 'open: example'
```
