---
title: 'Cron 表达式生成器'
icon: 'eos-icons:cronjob'
order: 4
---
<script setup>
import { ref } from 'vue'

const cronExpression = ref('* * * * *')
const cronFormat = ref('spring') // standard, quartz, spring

const minutes = ref('*')
const hours = ref('*')
const dayOfMonth = ref('*')
const month = ref('*') 
const dayOfWeek = ref('*')
const seconds = ref('*') // for quartz/spring
const year = ref('*') // for quartz/spring

const minuteType = ref('every') // every, range, specific, cycle
const hourType = ref('every')
const dayType = ref('every')
const monthType = ref('every')
const weekType = ref('every')
const secondType = ref('every')
const yearType = ref('every')

// 具体值
const specificMinutes = ref([])
const specificHours = ref([])
const specificDays = ref([])
const specificMonths = ref([])
const specificWeeks = ref([])
const specificSeconds = ref([])
const specificYears = ref([])

// 周期范围
const minuteStart = ref(0)
const minuteEnd = ref(59)
const hourStart = ref(0)
const hourEnd = ref(23)
const dayStart = ref(1)
const dayEnd = ref(31)
const monthStart = ref(1)
const monthEnd = ref(12)
const weekStart = ref(1)
const weekEnd = ref(7)
const secondStart = ref(0)
const secondEnd = ref(59)
const yearStart = ref(2024)
const yearEnd = ref(2030)

// 周期间隔
const minuteStep = ref(1)
const hourStep = ref(1)
const dayStep = ref(1)
const monthStep = ref(1)
const weekStep = ref(1)
const secondStep = ref(1)
const yearStep = ref(1)

const updateCron = () => {
  let expression = ''
  
  const getValue = (type, field, specific, start, end, step) => {
    switch(type.value) {
      case 'every':
        return '*'
      case 'specific':
        return specific.value.join(',')
      case 'range':
        return `${start.value}-${end.value}`
      case 'cycle':
        return `${start.value}/${step.value}`
      default:
        return '*'
    }
  }

  if(cronFormat.value === 'standard') {
    expression = `${getValue(minuteType, minutes, specificMinutes, minuteStart, minuteEnd, minuteStep)} ${getValue(hourType, hours, specificHours, hourStart, hourEnd, hourStep)} ${getValue(dayType, dayOfMonth, specificDays, dayStart, dayEnd, dayStep)} ${getValue(monthType, month, specificMonths, monthStart, monthEnd, monthStep)} ${getValue(weekType, dayOfWeek, specificWeeks, weekStart, weekEnd, weekStep)}`
  } else {
    expression = `${getValue(secondType, seconds, specificSeconds, secondStart, secondEnd, secondStep)} ${getValue(minuteType, minutes, specificMinutes, minuteStart, minuteEnd, minuteStep)} ${getValue(hourType, hours, specificHours, hourStart, hourEnd, hourStep)} ${getValue(dayType, dayOfMonth, specificDays, dayStart, dayEnd, dayStep)} ${getValue(monthType, month, specificMonths, monthStart, monthEnd, monthStep)} ${getValue(weekType, dayOfWeek, specificWeeks, weekStart, weekEnd, weekStep)}`
    
    if(cronFormat.value === 'quartz') {
      expression += ` ${getValue(yearType, year, specificYears, yearStart, yearEnd, yearStep)}`
    }
  }
  
  cronExpression.value = expression
}

const minuteOptions = Array.from({length: 60}, (_, i) => i)
const hourOptions = Array.from({length: 24}, (_, i) => i)
const dayOptions = Array.from({length: 31}, (_, i) => i + 1)
const monthOptions = Array.from({length: 12}, (_, i) => i + 1)
const weekOptions = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
const secondOptions = Array.from({length: 60}, (_, i) => i)
const yearOptions = Array.from({length: 7}, (_, i) => 2024 + i)
</script>
<style scoped>
.cron-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: var(--vp-c-bg-alt);
  border-radius: 8px;
  box-shadow: 0 2px 12px var(--vp-c-shadow);
}

