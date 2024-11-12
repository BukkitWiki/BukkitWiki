---
title: "容器槽位"
icon: 'subway:menu'
order: 4
---
<script setup lang="ts">
import {computed, ref} from "vue"; 

const selectOption = ref("https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/chest-large.png");
const useImgUrl = ref("");

const slotMapping = [
    {
        name: '铁砧(Anvil)',
        url: 'https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/anvil.png'
    },
    {
        name: '信标(Beacon)',
        url: 'https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/20241113021809.png'
    },
    {
        name: '高炉(Blast Furnace)',
        url: 'https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/20241113021931.png'
    },
    {
        name: '炼药台(Brewing Stand)',
        url: 'https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/brewing-stand.png'
    },
    {
        name: '制图台(Cartography)',
        url: 'https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/cartography-table.png'
    },
    {
        name: '大箱子(Large Chest)',
        url: 'https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/chest-large.png'
    },
    {
        name: '小箱子(Small Chest)',
        url: 'https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/chest-small.png'
    },
    {
        name: '合成台(Crafting)',
        url: 'https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/crafting-table.png'
    },
    {
        name: '发射器(Dispenser)',
        url: 'https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/dispenser.png'
    },
    {
        name: '驴(Donkey)',
        url: 'https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/donkey.png'
    },
    {
        name: '投掷器(Dropper)',
        url: 'https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/dropper.png'
    },
    {
        name: '附魔台(Enchanting)',
        url: 'https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/enchanting-table.png'
    },
    {
        name: '熔炉(Furnace)',
        url: 'https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/furnace.png'
    },
    {
        name: '砂轮(Grindstone)',
        url: 'https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/grindstone.png'
    },
    {
        name: '漏斗(Hopper)',
        url: 'https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/hopper.png'
    },
    {
        name: '马(Horse)',
        url: 'https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/horse.png'
    },
    {
        name: '羊驼(Llama)',
        url: 'https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/llama.png'
    },
    {
        name: '织布机(Loom)',
        url: 'https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/loom.png'
    },
    {
        name: '玩家(Player)',
        url: 'https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/player.png'
    },
    {
        name: '潜影盒(Shulker Box)',
        url: 'https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/shulker-box.png'
    },
    {
        name: '锻造台(Smithing)',
        url: 'https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/smithing-table.png'
    },
    {
        name: '烟熏炉(Smoker)',
        url: 'https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/smoker.png'
    },
    {
        name: '切石机(StoneCutter)',
        url: 'https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/stonecutter.png'
    },
    {
        name: '村民(Villager)',
        url: 'https://raw.githubusercontent.com/BukkitWiki/Picture/main/pic/2024/villager.png'
    },
];

const getImage = computed(()=>{
    return selectOption.value
})

</script>
<style scope>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  font-family: Arial, sans-serif;
  width: 100%;
}
.select-box{
  font-size: 1.5rem;
  color: #333;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}


.select-input {
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s ease;
}
.select-input:focus {
  border-color: #42b983;
}

.image-preview {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
</style>

<div class="container">

<div class="select-box">
<span>容器类型: </span>
<select v-model="selectOption" class="select-input">
    <option v-for="(item,i) in slotMapping" :key="i" :label="item.name" :value="item.url"></option>
</select>
</div>
<img :src="getImage" class="image-preview" style="pointer-events: none">
</div>