---
title: 抽奖工具
icon: 'carbon:trophy'
order: 6
---
<script setup>
import { ref, reactive, onMounted } from 'vue'

// 从 localStorage 获取参与者列表,如果没有则使用空数组
const getStoredParticipants = () => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem('participants')
    return stored ? JSON.parse(stored) : []
  }
  return []
}

// 从 localStorage 获取中奖者列表,如果没有则使用空数组
const getStoredResults = () => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem('results')
    return stored ? JSON.parse(stored) : []
  }
  return []
}

// 参与者列表
const participants = ref(getStoredParticipants())
const newParticipant = ref('')

// 抽奖结果
const results = ref(getStoredResults())
const isDrawing = ref(false)
const error = ref('') // 新增错误提示
const success = ref('') // 新增成功提示

// 抽取数量
const drawCount = ref(1)

// 抽奖动画配置
const animationConfig = reactive({
  duration: 2000, // 动画持续时间
  speed: 50 // 动画速度
})

// 历史记录
const drawHistory = ref(typeof window !== "undefined" ? JSON.parse(localStorage.getItem('drawHistory') || '[]') : [])

// 监听参与者列表变化并保存到 localStorage
const saveParticipants = () => {
  if (typeof window !== "undefined") {
    localStorage.setItem('participants', JSON.stringify(participants.value))
  }
}

// 保存中奖结果到 localStorage
const saveResults = () => {
  if (typeof window !== "undefined") {
    localStorage.setItem('results', JSON.stringify(results.value))
    // 保存到历史记录
    const historyItem = {
      id: Date.now(), // 添加唯一ID
      date: new Date().toLocaleString(),
      winners: [...results.value],
      participants: [...participants.value]
    }
    drawHistory.value.unshift(historyItem)
    localStorage.setItem('drawHistory', JSON.stringify(drawHistory.value))
    success.value = '✨ 抽奖成功!' // 添加成功提示
  }
}

// 清空参与者列表
const clearParticipants = () => {
  if(confirm('确定要清空参与者列表吗?')) {
    participants.value = []
    saveParticipants()
    success.value = '✨ 清空成功!'
  }
}

// 导入参与者名单
const fileInputRef = ref(null)

const importParticipants = (event) => {
  const file = event.target.files[0]
  if(file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      const names = e.target.result.split(/[\n,，]/).filter(name => name.trim())
      participants.value.push(...names)
      saveParticipants()
      success.value = '✨ 导入成功!'
    }
    reader.readAsText(file)
  }
}

