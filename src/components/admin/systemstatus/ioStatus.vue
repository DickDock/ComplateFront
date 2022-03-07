<template>
  <div class="mt-6 px-10">
    <div class="grid grid-cols-2 gap-16">
      <div class="">
        <el-tabs v-model="activeName" class="disk-tabs" @tab-click="handleClick">
          <el-tab-pane label="eth1" name="first">eth1</el-tab-pane>
          <el-tab-pane label="eth2" name="second">eth2</el-tab-pane>
          <el-tab-pane label="eth3" name="third">eth3</el-tab-pane>
          <el-tab-pane label="eth4" name="fourth">eth4</el-tab-pane>
        </el-tabs>
      </div>
      <div class="">
        <el-tabs v-model="activeName" class="disk-tabs" @tab-click="handleClick">
          <el-tab-pane label="disk1" name="first">disk1</el-tab-pane>
          <el-tab-pane label="disk2" name="second">disk2</el-tab-pane>
          <el-tab-pane label="disk3" name="third">disk3</el-tab-pane>
          <el-tab-pane label="disk4" name="fourth">disk4</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ioStatus",
  data() {
    return {
      activeName: 'first',
    }
  },
  methods: {
    handleClick(tab: string, event: Event) {
      console.log(tab, event)
    },
  }
})
</script>

<style scoped>

</style>