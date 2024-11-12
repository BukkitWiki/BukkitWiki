---
title: "渐变文本生成器"
icon: 'carbon:gradient'
order: 3
---

<script setup>
import { ref, computed } from 'vue';
const textInput = ref('BukkiWiki');
const color1 = ref('#40b782');
const color2 = ref('#35495e');

const characters = computed(() => textInput.value.split(''));

function characterColors(){
  const colors = [];
  const steps = characters.value.length;
  if (steps <= 1) return [color1.value];

  const hexToRgb = (hex) => ({
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16)
  });

  const rgbToHex = (r, g, b) =>
    `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

  const startColor = hexToRgb(color1.value);
  const endColor = hexToRgb(color2.value);

  for (let i = 0; i < steps; i++) {
    const r = Math.round(startColor.r + ((endColor.r - startColor.r) * i) / (steps - 1));
    const g = Math.round(startColor.g + ((endColor.g - startColor.g) * i) / (steps - 1));
    const b = Math.round(startColor.b + ((endColor.b - startColor.b) * i) / (steps - 1));
    colors.push(rgbToHex(r, g, b))
  }
  return colors
}

const preview = computed(()=>{
    return characterColors()
});

const ChatColors = computed(() => {
    return characterColors().map((item,index)=>"&"+item+textInput.value[index]).join("")
});

const MiniMessage = computed(()=>{
    return "<gradient:"+color1.value+":"+color2.value+">"+textInput.value+"</gradient>"
})
</script>
<style scoped>
@font-face {
  font-family: 'Minecraft';
  src: url("/assets/font/fusion-pixel-12px-monospaced-zh_hans.dY_81ePO.woff2") format("woff");
}
.mcfont{
  font-family: 'Minecraft',var(--vp-font);
}
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text-input{
  width: 100%;
  max-width: 300px;
  padding: 0.8rem 1rem;
  font-size: 1.1rem;
  border: 1px solid var(--vp-c-accent); /* Vue的绿色主题色 */
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  color: var(--vp-c-text);
  margin-right: 1rem;
}
.text-input:focus {
  border-color: #3aaf85; /* 深一点的绿色 */
  box-shadow: 0 0 5px rgba(66, 185, 131, 0.5);
}
.text-input:hover {
  border-color: #3aaf85;
}
.color-picker{
  appearance: none;
  width: 50px;
  height: 50px;
  padding: 0;
  border: 0 solid var(--vp-c-accent); /* Vue绿色边框 */
  border-radius: 5px;
  cursor: pointer;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
}
</style>
<div class="container" style="margin-top: 3rem">
<div style="display: flex">
<input v-model="textInput" placeholder="输入文本" class="text-input" />

<div class="color-picker">
  <input class="color-picker" type="color" v-model="color1" />
</div>

<div class="color-picker">
  <input class="color-picker" type="color" v-model="color2" />
</div>

</div>

<div class="preview" style="font-size: 3rem">

<span class="mcfont" v-for="(char, index) in textInput" :key="index" :style="{ color: preview[index] }">
    {{ char }}
  </span>


</div>

</div>

<div style="display: flex;align-items: center;flex-direction: column;">
  <p>消息格式:</p>
  <textarea class="chatColors text-input" style="cursor: default;min-height: 8rem;margin-right: 0" disabled v-model="ChatColors"/>
</div>

<div style="display: flex;align-items: center;flex-direction: column;">
  <p>MiniMessage:</p>
  <textarea class="chatColors text-input" style="cursor: default;min-height: 8rem;margin-right: 0" disabled v-model="MiniMessage"/>
</div>


