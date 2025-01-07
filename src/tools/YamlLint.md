---
title: 'Yaml工具'
icon: 'nonicons:yaml-16'
order: 7
---
<script setup>
import { ref, computed } from 'vue'
import YAML from 'yaml'

const input = ref('')
const output = ref('')
const error = ref('')
const success = ref('') // 新增成功提示
const errorLine = ref(null)
const errorColumn = ref(null)
const errorPosition = ref(null)
const loading = ref(false)
const isValid = ref(false)

// 计算行号
const getLineNumbers = (text) => {
  if(!text) return []
  return text.split('\n').map((_, index) => index + 1)
}

// 计算输入字符数
const inputCharCount = computed(() => {
  return input.value.length
})

// 校验YAML格式
const validateYaml = () => {
  if(!input.value.trim()) {
    error.value = '请输入要校验的YAML内容'
    success.value = ''
    isValid.value = false
    return
  }

  try {
    YAML.parse(input.value)
    error.value = ''
    success.value = '✨ YAML格式校验通过!' // 添加成功提示
    isValid.value = true
  } catch(e) {
    success.value = ''
    if(e.message) {
      const match = e.message.match(/at line (\d+), column (\d+)/)
      if(match) {
        errorLine.value = parseInt(match[1])
        errorColumn.value = parseInt(match[2])
        const lines = input.value.split('\n')
        let pos = 0
        for(let i = 0; i < errorLine.value - 1; i++) {
          pos += lines[i].length + 1
        }
        pos += errorColumn.value - 1
        errorPosition.value = pos
        error.value = '❌ 输入的内容不是合法的YAML格式'
        error.value += `\n错误位置: 第${errorLine.value}行, 第${errorColumn.value}列 (位置: ${errorPosition.value})`
      }
    }
    isValid.value = false
  }
}

// 格式化YAML
const formatYaml = async () => {
  if(!input.value.trim()) {
    error.value = '请输入要格式化的YAML内容'
    success.value = ''
    isValid.value = false
    return
  }
  
  try {
    loading.value = true
    error.value = ''
    success.value = ''
    errorLine.value = null
    errorColumn.value = null
    errorPosition.value = null
    
    // 使用防抖处理大量数据
    await new Promise(resolve => setTimeout(resolve, 100))
    
    const obj = YAML.parse(input.value)
    output.value = YAML.stringify(obj, {
      indent: 2,
      lineWidth: -1,
      doubleQuoted: true,
      sortMapEntries: false // 不对Map进行排序,保留原有顺序
    })
    isValid.value = true
    success.value = '✨ YAML格式化成功!' // 添加成功提示
  } catch(e) {
    error.value = e.message
    success.value = ''
    output.value = ''
    isValid.value = false
  } finally {
    loading.value = false
  }
}

