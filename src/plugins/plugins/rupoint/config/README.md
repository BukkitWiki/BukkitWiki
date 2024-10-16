---
title: '配置文件'
dir:
  link: true
---

配置文件夹结构如下：

```shell
    |- gui gui配置文件夹
        |- example.yml 示例GUI
    |- config.yml 主配置文件 
    |- events.yml 自定义事件配置
    |- resources.yml 属性源配置 
```



## 主配置文件

示例配置
``` yaml
token: '' # 验证令牌

database:
  type: sqlite
  mysql:
    host: localhost
    port: 3306
    user: root
    password: 123456
    database: minecraft


msg:
  enoughPoint: '属性点不足'
  exception:
    max: '超过该属性最大限制'
  cmd:
    point-get: '剩余属性点: %point%'
    add-point: '你获得了 %point% 属性点'
    add-point-sender: '成功给玩家 %player% 增加了 %point% 属性点'
    sub-point: '你减少了 %point% 属性点'
    sub-point-sender: '成功给玩家 %player% 减少了 %point% 属性点'
```

## 自定义事件配置

示例配置

```yaml


level: # 随便填
  event: 'org.bukkit.event.player.PlayerLevelChangeEvent' # 对应事件类名 不懂可以问问
  priority: NORMAL # 优先级
  ignoreCancelled: true # 是否忽略取消时间
  # js脚本
  script: |- 
    const player = event.getPlayer()
    if(event.getOldLevel() < event.getNewLevel()){
      const point = event.getNewLevel()-event.getOldLevel()
      DataManager.increasePoint(player.getUniqueId(),point)
      player.sendMessage("由于升级你获得了 "+point+ "点属性点")
    }

```


## 属性源配置

示例配置
``` yaml
gongji:
  max: 10 # 最大值
  attribute: # 属性列表
    - '物理伤害: %a%'
  eval: # 计算
    a: # 命名 对应属性列表中 %%中的文本 会自动替换
      type: script # 类型 暂时仅支持script
      script: |-
         return (point * 10)
  
hujia:
  max: 10
  attribute:
    - '护甲值: %a%'
  eval:
    a:
      type: script
      script: |-
        return (point*1.5)
```

