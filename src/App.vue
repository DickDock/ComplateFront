<template>
  <el-container style="height: 100%;">

    <el-header class="py-2" v-show="$route.meta.showNav">
      <el-row :gutter="18" justify="end">
        <el-col :span="6" class="">
          <el-row justify="end">
            <el-button circle>
              <el-icon :size="20" class="bg-slate-100">
                <Search/>
              </el-icon>
            </el-button>
            <el-button type="" circle>
              <el-icon :size="20" class="text-blue-300">
                <Edit/>
              </el-icon>
            </el-button>
            <el-button type="" circle>
              <el-icon :size="20" class="text-emerald-300">
                <Check/>
              </el-icon>
            </el-button>
            <el-button type="" circle>
              <el-icon :size="20" class="text-violet-300">
                <Message/>
              </el-icon>
            </el-button>
            <el-button type="" circle>
              <el-icon :size="20" class="text-amber-300">
                <Star/>
              </el-icon>
            </el-button>
            <el-button type="" circle>
              <el-icon :size="20" class="text-rose-300">
                <Delete/>
              </el-icon>
            </el-button>
          </el-row>
        </el-col>
      </el-row>
    </el-header>

    <el-main class="h-fit">
      <router-view/>
    </el-main>

    <el-footer class="">
      <el-row class="h-full" justify="center" align="middle">
        <span class="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">LS毕设项目</span>
      </el-row>
    </el-footer>
  </el-container>

</template>

<style scoped>
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
  mounted() {
  },
  data() {
    return {}
  },
})
</script>
