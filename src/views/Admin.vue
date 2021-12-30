<template>
  <div class="h-full">
    <div class="h-full flex flex-col">
      <div class="bg-green-200 h-8 flex-none" v-if="showTips">
        <span class="inline-block mx-auto">功能待定</span>
      </div>

      <div class="grow">

        <div class="flex h-full">
          <div class="flex-none h-full">
            <Nav/>
          </div>

          <div class="grow">
            <router-view/>
          </div>
        </div>

      </div>

      <!--      <div class="">-->
      <!--        <el-card class="box-card mt-4 mx-auto" shadow="hover">-->
      <!--          <div class="text item">-->
      <!--            <el-button type="primary" @click="goIndex" class="bg-blue-400">返回首页</el-button>-->
      <!--          </div>-->
      <!--        </el-card>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
// import Nav from '../components/admin/Nav.vue'


export default defineComponent({
  name: "Admin",
  components: {},
  data() {
    return {
      showTips: false
    }
  },
  mounted() {
  },
  methods: {
    goIndex() {
      this.$router.push('/')
    }
  }
})
</script>

<style scoped>
</style>