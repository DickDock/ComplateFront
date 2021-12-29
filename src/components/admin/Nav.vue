<template>
  <div class="pt-4">
    <div class="grid justify-items-center">
      <el-button circle @click="switchNav" class="">
        <el-icon :class="{'rotate-180':!isCollapse}" ref="switchIcon">
          <caret-right/>
        </el-icon>
      </el-button>
    </div>
    <el-menu
        :default-active="$route.path"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
        :router="true"
    >
      <el-menu-item index="/admin">
        <el-icon>
          <grid/>
        </el-icon>
        <template #title>系统概览</template>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title class="min-w-min">
          <el-icon class="">
            <setting/>
          </el-icon>
          <span>系统设置</span>
        </template>
        <el-menu-item-group>
          <template #title><span>基础设置</span></template>
          <el-menu-item index="/admin/system">系统信息</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="系统状态">
          <el-menu-item index="/admin/system/status">状态监控</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="/admin/user">
        <el-icon>
          <avatar/>
        </el-icon>
        <template #title>用户管理</template>
      </el-menu-item>
      <el-menu-item index="/admin/log">
        <el-icon>
          <setting/>
        </el-icon>
        <template #title>日志中心</template>
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
  Grid,
  Avatar,
  CaretRight,
} from '@element-plus/icons-vue'

export default defineComponent({
  name: "Nav",
  components: {
    Location,
    Document,
    Setting,
    IconMenu,
    Grid,
    Avatar,
    CaretRight,
  },
  setup() {
    const isCollapse = ref(true)
    const switchIcon = ref<null | HTMLElement>(null)
    const handleOpen = (key: any, keyPath: any) => {
      // console.log(key, keyPath)
    }
    const handleClose = (key: any, keyPath: any) => {
      // console.log(key, keyPath)
    }
    return {
      isCollapse,
      handleOpen,
      handleClose,
      switchIcon,
    }
  },
  methods: {
    switchNav() {
      this.isCollapse = !this.isCollapse
    }
  },
  data() {
    return {}
  }
})
</script>

<style scoped>

</style>