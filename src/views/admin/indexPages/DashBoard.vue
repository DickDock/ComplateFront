<template>
  <div class="mainBox bg-cover">
    <div class="titleDiv">
      <span class="">大数据风险分析平台</span>
    </div>
    <div class="grid grid-cols-3 grid-row-3 gap-2 mt-6">
      <div class="topLeft">
        <div class="">
          <span class="title">主机资源概览</span>
        </div>
        <div class="grid grid-cols-1 mt-4">
          <TopLeftMemory/>
        </div>
      </div>

      <div class="topLeft">
        <div class="">
          <span class="title">漏洞等级趋势</span>
        </div>
        <div class="grid grid-cols-1 mt-4">
          <LineChart/>
        </div>
      </div>

      <div class="">
      </div>
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
  /*background-image: url('@/assets/images/dashboard/mainBg.png');*/
}

.titleDiv span {
  @apply text-center text-4xl block mt-2;
}

.topLeft {
  @apply row-span-2 p-2;
  /*background-image: url("@/assets/images/dashboard/topLeft.png");*/
}

.topLeft span.title {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-2xl block;
}
</style>