<template>
  <div class="">
    <div class="grid grid-cols-2 gap-4 w-full h-full">
      <div class="w-full h-full">
        <CpuInf/>
      </div>

      <div class="w-full h-full">
        <MemoryInf/>
      </div>
    </div>

    <div class="mt-2">
      <OsInf/>
    </div>

    <div class="mt-2">
      <DiskInf/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "SystemSetting",
  components: {}
})
</script>

<style scoped>
</style>