// 复制格式化后的内容
const copyOutput = async () => {
  if(!output.value) return
  try {
    await navigator.clipboard.writeText(output.value)
    // 使用更友好的提示
    const tip = document.createElement('div')
    tip.textContent = '✨ 复制成功!'
    tip.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 12px 24px;
      background: rgba(0,0,0,0.85);
      color: white;
      border-radius: 8px;
      font-size: 15px;
      z-index: 9999;
      animation: fadeIn 0.2s ease;
    `
    document.body.appendChild(tip)
    setTimeout(() => {
      tip.style.animation = 'fadeOut 0.2s ease'
      setTimeout(() => tip.remove(), 200)
    }, 1300)
  } catch {
    alert('复制失败,请手动复制')
  }
}

// 清空内容
const clearContent = () => {
  if(input.value && !confirm('确定要清空所有内容吗?')) return
  input.value = ''
  output.value = ''
  error.value = ''
  success.value = ''
  errorLine.value = null
  errorColumn.value = null
  errorPosition.value = null
  isValid.value = false
}

// 同步滚动
const syncScroll = (e) => {
  const { scrollTop } = e.target
  const container = e.target.closest('.linedwrap')
  const lines = container.querySelector('.lines')
  const codelines = container.querySelector('.codelines')
  
  if(e.target.tagName === 'TEXTAREA') {
    codelines.style.transform = `translateY(-${scrollTop}px)`
    codelines.style.paddingBottom = '20px'
    codelines.style.maxHeight = `${lines.clientHeight + 20}px`
  }
}
</script>
<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

.yaml-lint {
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px;
  background: var(--vp-c-bg-alt);
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.input-area, .output-area {
  margin-bottom: 24px;
}

h3 {
  margin-bottom: 12px;
  color: var(--vp-c-text-1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2em;
}

.char-count {
  font-size: 13px;
  color: var(--vp-c-text-2);
  font-weight: normal;
}

.linedwrap {
  position: relative;
  display: flex;
  filter: drop-shadow(0 4px 6px rgba(0,0,0,0.08));
}

.lines {
  width: 50px;
  padding: 12px 8px;
  background: var(--vp-c-bg-soft);
  border-radius: 10px 0 0 10px;
  border: 2px solid var(--vp-c-accent);
  border-right: none;
  font-family: monospace;
  font-size: 14px;
  line-height: 1.5;
  text-align: right;
  user-select: none;
  color: var(--vp-c-text-2);
  overflow: hidden;
  position: relative;
}

.codelines {
  position: absolute;
  top: 12px;
  left: 8px;
  right: 8px;
  overflow: visible;
  will-change: transform;
}

.lineno {
  padding: 0 4px;
  min-width: 30px;
  height: 21px;
  line-height: 21px;
}

.lineno.error-line {
  color: #ff4d4f;
  font-weight: bold;
  background: rgba(255,77,79,0.1);
}

.linedtextarea {
  flex: 1;
}

textarea {
  width: 100%;
  min-height: 300px;
  padding: 12px;
  border: 2px solid var(--vp-c-accent);
  border-radius: 0 10px 10px 0;
  background: var(--vp-c-bg);
  color: var(--vp-c-text);
  font-family: monospace;
  font-size: 14px;
  line-height: 1.5;
  resize: vertical;
  transition: all 0.3s;
  overflow: auto;
}

textarea:focus {
  outline: none;
  border-color: #40b782;
  box-shadow: 0 0 0 3px rgba(64, 183, 130, 0.15);
}

textarea[readonly] {
  background: var(--vp-c-bg-soft);
  cursor: default;
}

.error {
  color: #ff4d4f;
  margin: 12px 0;
  padding: 14px;
  background: rgba(255, 77, 79, 0.08);
  border-radius: 8px;
  white-space: pre-line;
  font-size: 14px;
  border-left: 4px solid #ff4d4f;
  animation: fadeIn 0.3s ease;
}

.success {
  color: #52c41a;
  margin: 12px 0;
  padding: 14px;
  background: rgba(82, 196, 26, 0.08);
  border-radius: 8px;
  font-size: 14px;
  border-left: 4px solid #52c41a;
  animation: fadeIn 0.3s ease;
}

.btn-group {
  display: flex;
  gap: 14px;
  margin: 20px 0;
}

button {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background: var(--vp-c-accent);
  color: white;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
}

button:hover {
  opacity: 0.9;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(64, 183, 130, 0.2);
}

button:active {
  transform: translateY(-1px);
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.valid-yaml {
  border-color: #52c41a !important;
}

.invalid-yaml {
  border-color: #ff4d4f !important;
}

@media (max-width: 640px) {
  .yaml-lint {
    padding: 16px;
  }
  
  .btn-group {
    flex-wrap: wrap;
  }
  
  button {
    width: 100%;
    justify-content: center;
  }
}
</style>

<div class="yaml-lint">
    <div class="input-area">
      <h3>
        输入YAML
        <span class="char-count">字符数: {{ inputCharCount }}</span>
      </h3>
      <div class="linedwrap">
        <div class="lines">
          <div class="codelines">
            <div 
              v-for="num in getLineNumbers(input)" 
              :key="num"
              :class="{'error-line': errorLine === num}"
              class="lineno"
            >{{ num }}</div>
          </div>
        </div>
        <div class="linedtextarea">
          <textarea 
            v-model="input"
            placeholder="请输入要格式化的YAML内容..."
            :class="{'valid-yaml': isValid && input, 'invalid-yaml': !isValid && input}"
            spellcheck="false"
            @scroll="syncScroll"
            wrap="off"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="btn-group">
      <button @click="validateYaml">
        校验
      </button>
      <button @click="formatYaml" :disabled="loading">
        {{ loading ? '格式化中...' : '格式化' }}
      </button>
      <button @click="copyOutput" :disabled="!output">
        复制结果
      </button>
      <button @click="clearContent">
        清空
      </button>
    </div>
    <div class="error" v-if="error">{{ error }}</div>
    <div class="success" v-if="success">{{ success }}</div>
    <div class="output-area" v-if="output">
      <h3>格式化结果:</h3>
      <div class="linedwrap">
        <div class="lines">
          <div class="codelines">
            <div 
              v-for="num in getLineNumbers(output)" 
              :key="num"
              class="lineno"
            >{{ num }}</div>
          </div>
        </div>
        <div class="linedtextarea">
          <textarea 
            v-model="output"
            readonly
            spellcheck="false"
            @scroll="syncScroll"
            wrap="off"
          ></textarea>
        </div>
      </div>
    </div>
</div>