// 导出参与者名单
const exportParticipants = () => {
  if(!participants.value.length) {
    error.value = '❌ 参与者列表为空!'
    return
  }
  const text = participants.value.join('\n')
  const blob = new Blob([text], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = '参与者名单.txt'
  a.click()
  URL.revokeObjectURL(url)
  success.value = '✨ 导出成功!'
}

// 添加参与者
const addParticipant = () => {
  if (!newParticipant.value.trim()) {
    error.value = '❌ 请输入参与者姓名!'
    return
  }
  const names = newParticipant.value.split(/[\s,，]/).filter(name => name.trim())
  if (names.length > 0) {
    participants.value.push(...names)
    newParticipant.value = ''
    saveParticipants()
    success.value = '✨ 添加成功!'
    error.value = ''
    document.querySelector('.input-section input').focus()
  }
}

// 删除参与者
const removeParticipant = (index) => {
  participants.value.splice(index, 1)
  saveParticipants()
  success.value = '✨ 删除成功!'
}

// 复制中奖者名单
const copyResults = () => {
  const text = results.value.join('\n')
  navigator.clipboard.writeText(text).then(() => {
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
  }).catch(err => {
    console.error('复制失败:', err)
    error.value = '❌ 复制失败,请手动复制'
  })
}

// 复制历史记录
const copyHistory = (winners) => {
  const text = winners.join('\n')
  navigator.clipboard.writeText(text).then(() => {
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
  }).catch(err => {
    console.error('复制失败:', err)
    error.value = '❌ 复制失败,请手动复制'
  })
}

// 删除历史记录
const removeHistory = (id) => {
  if(confirm('确定要删除这条记录吗?')) {
    drawHistory.value = drawHistory.value.filter(item => item.id !== id)
    if (typeof window !== "undefined") {
      localStorage.setItem('drawHistory', JSON.stringify(drawHistory.value))
    }
    success.value = '✨ 删除成功!'
  }
}

// 清空历史记录
const clearHistory = () => {
  if(confirm('确定要清空所有历史记录吗?')) {
    drawHistory.value = []
    if (typeof window !== "undefined") {
      localStorage.setItem('drawHistory', JSON.stringify(drawHistory.value))
    }
    success.value = '✨ 清空成功!'
  }
}

// 开始抽奖
const startDraw = () => {
  if (participants.value.length === 0) {
    error.value = '❌ 请先添加参与者!'
    return
  }
  
  if (drawCount.value > participants.value.length) {
    error.value = '❌ 抽取数量不能大于参与者数量!'
    return
  }

  error.value = ''
  success.value = ''
  isDrawing.value = true
  results.value = []
  let count = 0
  
  
  const timer = setInterval(() => {
    const tempResults = []
    const tempParticipants = [...participants.value]
    
    for(let i = 0; i < drawCount.value; i++) {
      if(tempParticipants.length > 0) {
        const randomIndex = Math.floor(Math.random() * tempParticipants.length)
        tempResults.push(tempParticipants[randomIndex])
        tempParticipants.splice(randomIndex, 1)
      }
    }
    
    results.value = tempResults
    count++
    
    // 动态调整动画速度
    const progress = count / 20
    const currentInterval = animationConfig.speed * (1 + progress * 2)
    
    if (count > 20) {
      clearInterval(timer)
      isDrawing.value = false
      saveResults()
    }
  }, animationConfig.speed)
}
</script>
<style scoped>
.prize-draw {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: var(--vp-c-bg-alt);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.input-section {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  align-items: center;
}

.input-section input {
  flex: 1;
  padding: 12px 15px;
  border: 2px solid var(--vp-c-accent);
  border-radius: 8px;
  font-size: 14px;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text);
  transition: all 0.3s;
}

.input-section input:focus {
  border-color: #40b782;
  box-shadow: 0 0 0 3px rgba(64, 183, 130, 0.2);
  outline: none;
}

.draw-count {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.draw-count input {
  width: 80px;
  padding: 10px;
  border: 2px solid var(--vp-c-accent);
  border-radius: 8px;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text);
  transition: all 0.3s;
}

.draw-count input:focus {
  border-color: #40b782;
  box-shadow: 0 0 0 3px rgba(64, 183, 130, 0.2);
  outline: none;
}

.participant-list {
  margin: 20px 0;
  padding: 20px;
  border: 2px solid var(--vp-c-grey-hover);
  border-radius: 12px;
  background: var(--vp-c-bg-alt);
}

.participant-item {
  display: inline-flex;
  align-items: center;
  margin: 6px;
  padding: 8px 16px;
  background: #40b782;
  border-radius: 25px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  color: var(--vp-c-bg);
  transition: all 0.3s;
  user-select: none;
}

.participant-item:hover {
  background: #35495e;
  transform: translateY(-2px);
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
}

.participant-item .remove-btn {
  margin-left: 8px;
  color: var(--vp-c-bg);
  cursor: pointer;
  font-size: 18px;
  transition: all 0.3s;
  opacity: 0.8;
  display: flex;
  align-items: center;
  height: 100%;
}

.participant-item:hover .remove-btn {
  opacity: 1;
}

.result-section {
  margin-top: 30px;
  text-align: center;
}

.results {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin: 20px 0;
  cursor: pointer;
  padding: 20px;
  border-radius: 12px;
  background: rgba(64, 183, 130, 0.1);
}

.result-item {
  font-size: 22px;
  font-weight: bold;
  color: var(--vp-c-bg);
  padding: 12px 25px;
  background: #40b782;
  border-radius: 25px;
  animation: pop 0.5s ease;
  transition: all 0.3s;
  user-select: none;
  box-shadow: 0 4px 12px rgba(64, 183, 130, 0.3);
}

.result-item:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 6px 15px rgba(64, 183, 130, 0.4);
}

