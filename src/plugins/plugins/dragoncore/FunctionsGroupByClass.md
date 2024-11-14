---
title: "方法简单归类"
---

<script setup>
import {computed, ref} from "vue"; 
import {usePageData, resolveRoutePath, resolveRoute} from 'vuepress/client';
import PinyinMatch from 'pinyin-match';

const search = ref("");

const origin = {
    "玩家": [{
            name: "CollisionBoxes1",
            args: "[double, double, double]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "玩家护甲值, 取玩家护甲值, Player_Get_Armor",
            args: "[]",
            ret: "int",
            desc: '',
            usage: ''
        },
        {
            name: "倒地体验卡",
            args: "[]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "玩家是否飞行, Player_IsFlying",
            args: "[]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "玩家yaw, 取玩家yaw, Player_Get_Yaw",
            args: "[]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "玩家名, 取玩家名, Player_Get_Name",
            args: "[]",
            ret: "class java.lang.String",
            desc: '获取玩家名',
            usage: ''
        },
        {
            name: "玩家坐标x, 取玩家坐标x, Player_Get_PosX",
            args: "[]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "玩家氧气值, 取玩家氧气值, Player_Get_Air",
            args: "[]",
            ret: "int",
            desc: '',
            usage: ''
        },
        {
            name: "玩家是否死亡",
            args: "[]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "player_hurt_time",
            args: "[]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "松开使用, Item_Use_Stop",
            args: "[]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "玩家motionz",
            args: "[]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "取物品最大使用时间, Item_Use_Count_Max",
            args: "[]",
            ret: "int",
            desc: '',
            usage: ''
        },
        {
            name: "取物品使用时间, Item_Use_Count",
            args: "[]",
            ret: "int",
            desc: '',
            usage: ''
        },
        {
            name: "玩家motiony",
            args: "[]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "player_preparePlayerToSpawn",
            args: "[]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "玩家是否在水中, 是否在水中, Player_InWater",
            args: "[]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "玩家手持槽, 取玩家手持槽, Player_Get_CurrentItem",
            args: "[]",
            ret: "int",
            desc: '',
            usage: ''
        },
        {
            name: "玩家pitch, 取玩家pitch, Player_Get_Pitch",
            args: "[]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "CollisionBoxes3",
            args: "[double, double, double]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "CollisionBoxes2",
            args: "[double, double, double]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "取玩家头像, Player_Head_Texture",
            args: "[]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "取活跃物品, Item_Use",
            args: "[]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "玩家经验, 取玩家经验, Player_Get_Exp",
            args: "[]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "玩家坐标y, 取玩家坐标y, Player_Get_PosY",
            args: "[]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "玩家移动速度",
            args: "[]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "玩家等级, 取玩家等级, Player_Get_Level",
            args: "[]",
            ret: "int",
            desc: '',
            usage: ''
        },
        {
            name: "玩家当前人称",
            args: "[]",
            ret: "int",
            desc: '',
            usage: ''
        },
        {
            name: "玩家飞行速度",
            args: "[]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "玩家坐标z, 取玩家坐标z, Player_Get_PosZ",
            args: "[]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "玩家血量, 取玩家血量, Player_Get_Health",
            args: "[]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "玩家motionx",
            args: "[]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "player_death_time",
            args: "[]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "玩家创造模式",
            args: "[]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "玩家饱食度, 取玩家饱食度, Player_Get_Food",
            args: "[]",
            ret: "int",
            desc: '',
            usage: ''
        },
        {
            name: "玩家最大血量, 取玩家最大血量, Player_Get_MaxHealth",
            args: "[]",
            ret: "double",
            desc: '',
            usage: ''
        },
    ],
    "游戏窗口": [{
            name: "Display_Window_X",
            args: "[]",
            ret: "int",
            desc: '',
            usage: ''
        },
        {
            name: "Display_IsFullScreen",
            args: "[]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "Display_SetResizable",
            args: "[boolean]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "Display_Resize",
            args: "[int, int]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "Display_Window_Height",
            args: "[]",
            ret: "int",
            desc: '',
            usage: ''
        },
        {
            name: "Display_Window_Y",
            args: "[]",
            ret: "int",
            desc: '',
            usage: ''
        },
        {
            name: "Display_SetFullScreen",
            args: "[boolean]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "Display_Location",
            args: "[int, int]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "Display_IsResizable",
            args: "[]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "Display_Desktop_Width",
            args: "[]",
            ret: "int",
            desc: '',
            usage: ''
        },
        {
            name: "Display_Desktop_Height",
            args: "[]",
            ret: "int",
            desc: '',
            usage: ''
        },
        {
            name: "Display_Window_Width",
            args: "[]",
            ret: "int",
            desc: '',
            usage: ''
        },
    ],
    "Minecraft": [{
            name: "游戏进度, Minecraft_Advancements",
            args: "[]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "关闭游戏, Minecraft_Shutdown",
            args: "[]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "执行JS, JS_EXECUTE",
            args: "[class java.lang.String, class [Leos.moe.dragoncore.v;]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "设置材质包",
            args: "[class [Ljava.lang.String;]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "取FPS, Minecraft_Get_FPS",
            args: "[]",
            ret: "int",
            desc: '',
            usage: ''
        },
        {
            name: "加载JS, JS_Load",
            args: "[]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "游戏统计, Minecraft_Stat",
            args: "[]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "设置界面尺寸, Minecraft_Set_Gui_Scale",
            args: "[int]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "取界面尺寸, Minecraft_Get_Gui_Scale",
            args: "[]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "取当前界面名, Minecraft_Get_Screen_Name",
            args: "[]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "游戏选项, Minecraft_Options",
            args: "[]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "退出游戏, Minecraft_Quit",
            args: "[]",
            ret: "void",
            desc: '',
            usage: ''
        },
    ],
    "界面方法": [{
            name: "执行方法, Function_Execute",
            args: "[class eos.moe.dragoncore.sl, class java.lang.String, class [Leos.moe.dragoncore.v;]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "取当前消息, Message_Current",
            args: "[class eos.moe.dragoncore.sl]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "变量, 界面变量, variable, var",
            args: "[class eos.moe.dragoncore.sl]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "界面是否已关闭, Screen_Is_Close",
            args: "[class eos.moe.dragoncore.sl]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "取最后一条消息, Message_Last",
            args: "[class eos.moe.dragoncore.sl]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "跨界面执行方法, Function_Screen_Execute",
            args: "[class eos.moe.dragoncore.sl, class java.lang.String, class java.lang.String, class [Leos.moe.dragoncore.v;]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "执行组件方法, Component_Function_Execute",
            args: "[class eos.moe.dragoncore.sl, interface eos.moe.dragoncore.v, class java.lang.String]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "异步执行方法, Function_Async_Execute",
            args: "[class eos.moe.dragoncore.sl, class java.lang.String, class [Leos.moe.dragoncore.v;]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "解析脚本, Function_Parse",
            args: "[class eos.moe.dragoncore.sl, class java.lang.String]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "主线程执行方法, Function_Sync_Execute",
            args: "[class eos.moe.dragoncore.sl, class java.lang.String, class [Leos.moe.dragoncore.v;]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "切换方法集, Function_Change",
            args: "[class eos.moe.dragoncore.sl, class java.lang.String, int]",
            ret: "void",
            desc: '',
            usage: ''
        },
    ],
    "按键": [{
            name: "获取按键名, 获取控制按键名, ControlKey_Get_Name",
            args: "[class java.lang.String]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "模拟控制按键, ControlKey_Test",
            args: "[class java.lang.String, boolean]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "创建控制按键, ControlKey_Create",
            args: "[class java.lang.String, class java.lang.String, class java.lang.String]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "控制按键是否按下, ControlKey_Is_Press",
            args: "[class java.lang.String]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "设置按键, 设置控制按键, ControlKey_Set_Key",
            args: "[class java.lang.String, class java.lang.String, class java.lang.String]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "获取按键额外, 获取控制按键额外, ControlKey_Get_Modifier",
            args: "[class java.lang.String]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
    ],
    "Yaml": [{
            name: "取Yaml节点, Yaml_Get_Keys",
            args: "[class eos.moe.dragoncore.iv, class java.lang.String]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "取Yaml值, Yaml_Get",
            args: "[class eos.moe.dragoncore.iv, class java.lang.String]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "取Yaml全部节点, Yaml_Get_All_Keys",
            args: "[class eos.moe.dragoncore.iv, class java.lang.String]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
    ],
    "槽位": [{
            name: "取所有物品, Container_Get_All_Items",
            args: "[class eos.moe.dragoncore.sl]",
            ret: "class eos.moe.dragoncore.zk",
            desc: '',
            usage: ''
        },
        {
            name: "模拟点击槽位, Container_Click",
            args: "[class java.lang.String, int, class java.lang.String, double]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "丢弃手中物品, Container_Drop",
            args: "[]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "取容器所有物品, Container_Get_Container_Items",
            args: "[class eos.moe.dragoncore.sl]",
            ret: "class eos.moe.dragoncore.zk",
            desc: '',
            usage: ''
        },
        {
            name: "删除物品, Container_Delete",
            args: "[class java.lang.String, boolean]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "取物品, 取槽位物品, Container_Get_Item",
            args: "[class eos.moe.dragoncore.sl, class java.lang.String]",
            ret: "class net.minecraft.item.ItemStack",
            desc: '',
            usage: ''
        },
    ],
    "世界屏幕": [{
            name: "取世界屏幕坐标修正",
            args: "[double, double, double, float]",
            ret: "class eos.moe.dragoncore.zk",
            desc: '',
            usage: ''
        },
        {
            name: "取世界屏幕坐标",
            args: "[double, double, double]",
            ret: "class eos.moe.dragoncore.zk",
            desc: '',
            usage: ''
        },
    ],
    "实体": [{
            name: "取实体血量",
            args: "[interface eos.moe.dragoncore.v]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "取实体高度",
            args: "[interface eos.moe.dragoncore.v]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "取实体最大血量",
            args: "[interface eos.moe.dragoncore.v]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "实体是否存在, Entity_Exists, Entity_Exist",
            args: "[interface eos.moe.dragoncore.v]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "取实体",
            args: "[interface eos.moe.dragoncore.v]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "取实体坐标x",
            args: "[interface eos.moe.dragoncore.v]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "取实体坐标y",
            args: "[interface eos.moe.dragoncore.v]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "取实体坐标z",
            args: "[interface eos.moe.dragoncore.v]",
            ret: "double",
            desc: '',
            usage: ''
        },
    ],
    "着色器": [{
            name: "关闭着色器",
            args: "[]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "启用着色器",
            args: "[class java.lang.String]",
            ret: "void",
            desc: '',
            usage: ''
        },
    ],
    "物品": [{
            name: "取物品信息数, ItemStack_Get_Info_Size",
            args: "[class net.minecraft.item.ItemStack]",
            ret: "int",
            desc: '',
            usage: ''
        },
        {
            name: "序列化物品, ItemStack_Serialize",
            args: "[class net.minecraft.item.ItemStack]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "取物品Lore数, ItemStack_Get_Lore_Size",
            args: "[class net.minecraft.item.ItemStack]",
            ret: "int",
            desc: '',
            usage: ''
        },
        {
            name: "取物品NBT, ItemStack_Get_NBT",
            args: "[class net.minecraft.item.ItemStack, class java.lang.String]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "取物品信息, ItemStack_Get_Info",
            args: "[class net.minecraft.item.ItemStack, int]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "取物品所有信息, ItemStack_Get_All_Info",
            args: "[class net.minecraft.item.ItemStack]",
            ret: "class eos.moe.dragoncore.zk",
            desc: '',
            usage: ''
        },
        {
            name: "取物品护甲值, ItemStack_Get_Armor",
            args: "[class net.minecraft.item.ItemStack]",
            ret: "int",
            desc: '',
            usage: ''
        },
        {
            name: "匹配物品, ItemStack_Match",
            args: "[class net.minecraft.item.ItemStack, class java.lang.String, interface eos.moe.dragoncore.v]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "反序列化物品, ItemStack_DeSerialize",
            args: "[class java.lang.String]",
            ret: "class eos.moe.dragoncore.sh",
            desc: '',
            usage: ''
        },
        {
            name: "取物品名, ItemStack_Get_Name",
            args: "[class net.minecraft.item.ItemStack]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "取物品Lore, ItemStack_Get_Lore",
            args: "[class net.minecraft.item.ItemStack, int, boolean]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "取物品所有Lore, ItemStack_Get_All_Lore",
            args: "[class net.minecraft.item.ItemStack, boolean]",
            ret: "class eos.moe.dragoncore.zk",
            desc: '',
            usage: ''
        },
        {
            name: "取物品数, ItemStack_Get_Count",
            args: "[class net.minecraft.item.ItemStack]",
            ret: "int",
            desc: '',
            usage: ''
        },
    ],
    "实体2": [{
            name: "取实体最大血量",
            args: "[class eos.moe.dragoncore.iv]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "执行方法, Function_Execute",
            args: "[class eos.moe.dragoncore.iv, class java.lang.String, class [Leos.moe.dragoncore.v;]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "取实体名",
            args: "[class eos.moe.dragoncore.iv]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "取实体血量",
            args: "[class eos.moe.dragoncore.iv]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "主线程执行方法, Function_Sync_Execute",
            args: "[class eos.moe.dragoncore.iv, class java.lang.String, class [Leos.moe.dragoncore.v;]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "取实体血量比例",
            args: "[class eos.moe.dragoncore.iv]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "取实体UUID",
            args: "[class eos.moe.dragoncore.iv]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "异步执行方法, Function_Async_Execute",
            args: "[class eos.moe.dragoncore.iv, class java.lang.String, class [Leos.moe.dragoncore.v;]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "解析脚本, Function_Parse",
            args: "[class eos.moe.dragoncore.iv, class java.lang.String]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "取实体高度",
            args: "[class eos.moe.dragoncore.iv]",
            ret: "double",
            desc: '',
            usage: ''
        },
    ],
    "界面2": [{
            name: "刷新缓存, Screen_Cache_Update",
            args: "[class eos.moe.dragoncore.sl]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "取熔炉燃料值, Screen_Furnace_BurnTime",
            args: "[class eos.moe.dragoncore.sl]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "取当前界面名, Screen_Get_Name",
            args: "[class eos.moe.dragoncore.sl]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "打开聊天栏, Screen_Open_ChatGui",
            args: "[class java.lang.String]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "取屏幕宽度, Screen_Get_Width, w",
            args: "[]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "取屏幕高度比例, Screen_Get_Height_Ratio, hr",
            args: "[]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "设置显示, 显示, Screen_Set_Show",
            args: "[class java.lang.String, interface eos.moe.dragoncore.v]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "打开HUD, Screen_Open_Hud",
            args: "[class java.lang.String]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "取屏幕宽度比例, Screen_Get_Width_Ratio, wr",
            args: "[]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "取界面存活时间, Screen_ActiveTime",
            args: "[class eos.moe.dragoncore.sl]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "重载界面, Screen_Reload",
            args: "[class eos.moe.dragoncore.sl]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "设置聊天栏内容, Screen_ChatGui_Set",
            args: "[class java.lang.String, int]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "取熔炉进度值, Screen_Furnace_CookProgress",
            args: "[class eos.moe.dragoncore.sl]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "熔炉是否熔炼中, Screen_Furnace_IsBurning",
            args: "[class eos.moe.dragoncore.sl]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "取原界面名, Screen_Original_Name",
            args: "[class eos.moe.dragoncore.sl]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "关闭HUD, Screen_Close_Hud",
            args: "[class java.lang.String]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "取聊天栏内容, Screen_ChatGui_Get",
            args: "[]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "重置界面打开时间, Screen_OpenTime_Reset",
            args: "[class eos.moe.dragoncore.sl]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "关闭主界面, Screen_Close_Main",
            args: "[]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "设置隐藏, 隐藏, Screen_Set_Hide",
            args: "[class java.lang.String, interface eos.moe.dragoncore.v]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "取屏幕高度, Screen_Get_Height, h",
            args: "[]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "当前是否打开聊天栏, Screen_Chat_Opened",
            args: "[]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "打开二级界面, 打开子界面, Screen_Open_Sub_Gui",
            args: "[class java.lang.String]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "打开GUI, Screen_Open_Gui",
            args: "[class java.lang.String]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "取界面打开时间, Screen_OpenTime_Get",
            args: "[class eos.moe.dragoncore.sl]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "关闭界面, 返回游戏, Screen_Close",
            args: "[class eos.moe.dragoncore.sl]",
            ret: "void",
            desc: '',
            usage: ''
        },
    ],
    "消息": [{
            name: "消息, Message",
            args: "[class [Ljava.lang.String;]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "调试输出, log",
            args: "[class [Ljava.lang.String;]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "Title",
            args: "[class java.lang.String, class java.lang.String, int, int, int]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "ActionBar",
            args: "[class java.lang.String]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "聊天, Chat",
            args: "[class [Ljava.lang.String;]",
            ret: "void",
            desc: '',
            usage: ''
        },
    ],
    "动画": [{
        name: "播放动画, PlayAnimation",
        args: "[class eos.moe.dragoncore.sl, class [Leos.moe.dragoncore.v;]",
        ret: "void",
        desc: '',
        usage: ''
    }, ],
    "变量": [{
            name: "添加成员, Array_Add",
            args: "[interface eos.moe.dragoncore.v, class [Leos.moe.dragoncore.v;]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "系统变量, system",
            args: "[]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "用户变量, player",
            args: "[]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "取成员, get, Array_Get",
            args: "[interface eos.moe.dragoncore.v, int]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "移除成员, Array_Remove",
            args: "[interface eos.moe.dragoncore.v, class [Leos.moe.dragoncore.v;]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "插入成员, Array_Add",
            args: "[interface eos.moe.dragoncore.v, int, class [Leos.moe.dragoncore.v;]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "截取内容, subContent",
            args: "[interface eos.moe.dragoncore.v, class java.lang.String, int, int]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "取成员数, get_size, Array_Size",
            args: "[interface eos.moe.dragoncore.v]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "截取数组, sublist, Array_Sub",
            args: "[interface eos.moe.dragoncore.v, int, int]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "全局变量, global",
            args: "[]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "变量取值, Var_Get",
            args: "[interface eos.moe.dragoncore.v, class java.lang.String]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "变量置值, Var_Set",
            args: "[interface eos.moe.dragoncore.v, class java.lang.String, interface eos.moe.dragoncore.v]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "修改成员, Array_Replace",
            args: "[interface eos.moe.dragoncore.v, int, interface eos.moe.dragoncore.v]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "新建数组, Array_Create",
            args: "[class [Leos.moe.dragoncore.v;]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "重载变量, Var_Reload",
            args: "[interface eos.moe.dragoncore.v]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "本地变量, client",
            args: "[]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
    ],
    "ew": [{
            name: "是否奔跑中",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "动画层是否播放中",
            args: "[class eos.moe.dragoncore.kz, class java.lang.String]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "取横向动量",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "移除实体",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "取主手物品",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "停止动画",
            args: "[class eos.moe.dragoncore.kz, class java.lang.String, interface eos.moe.dragoncore.v]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "骑乘生物是否为生命体",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "是否静止中",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "动画是否播放中",
            args: "[class eos.moe.dragoncore.kz, class java.lang.String]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "移除死亡计数",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "取正向动量",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "取血量",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "是否在水下",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "是否在水中",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "取pitch",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "设置飞行状态",
            args: "[class eos.moe.dragoncore.kz, boolean]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "移除飞行状态",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "是否蹲下",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "取副手物品",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "motionY",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "停止动画层",
            args: "[class eos.moe.dragoncore.kz, class java.lang.String, interface eos.moe.dragoncore.v]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "是否有动画",
            args: "[class eos.moe.dragoncore.kz, class java.lang.String]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "设置动画变量",
            args: "[class eos.moe.dragoncore.kz, class java.lang.String, double]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "取动画层运行时间",
            args: "[class eos.moe.dragoncore.kz, class java.lang.String]",
            ret: "int",
            desc: '',
            usage: ''
        },
        {
            name: "取实体名",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "取默认过渡时间",
            args: "[]",
            ret: "int",
            desc: '',
            usage: ''
        },
        {
            name: "播放动画",
            args: "[class eos.moe.dragoncore.kz, class java.lang.String, interface eos.moe.dragoncore.v, float]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "设置骨骼可视",
            args: "[class eos.moe.dragoncore.kz, class java.lang.String, boolean]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "取动画所在动画层",
            args: "[class eos.moe.dragoncore.kz, class java.lang.String]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "是否骑乘",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "是否鞘翅飞行中",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "取最大血量",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "是否跳跃中",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "是否在地面",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "取血量比例",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "是否攀爬中",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "是否移动中",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "取yaw",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "是否下坠中",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "取高度",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "double",
            desc: '',
            usage: ''
        },
    ],
    "ld": [{
            name: "取Yaml节点, Yaml_Get_Keys",
            args: "[class eos.moe.dragoncore.sl, class java.lang.String]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "取Yaml值, Yaml_Get",
            args: "[class eos.moe.dragoncore.sl, class java.lang.String]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "取Yaml全部节点, Yaml_Get_All_Keys",
            args: "[class eos.moe.dragoncore.sl, class java.lang.String]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
    ],
    "qs": [{
            name: "是否持有物品",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "是否飞行中",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "是否是自己",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "取攻击后时间刻",
            args: "[class eos.moe.dragoncore.kz]",
            ret: "float",
            desc: '',
            usage: ''
        },
    ],
    "cl": [{
            name: "取变量值, 取变量, PlaceholderAPI_Get",
            args: "[class java.lang.String]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "替换变量, 替换变量值, PlaceholderAPI_Replace",
            args: "[class java.lang.String]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "删除变量, PlaceholderAPI_Delete",
            args: "[class java.lang.String, boolean]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "置变量值, 设置变量, 设置变量值, PlaceholderAPI_Set",
            args: "[class java.lang.String, class java.lang.String]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "更新变量值, 更新变量, PlaceholderAPI_Update",
            args: "[class [Leos.moe.dragoncore.v;]",
            ret: "void",
            desc: '',
            usage: ''
        },
    ],
    "eo": [{
            name: "添加组件, 添加组件前, Component_Add",
            args: "[class eos.moe.dragoncore.sl, interface eos.moe.dragoncore.v, interface eos.moe.dragoncore.v]",
            ret: "class eos.moe.dragoncore.zk",
            desc: '',
            usage: ''
        },
        {
            name: "cp_create",
            args: "[class eos.moe.dragoncore.sl, class [Leos.moe.dragoncore.v;]",
            ret: "class eos.moe.dragoncore.kk",
            desc: '',
            usage: ''
        },
        {
            name: "取鼠标悬浮组件名, Component_Hovered_Name",
            args: "[class eos.moe.dragoncore.sl]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "移除组件, 删除组件, Component_Delete",
            args: "[class eos.moe.dragoncore.sl, interface eos.moe.dragoncore.v, boolean]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "取所有悬浮组件, 所有悬浮组件, Component_Hovered_All",
            args: "[class eos.moe.dragoncore.sl]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "取鼠标悬浮组件, 取悬浮组件, 悬浮组件, Component_Hovered",
            args: "[class eos.moe.dragoncore.sl]",
            ret: "class eos.moe.dragoncore.kk",
            desc: '',
            usage: ''
        },
        {
            name: "新建组件, Component_Create",
            args: "[class eos.moe.dragoncore.sl, class [Leos.moe.dragoncore.v;]",
            ret: "class eos.moe.dragoncore.kk",
            desc: '',
            usage: ''
        },
        {
            name: "取组件, Component_Find",
            args: "[class eos.moe.dragoncore.sl, class java.lang.String]",
            ret: "class eos.moe.dragoncore.kk",
            desc: '',
            usage: ''
        },
        {
            name: "取组件值, Component_Get",
            args: "[class eos.moe.dragoncore.sl, interface eos.moe.dragoncore.v, class java.lang.String]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "取所有组件, Component_FindAll",
            args: "[class eos.moe.dragoncore.sl]",
            ret: "class eos.moe.dragoncore.zk",
            desc: '',
            usage: ''
        },
        {
            name: "设置组件值, 置组件值, Component_Set",
            args: "[class eos.moe.dragoncore.sl, interface eos.moe.dragoncore.v, class java.lang.String, class [Leos.moe.dragoncore.v;]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "添加组件后, Component_Add_After",
            args: "[class eos.moe.dragoncore.sl, interface eos.moe.dragoncore.v, interface eos.moe.dragoncore.v]",
            ret: "class eos.moe.dragoncore.zk",
            desc: '',
            usage: ''
        },
    ],
    "nw": [{
            name: "取所有组件, Component_FindAll",
            args: "[class eos.moe.dragoncore.iv]",
            ret: "class eos.moe.dragoncore.zk",
            desc: '',
            usage: ''
        },
        {
            name: "设置组件值, 置组件值, Component_Set",
            args: "[class eos.moe.dragoncore.iv, interface eos.moe.dragoncore.v, class java.lang.String, class [Leos.moe.dragoncore.v;]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "取组件值, Component_Get",
            args: "[class eos.moe.dragoncore.iv, interface eos.moe.dragoncore.v, class java.lang.String]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "取组件, Component_Find",
            args: "[class eos.moe.dragoncore.iv, class java.lang.String]",
            ret: "class eos.moe.dragoncore.wq",
            desc: '',
            usage: ''
        },
    ],
    "ei": [{
            name: "Class_forName",
            args: "[class java.lang.String]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "停止音乐, Sound_Stop",
            args: "[class java.lang.String]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "打开网页, Url",
            args: "[class java.lang.String]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "isUUID",
            args: "[class java.lang.String]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "randomUUID",
            args: "[]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "延时, Delay",
            args: "[int]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "debug",
            args: "[class eos.moe.dragoncore.sl, boolean]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "屏幕抖动, screenShake",
            args: "[double, int, int, int]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "锁定功能, lock",
            args: "[class java.lang.String, int]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "拉远视角, zoomout",
            args: "[class [Leos.moe.dragoncore.v;]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "值类型是否相同, Type_Equal",
            args: "[interface eos.moe.dragoncore.v, class java.lang.String]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "设置角视场, setFOV",
            args: "[double, int]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "方法大全",
            args: "[class eos.moe.dragoncore.sl, class java.lang.String, boolean]",
            ret: "class eos.moe.dragoncore.zk",
            desc: '',
            usage: ''
        },
        {
            name: "取图片宽高",
            args: "[class java.lang.String]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "取值类型, Type_Get",
            args: "[interface eos.moe.dragoncore.v]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "停止全部音乐, Sound_StopAll",
            args: "[class eos.moe.dragoncore.sl]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "播放声音2, 声音2, 播放音乐2, Sound_Play2",
            args: "[class eos.moe.dragoncore.sl, class java.lang.String, class java.lang.String, class java.lang.String, float, float, float, float, float, boolean]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "播放声音1, 声音1, 播放音乐1, Sound_Play1",
            args: "[class eos.moe.dragoncore.sl, class java.lang.String, class java.lang.String, float, float, float, float, float, boolean]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "播放声音, 声音, 播放音乐, Sound_Play",
            args: "[class eos.moe.dragoncore.sl, class java.lang.String, float, float, float, float, float, boolean]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
    ],
    "hh": [{
            name: "复活, Packet_Respawn",
            args: "[]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "断开连接, Packet_Disconnecting",
            args: "[]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "发包, Packet_Send",
            args: "[class java.lang.String, class [Ljava.lang.String;]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "执行按键指令, 发送按键, Key_Send",
            args: "[class java.lang.String]",
            ret: "void",
            desc: '',
            usage: ''
        },
    ],
    "nz": [{
            name: "删除贴图缓存",
            args: "[class java.lang.String]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "重置视频",
            args: "[class java.lang.String]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "设置GIF是否播放",
            args: "[class java.lang.String, boolean]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "设置GIF序号",
            args: "[class java.lang.String, int]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "取GIF时间",
            args: "[class java.lang.String]",
            ret: "int",
            desc: '',
            usage: ''
        },
    ],
    "wh": [{
            name: "取OpenGL时间, Time_OpenGL",
            args: "[]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "取当前时间格式化, Time_Current_Format",
            args: "[class java.lang.String]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "格式化时间, Time_Format",
            args: "[double, class java.lang.String]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "取当前时间, Time_Current",
            args: "[]",
            ret: "double",
            desc: '',
            usage: ''
        },
    ],
    "ih": [{
            name: "是否存在后缀, 有后缀, String_HasSuffix",
            args: "[class java.lang.String, class java.lang.String]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "取索引, String_IndexOf",
            args: "[class java.lang.String, class java.lang.String]",
            ret: "int",
            desc: '',
            usage: ''
        },
        {
            name: "替换首次, String_ReplaceFirst",
            args: "[class java.lang.String, class java.lang.String, class java.lang.String]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "合并文本, String_Concat",
            args: "[class [Ljava.lang.String;]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "是否存在前缀, 有前缀, String_HasPrefix",
            args: "[class java.lang.String, class java.lang.String]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "替换, String_Replace",
            args: "[class java.lang.String, class java.lang.String, class java.lang.String]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "取文本高度, String_Get_Height",
            args: "[class java.lang.String, class java.lang.String]",
            ret: "int",
            desc: '',
            usage: ''
        },
        {
            name: "倒取索引, String_LastIndexOf",
            args: "[class java.lang.String, class java.lang.String]",
            ret: "int",
            desc: '',
            usage: ''
        },
        {
            name: "取索引文本, String_CharAt",
            args: "[class java.lang.String, int]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "toTellraw",
            args: "[class java.lang.String]",
            ret: "class eos.moe.dragoncore.dk",
            desc: '',
            usage: ''
        },
        {
            name: "格式数字, Decimal_Format",
            args: "[double, class java.lang.String]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "分割, String_Split",
            args: "[class java.lang.String, class java.lang.String]",
            ret: "interface eos.moe.dragoncore.v",
            desc: '',
            usage: ''
        },
        {
            name: "去颜色, String_StripColor",
            args: "[class java.lang.String]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "替换正则, String_ReplaceAll",
            args: "[class java.lang.String, class java.lang.String, class java.lang.String]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "到整数, String_ToInt",
            args: "[double]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "取文本长度, String_Get_Length",
            args: "[class java.lang.String]",
            ret: "int",
            desc: '',
            usage: ''
        },
        {
            name: "按宽度分割, String_SplitWithWidth",
            args: "[interface eos.moe.dragoncore.v, class java.lang.String, int]",
            ret: "class eos.moe.dragoncore.zk",
            desc: '',
            usage: ''
        },
        {
            name: "合并加入文本, String_Join",
            args: "[class [Ljava.lang.String;]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "是否包含, 包含, String_Contains",
            args: "[class java.lang.String, class java.lang.String]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
        {
            name: "取文本宽度, String_Get_Width",
            args: "[interface eos.moe.dragoncore.v, class java.lang.String, boolean]",
            ret: "int",
            desc: '',
            usage: ''
        },
        {
            name: "截取文本, String_SubString",
            args: "[class java.lang.String, int, interface eos.moe.dragoncore.v]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
    ],
    "wl": [{
            name: "取指针生物血量, Mouse_Entity_Health",
            args: "[interface eos.moe.dragoncore.v, interface eos.moe.dragoncore.v]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "取指针生物名, Mouse_Entity_Name",
            args: "[interface eos.moe.dragoncore.v, interface eos.moe.dragoncore.v]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "取鼠标x, Mouse_Get_X",
            args: "[]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "设置剪切板, Clipboard_Set",
            args: "[class java.lang.String]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "取指针生物最大血量, Mouse_Entity_Max_Health",
            args: "[interface eos.moe.dragoncore.v, interface eos.moe.dragoncore.v]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "取指针生物UUID, Mouse_Entity_UUID",
            args: "[interface eos.moe.dragoncore.v, interface eos.moe.dragoncore.v]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "取剪切板, Clipboard_Get",
            args: "[class java.lang.String]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "移动鼠标",
            args: "[int, int]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "设置鼠标, 设置鼠标贴图",
            args: "[class java.lang.String, class java.lang.String]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "取鼠标y, Mouse_Get_Y",
            args: "[]",
            ret: "double",
            desc: '',
            usage: ''
        },
        {
            name: "取滚轮值, mouse_get_wheel",
            args: "[]",
            ret: "int",
            desc: '',
            usage: ''
        },
        {
            name: "模拟按键, Key_Press",
            args: "[class java.lang.String, interface eos.moe.dragoncore.v]",
            ret: "void",
            desc: '',
            usage: ''
        },
        {
            name: "取当前按下键, Key_Get_Press",
            args: "[class eos.moe.dragoncore.sl]",
            ret: "class java.lang.String",
            desc: '',
            usage: ''
        },
        {
            name: "键位是否按下, Key_IsPress",
            args: "[class eos.moe.dragoncore.sl, class java.lang.String]",
            ret: "boolean",
            desc: '',
            usage: ''
        },
    ],
};

const clearSearch = (()=>{
    search.value = ""
});

const searchData = computed(() => {
  const keyword = search.value.trim().toLowerCase();
  if (!keyword) return origin;

  const filteredData = {};
  
  for (const [title, items] of Object.entries(origin)) {
    if (title.toLowerCase().includes(keyword) || PinyinMatch.match(title,keyword)) {
      filteredData[title] = items;
      continue;
    }

    const filteredItems = items.filter(item =>
      PinyinMatch.match(item.name+item.desc,keyword)
    );

    if (filteredItems.length > 0) {
      filteredData[title] = filteredItems;
    }
  }

  return filteredData;
});

const pageData = usePageData();
function hasUsage(obj){
    const routePath = resolveRoutePath(`./usage/${obj.name.split(',')[0]}.md`, pageData.value.path);
    const route = resolveRoute(routePath);
    return !route.notFound
}

function getUsage(obj){
    const routePath = resolveRoutePath(`./usage/${obj.name.split(',')[0]}.md`, pageData.value.path);
    const route = resolveRoute(routePath);
    if(route.notFound){
        return "/plugins/plugins/dragoncore/usage/NotFound.md"
    }else {
        return route.path
    }
}

</script>
<style scoped>
.search-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 20px;
}

.search-input {
  width: 100%;
  padding: 10px 40px 10px 15px;
  border: 1px solid #ddd;
  border-radius: 25px;
  font-size: 16px;
  color: #333;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
/* 输入框聚焦效果 */
.search-input:focus {
  border-color: #3aaf85;
  box-shadow: 0 0 5px rgba(66, 185, 131, 0.5);
}

/* 输入时的变化 */
.search-input::placeholder {
  color: #aaa;
}

.search-input:hover {
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
}

.clear-button {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #888;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: color 0.3s ease;
}

.clear-button:hover {
  color: #333;
}

.clear-button:focus {
  outline: none;
}
</style>

<div class="search-container" style="margin-top: 3rem;">
    <input type="text" v-model="search" class="search-input" placeholder="请输入关键字...">
    <button 
      v-if="search" 
      @click="clearSearch" 
      class="clear-button" 
      aria-label="清除关键字"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M18.3 5.7a1 1 0 0 0-1.4 0L12 10.6 7.1 5.7a1 1 0 0 0-1.4 1.4L10.6 12l-4.9 4.9a1 1 0 0 0 1.4 1.4L12 13.4l4.9 4.9a1 1 0 0 0 1.4-1.4L13.4 12l4.9-4.9a1 1 0 0 0 0-1.4z"
        />
      </svg>
    </button>
</div>
<template v-for="(item,group) in searchData" :key="group">
    <h2>{{group}}</h2>
    <template v-for="(item,index) in item" :key="index">
        <ul>
            <li>{{item.name}}</li>
            <ul>
                <li>参数列表: {{item.args}}</li> 
                <li>返回值: {{item.ret}}</li>
                <li>简介: {{item.desc}}</li>
            </ul>
        </ul>
    <Content v-if="hasUsage(item)" :path="getUsage(item)"></Content>
    </template>
</template>