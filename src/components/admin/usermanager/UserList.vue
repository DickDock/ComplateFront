<template>
  <div class="">
    <el-table
        :data="tableData.filter((data) =>!search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
        :row-class-name="delUserStyle"
    >
      <el-table-column prop="name" label="用户名"/>
      <el-table-column prop="date" label="注册日期" sortable/>
      <el-table-column prop="address" label="邮箱"/>
      <el-table-column prop="balance" label="余额" sortable/>
      <el-table-column label="状态">
        <template #default="scope">
          <el-switch v-model="scope.row.status" active-color="#13ce66" inactive-color="#ff4949"/>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #header>
          <el-input v-model="search" size="mini" placeholder="搜索用户名"/>
        </template>
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
// @ts-ignore
import {getUserList} from "@/script/api/users";

export default {
  name: "UserList",
  mounted() {
    this.getAllUsers()
  },
  data() {
    return {
      tableData: [
        {
          id: 1,
          date: '2016-05-03',
          name: 'Tom',
          address: 'test@qq.com',
          status: true,
          balance: Math.floor((Math.random() * 1000) + 1)
        },
        {
          id: 2,
          date: '2016-05-04',
          name: 'Tom',
          address: 'test@qq.com',
          status: true,
          balance: Math.floor((Math.random() * 1000) + 1)
        },
        {
          id: 3,
          date: '2016-05-05',
          name: 'Tom',
          address: 'test@qq.com',
          status: true,
          balance: Math.floor((Math.random() * 1000) + 1)
        },
        {
          id: 4,
          date: '2016-05-06',
          name: 'Tom',
          address: 'test@qq.com',
          status: false,
          balance: Math.floor((Math.random() * 1000) + 1)
        },
        {
          id: 5,
          date: '2016-06-03',
          name: 'Tom',
          address: 'test@qq.com',
          status: true,
          balance: Math.floor((Math.random() * 1000) + 1)
        },
        {
          id: 6,
          date: '2016-01-03',
          name: 'Tom',
          address: 'test@qq.com',
          status: true,
          balance: Math.floor((Math.random() * 1000) + 1)
        },
        {
          id: 7,
          date: '2016-02-03',
          name: 'Tom',
          address: 'test@qq.com',
          status: false,
          balance: Math.floor((Math.random() * 1000) + 1)
        },
      ],
      search: '',
    }
  },
  methods: {
    handleEdit(index: any, row: any) {
      console.log(index, row)
    },
    handleDelete(index: any, row: any) {
      console.log(index, row)
      console.log('ID => ' + row.id + ' Index => ' + index)
    },
    delUserStyle({row}: any) {
      if (row.status == false) {
        return 'text-red-400'
      } else {
        return ''
      }
    },

    getAllUsers() {
      getUserList().then(res => {
        console.log(res.data);
      }).catch(err => {
        console.log(err)
      })
    }
  },
}
</script>

<style scoped>
</style>