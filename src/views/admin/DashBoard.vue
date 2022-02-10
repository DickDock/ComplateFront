<template>
  <div class="mainBox h-screen bg-cover">
    <div class="titleDiv">
      <span class="">主机安全态势预警平台</span>
    </div>
    <div class="grid grid-cols-3 grid-rows-3 gap-4 mt-6">
      <div class="topLeft">
        <div class="">
          <span class="title">主机资源概览</span>
        </div>
      </div>
      <div class="bg-blue-400 p-36 row-span-3"></div>
      <div class="bg-blue-400 p-36"></div>
      <div class="bg-blue-400 p-36 row-span-2"></div>
      <div class="bg-blue-400 p-36"></div>
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
.mainBox {
  background-image: url('@/assets/images/dashboard/mainBg.png');
}

.titleDiv {
  @apply bg-cover;
}

.titleDiv span {
  @apply text-center text-4xl block text-white mt-2;
}

.topLeft {
  @apply row-span-2 p-2 bg-cover;
  background-image: url("@/assets/images/dashboard/topLeft.png");
}
.topLeft span.title {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-2xl block;
}
</style>