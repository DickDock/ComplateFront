<template>
  <div class="bg-fixed" id="mainBox">
    <div class="h-full w-full p-2">
      <span class="block text-4xl text-center text-white">系统概览</span>
      <div class="grid grid-cols-3 gap-4 mt-2">
        <div class="p-4 bg-white rounded-3xl opacity-20">
          <div class="">
            <span class="text-xl text-fuchsia-800">监控任务统计</span>
          </div>
          <div class="">
            <monitoring-task-list/>
          </div>
        </div>
        <div class="p-24 bg-white h-56 rounded-3xl opacity-20"></div>
        <div class="p-24 bg-white h-56 rounded-3xl opacity-20"></div>
      </div>
    </div>
  </div>
</template>

<script>
import monitoringTaskList from "../../components/admin/monitoringTaskList.vue";
// import MonitoringTaskList from "../../components/admin/monitoringTaskList";

export default {
  name: "DashBoard",
  components: {monitoringTaskList},
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