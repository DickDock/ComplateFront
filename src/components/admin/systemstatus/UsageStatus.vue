<template>
  <div class="grid grid-cols-4 gap-3 w-4/5 mx-auto mt-4">
    <div class="">
      <el-progress type="dashboard" :percentage="80" :width="250" :stroke-width="24">
        <template #default="{ percentage }">
          <div class=""><span class="percentage-value">{{ percentage }}%</span></div>
          <div class="mt-3"><span class="percentage-label">占用正常</span></div>
        </template>
      </el-progress>
    </div>
    <div class="">
      <el-progress type="dashboard" :percentage="25" :width="250" :stroke-width="24">
        <template #default="{ percentage }">
          <div class=""><span class="percentage-value">{{ percentage }}%</span></div>
          <div class="mt-3"><span class="percentage-label">占用正常</span></div>
        </template>
      </el-progress>
    </div>
    <div class="">
      <el-progress type="dashboard" :percentage="50" :width="250" :stroke-width="24">
        <template #default="{ percentage }">
          <div class=""><span class="percentage-value">{{ percentage }}%</span></div>
          <div class="mt-3"><span class="percentage-label">占用正常</span></div>
        </template>
      </el-progress>
    </div>
    <div class="">
      <el-progress type="dashboard" :percentage="100" :width="250" :stroke-width="24">
        <template #default="{ percentage }">
          <div class=""><span class="percentage-value">{{ percentage }}%</span></div>
          <div class="mt-3"><span class="percentage-label">占用正常</span></div>
        </template>
      </el-progress>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({

  name: "usageStatus"
})
</script>

<style scoped>

</style>