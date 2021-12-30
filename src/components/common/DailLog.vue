<template>
  <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="30%"
      :before-close="handleClose"
  >
    <span>这是一条信息</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import {ElMessageBox} from 'element-plus'

export default defineComponent({
  name: "DailLog",
  setup() {
    const dialogVisible = ref(false)

    const handleClose = (done: () => void) => {
      ElMessageBox.confirm('确实要关闭此对话框吗?')
          .then(() => {
            done()
          })
          .catch(() => {
            // catch error
          })
    }

    return {
      dialogVisible,
      handleClose,
    }
  }
})
</script>

<style scoped>

</style>