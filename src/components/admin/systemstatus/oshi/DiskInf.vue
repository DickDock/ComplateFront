<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>硬盘资源信息</span>
      </div>
    </template>
    <div class=" w-3/4">
      <div class="grid grid-cols-2 gap-0" v-for="disk in diskData.data">
        <div class="p-2 bg-gray-200 border border-gray-500">硬盘名称</div>
        <div class="p-2 border border-gray-500 truncate">{{ disk.name }}</div>

        <div class="p-2 bg-gray-200 border border-gray-500">硬盘容量</div>
        <div class="p-2 border border-gray-500 truncate">{{ disk.size }}</div>

        <div class="grid grid-cols-2 gap-0" v-for="partition in disk.partitions">
          <div class="p-2 bg-gray-200 border border-gray-500">挂载点</div>
          <div class="p-2 border border-gray-500 truncate">{{ partition.mountPoint }}</div>
          <div class="p-2 bg-gray-200 border border-gray-500">分区标识</div>
          <div class="p-2 border border-gray-500 truncate">{{ partition.identification }}</div>
          <div class="p-2 bg-gray-200 border border-gray-500">分区大小</div>
          <div class="p-2 border border-gray-500 truncate">{{ partition.size }}</div>
          <div class="p-2 bg-gray-200 border border-gray-500">分区命名</div>
          <div class="p-2 border border-gray-500 truncate">{{ partition.name }}</div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
// @ts-ignore
import {GetOshiData} from "@/script/api/oshi";

export default defineComponent({
  name: "DiskInf",
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
  beforeUnmount() {
    clearInterval(this.timer)
    this.timer = null
  },
  data() {
    return {
      diskData: {
        "status": true,
        "code": 200,
        "msg": "成功",
        "data": [
          {
            "partitions": [
              {
                "mountPoint": "D:\\",
                "identification": "磁盘 #1，分区 #0",
                "size": "703.87G",
                "name": "GPT: Basic Data"
              }
            ],
            "size": "953.86G",
            "name": "HP SSD EX950 1TB (标准磁盘驱动器)"
          },
          {
            "partitions": [
              {
                "mountPoint": "C:\\",
                "identification": "磁盘 #0，分区 #1",
                "size": "464.68G",
                "name": "GPT: Basic Data"
              }
            ],
            "size": "465.76G",
            "name": "HP SSD EX900 500GB (标准磁盘驱动器)"
          }
        ]
      }
    }
  },
  methods: {
    getData() {
      GetOshiData.getDiskData()
          .then((res) => {
            if (res.code == 200) {
              this.diskData = res
            }
          })
    }
  }
})
</script>

<style scoped>

</style>