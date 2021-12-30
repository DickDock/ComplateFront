<template>
  <div class="">
    <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="delUserStyle"
    >
      <el-table-column prop="name" label="用户名"/>
      <el-table-column prop="date" label="注册日期"/>
      <el-table-column prop="address" label="邮箱"/>
      <el-table-column prop="balance" label="余额"/>
      <el-table-column label="状态">
        <template #default="scope">
          <el-switch v-model="scope.row.status" active-color="#13ce66" inactive-color="#ff4949"/>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button size="mini" type="danger" class="bg-red-400" @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">

export default {
  name: "UserList",
  setup() {
  },
  data() {
    return {
      tableData: [
        {id: 1, date: '2016-05-03', name: 'Tom', address: 'test@qq.com', status: true, balance: 123},
        {id: 1, date: '2016-05-03', name: 'Tom', address: 'test@qq.com', status: true, balance: 123},
        {id: 1, date: '2016-05-03', name: 'Tom', address: 'test@qq.com', status: true, balance: 123},
        {id: 1, date: '2016-05-03', name: 'Tom', address: 'test@qq.com', status: false, balance: 123},
        {id: 1, date: '2016-05-03', name: 'Tom', address: 'test@qq.com', status: true, balance: 123},
        {id: 1, date: '2016-05-03', name: 'Tom', address: 'test@qq.com', status: true, balance: 123},
        {id: 1, date: '2016-05-03', name: 'Tom', address: 'test@qq.com', status: false, balance: 123},
      ],
    }
  },
  methods: {
    handleEdit(index: any, row: any) {
      console.log(index, row)
    },
    handleDelete(index: any, row: any) {
      console.log(index, row)
    },
    delUserStyle({row}: any) {
      if (row.status == false) {
        return 'text-red-400'
      } else {
        return ''
      }
    },
  },
}
</script>

<style scoped>
</style>