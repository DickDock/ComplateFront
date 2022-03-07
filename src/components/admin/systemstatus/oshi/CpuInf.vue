<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>CPU信息</span>
      </div>
    </template>
    <div class="">
      <div class="grid grid-cols-2 gap-0">
        <div class="bg-gray-200 p-2 border border-gray-500">属性</div>
        <div class="bg-gray-200 p-2 border border-gray-500">内容</div>

        <div class="p-2 border border-gray-500">CPU型号</div>
        <div class="p-2 border border-gray-500 truncate">{{ cpuData.data.cpu.cpuModel }}</div>

        <div class="p-2 border border-gray-500">CPU核心数</div>
        <div class="p-2 border border-gray-500 truncate">{{ cpuData.data.cpu.cpuNum }}</div>

        <div class="p-2 border border-gray-500">系统使用率</div>
        <div class="p-2 border border-gray-500 truncate">{{ cpuData.data.cpu.sys }} %</div>

        <div class="p-2 border border-gray-500">用户使用率</div>
        <div class="p-2 border border-gray-500 truncate">{{ cpuData.data.cpu.used }} %</div>

        <div class="p-2 border border-gray-500">CPU当前等待率</div>
        <div class="p-2 border border-gray-500 truncate">{{ cpuData.data.cpu.wait }} %</div>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CpuInf",
  data() {
    return {
      cpuData: {
        "status": true,
        "code": 200,
        "msg": "成功",
        "data": {
          "cpu": {
            "cpuNum": 8,
            "toTal": 7999,
            "sys": 4.69,
            "used": 16.21,
            "wait": 0,
            "free": 78.12,
            "cpuModel": "Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz\n 1 physical CPU package(s)\n 4 physical CPU core(s)\n 8 logical CPU(s)\nIdentifier: Intel64 Family 6 Model 142 Stepping 10\nProcessorID: BFEBFBFF000806EA\nMicroarchitecture: Coffee Lake",
            "ticks": {
              "idle": 6249,
              "nice": 0,
              "irq": 31,
              "softIrq": 47,
              "steal": 0,
              "cSys": 375,
              "user": 1297,
              "ioWait": 0
            }
          },
          "used": "%17.50"
        }
      }
    }
  }
})
</script>

<style scoped>

</style>