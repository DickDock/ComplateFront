<template>
  <span class="text-4xl text-center block">Admin页面</span>

  <div class="">
    <DemoCharts1/>
  </div>
  
  <el-card class="box-card mt-4 mx-auto" shadow="hover">
    <div class="text item">
      <el-button type="primary" @click="goIndex" class="bg-blue-400">返回首页</el-button>
    </div>
  </el-card>

</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Admin",
  components: {},
  methods: {
    goIndex() {
      this.$router.push('/')
    }
  }
})
</script>

<style scoped>
</style>