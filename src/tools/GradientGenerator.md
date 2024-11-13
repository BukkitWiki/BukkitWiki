---
title: "渐变文本生成器"
icon: 'carbon:gradient'
order: 3
---

<script setup>
import { ref, computed} from 'vue';

const textInput = ref('BukkitWiki');
const colors = ref(['#40b782', '#35495e']);
const addColor = ref('#40b782');

const removeColor = (index) => {
  if(colors.value.length <= 2) return;
  colors.value.splice(index, 1);
};

const addColorToList = () => {
  colors.value.push(addColor.value);
};

const moveColorUp = (index) => {
  if (index > 0) {
    const temp = colors.value[index];
    colors.value[index] = colors.value[index - 1];
    colors.value[index - 1] = temp;
  }
};

const moveColorDown = (index) => {
  if (index < colors.value.length - 1) {
    const temp = colors.value[index];
    colors.value[index] = colors.value[index + 1];
    colors.value[index + 1] = temp;
  }
};

const characters = computed(() => textInput.value.split(''));

function characterColors() {
  const steps = characters.value.length;
  const colorsArray = colors.value;
  const colorSteps = colorsArray.length - 1;

  if (steps <= 1) return [colorsArray[0]];

  const hexToRgb = (hex) => ({
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16),
  });

  const rgbToHex = (r, g, b) =>
    `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

  const characterColors = [];

  for (let i = 0; i < steps; i++) {
    const positionRatio = i / (steps - 1);
    const colorIndex = Math.min(Math.floor(positionRatio * colorSteps), colorSteps - 1);  // 边界检查
    const startColor = hexToRgb(colorsArray[colorIndex]);
    const endColor = hexToRgb(colorsArray[Math.min(colorIndex + 1, colorSteps)]);  // 边界检查

    const localRatio = (positionRatio * colorSteps) - colorIndex;
    const r = Math.round(startColor.r + localRatio * (endColor.r - startColor.r));
    const g = Math.round(startColor.g + localRatio * (endColor.g - startColor.g));
    const b = Math.round(startColor.b + localRatio * (endColor.b - startColor.b));

    characterColors.push(rgbToHex(r, g, b));
  }

  return characterColors;
}


const preview = computed(() => characterColors());

const ChatColors = computed(() => {
  return characterColors()
    .map((color, index) => "&" + color + textInput.value[index])
    .join("");
});

const MiniMessage = computed(() => {
  return `<gradient:${colors.value.join(":")}>${textInput.value}</gradient>`;
});
const CMI = computed(() => {
  return characterColors()
    .map((color, index) => "{" + color +"}"+ textInput.value[index])
    .join("");
});
const TrChat = computed(() => {
  return characterColors()
    .map((color, index) => "&{" + color +"}"+ textInput.value[index])
    .join("");
});


</script>
<style scoped>
@font-face {
  font-family: 'Minecraft';
  src: url("/assets/font/fusion-pixel-12px-monospaced-zh_hans.dY_81ePO.woff2") format("woff2");
}

.mcfont {
  font-family: 'Minecraft', var(--vp-font);
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  gap: 1rem;
}

.text-input,
.chatColors {
  width: 20rem;
  height: 10rem;
  padding: 0.8rem 1rem;
  font-size: 1.1rem;
  border: 1px solid var(--vp-c-accent);
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  color: var(--vp-c-text);
  background-color: var(--vp-c-bg-alt);
}

.text-input:focus,
.text-input:hover {
  border-color: #3aaf85;
  box-shadow: 0 0 5px rgba(66, 185, 131, 0.5);
}

.color-picker {
  appearance: none;
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
}

.color-list {
  width: 20rem;
  max-height: 15rem;
  overflow-y: auto;
  border: 1px solid var(--vp-c-grey-hover);
  border-radius: 8px;
  padding: 10px;
  background-color: var(--vp-c-bg-alt);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.color-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 8px;
  background-color: var(--vp-c-bg-elv);
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.1s ease, box-shadow 0.3s;
}

.color-item:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.add-color-container {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  border: 1px solid var(--vp-c-grey-hover);
  border-radius: 8px;
  background-color: var(--vp-c-bg-alt);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.color-input {
  width: 2rem;
  height: 2rem;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.color-code {
  font-size: 1rem;
  color: var(--vp-c-text);
  padding: 0 8px;
}

.add-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.add-btn:hover {
  background-color: #0056b3;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.delete-btn {
  background: transparent;
  border: none;
  color: #dc3545;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  transition: background-color 0.2s ease;
}

.delete-btn:hover {
  background-color: rgba(220, 53, 69, 0.1);
}

.preview {
  font-size: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.1rem;
  line-height: 0;
}

.chatColors {
  cursor: default;
  min-height: 8rem;
  margin: 1rem 0;
  background-color: var(--vp-c-bg-alt);
  border-color: var(--vp-c-grey-hover);
  font-family: monospace;
  font-size: 1rem;
  line-height: 1.5;
}
.move-btn {
  background: transparent;
  border: none;
  color: #007bff;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.move-btn:hover {
  background-color: rgba(0, 123, 255, 0.1);
}

.delete-btn {
  background: transparent;
  border: none;
  color: #dc3545;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.delete-btn:hover {
  background-color: rgba(220, 53, 69, 0.1);
}
</style>
<div class="container">
    <div style="display: flex;">
      <textarea v-model="textInput" placeholder="输入文本" class="text-input"></textarea>
    </div>
    <div class="add-color-container">
        <input type="color" v-model="addColor" class="color-input" />
        <span class="color-code mcfont">{{ addColor }}</span>
        <button class="add-btn" aria-label="添加" @click="addColorToList">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M298.7 213.3V0h-85.4v213.3H0v85.4h213.3V512h85.4V298.7H512v-85.4z"
            />
          </svg>
        </button>
    </div>
    <div class="color-list">
        <template v-for="(color, i) in colors" :key="i">
            <div class="color-item">
                <input type="color" v-model="colors[i]" class="color-picker" />
                <span class="color-code mcfont" style="font-size: 1.4rem">{{ color }}</span>
                <div>
                    <template v-if="i !== 0">
                        <button @click="moveColorUp(i)" class="move-btn" aria-label="向上移动">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M10.94 7.94a1.5 1.5 0 0 1 2.12 0l5.658 5.656a1.5 1.5 0 1 1-2.122 2.121L12 11.122l-4.596 4.596a1.5 1.5 0 1 1-2.122-2.12z"/>
                          </svg>
                        </button>
                    </template>
                      <template v-if="i !== colors.length - 1">
                        <button @click="moveColorDown(i)" class="move-btn" aria-label="向下移动">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z"/>
                          </svg>
                        </button>
                      </template>
                <button @click="removeColor(i)" class="delete-btn" aria-label="删除">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M5 5h2v2H5zm4 4H7V7h2zm2 2H9V9h2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2zm2-2v2h-2V9zm2-2v2h-2V7zm0 0V5h2v2z"
                    />
                  </svg>
                </button>
                </div>
            </div>
        </template>
    </div>

  <div class="preview">
    <p class="mcfont" v-for="(char, index) in textInput" :key="index" :style="{ color: preview[index],lineHeight:0}">
        {{ char }}
      </p>
  </div>

  <div style="display: flex; align-items: center; flex-direction: column;">
    <p>消息格式:</p>
    <textarea class="chatColors text-input" disabled v-model="ChatColors"></textarea>
  </div>

  <div style="display: flex; align-items: center; flex-direction: column;">
    <p>MiniMessage:</p>
    <textarea class="chatColors text-input" disabled v-model="MiniMessage"></textarea>
  </div>

  <div style="display: flex; align-items: center; flex-direction: column;">
    <p>CMI:</p>
    <textarea class="chatColors text-input" disabled v-model="CMI"></textarea>
  </div>

  <div style="display: flex; align-items: center; flex-direction: column;">
    <p>TrChat:</p>
    <textarea class="chatColors text-input" disabled v-model="TrChat"></textarea>
  </div>
</div>
