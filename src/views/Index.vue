<template>
  <div class="p-12">
    <div class="w-full">
      <div class="grid grid-cols-4 gap-4">
        <div class="p-12 bg-blue-400 h-52 p-4 z-20">
          <div class="bg-red-300 w-full h-full p-4 rounded-3xl z-10">
            <div class="bg-lime-300 w-full h-full rounded-3xl z-0"></div>
          </div>
        </div>
        <div class="p-12 bg-blue-400"></div>
        <div class="p-12 bg-blue-400"></div>
        <div class="p-12 bg-blue-400"></div>
      </div>
    </div>
    <el-card class="box-card mt-4 mx-auto" shadow="hover">
      <div class="text item">
        <el-button type="primary" @click="goAdmin" class="bg-blue-400 font-mono">访问后台页面</el-button>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
// @ts-ignore

export default defineComponent({
  name: "Index",
  setup() {},
  mounted() {},
  methods: {
    goAdmin() {
      this.$router.push('/admin')
    }
  }
});
</script>