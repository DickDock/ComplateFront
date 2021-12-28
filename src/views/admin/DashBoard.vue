<template>
  <div class="bg-fixed" id="mainBox">
    <div class="h-full w-full p-2">
      <span class="block text-4xl text-center text-white">系统概览</span>
      <div class="grid grid-cols-3 gap-4 mt-2">
        <div class="p-4 bg-gray-50 rounded-3xl bg-opacity-20">
          <div class="bg-transparent">
            <div class="">
              <span class="text-xl text-white">监控任务统计 >></span>
            </div>
            <div class="">
              <monitoring-task-list/>
            </div>
          </div>
        </div>
        <div class="p-4 bg-gray-50 rounded-3xl bg-opacity-20">
          <div class="bg-transparent">
            <div class="">
              <span class="text-xl text-white">历史告警数 >></span>
            </div>

            <div class="">
              <HistoricalAlarm/>
            </div>
          </div>
        </div>
        <div class="p-4 bg-gray-50 rounded-3xl bg-opacity-20">
          <div class="bg-transparent">
            <div class="">
              <span class="text-xl text-white">漏洞级别分类 >></span>
            </div>
            <div class="">
              <VulnInfo/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import monitoringTaskList from "../../components/admin/monitoringTaskList.vue";
import HistoricalAlarm from "../../components/admin/HistoricalAlarm.vue";
import VulnInfo from "../../components/admin/VulnInfo.vue";

export default {
  name: "DashBoard",
  components: {VulnInfo, HistoricalAlarm, monitoringTaskList},
  setup() {
  }
}
</script>

<style scoped>
#mainBox {
  /*background-image: url('../../assets/images/dashbg.jpg');*/
  width: 100%;
  height: 100%;
  background-color: #21D4FD;
  background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
}
</style>