button {
  padding: 12px 28px;
  background: #40b782;
  color: var(--vp-c-bg);
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(64, 183, 130, 0.2);
}

button:hover {
  transform: translateY(-2px);
  background: #35495e;
  box-shadow: 0 6px 15px rgba(64, 183, 130, 0.4);
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
  background: #35495e;
}

.clear-btn {
  padding: 8px 15px;
  font-size: 14px;
  background: #dc3545;
}

.clear-btn:hover {
  background: #c82333;
}

.file-input {
  display: none;
}

.import-export-section {
  display: flex;
  gap: 10px;
  margin: 15px 0;
  justify-content: center;
}

.history-section {
  margin-top: 30px;
  padding: 20px;
  border-radius: 12px;
  background: var(--vp-c-bg-alt);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.history-item {
  position: relative;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  background: rgba(64, 183, 130, 0.1);
  cursor: pointer;
}

.history-item .remove-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #dc3545;
  cursor: pointer;
  font-size: 24px;
  padding: 5px 10px;
  border-radius: 4px;
  transition: all 0.3s;
  display: flex;
  align-items: center;
}

.history-item .remove-btn:hover {
  background: rgba(220, 53, 69, 0.1);
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

@keyframes pop {
  0% { transform: scale(0.8) rotate(-5deg); opacity: 0; }
  50% { transform: scale(1.1) rotate(3deg); }
  100% { transform: scale(1) rotate(0); opacity: 1; }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeOut {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(10px); }
}
</style>

<div class="prize-draw">
  <div class="input-section">
    <input 
      v-model="newParticipant"
      @keyup.enter="addParticipant"
      placeholder="输入参与者姓名(可用空格、逗号分隔添加多个)"
    >
    <button @click="addParticipant">添加</button>
  </div>
  
  <div class="import-export-section">
    <input type="file" ref="fileInputRef" class="file-input" @change="importParticipants" accept=".txt">
    <button @click="fileInputRef.click()">导入名单</button>
    <button @click="exportParticipants">导出名单</button>
  </div>
  
  <div class="draw-count">
    <span>抽取数量:</span>
    <input 
      type="number" 
      v-model="drawCount"
      min="1"
      :max="participants.length"
    >
  </div>
  
  
  <div class="participant-list">
    <h3>参与者列表 ({{ participants.length }}人): 
      <button class="clear-btn" @click="clearParticipants" style="margin-left: 10px;">清空列表</button>
    </h3>
    <div v-for="(participant, index) in participants" :key="index" class="participant-item">
      {{ participant }}
      <span class="remove-btn" @click="removeParticipant(index)">×</span>
    </div>
  </div>
  
  <div class="result-section">
    <button @click="startDraw" :disabled="isDrawing">
      {{ isDrawing ? '抽奖中...' : '开始抽奖' }}
    </button>
    <div class="error" v-if="error">{{ error }}</div>
    <div class="success" v-if="success">{{ success }}</div>
    <div class="results" v-if="results.length" @click="copyResults">
      <div v-for="(result, index) in results" :key="index" class="result-item">
        {{ result }}
      </div>
    </div>
  </div>
  
  <div class="history-section" v-if="drawHistory.length">
    <h3>历史记录 
      <button class="clear-btn" @click="clearHistory" style="margin-left: 10px;">清空历史</button>
    </h3>
    <div v-for="record in drawHistory" :key="record.id" class="history-item" @click="copyHistory(record.winners)">
      <span class="remove-btn" @click.stop="removeHistory(record.id)">×</span>
      <p>{{ record.date }}</p>
      <div class="participant-item" v-for="winner in record.winners" :key="winner">
        {{ winner }}
      </div>
    </div>
  </div>
</div>