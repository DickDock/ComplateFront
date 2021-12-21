<template>
  <div class="text-4xl text-center mb-2">毕设工程</div>
  <el-container>

    <el-header class="bg-slate-300 p-12"></el-header>

    <el-main>
      <router-view/>
    </el-main>

    <el-footer class="bg-slate-300 p-12"></el-footer>
  </el-container>

</template>

<style scoped>

</style>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'App',
  components: {}
})
</script>