---
description: 内置 JavaScript 函数是菜单配置 Functions 节点下的自定义脚本
---

# 内置函数

::: info 使用本功能，需要有一些 JavaScript 语法基础
:::

## 示例

```yaml
Functions:
  flash: |-
    function flash() {
      var display = new Date().getSeconds() % 2 == 0
      return display ? args[0] : "  "
    }
    flash()
```

* 在该例中，我们在 Functions 下定义了一个 `flash` 函数，本函数根据判断当前系统的时间（秒）是否为偶数，决定是返回传入参数还是一个空格
* 该函数可以实现闪烁的动画效果，且支持自定义参数参数作为闪烁符号

## 注意

* 调用格式为 `${[funcName]_[Arg1]_[Arg2]}` 例如 ${flash\_&gt;}
* 默认函数上方将自动添加行 `var args = new Array()` 并写入参数，因此在内置函数中传入的参数可以直接通过 args 数组的形式使用



#### 拓展例子

```yaml
bStats:
  servers: 'vars("${bStats.query_servers_&a_&7 servers}")'
  players: 'vars("${bStats.query_players_&6_&7 players}")'
  menus: 'vars("${bStats.query_menus_&2_&7 menus}")'
  opens: |-
    function opens() {
      var data = utils.query("https://bstats.org/api/v1/plugins/5742/charts/menu_open_counts/data?maxElements=1")
      if (data.has()){
        return "&b" + data.asJson().getAsJsonArray().get(0).getAsJsonArray().get(1) + "&7"
      }
      return "&8Loading." + vars("${flash_.}") + "&7"
    }
    opens()
  query: |-
    function query() {
      var data = utils.query("https://bstats.org/api/v1/plugins/5742/charts/" + args[0] + "/data?maxElements=1")
      if (data.has()){
        return args[1] + data.asJson().getAsJsonArray().get(0).getAsJsonArray().get(1) + args[2]
      }
      return "&8Loading." + vars("${flash_.}")
    }
    query()
```

