<template>
  <div class="">
    <el-table
        :data="paginationData.records"
        style="width: 100%"
        empty-text="数据加载中"
        :row-class-name="tableRowClassName">

      <el-table-column label="漏洞ID" width="160">
        <template #default="scope">
          <span>{{ scope.row.cnvdId }}</span>
        </template>
      </el-table-column>

      <el-table-column label="漏洞名称" width="200">
        <template #default="scope">
          <el-popover placement="top" width="auto" trigger="click">
            <template #default>
              <span>{{ scope.row.vulName }}</span>
            </template>
            <template #reference>
              <p class="truncate">{{ scope.row.vulName }}</p>
            </template>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="漏洞来源" width="100">
        <template #default="scope">
          <el-tag class="" type="info">{{ scope.row.fr0m }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="漏洞类型" width="150">
        <template #default="scope">
          <el-tag type="warning">{{ scope.row.vulType }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="漏洞等级" width="100">
        <template #default="scope">
          <el-tag class="ml-2" type="danger" effect="dark" v-if="scope.row.vulLevel === '3'">{{
              scope.row.vulRank.slice(0, 1)
            }}
          </el-tag>
          <el-tag class="ml-2" type="warning" effect="dark" v-else-if="scope.row.vulLevel === '2'">{{
              scope.row.vulRank.slice(0, 1)
            }}
          </el-tag>
          <el-tag class="ml-2" type="primary" effect="dark" v-else-if="scope.row.vulLevel === '1'">{{
              scope.row.vulRank.slice(0, 1)
            }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column label="漏洞详情" width="200">
        <template #default="scope">
          <el-popover placement="top" :width="300" trigger="click">
            <template #default>
              <span>{{ scope.row.vulDetail }}</span>
            </template>
            <template #reference>
              <p class="truncate">{{ scope.row.vulDetail }}</p>
            </template>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="解决方案" width="200">
        <template #default="scope">
          <el-popover placement="top" :width="300" trigger="click">
            <template #default>
              <span>{{ scope.row.vulSolution }}</span>
            </template>
            <template #reference>
              <p class="truncate">{{ scope.row.vulSolution }}</p>
            </template>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="补丁信息" width="200">
        <template #default="scope">
          <el-popover placement="top" :width="300" trigger="click">
            <template #default>
              <span>{{ scope.row.officialPatchInfo }}</span>
            </template>
            <template #reference>
              <p class="truncate">{{ scope.row.officialPatchInfo }}</p>
            </template>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="验证信息" width="200">
        <template #default="scope">
          <el-popover placement="top" width="300" trigger="click">
            <template #default>
              <span>{{ scope.row.verifyMessage }}</span>
            </template>
            <template #reference>
              <p class="truncate">{{ scope.row.verifyMessage }}</p>
            </template>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="漏洞附件信息" width="200">
        <template #default="scope">
          <el-popover placement="top" width="300" trigger="click">
            <template #default>
              <span>{{ scope.row.vulAttachment }}</span>
            </template>
            <template #reference>
              <p class="truncate">{{ scope.row.vulAttachment }}</p>
            </template>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="漏洞操作">
        <template #default="scope">
          <el-button size="small" type="primary" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
        </template>
      </el-table-column>
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
</template>

<script lang="ts">
import {defineComponent} from 'vue'
// @ts-ignore
import {VulRequest} from '@/script/api/vuls/index';

interface Vul {
  id: number,
  cveId: string,
  cnvdId: string,
  vulName: string,
  vulRank: string,
  vulLevel: string,
  vulRange: string,
  vulDetail: string,
  vulType: string,
  refUrl: string,
  vulSolution: string,
  officialPatchInfo: string,
  verifyMessage: string,
  vulAttachment: string,
  fr0m: string,
}

export default defineComponent({
  name: "VulList",
  mounted() {
    this.getVulsByPage()
  },
  methods: {
    getVulsByPage() {
      VulRequest.getVulByPage(this.paginationData.current, this.pageSize)
          .then((res) => {
            // console.log(res)
            this.paginationData = res.data
            this.loading = !this.loading
          })
          .catch((err) => {
            console.log("err" + err)
          })
    },
    tableRowClassName(row: Vul) {
      if (row['rowIndex'] % 2 == 0) {
        return 'warning-row'
      } else {
        return 'success-row'
      }
    },
    handleEdit(index: any, row: any) {
      this.editDialogVisible = true
      this.editTableData = row
    },
    handleSizeChange(val: number) {
      console.log(`${val} items per page`)
      this.pageSize = val
      this.loading = !this.loading
      this.getVulsByPage()
    },
    handleCurrentChange(val: number) {
      console.log(`current page: ${val}`)
      this.loading = !this.loading
      this.getVulsByPage()
    },
  },
  data() {
    return {
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