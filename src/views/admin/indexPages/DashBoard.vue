<template>
  <div class="p-2">
    <div class="">
      <span class="text-center text-4xl block mt-2">大数据风险分析平台</span>
    </div>

    <div class="grid grid-cols-4 gap-0 mt-6">

      <div class="ring-1 ring-gray-200 ring-offset-2 ring-offset-purple-100 shadow-inner">
        <div class="">
          <span class="title inline-block align-middle">主机资源概览</span>
        </div>
        <div class="grid grid-cols-1 mt-4">
          <TopLeftMemory/>
        </div>
      </div>

      <div class=""></div>

      <div class=""></div>

      <div class="topLeft">
        <div class="title">
          <span class="">漏洞等级趋势</span>
        </div>
        <div class="grid grid-cols-1 mt-4">
          <LineChart/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import SvgIcon from "@/icons/SvgIcon.vue";

export default defineComponent({
  name: "DashBoard",
  components: {SvgIcon},
  setup() {
  },
  data() {
    return {
    }
  }
})
</script>

<style scoped>
.title {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-2xl block;
}
</style>