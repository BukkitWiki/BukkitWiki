---
title: '所有方法表'
---

## 原始方法表
来自反编译

|方法名|参数列表| 返回值                                                                                                                                                |
|:-:|:-:|----------------------------------------------------------------------------------------------------------------------------------------------------|
|[倒地体验卡]|[]|void|
|[玩家是否飞行, Player_IsFlying]|[]|boolean|
|[玩家护甲值, 取玩家护甲值, Player_Get_Armor]|[]|int|
|[玩家yaw, 取玩家yaw, Player_Get_Yaw]|[]|double|
|[CollisionBoxes1]|[double, double, double]|double|
|[玩家名, 取玩家名, Player_Get_Name]|[]|java.lang.String|
|[玩家坐标x, 取玩家坐标x, Player_Get_PosX]|[]|double|
|[玩家motionz]|[]|double|
|[取物品最大使用时间, Item_Use_Count_Max]|[]|int|
|[松开使用, Item_Use_Stop]|[]|void|
|[玩家氧气值, 取玩家氧气值, Player_Get_Air]|[]|int|
|[玩家是否死亡]|[]|boolean|
|[player_hurt_time]|[]|double|
|[取物品使用时间, Item_Use_Count]|[]|int|
|[玩家motiony]|[]|double|
|[玩家经验, 取玩家经验, Player_Get_Exp]|[]|double|
|[玩家移动速度]|[]|double|
|[玩家等级, 取玩家等级, Player_Get_Level]|[]|int|
|[玩家坐标y, 取玩家坐标y, Player_Get_PosY]|[]|double|
|[玩家当前人称]|[]|int|
|[玩家飞行速度]|[]|double|
|[CollisionBoxes2]|[double, double, double]|double|
|[CollisionBoxes3]|[double, double, double]|boolean|
|[玩家是否在水中, 是否在水中, Player_InWater]|[]|boolean|
|[玩家pitch, 取玩家pitch, Player_Get_Pitch]|[]|double|
|[玩家手持槽, 取玩家手持槽, Player_Get_CurrentItem]|[]|int|
|[取玩家头像, Player_Head_Texture]|[]|java.lang.String|
|[player_preparePlayerToSpawn]|[]|void|
|[取活跃物品, Item_Use]|[]|eos.moe.dragoncore.v|
|[玩家motionx]|[]|double|
|[玩家血量, 取玩家血量, Player_Get_Health]|[]|double|
|[玩家创造模式]|[]|boolean|
|[player_death_time]|[]|double|
|[玩家饱食度, 取玩家饱食度, Player_Get_Food]|[]|int|
|[玩家最大血量, 取玩家最大血量, Player_Get_MaxHealth]|[]|double|
|[玩家坐标z, 取玩家坐标z, Player_Get_PosZ]|[]|double|
|[Display_Window_X]|[]|int|
|[Display_IsFullScreen]|[]|boolean|
|[Display_Resize]|[int, int]|void|
|[Display_SetResizable]|[boolean]|void|
|[Display_Window_Height]|[]|int|
|[Display_Desktop_Width]|[]|int|
|[Display_Desktop_Height]|[]|int|
|[Display_SetFullScreen]|[boolean]|void|
|[Display_Location]|[int, int]|void|
|[Display_IsResizable]|[]|boolean|
|[Display_Window_Y]|[]|int|
|[Display_Window_Width]|[]|int|
|[游戏进度, Minecraft_Advancements]|[]|void|
|[关闭游戏, Minecraft_Shutdown]|[]|void|
|[游戏选项, Minecraft_Options]|[]|void|
|[执行JS, JS_EXECUTE]|[class java.lang.String, class [Leos.moe.dragoncore.v;]|eos.moe.dragoncore.v|
|[设置材质包]|[class [Ljava.lang.String;]|void|
|[加载JS, JS_Load]|[]|boolean|
|[游戏统计, Minecraft_Stat]|[]|void|
|[设置界面尺寸, Minecraft_Set_Gui_Scale]|[int]|void|
|[取界面尺寸, Minecraft_Get_Gui_Scale]|[]|double|
|[取当前界面名, Minecraft_Get_Screen_Name]|[]|java.lang.String|
|[取FPS, Minecraft_Get_FPS]|[]|int|
|[退出游戏, Minecraft_Quit]|[]|void|
|[执行方法, Function_Execute]|[class eos.moe.dragoncore.sl, class java.lang.String, class [Leos.moe.dragoncore.v;]|eos.moe.dragoncore.v|
|[取当前消息, Message_Current]|[class eos.moe.dragoncore.sl]|eos.moe.dragoncore.v|
|[变量, 界面变量, variable, var]|[class eos.moe.dragoncore.sl]|eos.moe.dragoncore.v|
|[界面是否已关闭, Screen_Is_Close]|[class eos.moe.dragoncore.sl]|boolean|
|[取最后一条消息, Message_Last]|[class eos.moe.dragoncore.sl]|eos.moe.dragoncore.v|
|[跨界面执行方法, Function_Screen_Execute]|[class eos.moe.dragoncore.sl, class java.lang.String, class java.lang.String, class [Leos.moe.dragoncore.v;]|eos.moe.dragoncore.v|
|[执行组件方法, Component_Function_Execute]|[class eos.moe.dragoncore.sl, interface eos.moe.dragoncore.v, class java.lang.String]|eos.moe.dragoncore.v|
|[异步执行方法, Function_Async_Execute]|[class eos.moe.dragoncore.sl, class java.lang.String, class [Leos.moe.dragoncore.v;]|void|
|[解析脚本, Function_Parse]|[class eos.moe.dragoncore.sl, class java.lang.String]|eos.moe.dragoncore.v|
|[主线程执行方法, Function_Sync_Execute]|[class eos.moe.dragoncore.sl, class java.lang.String, class [Leos.moe.dragoncore.v;]|eos.moe.dragoncore.v|
|[切换方法集, Function_Change]|[class eos.moe.dragoncore.sl, class java.lang.String, int]|void|
|[获取按键名, 获取控制按键名, ControlKey_Get_Name]|[class java.lang.String]|java.lang.String|
|[模拟控制按键, ControlKey_Test]|[class java.lang.String, boolean]|boolean|
|[创建控制按键, ControlKey_Create]|[class java.lang.String, class java.lang.String, class java.lang.String]|void|
|[控制按键是否按下, ControlKey_Is_Press]|[class java.lang.String]|boolean|
|[设置按键, 设置控制按键, ControlKey_Set_Key]|[class java.lang.String, class java.lang.String, class java.lang.String]|boolean|
|[获取按键额外, 获取控制按键额外, ControlKey_Get_Modifier]|[class java.lang.String]|java.lang.String|
|[取Yaml节点, Yaml_Get_Keys]|[class eos.moe.dragoncore.iv, class java.lang.String]|eos.moe.dragoncore.v|
|[取Yaml值, Yaml_Get]|[class eos.moe.dragoncore.iv, class java.lang.String]|eos.moe.dragoncore.v|
|[取Yaml全部节点, Yaml_Get_All_Keys]|[class eos.moe.dragoncore.iv, class java.lang.String]|eos.moe.dragoncore.v|
|[取所有物品, Container_Get_All_Items]|[class eos.moe.dragoncore.sl]|eos.moe.dragoncore.zk|
|[模拟点击槽位, Container_Click]|[class java.lang.String, int, class java.lang.String, double]|void|
|[丢弃手中物品, Container_Drop]|[]|void|
|[取容器所有物品, Container_Get_Container_Items]|[class eos.moe.dragoncore.sl]|eos.moe.dragoncore.zk|
|[删除物品, Container_Delete]|[class java.lang.String, boolean]|void|
|[取物品, 取槽位物品, Container_Get_Item]|[class eos.moe.dragoncore.sl, class java.lang.String]|net.minecraft.item.ItemStack|
|[取世界屏幕坐标修正]|[double, double, double, float]|eos.moe.dragoncore.zk|
|[取世界屏幕坐标]|[double, double, double]|eos.moe.dragoncore.zk|
|[取实体血量]|[interface eos.moe.dragoncore.v]|double|
|[取实体高度]|[interface eos.moe.dragoncore.v]|double|
|[取实体坐标x]|[interface eos.moe.dragoncore.v]|double|
|[取实体坐标y]|[interface eos.moe.dragoncore.v]|double|
|[取实体最大血量]|[interface eos.moe.dragoncore.v]|double|
|[实体是否存在, Entity_Exists, Entity_Exist]|[interface eos.moe.dragoncore.v]|boolean|
|[取实体]|[interface eos.moe.dragoncore.v]|eos.moe.dragoncore.v|
|[取实体坐标z]|[interface eos.moe.dragoncore.v]|double|
|[关闭着色器]|[]|void|
|[启用着色器]|[class java.lang.String]|void|
|[取物品信息数, ItemStack_Get_Info_Size]|[class net.minecraft.item.ItemStack]|int|
|[序列化物品, ItemStack_Serialize]|[class net.minecraft.item.ItemStack]|java.lang.String|
|[取物品Lore数, ItemStack_Get_Lore_Size]|[class net.minecraft.item.ItemStack]|int|
|[取物品NBT, ItemStack_Get_NBT]|[class net.minecraft.item.ItemStack, class java.lang.String]|java.lang.String|
|[取物品信息, ItemStack_Get_Info]|[class net.minecraft.item.ItemStack, int]|java.lang.String|
|[取物品所有信息, ItemStack_Get_All_Info]|[class net.minecraft.item.ItemStack]|eos.moe.dragoncore.zk|
|[取物品护甲值, ItemStack_Get_Armor]|[class net.minecraft.item.ItemStack]|int|
|[匹配物品, ItemStack_Match]|[class net.minecraft.item.ItemStack, class java.lang.String, interface eos.moe.dragoncore.v]|boolean|
|[反序列化物品, ItemStack_DeSerialize]|[class java.lang.String]|eos.moe.dragoncore.sh|
|[取物品名, ItemStack_Get_Name]|[class net.minecraft.item.ItemStack]|java.lang.String|
|[取物品Lore, ItemStack_Get_Lore]|[class net.minecraft.item.ItemStack, int, boolean]|java.lang.String|
|[取物品所有Lore, ItemStack_Get_All_Lore]|[class net.minecraft.item.ItemStack, boolean]|eos.moe.dragoncore.zk|
|[取物品数, ItemStack_Get_Count]|[class net.minecraft.item.ItemStack]|int|
|[取实体最大血量]|[class eos.moe.dragoncore.iv]|double|
|[执行方法, Function_Execute]|[class eos.moe.dragoncore.iv, class java.lang.String, class [Leos.moe.dragoncore.v;]|eos.moe.dragoncore.v|
|[取实体名]|[class eos.moe.dragoncore.iv]|java.lang.String|
|[取实体血量]|[class eos.moe.dragoncore.iv]|double|
|[主线程执行方法, Function_Sync_Execute]|[class eos.moe.dragoncore.iv, class java.lang.String, class [Leos.moe.dragoncore.v;]|eos.moe.dragoncore.v|
|[取实体血量比例]|[class eos.moe.dragoncore.iv]|double|
|[取实体UUID]|[class eos.moe.dragoncore.iv]|java.lang.String|
|[异步执行方法, Function_Async_Execute]|[class eos.moe.dragoncore.iv, class java.lang.String, class [Leos.moe.dragoncore.v;]|void|
|[解析脚本, Function_Parse]|[class eos.moe.dragoncore.iv, class java.lang.String]|eos.moe.dragoncore.v|
|[取实体高度]|[class eos.moe.dragoncore.iv]|double|
|[刷新缓存, Screen_Cache_Update]|[class eos.moe.dragoncore.sl]|void|
|[取熔炉燃料值, Screen_Furnace_BurnTime]|[class eos.moe.dragoncore.sl]|double|
|[取当前界面名, Screen_Get_Name]|[class eos.moe.dragoncore.sl]|java.lang.String|
|[打开聊天栏, Screen_Open_ChatGui]|[class java.lang.String]|void|
|[取屏幕高度比例, Screen_Get_Height_Ratio, hr]|[]|java.lang.String|
|[取屏幕宽度, Screen_Get_Width, w]|[]|double|
|[设置显示, 显示, Screen_Set_Show]|[class java.lang.String, interface eos.moe.dragoncore.v]|void|
|[打开HUD, Screen_Open_Hud]|[class java.lang.String]|void|
|[取界面存活时间, Screen_ActiveTime]|[class eos.moe.dragoncore.sl]|double|
|[重载界面, Screen_Reload]|[class eos.moe.dragoncore.sl]|void|
|[取屏幕宽度比例, Screen_Get_Width_Ratio, wr]|[]|java.lang.String|
|[打开二级界面, 打开子界面, Screen_Open_Sub_Gui]|[class java.lang.String]|void|
|[取聊天栏内容, Screen_ChatGui_Get]|[]|java.lang.String|
|[设置聊天栏内容, Screen_ChatGui_Set]|[class java.lang.String, int]|void|
|[取熔炉进度值, Screen_Furnace_CookProgress]|[class eos.moe.dragoncore.sl]|double|
|[熔炉是否熔炼中, Screen_Furnace_IsBurning]|[class eos.moe.dragoncore.sl]|boolean|
|[取原界面名, Screen_Original_Name]|[class eos.moe.dragoncore.sl]|java.lang.String|
|[关闭HUD, Screen_Close_Hud]|[class java.lang.String]|void|
|[重置界面打开时间, Screen_OpenTime_Reset]|[class eos.moe.dragoncore.sl]|void|
|[关闭主界面, Screen_Close_Main]|[]|void|
|[设置隐藏, 隐藏, Screen_Set_Hide]|[class java.lang.String, interface eos.moe.dragoncore.v]|void|
|[取屏幕高度, Screen_Get_Height, h]|[]|double|
|[当前是否打开聊天栏, Screen_Chat_Opened]|[]|boolean|
|[打开GUI, Screen_Open_Gui]|[class java.lang.String]|void|
|[取界面打开时间, Screen_OpenTime_Get]|[class eos.moe.dragoncore.sl]|double|
|[关闭界面, 返回游戏, Screen_Close]|[class eos.moe.dragoncore.sl]|void|
|[消息, Message]|[class [Ljava.lang.String;]|void|
|[调试输出, log]|[class [Ljava.lang.String;]|void|
|[Title]|[class java.lang.String, class java.lang.String, int, int, int]|void|
|[ActionBar]|[class java.lang.String]|void|
|[聊天, Chat]|[class [Ljava.lang.String;]|void|
|[播放动画, PlayAnimation]|[class eos.moe.dragoncore.sl, class [Leos.moe.dragoncore.v;]|void|
|[添加成员, Array_Add]|[interface eos.moe.dragoncore.v, class [Leos.moe.dragoncore.v;]|eos.moe.dragoncore.v|
|[系统变量, system]|[]|eos.moe.dragoncore.v|
|[用户变量, player]|[]|eos.moe.dragoncore.v|
|[取成员, get, Array_Get]|[interface eos.moe.dragoncore.v, int]|eos.moe.dragoncore.v|
|[移除成员, Array_Remove]|[interface eos.moe.dragoncore.v, class [Leos.moe.dragoncore.v;]|eos.moe.dragoncore.v|
|[插入成员, Array_Add]|[interface eos.moe.dragoncore.v, int, class [Leos.moe.dragoncore.v;]|eos.moe.dragoncore.v|
|[截取内容, subContent]|[interface eos.moe.dragoncore.v, class java.lang.String, int, int]|eos.moe.dragoncore.v|
|[取成员数, get_size, Array_Size]|[interface eos.moe.dragoncore.v]|eos.moe.dragoncore.v|
|[截取数组, sublist, Array_Sub]|[interface eos.moe.dragoncore.v, int, int]|eos.moe.dragoncore.v|
|[全局变量, global]|[]|eos.moe.dragoncore.v|
|[变量取值, Var_Get]|[interface eos.moe.dragoncore.v, class java.lang.String]|eos.moe.dragoncore.v|
|[变量置值, Var_Set]|[interface eos.moe.dragoncore.v, class java.lang.String, interface eos.moe.dragoncore.v]|void|
|[修改成员, Array_Replace]|[interface eos.moe.dragoncore.v, int, interface eos.moe.dragoncore.v]|eos.moe.dragoncore.v|
|[新建数组, Array_Create]|[class [Leos.moe.dragoncore.v;]|eos.moe.dragoncore.v|
|[重载变量, Var_Reload]|[interface eos.moe.dragoncore.v]|void|
|[本地变量, client]|[]|eos.moe.dragoncore.v|
|[是否奔跑中]|[class eos.moe.dragoncore.kz]|boolean|
|[动画层是否播放中]|[class eos.moe.dragoncore.kz, class java.lang.String]|boolean|
|[移除实体]|[class eos.moe.dragoncore.kz]|void|
|[取横向动量]|[class eos.moe.dragoncore.kz]|double|
|[取主手物品]|[class eos.moe.dragoncore.kz]|eos.moe.dragoncore.v|
|[停止动画]|[class eos.moe.dragoncore.kz, class java.lang.String, interface eos.moe.dragoncore.v]|void|
|[骑乘生物是否为生命体]|[class eos.moe.dragoncore.kz]|boolean|
|[取血量]|[class eos.moe.dragoncore.kz]|double|
|[是否在水下]|[class eos.moe.dragoncore.kz]|boolean|
|[取正向动量]|[class eos.moe.dragoncore.kz]|double|
|[是否静止中]|[class eos.moe.dragoncore.kz]|boolean|
|[动画是否播放中]|[class eos.moe.dragoncore.kz, class java.lang.String]|boolean|
|[移除死亡计数]|[class eos.moe.dragoncore.kz]|void|
|[是否在水中]|[class eos.moe.dragoncore.kz]|boolean|
|[取pitch]|[class eos.moe.dragoncore.kz]|double|
|[是否骑乘]|[class eos.moe.dragoncore.kz]|boolean|
|[是否跳跃中]|[class eos.moe.dragoncore.kz]|boolean|
|[取最大血量]|[class eos.moe.dragoncore.kz]|double|
|[是否鞘翅飞行中]|[class eos.moe.dragoncore.kz]|boolean|
|[是否在地面]|[class eos.moe.dragoncore.kz]|boolean|
|[取血量比例]|[class eos.moe.dragoncore.kz]|double|
|[取动画所在动画层]|[class eos.moe.dragoncore.kz, class java.lang.String]|java.lang.String|
|[是否蹲下]|[class eos.moe.dragoncore.kz]|boolean|
|[停止动画层]|[class eos.moe.dragoncore.kz, class java.lang.String, interface eos.moe.dragoncore.v]|void|
|[是否有动画]|[class eos.moe.dragoncore.kz, class java.lang.String]|boolean|
|[取默认过渡时间]|[]|int|
|[取副手物品]|[class eos.moe.dragoncore.kz]|eos.moe.dragoncore.v|
|[播放动画]|[class eos.moe.dragoncore.kz, class java.lang.String, interface eos.moe.dragoncore.v, float]|void|
|[motionY]|[class eos.moe.dragoncore.kz]|double|
|[设置骨骼可视]|[class eos.moe.dragoncore.kz, class java.lang.String, boolean]|void|
|[取实体名]|[class eos.moe.dragoncore.kz]|java.lang.String|
|[移除飞行状态]|[class eos.moe.dragoncore.kz]|void|
|[取动画层运行时间]|[class eos.moe.dragoncore.kz, class java.lang.String]|int|
|[设置飞行状态]|[class eos.moe.dragoncore.kz, boolean]|void|
|[设置动画变量]|[class eos.moe.dragoncore.kz, class java.lang.String, double]|void|
|[是否移动中]|[class eos.moe.dragoncore.kz]|boolean|
|[取yaw]|[class eos.moe.dragoncore.kz]|double|
|[是否下坠中]|[class eos.moe.dragoncore.kz]|boolean|
|[取高度]|[class eos.moe.dragoncore.kz]|double|
|[是否攀爬中]|[class eos.moe.dragoncore.kz]|boolean|
|[取Yaml节点, Yaml_Get_Keys]|[class eos.moe.dragoncore.sl, class java.lang.String]|eos.moe.dragoncore.v|
|[取Yaml值, Yaml_Get]|[class eos.moe.dragoncore.sl, class java.lang.String]|eos.moe.dragoncore.v|
|[取Yaml全部节点, Yaml_Get_All_Keys]|[class eos.moe.dragoncore.sl, class java.lang.String]|eos.moe.dragoncore.v|
|[是否持有物品]|[class eos.moe.dragoncore.kz]|boolean|
|[是否飞行中]|[class eos.moe.dragoncore.kz]|boolean|
|[是否是自己]|[class eos.moe.dragoncore.kz]|boolean|
|[取攻击后时间刻]|[class eos.moe.dragoncore.kz]|float|
|[取变量值, 取变量, PlaceholderAPI_Get]|[class java.lang.String]|eos.moe.dragoncore.v|
|[替换变量, 替换变量值, PlaceholderAPI_Replace]|[class java.lang.String]|java.lang.String|
|[删除变量, PlaceholderAPI_Delete]|[class java.lang.String, boolean]|void|
|[置变量值, 设置变量, 设置变量值, PlaceholderAPI_Set]|[class java.lang.String, class java.lang.String]|void|
|[更新变量值, 更新变量, PlaceholderAPI_Update]|[class [Leos.moe.dragoncore.v;]|void|
|[添加组件, 添加组件前, Component_Add]|[class eos.moe.dragoncore.sl, interface eos.moe.dragoncore.v, interface eos.moe.dragoncore.v]|eos.moe.dragoncore.zk|
|[cp_create]|[class eos.moe.dragoncore.sl, class [Leos.moe.dragoncore.v;]|eos.moe.dragoncore.kk|
|[取鼠标悬浮组件名, Component_Hovered_Name]|[class eos.moe.dragoncore.sl]|java.lang.String|
|[移除组件, 删除组件, Component_Delete]|[class eos.moe.dragoncore.sl, interface eos.moe.dragoncore.v, boolean]|void|
|[取所有悬浮组件, 所有悬浮组件, Component_Hovered_All]|[class eos.moe.dragoncore.sl]|eos.moe.dragoncore.v|
|[取鼠标悬浮组件, 取悬浮组件, 悬浮组件, Component_Hovered]|[class eos.moe.dragoncore.sl]|eos.moe.dragoncore.kk|
|[新建组件, Component_Create]|[class eos.moe.dragoncore.sl, class [Leos.moe.dragoncore.v;]|eos.moe.dragoncore.kk|
|[取组件, Component_Find]|[class eos.moe.dragoncore.sl, class java.lang.String]|eos.moe.dragoncore.kk|
|[取组件值, Component_Get]|[class eos.moe.dragoncore.sl, interface eos.moe.dragoncore.v, class java.lang.String]|eos.moe.dragoncore.v|
|[取所有组件, Component_FindAll]|[class eos.moe.dragoncore.sl]|eos.moe.dragoncore.zk|
|[设置组件值, 置组件值, Component_Set]|[class eos.moe.dragoncore.sl, interface eos.moe.dragoncore.v, class java.lang.String, class [Leos.moe.dragoncore.v;]|void|
|[添加组件后, Component_Add_After]|[class eos.moe.dragoncore.sl, interface eos.moe.dragoncore.v, interface eos.moe.dragoncore.v]|eos.moe.dragoncore.zk|
|[取所有组件, Component_FindAll]|[class eos.moe.dragoncore.iv]|eos.moe.dragoncore.zk|
|[设置组件值, 置组件值, Component_Set]|[class eos.moe.dragoncore.iv, interface eos.moe.dragoncore.v, class java.lang.String, class [Leos.moe.dragoncore.v;]|void|
|[取组件值, Component_Get]|[class eos.moe.dragoncore.iv, interface eos.moe.dragoncore.v, class java.lang.String]|eos.moe.dragoncore.v|
|[取组件, Component_Find]|[class eos.moe.dragoncore.iv, class java.lang.String]|eos.moe.dragoncore.wq|
|[Class_forName]|[class java.lang.String]|boolean|
|[停止音乐, Sound_Stop]|[class java.lang.String]|void|
|[打开网页, Url]|[class java.lang.String]|void|
|[isUUID]|[class java.lang.String]|boolean|
|[randomUUID]|[]|java.lang.String|
|[延时, Delay]|[int]|void|
|[debug]|[class eos.moe.dragoncore.sl, boolean]|void|
|[屏幕抖动, screenShake]|[double, int, int, int]|void|
|[锁定功能, lock]|[class java.lang.String, int]|void|
|[拉远视角, zoomout]|[class [Leos.moe.dragoncore.v;]|void|
|[值类型是否相同, Type_Equal]|[interface eos.moe.dragoncore.v, class java.lang.String]|boolean|
|[设置角视场, setFOV]|[double, int]|void|
|[方法大全]|[class eos.moe.dragoncore.sl, class java.lang.String, boolean]|eos.moe.dragoncore.zk|
|[取图片宽高]|[class java.lang.String]|eos.moe.dragoncore.v|
|[取值类型, Type_Get]|[interface eos.moe.dragoncore.v]|java.lang.String|
|[停止全部音乐, Sound_StopAll]|[class eos.moe.dragoncore.sl]|void|
|[播放声音2, 声音2, 播放音乐2, Sound_Play2]|[class eos.moe.dragoncore.sl, class java.lang.String, class java.lang.String, class java.lang.String, float, float, float, float, float, boolean]|java.lang.String|
|[播放声音1, 声音1, 播放音乐1, Sound_Play1]|[class eos.moe.dragoncore.sl, class java.lang.String, class java.lang.String, float, float, float, float, float, boolean]|java.lang.String|
|[播放声音, 声音, 播放音乐, Sound_Play]|[class eos.moe.dragoncore.sl, class java.lang.String, float, float, float, float, float, boolean]|java.lang.String|
|[复活, Packet_Respawn]|[]|void|
|[断开连接, Packet_Disconnecting]|[]|void|
|[发包, Packet_Send]|[class java.lang.String, class [Ljava.lang.String;]|void|
|[执行按键指令, 发送按键, Key_Send]|[class java.lang.String]|void|
|[删除贴图缓存]|[class java.lang.String]|void|
|[重置视频]|[class java.lang.String]|void|
|[设置GIF是否播放]|[class java.lang.String, boolean]|void|
|[设置GIF序号]|[class java.lang.String, int]|void|
|[取GIF时间]|[class java.lang.String]|int|
|[取OpenGL时间, Time_OpenGL]|[]|double|
|[取当前时间格式化, Time_Current_Format]|[class java.lang.String]|java.lang.String|
|[格式化时间, Time_Format]|[double, class java.lang.String]|java.lang.String|
|[取当前时间, Time_Current]|[]|double|
|[是否存在后缀, 有后缀, String_HasSuffix]|[class java.lang.String, class java.lang.String]|boolean|
|[取索引, String_IndexOf]|[class java.lang.String, class java.lang.String]|int|
|[替换首次, String_ReplaceFirst]|[class java.lang.String, class java.lang.String, class java.lang.String]|java.lang.String|
|[合并文本, String_Concat]|[class [Ljava.lang.String;]|java.lang.String|
|[是否存在前缀, 有前缀, String_HasPrefix]|[class java.lang.String, class java.lang.String]|boolean|
|[替换, String_Replace]|[class java.lang.String, class java.lang.String, class java.lang.String]|java.lang.String|
|[取文本高度, String_Get_Height]|[class java.lang.String, class java.lang.String]|int|
|[倒取索引, String_LastIndexOf]|[class java.lang.String, class java.lang.String]|int|
|[取索引文本, String_CharAt]|[class java.lang.String, int]|java.lang.String|
|[toTellraw]|[class java.lang.String]|eos.moe.dragoncore.dk|
|[格式数字, Decimal_Format]|[double, class java.lang.String]|java.lang.String|
|[分割, String_Split]|[class java.lang.String, class java.lang.String]|eos.moe.dragoncore.v|
|[去颜色, String_StripColor]|[class java.lang.String]|java.lang.String|
|[替换正则, String_ReplaceAll]|[class java.lang.String, class java.lang.String, class java.lang.String]|java.lang.String|
|[到整数, String_ToInt]|[double]|java.lang.String|
|[取文本长度, String_Get_Length]|[class java.lang.String]|int|
|[按宽度分割, String_SplitWithWidth]|[interface eos.moe.dragoncore.v, class java.lang.String, int]|eos.moe.dragoncore.zk|
|[合并加入文本, String_Join]|[class [Ljava.lang.String;]|java.lang.String|
|[是否包含, 包含, String_Contains]|[class java.lang.String, class java.lang.String]|boolean|
|[取文本宽度, String_Get_Width]|[interface eos.moe.dragoncore.v, class java.lang.String, boolean]|int|
|[截取文本, String_SubString]|[class java.lang.String, int, interface eos.moe.dragoncore.v]|java.lang.String|
|[取指针生物血量, Mouse_Entity_Health]|[interface eos.moe.dragoncore.v, interface eos.moe.dragoncore.v]|double|
|[取指针生物名, Mouse_Entity_Name]|[interface eos.moe.dragoncore.v, interface eos.moe.dragoncore.v]|java.lang.String|
|[取鼠标x, Mouse_Get_X]|[]|double|
|[设置剪切板, Clipboard_Set]|[class java.lang.String]|void|
|[取指针生物最大血量, Mouse_Entity_Max_Health]|[interface eos.moe.dragoncore.v, interface eos.moe.dragoncore.v]|double|
|[取指针生物UUID, Mouse_Entity_UUID]|[interface eos.moe.dragoncore.v, interface eos.moe.dragoncore.v]|java.lang.String|
|[取剪切板, Clipboard_Get]|[class java.lang.String]|java.lang.String|
|[移动鼠标]|[int, int]|void|
|[设置鼠标, 设置鼠标贴图]|[class java.lang.String, class java.lang.String]|void|
|[取鼠标y, Mouse_Get_Y]|[]|double|
|[取滚轮值, mouse_get_wheel]|[]|int|
|[模拟按键, Key_Press]|[class java.lang.String, interface eos.moe.dragoncore.v]|void|
|[取当前按下键, Key_Get_Press]|[class eos.moe.dragoncore.sl]|java.lang.String|
|[键位是否按下, Key_IsPress]|[class eos.moe.dragoncore.sl, class java.lang.String]|boolean|