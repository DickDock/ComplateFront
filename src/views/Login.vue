<template>
  <div class="relative login-box bg-no-repeat">
    <div class="absolute md:top-[25%] md:right-[10%] loginForm bg-cover bg-center p-32">
      <div class="md:-mt-32 md:-ml-4">
        <span class="md:text-4xl text-white">大数据风险分析平台</span>
        <div class="mt-28 w-60 mx-auto">
          <el-form ref="formRef" :model="formData" label-position="left">
            <el-form-item label="">
              <el-input v-model="formData.userName" placeholder="用户名 / 邮箱"></el-input>
            </el-form-item>
            <el-form-item class="-mt-3">
              <el-input v-model="formData.passWd" placeholder="密码" type="password"></el-input>
            </el-form-item>
            <el-form-item class="-mt-3">
              <el-image :src="captchaData.captcha" fit="fill" class="w-36 h-10 mb-2" @click="getCaptcha"></el-image>
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
        verifyCode: '',
      },
      captchaData: {
        'captcha': null,
        'captchaId': null,
      }
    }
  },
  mounted() {
    this.getCaptcha()
  },
  methods: {
    onSubmit() {
      userRequest.login(this.formData).then((res) => {
        if (res.data == true) {
          // @ts-ignore
          ElMessage.success("登录成功")
          this.$router.push('/admin')
        } else {
          // @ts-ignore
          ElMessage.warning(res.msg)
        }
      })
    },
    getCaptcha() {
      userRequest.getCaptcha()
          .then((res) => {
            console.log(res)
            this.captchaData.captcha = 'data:image/png;base64,' + res.data.captcha
            this.captchaData.captchaId = res.data.captchaId
            this.formData.captchaID = res.data.captchaId
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