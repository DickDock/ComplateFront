<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>操作系统资源信息</span>
      </div>
    </template>
    <div class=" w-3/4">
      <div class="grid grid-cols-2 gap-0">
        <div class="p-2 bg-gray-200 border border-gray-500">操作系统类型</div>
        <div class="p-2 border border-gray-500 truncate">{{ osData.data.osName }}</div>

        <div class="p-2 bg-gray-200 border border-gray-500">可用容量</div>
        <div class="p-2 border border-gray-500 truncate">{{ osData.data.osName }}</div>

        <div class="p-2 bg-gray-200 border border-gray-500">内存使用率</div>
        <div class="p-2 border border-gray-500 truncate">{{ osData.data.osName }}</div>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "OsInf",
  data() {
    return {
      osData: {
        "status": true,
        "code": 200,
        "msg": "成功",
        "data": {
          "system": {
            "firmware": {
              "name": "XMAKB5R0P0E07",
              "version": "XMCC?? - 0",
              "description": "XMAKB5R0P0E07",
              "manufacturer": "INSYDE Corp.",
              "releaseDate": "2020-09-11"
            },
            "baseboard": {
              "version": "MP",
              "manufacturer": "Timi",
              "serialNumber": "MMG5S0000011784WP00AV",
              "model": "unknown"
            },
            "manufacturer": "Timi",
            "serialNumber": "16771/00072313",
            "hardwareUUID": "F21EEF24-1356-40A6-AFE7-2EEA8FB1A729",
            "model": "TM1701"
          },
          "osName": "Windows"
        }
      }
    }
  }
})
</script>

<style scoped>

</style>