.cron-field {
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 6px;
  background: var(--vp-c-bg-elv);
}

.cron-field label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--vp-c-text);
}

.cron-field select {
  padding: 8px 12px;
  margin-right: 10px;
  border: 1px solid var(--vp-c-border);
  border-radius: 4px;
  background: var(--vp-c-bg-alt);
  min-width: 120px;
  color: var(--vp-c-text);
  transition: all 0.3s ease;
}

.cron-field select:focus {
  outline: none;
  border-color: #3aaf85;
  box-shadow: 0 0 5px rgba(66, 185, 131, 0.5);
}

.cron-result {
  margin-top: 25px;
  padding: 15px;
  background: var(--vp-c-bg-soft);
  border-radius: 6px;
  border-left: 4px solid var(--vp-c-accent);
}

.cron-result p {
  margin: 0;
  color: var(--vp-c-text);
  font-family: var(--vp-font-mono);
  font-size: 16px;
}

.type-select {
  margin-bottom: 12px;
}

.value-inputs {
  margin-left: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.value-inputs input[type="number"] {
  width: 80px;
  padding: 6px 10px;
  border: 1px solid var(--vp-c-border);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text);
}

.value-inputs span {
  color: var(--vp-c-text-mute);
  font-weight: 500;
}

.checkbox-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 60px;
}

.checkbox-item input[type="checkbox"] {
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.checkbox-item label {
  margin: 0;
  font-weight: normal;
  cursor: pointer;
}

option {
  padding: 4px 8px;
}

option:checked {
  background: var(--vp-c-accent) linear-gradient(0deg, var(--vp-c-accent) 0%, var(--vp-c-accent) 100%);
  color: var(--vp-c-text-inverse-1);
}

.common-examples {
  margin-top: 30px;
  padding: 20px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.example-category {
  margin-bottom: 20px;
}

.example-category h3 {
  color: var(--vp-c-text-1);
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--vp-c-border);
}

.example-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  margin-bottom: 8px;
  background: var(--vp-c-bg-mute);
  border-radius: 4px;
  transition: all 0.3s ease;
}

.example-item:hover {
  background: var(--vp-c-bg-alt);
  transform: translateX(5px);
}

.example-expression {
  font-family: var(--vp-font-mono);
  color: var(--vp-c-text-code);
}

