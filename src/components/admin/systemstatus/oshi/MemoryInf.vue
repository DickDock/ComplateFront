<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>内存信息</span>
      </div>
    </template>
    <div class="">
      <div class="grid grid-cols-2 gap-0">
        <div class="bg-gray-200 p-2 border border-gray-500">属性</div>
        <div class="bg-gray-200 p-2 border border-gray-500">内容</div>

        <div class="p-2 border border-gray-500">总容量</div>
        <div class="p-2 border border-gray-500 truncate">{{ memoryData.data.total }}</div>

        <div class="p-2 border border-gray-500">可用容量</div>
        <div class="p-2 border border-gray-500 truncate">{{ memoryData.data.available }}</div>

        <div class="p-2 border border-gray-500">可用内存</div>
        <div class="p-2 border border-gray-500 truncate">{{ memoryData.data.memory.slice(1,) }} %</div>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
// @ts-ignore
import {GetOshiData} from "@/script/api/oshi";

export default defineComponent({
  name: "MemoryInf",
  mounted() {
    this.getData()
    if (this.timer) {
      clearInterval(this.timer);
    } else {
      this.timer = setInterval(() => {
        setTimeout(() => {
          this.getData()
        }, 0)
      }, 5000)
    }
  },
  beforeUnmount () {
    clearInterval(this.timer)
    this.timer = null
  },
  data() {
    return {
      memoryData: {
        "status": true,
        "code": 200,
        "msg": "成功",
        "data": {
          "total": "15.88G",
          "memory": "%22.80",
          "available": "3.62G"
        }
      }
    }
  },
  methods: {
    getData() {
      GetOshiData.getMemoryData()
          .then((res) => {
            if (res.code == 200) {
              this.memoryData = res
            }
          })
    }
  }
})
</script>

<style scoped>

</style>