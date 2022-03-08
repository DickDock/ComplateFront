<template>
  <div class="">
    <span class="block text-4xl text-center">
      系统使用率
    </span>

    <div class="">
      <UsageStatus/>
    </div>

    <div class="">
      <GeneralInformation/>
    </div>

    <div class="">
      <IoStatus/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";


export default defineComponent({
  name: "SystemStatus",
  components: {},
})
</script>

<style scoped>
</style>