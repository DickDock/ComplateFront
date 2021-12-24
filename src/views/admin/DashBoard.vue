<template>
  <div class="bg-fixed p-2" id="mainBox">
    <div class="h-full w-full bg-white opacity-30 rounded-3xl">
      <span class="block text-4xl text-center">系统概览页面</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "DashBoard",
  setup() {
  }
}
</script>

<style scoped>
#mainBox {
  background-image: url('../../assets/images/dashbg.jpg');
  width: 100%;
  height: 100%;
}
</style>