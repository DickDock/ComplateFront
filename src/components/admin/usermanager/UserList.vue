<template>
  <div class="">
    <el-table
        :data="tableData.filter((data) =>!search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
        :row-class-name="delUserStyle"
    >
      <el-table-column prop="userName" label="用户名"/>
      <el-table-column prop="registrationDate" label="注册日期" sortable/>
      <el-table-column label="状态">
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
          <el-input v-model="search" size="mini" placeholder="搜索用户名"/>
        </template>
        <template #default="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-popconfirm
              confirm-button-text="确定"
              confirmButtonType="text"
              cancel-button-text="取消"
              title="确认删除该用户吗"
              @confirm="handleDelete(scope.$index, scope.row)">
            <template #reference>
              <el-button size="mini" type="danger" class="bg-red-400">删除</el-button>
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
        <el-form-item label="注册日期">
          <el-input v-model="editTableData['registrationDate']" disabled></el-input>
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

  </div>
</template>

<script lang="ts">
// @ts-ignore
import {userRequest} from "@/script/api/users/index";
import {ElMessage} from 'element-plus'


export default {
  name: "UserList",
  mounted() {
    this.getAllUsers()
  },
  data() {
    return {
      tableData: [],
      editTableData: [],
      search: '',
      editDialogVisible: false,
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
              ElMessage.success('用户删除成功')
            } else {
              ElMessage.error('用户删除失败')
            }
          })
          .catch((err) => {
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
      userRequest.getUserList().then(res => {
        this.tableData = res.data
      }).catch((err) => {
        console.log("err" + err)
      })
    },
    updateUserHandle(confirm: boolean) {
      this.editDialogVisible = false
      if (confirm) {
        userRequest.updateUser(this.editTableData)
            .then((res) => {
              if (res.status == true) {
                ElMessage.success('用户信息修改成功')
              } else {
                ElMessage.error('用户信息修改失败')
              }
            })
            .catch((err) => {
              ElMessage.error(err)
            })
      } else {
        ElMessage.info('取消修改')
      }
    },
    switchChange(data) {
      userRequest.updateUser(data)
          .then((res) => {
            if (res.status == true) {
              ElMessage.success('修改成功')
            } else {
              ElMessage.error('修改失败')
              location.reload()
            }
          })
          .catch((err) => {
            ElMessage.error('修改失败')
            location.reload()
          })
    }
  },
}
</script>

<style scoped>
</style>