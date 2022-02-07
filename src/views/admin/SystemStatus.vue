<template>
  <div class="">
    <span class="block text-4xl text-center">
      系统使用率查看页面
    </span>

    <div class="">
      <usage-status/>
    </div>

    <div class="">
      <general-information/>
    </div>

    <div class="">
      <io-status/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";


export default defineComponent({
  name: "SystemStatus",
})
</script>

<style scoped>
</style>