<template>
  <div class="mainBox h-screen bg-cover">
    <div class="titleDiv bg-cover shadow">
      <span class="text-center text-4xl block text-white mt-2">主机安全态势预警平台</span>
    </div>
    <div class="grid grid-cols-3 grid-rows-3 gap-0">
      <div class="bg-blue-400"></div>
      <div class="bg-indigo-400-400"></div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "DashBoard",
  components: {},
  setup() {
  }
})
</script>

<style scoped>
.mainBox{
  background-image: url("@/assets/images/dashboard/mainBg.png");
}
.titleDiv {
  /*background-image: url("@/assets/images/dashboard/topBg.svg");*/
}
</style>