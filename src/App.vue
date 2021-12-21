<template>
  <el-container>

    <el-header class="py-2">
      <el-row :gutter="18" justify="end">
        <el-col :span="6" class="">
          <el-row justify="end">
            <el-button :size="20" circle>
              <el-icon :size="20" class="bg-slate-100">
                <Search/>
              </el-icon>
            </el-button>
            <el-button type="primary" :icon="Edit" circle>
              <el-icon color="#409EFC" :size="20">
                <Edit/>
              </el-icon>
            </el-button>
            <el-button type="success" :icon="Check" circle>
              <el-icon color="#409EFC" :size="20">
                <Check/>
              </el-icon>
            </el-button>
            <el-button type="info" :icon="Message" circle>
              <el-icon color="#409EFC" :size="20">
                <Message/>
              </el-icon>
            </el-button>
            <el-button type="warning" :icon="Star" circle>
              <el-icon color="#409EFC" :size="20">
                <Star/>
              </el-icon>
            </el-button>
            <el-button type="danger" :icon="Delete" circle>
              <el-icon color="#409EFC" :size="20">
                <Delete/>
              </el-icon>
            </el-button>
          </el-row>
        </el-col>
      </el-row>
    </el-header>

    <el-main>
      <router-view/>
    </el-main>

    <el-footer class="">
      <el-row class="h-full" justify="center" align="middle">
        <span class="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">LS毕设项目</span>
      </el-row>
    </el-footer>
  </el-container>

</template>

<style>

</style>

<script lang="ts">
import {defineComponent} from 'vue'
import {Search, Edit, Check, Message, Star, Delete} from '@element-plus/icons-vue'


export default defineComponent({
  name: 'App',
  components: {
    Search,
    Edit,
    Check,
    Message,
    Star,
    Delete
  },
  data() {
    return {
    }
  },
})
</script>