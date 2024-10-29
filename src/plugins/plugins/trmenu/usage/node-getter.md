---
description: TrMenu 还支持以配置文件中的节点作为变量获取, 避免重复写同一内容.
---

# 节点变量

## 用法
```text
{node: <key>}

E.g:
{node: Title}
 -> 获取菜单的 Title
 
{node: Icons.A.display.name}
 -> 获取图标 A 的展示名称
 
{node: Icons.@iconid@.display.name}
 -> 如果该变量存在 B 的任意支持函数变量的区域中, 将获取图标 B 的展示名称
```
* **注意**: 获取节点时尽可能注意大小写是否匹配
* 作为函数变量能够在任意支持变量的区域使用
* **@iconid@** 为静态变量, 在图标下会被解析为该图标的 id

## 示例
```yaml
Title: '子服列表'

Layout:
  - '012345678'

Icons:
  0:
    display:
      material: 'wool'
      name: '&3前往 => &b{node: Icons.@iconid@.properties.name}'
      lore:
        - '&7有关信息: {node: Icons.@iconid@.properties.desc}'
        - ''
    actions:
      all:
        - 'server: {node: Icons.@iconid@.properties.server}'
    properties:
      name: '子服-@iconId@'
      server: 'server-@iconId@'
      desc: '这里有许多友爱的玩家们'
  1:
    display:
      material: 'wool'
      name: '&3前往 => &b{node: Icons.@iconid@.properties.name}'
      lore:
        - '&7有关信息: {node: Icons.@iconid@.properties.desc}'
        - ''
    actions:
      all:
        - 'server: {node: Icons.@iconid@.properties.server}'
    properties:
      name: '子服-@iconId@'
      server: 'server-@iconId@'
      desc: '这里风和日丽'
  2:
    display:
      material: 'wool'
      name: '&3前往 => &b{node: Icons.@iconid@.properties.name}'
      lore:
        - '&7有关信息: {node: Icons.@iconid@.properties.desc}'
        - ''
    actions:
      all:
        - 'server: {node: Icons.@iconid@.properties.server}'
    properties:
      name: '子服-@iconId@'
      server: 'server-@iconId@'
      desc: '这里危机重重'
  3:
    display:
      material: 'wool'
      name: '&3前往 => &b{node: Icons.@iconid@.properties.name}'
      lore:
        - '&7有关信息: {node: Icons.@iconid@.properties.desc}'
        - ''
    actions:
      all:
        - 'server: {node: Icons.@iconid@.properties.server}'
    properties:
      name: '子服-@iconId@'
      server: 'server-@iconId@'
      desc: '这里适合养老'
  4:
    display:
      material: 'wool'
      name: '&3前往 => &b{node: Icons.@iconid@.properties.name}'
      lore:
        - '&7有关信息: {node: Icons.@iconid@.properties.desc}'
        - ''
    actions:
      all:
        - 'server: {node: Icons.@iconid@.properties.server}'
    properties:
      name: '子服-@iconId@'
      server: 'server-@iconId@'
      desc: '这里怪物很多'
  5:
    display:
      material: 'wool'
      name: '&3前往 => &b{node: Icons.@iconid@.properties.name}'
      lore:
        - '&7有关信息: {node: Icons.@iconid@.properties.desc}'
        - ''
    actions:
      all:
        - 'server: {node: Icons.@iconid@.properties.server}'
    properties:
      name: '子服-@iconId@'
      server: 'server-@iconId@'
      desc: '这里适合生电'
  6:
    display:
      material: 'wool'
      name: '&3前往 => &b{node: Icons.@iconid@.properties.name}'
      lore:
        - '&7有关信息: {node: Icons.@iconid@.properties.desc}'
        - ''
    actions:
      all:
        - 'server: {node: Icons.@iconid@.properties.server}'
    properties:
      name: '子服-@iconId@'
      server: 'server-@iconId@'
      desc: '这里经常崩服'
  7:
    display:
      material: 'wool'
      name: '&3前往 => &b{node: Icons.@iconid@.properties.name}'
      lore:
        - '&7有关信息: {node: Icons.@iconid@.properties.desc}'
        - ''
    actions:
      all:
        - 'server: {node: Icons.@iconid@.properties.server}'
    properties:
      name: '子服-@iconId@'
      server: 'server-@iconId@'
      desc: '这里有剧情'
  8:
    display:
      material: 'wool'
      name: '&3前往 => &b{node: Icons.@iconid@.properties.name}'
      lore:
        - '&7有关信息: {node: Icons.@iconid@.properties.desc}'
        - ''
    actions:
      all:
        - 'server: {node: Icons.@iconid@.properties.server}'
    properties:
      name: '子服-@iconId@'
      server: 'server-@iconId@'
      desc: '这里可以上天'
```