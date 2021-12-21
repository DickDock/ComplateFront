<template>
  <span class="text-4xl text-center block">Admin页面</span>

  <el-card class="box-card mt-4 mx-auto" shadow="hover">
    <div class="text item">
      <el-button type="primary" @click="goIndex">返回首页</el-button>
    </div>
  </el-card>

</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Admin",
  methods: {
    goIndex() {
      this.$router.push('/')
    }
  }
})
</script>

<style scoped>

</style>