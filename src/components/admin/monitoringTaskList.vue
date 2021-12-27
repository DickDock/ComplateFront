<template>
  <div class="p-2 max-h-48 overflow-auto">
    <div class="text-white border p-2">
      <div class="grid grid-cols-5 gap-4">
        <div class="col-span-2">任务名称</div>
        <div class="">任务状态</div>
        <div class="col-span-2">上次运行</div>
      </div>

      <div class="grid grid-cols-5 gap-4" v-for="data in tableData">
        <div class="col-span-2">{{ data.name }}</div>
        <div class="">
          <el-switch v-model="data.status" active-color="#13ce66" inactive-color="#ff4949"/>
        </div>
        <div class="col-span-2">{{ data.lastDate }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "monitoringTaskList",
  data() {
    return {
      tableData: [
        {lastDate: '2016-05-01', name: '测试任务', status: true},
        {lastDate: '2016-05-02', name: '测试任务', status: true},
        {lastDate: '2016-05-03', name: '测试任务', status: true},
        {lastDate: '2016-05-04', name: '测试任务', status: false},
        {lastDate: '2016-05-05', name: '测试任务', status: true},
        {lastDate: '2016-05-06', name: '测试任务', status: false},
        {lastDate: '2016-05-03', name: '测试任务', status: true},
        {lastDate: '2016-05-03', name: '测试任务', status: true},
        {lastDate: '2016-05-03', name: '测试任务', status: false},
        {lastDate: '2016-05-03', name: '测试任务', status: true},
        {lastDate: '2016-05-03', name: '测试任务', status: false},
        {lastDate: '2016-05-03', name: '测试任务', status: true},
        {lastDate: '2016-05-03', name: '测试任务', status: false},
        {lastDate: '2016-05-03', name: '测试任务', status: true},
      ],
    }
  },
}
</script>

<style scoped>
el-table, el-table tr, el-table td, el-table th {
  background-color: transparent;
  border: 0;
}
  /*overflow-x: hidden;*/
/*overflow-y: hidden;*/
::-webkit-scrollbar{width:0;}

</style>