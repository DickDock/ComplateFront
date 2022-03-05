<template>
  <div class="">
    <div class="">
      <el-table
          :data="paginationData.records"
          style="width: 100%"
          empty-text="数据加载中"
          :row-class-name="tableRowClassName"
      >
        <el-table-column prop="reqUrl" label="请求Url"/>
        <el-table-column prop="reqMethod" label="请求方式" width="100"/>
        <el-table-column label="请求参数" :show-overflow-tooltip='true'>
          <template #default="scope">
            <span>{{ scope.row.reqArgs }}</span>
          </template>
        </el-table-column>
        <el-table-column label="请求方式名" :show-overflow-tooltip='true'>
          <template #default="scope">
            <span>{{ scope.row.reqMethodName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="请求类" :show-overflow-tooltip='true'>
          <template #default="scope">
            <span>{{ scope.row.reqClass }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间"/>
      </el-table>

      <!--    分页组件-->
      <el-row justify="center">
        <el-pagination
            v-model:currentPage="paginationData.current"
            :page-sizes="[15, 20, 50, 100, 200, 500]"
            :page-size=pageSize
            layout="total, sizes, prev, pager, next, jumper"
            :total=paginationData.total
            :hide-on-single-page="true"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange">
        </el-pagination>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
// @ts-ignore
import {LogRequest} from '@/script/api/logs/index';

interface Log {
  id: number,
  date: string
  name: string
  address: string
  reqUrl: string
  reqMethod: string
  reqArgs: string
  reqMethodName: string
  reqClass: string
  createTime: string
}

export default defineComponent({
  name: "LogList",
  mounted() {
    this.getLogsByPage()
  },
  methods: {
    tableRowClassName(row: Log) {
      if (row['rowIndex'] % 2 == 0) {
        return 'text-green-400'
      } else {
        return 'text-red-400'
      }
    },
    getLogsByPage() {
      LogRequest.getLogByPage(this.paginationData.current, this.pageSize)
          .then((res) => {
            this.paginationData = res.data
            this.loading = !this.loading
          })
          .catch((err) => {
            console.log("err" + err)
          })
    },
    handleSizeChange(val: number) {
      console.log(`${val} items per page`)
      this.pageSize = val
      this.loading = !this.loading
      this.getLogsByPage()
    },
    handleCurrentChange(val: number) {
      console.log(`current page: ${val}`)
      this.loading = !this.loading
      this.getLogsByPage()
    },
  },
  data() {
    return {
      tableData: [],
      pageSize: 15,
      paginationData: {
        records: [],
        current: 1,
        total: 0,
      }
    }
  }
})
</script>

<style scoped>
</style>