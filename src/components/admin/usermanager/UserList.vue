<template>
  <div class="">
    <el-table
        :data="paginationData.records.filter((data) =>!search || data['userName'].toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
        v-loading="loading"
        :row-class-name="delUserStyle">
      <el-table-column type="selection" width="55"/>
      <el-table-column prop="userName" label="用户名"/>
      <el-table-column prop="createTime" label="注册日期" sortable/>
      <el-table-column label="状态" width="70">
        <template #default="scope">
          <el-switch v-model="scope.row.status"
                     @change="switchChange(scope.row)"
                     active-color="#13ce66"
                     inactive-color="#ff4949"/>
        </template>
      </el-table-column>
      <el-table-column prop="email" label="邮箱"/>
      <el-table-column prop="phone" label="手机"/>
      <el-table-column prop="qq" label="QQ"/>
      <el-table-column label="操作">
        <template #header>
          <el-input v-model="search" size="small" placeholder="搜索用户名"/>
        </template>
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-popconfirm
              confirm-button-text="确定"
              confirmButtonType="text"
              cancel-button-text="取消"
              title="确认删除该用户吗"
              @confirm="handleDelete(scope.$index, scope.row)">
            <template #reference>
              <el-button size="small" type="danger" class="bg-red-400">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <!--    编辑用户弹框-->
    <el-dialog v-model="editDialogVisible" title="更新用户信息">

      <el-form ref="editDataForm" :model="editTableData" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="editTableData['userName']"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="editTableData['email']"></el-input>
        </el-form-item>
        <el-form-item label="手机">
          <el-input v-model="editTableData['phone']"></el-input>
        </el-form-item>
        <el-form-item label="QQ">
          <el-input v-model="editTableData['qq']"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="editTableData['passWord']" placeholder="为空不修改密码" type="password"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch v-model="editTableData['status']" inline-prompt active-text="启" inactive-text="封"></el-switch>
        </el-form-item>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="updateUserHandle(false)">取消</el-button>
          <el-button @click="updateUserHandle(true)">确定</el-button>
        </span>
      </template>

    </el-dialog>

    <!--    分页组件-->
    <el-row justify="center">
      <el-pagination
          v-model:currentPage="paginationData.current"
          :page-sizes="[10, 20, 50, 100, 200, 500]"
          :page-size=pageSize
          layout="total, sizes, prev, pager, next, jumper"
          :total=paginationData.total
          :hide-on-single-page="true"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange">
      </el-pagination>
    </el-row>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
// @ts-ignore
import {userRequest} from '@/script/api/users/index';

interface User {
  id: number
  userName: string
  registrationDate: string
  status: boolean
  email: string
  phone: string
  qq: string
  passWord: string
}

export default defineComponent({
  name: "UserList",
  mounted() {
    this.getAllUsers()
  },
  data() {
    return {
      tableData: [],
      loading: true,
      editTableData: [],
      search: '',
      editDialogVisible: false,
      pageSize: 10,
      paginationData: {
        records: [],
        current: 1,
        total: 0,
      }
    }
  },
  methods: {
    handleEdit(index: any, row: any) {
      this.editDialogVisible = true
      this.editTableData = row
    },
    handleDelete(index: any, row: any) {
      userRequest.delUser(row)
          .then((res) => {
            if (res.status == true) {
              this.tableData.splice(index, 1)
              // @ts-ignore
              ElMessage.success('用户删除成功')
            } else {
              // @ts-ignore
              ElMessage.error('用户删除失败')
            }
          })
          .catch((err) => {
            // @ts-ignore
            ElMessage.error(err)
          })
    },
    delUserStyle({row}: any) {
      if (row.status == false) {
        return 'text-red-400'
      } else {
        return ''
      }
    },
    getAllUsers() {
      userRequest.getUserByPage(this.paginationData.current, this.pageSize)
          .then((res) => {
            console.log(res.data)
            this.paginationData = res.data
            this.loading = !this.loading
          })
          .catch((err) => {
            console.log("err" + err)
          })
    },
    updateUserHandle(confirm: boolean) {
      this.editDialogVisible = false
      console.log(this.editTableData)
      if (confirm) {
        userRequest.updateUser(this.editTableData)
            .then((res) => {
              if (res.status == true) {
                // @ts-ignore
                ElMessage.success('用户信息修改成功')
              } else {
                // @ts-ignore
                ElMessage.error('用户信息修改失败')
              }
            })
            .catch((err) => {
              // @ts-ignore
              ElMessage.error(err)
            })
      } else {
        // @ts-ignore
        ElMessage.info('取消修改')
      }
    },
    switchChange(data) {
      userRequest.updateUser(data)
          .then((res) => {
            if (res.status == true) {
              // @ts-ignore
              ElMessage.success('修改成功')
            } else {
              // @ts-ignore
              ElMessage.error('修改失败')
              location.reload()
            }
          })
          .catch((err) => {
            // @ts-ignore
            ElMessage.error('修改失败')
            location.reload()
          })
    },
    handleSizeChange(val: number) {
      console.log(`${val} items per page`)
      this.pageSize = val
      this.loading = !this.loading
      this.getAllUsers()
    },
    handleCurrentChange(val: number) {
      console.log(`current page: ${val}`)
      this.loading = !this.loading
      this.getAllUsers()
    },
  },
})
</script>

<style>
</style>