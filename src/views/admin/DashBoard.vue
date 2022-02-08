<template>
  <div class="mainBox h-screen bg-cover">
    <div class="titleDiv">
      <span class="">主机安全态势预警平台</span>
    </div>
    <div class="grid grid-cols-3 grid-rows-3 gap-4 mt-2">
      <div class="bg-blue-400 p-36" v-for="n in 9"></div>
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
  background-image: url('@/assets/images/dashboard/mainBg.png');
}
.titleDiv {
  @apply bg-cover
}
.titleDiv span {
  @apply text-center text-4xl block text-white mt-2
}
</style>