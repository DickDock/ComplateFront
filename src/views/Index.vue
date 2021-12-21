<template>
  <div class="p-12">
    <span class="text-4xl text-center block">主页面</span>
    <el-card class="box-card mt-4 mx-auto" shadow="hover">
      <div class="text item">
        <el-button type="primary" @click="goAdmin">访问其他页面</el-button>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Index",
  methods:{
    goAdmin(){
      this.$router.push('/admin')
    }
  }
});
</script>