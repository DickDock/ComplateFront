<template>
  <el-config-provider :locale="locale">
    <el-container>

      <el-header class="py-2" v-show="$route.meta.showNav">
        <el-row :gutter="18" justify="end" class="mt-2">
          <el-col :span="6" class="">
            <el-row justify="end">
              <el-button circle>
                <el-icon class="">
                  <Search/>
                </el-icon>
              </el-button>
              <el-button type="primary" circle>
                <el-icon class="text-blue-300">
                  <Edit/>
                </el-icon>
              </el-button>
              <el-button type="success" circle>
                <el-icon class="text-emerald-300">
                  <Check/>
                </el-icon>
              </el-button>
              <el-button type="primary" circle>
                <el-icon class="text-violet-300">
                  <Message/>
                </el-icon>
              </el-button>
              <el-button type="info" circle>
                <el-icon class="text-amber-300">
                  <Star/>
                </el-icon>
              </el-button>
              <el-button type="warning" circle>
                <el-icon class="text-rose-300">
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

      <el-footer class="" v-show="$route.meta.showFooter">
        <el-row class="h-full" justify="center" align="middle">
          <span class="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">LS毕设项目</span>
        </el-row>
      </el-footer>
    </el-container>
  </el-config-provider>
</template>

<style scoped>
</style>

<script lang="ts">
import {defineComponent} from 'vue'
import {ElConfigProvider} from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import {Search, Edit, Check, Message, Star, Delete} from '@element-plus/icons-vue'


export default defineComponent({
  name: 'App',
  components: {
    Search,
    Edit,
    Check,
    Message,
    Star,
    Delete,
    ElConfigProvider,
  },
  setup() {
    return {
      locale: zhCn,
    }
  },
  mounted() {
  },
  data() {
    return {}
  },
})
</script>
