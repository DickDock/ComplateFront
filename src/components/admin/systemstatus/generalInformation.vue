<template>
  <div class="mx-auto px-10">
    <div class="mb-2">
      <span class="">概览</span>
    </div>
    <div class="grid grid-cols-4 gap-4">
      <div class="">
        <el-card shadow="hover">
          <p class="text-center text-2xl mb-2">进程总数</p>
          <p class=" text-center">2000</p>
        </el-card>
      </div>
      <div class="">
        <el-card shadow="hover">
          <p class="text-center text-2xl mb-2">开放端口</p>
          <p class=" text-center">2000</p>
        </el-card>
      </div>
      <div class="">
        <el-card shadow="hover">
          <p class="text-center text-2xl mb-2">服务侦测</p>
          <p class=" text-center">2000</p>
        </el-card>
      </div>
      <div class="">
        <el-card shadow="hover">
          <p class="text-center text-2xl mb-2">安全风险</p>
          <p class=" text-center">2000</p>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "generalInformation"
})
</script>

<style scoped>

</style>