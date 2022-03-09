<template>
  <div class="mainBox bg-cover">
    <div class="titleDiv">
      <span class="">大数据风险分析平台</span>
    </div>

    <div class="grid grid-cols-4 gap-0 mt-6">

      <div class="">
        <div class="">
          <span class="">主机资源概览</span>
        </div>
        <div class="grid grid-cols-1 mt-4">
          <TopLeftMemory/>
        </div>
      </div>

      <div class="">
        <div
            class="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
          <svg class="w-6 h-6 text-violet-500" fill="none" stroke-linecap="round" stroke-linejoin="round"
               stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      <div class="">
        <SvgIcon name="svg-title"/>
      </div>

      <div class="topLeft">
        <div class="">
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

.title {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-2xl block;
}
</style>