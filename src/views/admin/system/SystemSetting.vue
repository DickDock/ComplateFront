<template>
  <div class="w-full h-full">
    <div class="grid grid-cols-2 gap-4 w-full h-full">
      <div class="w-full h-full">
        <p class="text-2xl mb-2">CPU信息</p>
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
        </el-card>
      </div>
      <div class="w-full h-full">
        <p class="text-2xl mb-2">内存信息</p>
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SystemSetting"
}
</script>

<style scoped>
</style>