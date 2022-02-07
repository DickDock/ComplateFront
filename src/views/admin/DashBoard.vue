<template>
  <div class="mainBox h-screen">
    <div class="titleDiv bg-cover">
      <span class="text-center text-4xl block">主机安全态势预警平台</span>
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
  /*background-image: url("@/assets/images/dashboard/mainBg.svg");*/
}
.titleDiv {
  background-image: url("@/assets/images/dashboard/topBg.svg");
}
</style>