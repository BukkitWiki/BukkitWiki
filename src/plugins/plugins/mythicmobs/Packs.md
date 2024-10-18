---
order: 5
---
# 包

MythicMobs 有一个非常强大的软件包系统，可以更好地整理你的配置文件，还可以通过其他途径下载软件包更方便的安装。
只需要在 `MythicMobs/Packs` 文件夹中创建一个文件夹（以你的包名命名），然后就可以像在 MythicMobs 根目录中一样，在其中创建物品、怪物、技能、随机生成等配置文件夹。

## Pack Info 包信息
制作软件包时，你可能希望在软件包中嵌入更多信息，如作者、软件包名称等。这可以通过在软件包主目录下创建`packinfo.yml`文件来实现
```yaml
Name: 包名
Version: 0.1.0
Author: 作者名
Icon:
  Material: 图标材质
  Model: 图标的 CustomModelData
URL: 软件包链接
Description:
- 描述信息
- 在这里可以使用&a颜色代码
```
当用户通过 `/mm menu` 命令访问 MythicMobs 菜单之后可以看到你配置的图标