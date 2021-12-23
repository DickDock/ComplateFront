<template>
  <div class="pt-4">
    <div class="text-xl grid grid-flow-row auto-rows-auto justify-items-center py-2" v-for="nav in navList">
      <router-link :to="'/admin'+nav.path" class="text-neutral-600">{{ nav.title }}</router-link>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Nav",
  data() {
    return {
      navList: [
        {title: '系统概览', path: '/'},
        {title: '系统管理', path: '/system'},
        {title: '用户管理', path: '/user'},
        {title: '日志管理', path: '/log'},
      ]
    }
  }
})
</script>

<style scoped>

</style>