.example-desc {
  color: var(--vp-c-text-2);
  font-size: 0.9em;
}
.cron-intro {
  margin-top: 40px;
  padding: 25px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.cron-intro h3 {
  color: var(--vp-c-text-1);
  margin-bottom: 15px;
  font-size: 1.2em;
}

.cron-intro p {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 20px;
}

.cron-intro ul {
  list-style: none;
  padding-left: 0;
}

.cron-intro li {
  color: var(--vp-c-text-2);
  padding: 8px 0;
  border-bottom: 1px dashed var(--vp-c-border);
}

.cron-intro li:last-child {
  border-bottom: none;
}

.warning-box strong {
  color: #856404;
}

</style>
<div class="cron-container">
  <div class="cron-field">
    <label>Cron格式:</label>
    <select v-model="cronFormat" @change="updateCron">
      <option value="standard">Standard (Linux) - 标准Linux格式,包含分钟、小时、日期、月份、星期</option>
      <option value="quartz">Quartz - Quartz调度器格式,包含秒、分钟、小时、日期、月份、星期、年份</option>
      <option value="spring">Spring - Spring框架格式,包含秒、分钟、小时、日期、月份、星期</option>
    </select>
  </div>

  <template v-if="cronFormat !== 'standard'">
    <div class="cron-field">
      <label>秒:</label>
      <div class="type-select">
        <select v-model="secondType" @change="updateCron">
          <option value="every">每秒 - 每秒都执行</option>
          <option value="specific">指定秒数 - 在指定的秒数时执行</option>
          <option value="range">范围 - 在指定的秒数范围内执行</option>
          <option value="cycle">周期 - 从起始秒开始,每隔n秒执行一次</option>
        </select>
      </div>
      <div class="value-inputs" v-if="secondType === 'specific'">
        <div class="checkbox-group">
          <div v-for="s in secondOptions" :key="s" class="checkbox-item">
            <input type="checkbox" :id="'second-'+s" :value="s" v-model="specificSeconds" @change="updateCron">
            <label :for="'second-'+s">{{s}}</label>
          </div>
        </div>
      </div>
      <div class="value-inputs" v-if="secondType === 'range'">
        <input type="number" v-model="secondStart" @change="updateCron" min="0" max="59">
        <span>-</span>
        <input type="number" v-model="secondEnd" @change="updateCron" min="0" max="59">
      </div>
      <div class="value-inputs" v-if="secondType === 'cycle'">
        <input type="number" v-model="secondStart" @change="updateCron" min="0" max="59">
        <span>/</span>
        <input type="number" v-model="secondStep" @change="updateCron" min="1" max="59">
      </div>
    </div>
  </template>

  <div class="cron-field">
    <label>分钟:</label>
    <div class="type-select">
      <select v-model="minuteType" @change="updateCron">
        <option value="every">每分钟 - 每分钟都执行</option>
        <option value="specific">指定分钟 - 在指定的分钟时执行</option>
        <option value="range">范围 - 在指定的分钟范围内执行</option>
        <option value="cycle">周期 - 从起始分钟开始,每隔n分钟执行一次</option>
      </select>
    </div>
    <div class="value-inputs" v-if="minuteType === 'specific'">
      <div class="checkbox-group">
        <div v-for="m in minuteOptions" :key="m" class="checkbox-item">
          <input type="checkbox" :id="'minute-'+m" :value="m" v-model="specificMinutes" @change="updateCron">
          <label :for="'minute-'+m">{{m}}</label>
        </div>
      </div>
    </div>
    <div class="value-inputs" v-if="minuteType === 'range'">
      <input type="number" v-model="minuteStart" @change="updateCron" min="0" max="59">
      <span>-</span>
      <input type="number" v-model="minuteEnd" @change="updateCron" min="0" max="59">
    </div>
    <div class="value-inputs" v-if="minuteType === 'cycle'">
      <input type="number" v-model="minuteStart" @change="updateCron" min="0" max="59">
      <span>/</span>
      <input type="number" v-model="minuteStep" @change="updateCron" min="1" max="59">
    </div>
  </div>

  <div class="cron-field">
    <label>小时:</label>
    <div class="type-select">
      <select v-model="hourType" @change="updateCron">
        <option value="every">每小时 - 每小时都执行</option>
        <option value="specific">指定小时 - 在指定的小时时执行</option>
        <option value="range">范围 - 在指定的小时范围内执行</option>
        <option value="cycle">周期 - 从起始小时开始,每隔n小时执行一次</option>
      </select>
    </div>
    <div class="value-inputs" v-if="hourType === 'specific'">
      <div class="checkbox-group">
        <div v-for="h in hourOptions" :key="h" class="checkbox-item">
          <input type="checkbox" :id="'hour-'+h" :value="h" v-model="specificHours" @change="updateCron">
          <label :for="'hour-'+h">{{h}}</label>
        </div>
      </div>
    </div>
    <div class="value-inputs" v-if="hourType === 'range'">
      <input type="number" v-model="hourStart" @change="updateCron" min="0" max="23">
      <span>-</span>
      <input type="number" v-model="hourEnd" @change="updateCron" min="0" max="23">
    </div>
    <div class="value-inputs" v-if="hourType === 'cycle'">
      <input type="number" v-model="hourStart" @change="updateCron" min="0" max="23">
      <span>/</span>
      <input type="number" v-model="hourStep" @change="updateCron" min="1" max="23">
    </div>
  </div>

  <div class="cron-field">
    <label>日期:</label>
    <div class="type-select">
      <select v-model="dayType" @change="updateCron">
        <option value="every">每天 - 每天都执行</option>
        <option value="specific">指定日期 - 在每月的指定日期执行</option>
        <option value="range">范围 - 在每月指定的日期范围内执行</option>
        <option value="cycle">周期 - 从起始日期开始,每隔n天执行一次</option>
      </select>
    </div>
    <div class="value-inputs" v-if="dayType === 'specific'">
      <div class="checkbox-group">
        <div v-for="d in dayOptions" :key="d" class="checkbox-item">
          <input type="checkbox" :id="'day-'+d" :value="d" v-model="specificDays" @change="updateCron">
          <label :for="'day-'+d">{{d}}</label>
        </div>
      </div>
    </div>
    <div class="value-inputs" v-if="dayType === 'range'">
      <input type="number" v-model="dayStart" @change="updateCron" min="1" max="31">
      <span>-</span>
      <input type="number" v-model="dayEnd" @change="updateCron" min="1" max="31">
    </div>
    <div class="value-inputs" v-if="dayType === 'cycle'">
      <input type="number" v-model="dayStart" @change="updateCron" min="1" max="31">
      <span>/</span>
      <input type="number" v-model="dayStep" @change="updateCron" min="1" max="31">
    </div>
  </div>

  <div class="cron-field">
    <label>月份:</label>
    <div class="type-select">
      <select v-model="monthType" @change="updateCron">
        <option value="every">每月 - 每月都执行</option>
        <option value="specific">指定月份 - 在指定的月份执行</option>
        <option value="range">范围 - 在指定的月份范围内执行</option>
        <option value="cycle">周期 - 从起始月份开始,每隔n个月执行一次</option>
      </select>
    </div>
    <div class="value-inputs" v-if="monthType === 'specific'">
      <div class="checkbox-group">
        <div v-for="m in monthOptions" :key="m" class="checkbox-item">
          <input type="checkbox" :id="'month-'+m" :value="m" v-model="specificMonths" @change="updateCron">
          <label :for="'month-'+m">{{m}}</label>
        </div>
      </div>
    </div>
    <div class="value-inputs" v-if="monthType === 'range'">
      <input type="number" v-model="monthStart" @change="updateCron" min="1" max="12">
      <span>-</span>
      <input type="number" v-model="monthEnd" @change="updateCron" min="1" max="12">
    </div>
    <div class="value-inputs" v-if="monthType === 'cycle'">
      <input type="number" v-model="monthStart" @change="updateCron" min="1" max="12">
      <span>/</span>
      <input type="number" v-model="monthStep" @change="updateCron" min="1" max="12">
    </div>
  </div>

  <div class="cron-field">
    <label>星期:</label>
    <div class="type-select">
      <select v-model="weekType" @change="updateCron">
        <option value="every">每周 - 每周的每一天都执行</option>
        <option value="specific">指定星期 - 在每周的指定星期几执行</option>
        <option value="range">范围 - 在每周的指定星期范围内执行</option>
        <option value="cycle">周期 - 从起始星期开始,每隔n天执行一次</option>
      </select>
    </div>
    <div class="value-inputs" v-if="weekType === 'specific'">
      <div class="checkbox-group">
        <div v-for="(w, index) in weekOptions" :key="index" class="checkbox-item">
          <input type="checkbox" :id="'week-'+index" :value="index" v-model="specificWeeks" @change="updateCron">
          <label :for="'week-'+index">{{w}}</label>
        </div>
      </div>
    </div>
    <div class="value-inputs" v-if="weekType === 'range'">
      <input type="number" v-model="weekStart" @change="updateCron" min="0" max="6">
      <span>-</span>
      <input type="number" v-model="weekEnd" @change="updateCron" min="0" max="6">
    </div>
    <div class="value-inputs" v-if="weekType === 'cycle'">
      <input type="number" v-model="weekStart" @change="updateCron" min="0" max="6">
      <span>/</span>
      <input type="number" v-model="weekStep" @change="updateCron" min="1" max="7">
    </div>
  </div>

  <template v-if="cronFormat === 'quartz'">
    <div class="cron-field">
      <label>年份:</label>
      <div class="type-select">
        <select v-model="yearType" @change="updateCron">
          <option value="every">每年 - 每年都执行</option>
          <option value="specific">指定年份 - 在指定的年份执行</option>
          <option value="range">范围 - 在指定的年份范围内执行</option>
          <option value="cycle">周期 - 从起始年份开始,每隔n年执行一次</option>
        </select>
      </div>
      <div class="value-inputs" v-if="yearType === 'specific'">
        <div class="checkbox-group">
          <div v-for="y in yearOptions" :key="y" class="checkbox-item">
            <input type="checkbox" :id="'year-'+y" :value="y" v-model="specificYears" @change="updateCron">
            <label :for="'year-'+y">{{y}}</label>
          </div>
        </div>
      </div>
      <div class="value-inputs" v-if="yearType === 'range'">
        <input type="number" v-model="yearStart" @change="updateCron" min="2024" max="2030">
        <span>-</span>
        <input type="number" v-model="yearEnd" @change="updateCron" min="2024" max="2030">
      </div>
      <div class="value-inputs" v-if="yearType === 'cycle'">
        <input type="number" v-model="yearStart" @change="updateCron" min="2024" max="2030">
        <span>/</span>
        <input type="number" v-model="yearStep" @change="updateCron" min="1" max="7">
      </div>
    </div>
  </template>

  <div class="cron-result">
    <p>生成的Cron表达式: {{cronExpression}}</p>
  </div>
  <div class="common-examples">
    <div class="example-category">
      <h3>标准 Cron 表达式示例</h3>
      <div class="example-item">
        <span class="example-expression">* * * * *</span>
        <span class="example-desc">每分钟执行一次</span>
      </div>
      <div class="example-item">
        <span class="example-expression">0 * * * *</span>
        <span class="example-desc">每小时整点执行</span>
      </div>
      <div class="example-item">
        <span class="example-expression">0 0 * * *</span>
        <span class="example-desc">每天午夜执行</span>
      </div>
      <div class="example-item">
        <span class="example-expression">*/5 * * * *</span>
        <span class="example-desc">每5分钟执行一次</span>
      </div>
    </div>
    <div class="example-category">
      <h3>Spring/Quartz Cron 表达式示例</h3>
      <div class="example-item">
        <span class="example-expression">0 0/30 8-10 * * *</span>
        <span class="example-desc">每天8点到10点之间，每隔30分钟执行一次</span>
      </div>
      <div class="example-item">
        <span class="example-expression">0 0 12 * * ?</span>
        <span class="example-desc">每天中午12点执行</span>
      </div>
      <div class="example-item">
        <span class="example-expression">0 15 10 ? * MON-FRI</span>
        <span class="example-desc">周一到周五的上午10:15执行</span>
      </div>
      <div class="example-item">
        <span class="example-expression">0 0/5 14,18 * * ?</span>
        <span class="example-desc">每天14点和18点，每隔5分钟执行一次</span>
      </div>
    </div>
    <div class="example-category">
      <h3>特殊场景示例</h3>
      <div class="example-item">
        <span class="example-expression">0 0 2 1 * ?</span>
        <span class="example-desc">每月1号凌晨2点执行</span>
      </div>
      <div class="example-item">
        <span class="example-expression">0 0 0 1,15 * ?</span>
        <span class="example-desc">每月1号和15号零点执行</span>
      </div>
      <div class="example-item">
        <span class="example-expression">0 0 23 L * ?</span>
        <span class="example-desc">每月最后一天23点执行</span>
      </div>
      <div class="example-item">
        <span class="example-expression">0 0 1 ? * L</span>
        <span class="example-desc">每周六凌晨1点执行</span>
      </div>
    </div>
    <div class="example-category">
      <h3>基础示例</h3>
      <div class="example-item">
        <span class="example-expression">0/2 * * * * ?</span>
        <span class="example-desc">每2秒执行一次</span>
      </div>
      <div class="example-item">
        <span class="example-expression">0 0/2 * * * ?</span>
        <span class="example-desc">每2分钟执行一次</span>
      </div>
      <div class="example-item">
        <span class="example-expression">0 0 2 1 * ?</span>
        <span class="example-desc">每月1日凌晨2点执行</span>
      </div>
      <div class="example-item">
        <span class="example-expression">0 15 10 ? * MON-FRI</span>
        <span class="example-desc">周一至周五上午10:15执行</span>
      </div>
    </div>
    <div class="example-category">
      <h3>工作时间示例</h3>
      <div class="example-item">
        <span class="example-expression">0 0 10,14,16 * * ?</span>
        <span class="example-desc">每天上午10点、下午2点、4点执行</span>
      </div>
      <div class="example-item">
        <span class="example-expression">0 0/30 9-17 * * ?</span>
        <span class="example-desc">朝九晚五工作时间内每半小时执行</span>
      </div>
      <div class="example-item">
        <span class="example-expression">0 0/5 14,18 * * ?</span>
        <span class="example-desc">每天下午2点到2:55和下午6点到6:55期间每5分钟执行</span>
      </div>
      <div class="example-item">
        <span class="example-expression">0 0-5 14 * * ?</span>
        <span class="example-desc">每天下午2点到2:05期间每分钟执行</span>
      </div>
    </div>
    <div class="example-category">
      <h3>特定时间示例</h3>
      <div class="example-item">
        <span class="example-expression">0 0 12 ? * WED</span>
        <span class="example-desc">每周三中午12点执行</span>
      </div>
      <div class="example-item">
        <span class="example-expression">0 15 10 15 * ?</span>
        <span class="example-desc">每月15日上午10:15执行</span>
      </div>
      <div class="example-item">
        <span class="example-expression">0 15 10 L * ?</span>
        <span class="example-desc">每月最后一日上午10:15执行</span>
      </div>
      <div class="example-item">
        <span class="example-expression">0 15 10 ? * 6L</span>
        <span class="example-desc">每月最后一个周五上午10:15执行</span>
      </div>
    </div>
    <div class="example-category">
      <h3>高级示例</h3>
      <div class="example-item">
        <span class="example-expression">0 15 10 ? 6L 2002-2006</span>
        <span class="example-desc">2002-2006年每月最后一个周五上午10:15执行</span>
      </div>
      <div class="example-item">
        <span class="example-expression">0 10,44 14 ? 3 WED</span>
        <span class="example-desc">每年3月的周三下午2:10和2:44执行</span>
      </div>
      <div class="example-item">
        <span class="example-expression">0 15 10 ? * 6#3</span>
        <span class="example-desc">每月第三个周五上午10:15执行</span>
      </div>
      <div class="example-item">
        <span class="example-expression">0 15 10 * * ? 2005</span>
        <span class="example-desc">2005年每天上午10:15执行</span>
      </div>
    </div>
  </div>

  <div class="cron-intro">
    <h3>什么是Cron表达式?</h3>
    <p>Cron表达式是一个字符串,由5-7个空格分隔的时间字段组成,用于配置定时任务的执行时间。每个字段代表一个时间单位,按照特定的规则组合可以灵活地设置各种周期性执行的时间。</p>
    <h3>为什么有多种Cron格式?</h3>
    <p>不同的系统和框架对Cron表达式的实现略有不同:</p>
    <ul>
      <li>标准(Linux) Cron: 最基础的5字段格式,被Unix/Linux系统广泛使用</li>
      <li>Spring Cron: 在标准格式基础上增加了秒字段,共6字段,主要用于Spring框架</li>
      <li>Quartz Cron: 最完整的7字段格式,增加了年份字段,主要用于Quartz调度框架</li>
    </ul>
    <div class="warning-box">
      <strong>⚠️ 注意:</strong> 本页面展示的Cron表达式示例可能需要根据您使用的Cron类型进行调整。例如,标准Linux Cron不支持秒级调度,而Spring和Quartz Cron则需要额外的秒字段。请根据实际使用的系统选择合适的格式。
    </div>
  </div>
</div>
