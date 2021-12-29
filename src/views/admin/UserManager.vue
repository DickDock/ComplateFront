<template>
  <div class="px-4">
    <div class="grid grid-cols-4 gap-4">
      <div class="p-24 bg-slate-300 rounded-3xl"></div>
      <div class="p-24 bg-slate-300 rounded-3xl"></div>
      <div class="p-24 bg-slate-300 rounded-3xl"></div>
      <div class="p-24 bg-slate-300 rounded-3xl"></div>
    </div>
    <div class="mt-2">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserManager"
}
</script>

<style scoped>

</style>