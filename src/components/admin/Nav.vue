<template>
  <div class="pt-4">
    <!--    <div class="text-xl grid grid-flow-row auto-rows-auto justify-items-center py-2" v-for="nav in navList">-->
    <!--      <router-link :to="'/admin'+nav.path" class="text-neutral-600">{{ nav.title }}</router-link>-->
    <!--    </div>-->

    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">开</el-radio-button>
      <el-radio-button :label="true">收</el-radio-button>
    </el-radio-group>
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <span>导航栏一</span>
        </template>
        <el-menu-item-group>
          <template #title><span>组一</span></template>
          <el-menu-item index="1-1">项目一</el-menu-item>
          <el-menu-item index="1-2">项目二</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="第二组">
          <el-menu-item index="1-3">项目三</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>项目四</span></template>
          <el-menu-item index="1-4-1">项目一</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon>
          <icon-menu/>
        </el-icon>
        <template #title>导航栏二</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon>
          <document/>
        </el-icon>
        <template #title>导航栏三</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting/>
        </el-icon>
        <template #title>导航栏四</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'

export default defineComponent({
  name: "Nav",
  components: {
    Location,
    Document,
    Setting,
    IconMenu,
  },
  setup() {
    const isCollapse = ref(true)
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }
    return {
      isCollapse,
      handleOpen,
      handleClose,
    }
  },
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