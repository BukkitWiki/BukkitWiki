---
title: "颜色代码"
icon: 'unjs:theme-colors'
order: 1
---

<script setup lang="ts">
import {ref,onMounted,onBeforeUnmount} from "vue"; 

const randomString = ref('');

const generateRandomString = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  randomString.value = Array.from({ length: 7 }, () =>
    characters.charAt(Math.floor(Math.random() * characters.length))
  ).join('')
};

let intervalId = null

onMounted(() => {
  generateRandomString();
  intervalId = setInterval(generateRandomString, 100)
});

onBeforeUnmount(() => {
  clearInterval(intervalId)
})

</script>

| 效果                                                                     | 名字             | 代码   | MiniMessage      | Motd       | Hex     |
|------------------------------------------------------------------------|----------------|------|------------------|------------|---------|
| <div style="background-color:#000;width: 90px;height: 25px;"></div>    | Black          | §0   | \<black>         | \u00A70    | #000000 |
| <div style="background-color:#0000aa;width: 90px;height: 25px;"></div> | Dark Blue	     | §1   | \<dark_blue>     | \u00A71    | #0000AA |
| <div style="background-color:#00aa00;width: 90px;height: 25px;"></div> | Dark Green	    | §2   | \<dark_green>    | \u00A72    | #00AA00 |
| <div style="background-color:#00aaaa;width: 90px;height: 25px;"></div> | Dark Aqua	     | §3   | \<dark_aqua>     | \u00A73    | #00AAAA |
| <div style="background-color:#aa0000;width: 90px;height: 25px;"></div> | Dark Red	      | §4   | \<dark_red>      | \u00A74    | #AA0000 |
| <div style="background-color:#aa00aa;width: 90px;height: 25px;"></div> | Dark Purple	   | §5   | \<dark_purple>   | \u00A75    | #AA00AA |
| <div style="background-color:#ffaa00;width: 90px;height: 25px;"></div> | Gold	          | §6   | \<gold>          | \u00A76    | #FFAA00 |
| <div style="background-color:#aaaaaa;width: 90px;height: 25px;"></div> | Gray           | §7   | \<gray>          | \u00A77    | #AAAAAA |
| <div style="background-color:#555555;width: 90px;height: 25px;"></div> | Dark Gray	     | §8   | \<dark_gray>     | \u00A78    | #555555 |
| <div style="background-color:#5555ff;width: 90px;height: 25px;"></div> | Blue           | §9   | \<blue>          | \u00A79    | #5555FF |
| <div style="background-color:#55ff55;width: 90px;height: 25px;"></div> | Green          | §a   | \<green>         | \u00A7a    | #55FF55 |
| <div style="background-color:#55ffff;width: 90px;height: 25px;"></div> | Aqua           | §b   | \<aqua>          | \u00A7b    | #55FFFF |
| <div style="background-color:#ff5555;width: 90px;height: 25px;"></div> | Red            | §c   | \<red>           | \u00A7c    | #FF5555 |
| <div style="background-color:#ff55ff;width: 90px;height: 25px;"></div> | Light Purple	  | §d   | \<light_purple>  | \u00A7d    | #FF55FF |
| <div style="background-color:#ffff55;width: 90px;height: 25px;"></div> | Yellow         | §e   | \<yellow>        | \u00A7e    | #FFFF55 |
| <div style="background-color:#fff;width: 90px;height: 25px;"></div>    | White          | §f   | \<white>         | \u00A7f    | #FFFFFF |
| **BukkiWiki**                                                          | Blod           | §l   | \<bold>          | \u00A7n    |
| <u>BukkitWiki</u>                                                      | Underline      | 	§n  | 	\<underline>    | 	\u00A7n	  |
| *BukkitWiki*                                                           | 	Italic        | 	§o  | 	\<italic>       | 	\u00A7o	  |
| ~~BukkitWiki~~                                                         | 	Strikethrough | 	§m	 | \<strikethrough> | 	\u00A7m		 |
| {{randomString}}                                                       | Magic          | 	§k	 | \<magic>         | 	\u00A7k	  |
| BukkitWiki                                                             | Reset          | §r   | \<reset>         | 	\u00A7r   |

