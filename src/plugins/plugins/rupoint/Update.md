---
title: '更新日志'
---
## 1.3
1. 增加加点消耗金币功能  
![](https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/20241027074511.png)

## 1.2
1. 增加多属性点功能  
![](https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/20241027073718.png)  
需要在gui配置中增加显式声明所用属性点及消耗的属性点数量  
![](https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/20241027073829.png)

2. 增加两个流程控制脚本  
![](https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/20241027073942.png)

*before* 会在加点执行前执行 需要一个Boolean类型返回值(true,false) 返回true代表会继续执行 返回false代表不会继续执行  
*after* 会在加点执行后执行 无论是否加点成功都会执行

3. 增加一个PAPI变量
`%rupoint_resources_<resource_id>%` 代表某个加点属性源的点数  
![](https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/20241027074307.png)

## 1.1
1. 插件发布