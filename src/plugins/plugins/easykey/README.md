---
title: 'EasyKey —— 简单按键'
shortTitle: 'EasyKey'
isOriginal: true
tag: ['免费 ','原创']
dir:
  link: true
---


## 简介
EasyKey是一款极其小巧的自定义按键的Mod+插件套件。  

支持版本： 
- [x] 1.16.5
- [x] 1.18.2
- [x] 1.20.1
- [x] 1.20.4
- [ ] 1.21

::: tip 下载方式 加入qq群642468469
:::

### 演示视频
<BiliBili bvid="BV1AoxmehEU7" />


## 使用方法
在客户端安装Mod，在服务端安装插件

::: warning 
前置下载地址 https://www.curseforge.com/minecraft/mc-mods/architectury-api
:::

## 配置文件
只有两个文件 `config.yml` 和 `keys.yml`
其中 `config.yml` 是给后续拓展留着的文件（目前一点用没有）  
`keys.yml`是配置按键事件的文件  
![](image.png)


### keys.yml 配置文件

按键请参考[此页面](keys.md)

```yaml
example: # 不用管 但要唯一
  key: # 按键
    - '左Ctrl'
    - 'F'
  action: # 动作
    - type: msg
      msg:
        - '你好,EasyKey'

cmd_example:
  key:
    - 'P'
  action:
    - type: cmd
      cmd:
        - '[player] xxx'
        - '[op] xxx'
        - '[console] xxx'
```