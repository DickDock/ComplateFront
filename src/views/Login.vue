<template>
  <div class="relative login-box bg-no-repeat">
    <div class="absolute md:top-[25%] md:right-[10%] loginForm bg-cover bg-center p-32">
      <div class="-mt-32 -ml-4">
        <span class="text-4xl text-white">大数据风险分析平台</span>
        <div class="mt-28 w-60 mx-auto">
          <el-form ref="formRef" :model="formData" label-position="left">
            <el-form-item label="">
              <el-input v-model="formData.userName" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item class="-mt-3">
              <el-input v-model="formData.passWd" placeholder="密码" type="password" show-password></el-input>
            </el-form-item>
            <el-form-item class="-mt-3">
              <el-image :src="captchaUrl" fit="fill" class="w-32 h-10 mb-2" @click="getCaptcha"></el-image>
              <el-input v-model="formData.verifyCode" placeholder="验证码"></el-input>
            </el-form-item>
            <el-form-item class="-mt-3">
              <el-button type="primary" @click="onSubmit" class="">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {userRequest} from "../script/api/users";

export default defineComponent({
  name: "Login",
  data() {
    return {
      formData: {
        userName: '',
        passWd: '',
        verifyCode: ''
      },
      captchaUrl: null
    }
  },
  mounted() {
    this.getCaptcha()
  },
  methods: {
    onSubmit() {
      console.log('登录中！！！')
      console.log(this.formData)
    },
    getCaptcha() {
      userRequest.getCaptcha()
          .then((res) => {
            console.log("验证码数据填充")
            this.captchaUrl = 'data:image/png;base64,' + res.data
          });
    }
  },
})
</script>

<style scoped>
.login-box {
  background-image: url("@/assets/images/loginBg.png");
  height: 95vh;
}

.loginForm {
  background-image: url("@/assets/images/loginBoxBg.png");
}
</style>