<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="时间" width="110" align="center">
        <template slot-scope="scope">
            <i class="el-icon-time"/>
          <span> {{ scope.row.datetime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="电话" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.tel }}</span>
        </template>
      </el-table-column>
      <el-table-column label="备注" align="center">
        <template slot-scope="scope">
          {{ scope.row.remarks }}
        </template>
      </el-table-column>
      <el-table-column label="用户名" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>
      <el-table-column label="订单数量" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.num }}
        </template>
      </el-table-column>
      <el-table-column class-name="pin-col" label="状态" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.pin | pinFilter">{{ scope.row.pin }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/orders'

export default {
    name: 'OrdersTable',
    filters: {
        pinFilter(pin) {
            const pinMap = {
                未核销: 'danger',
                已核销: 'success'
            }
            return pinMap[pin]
        }
    },
    data() {
        return {
            list: null,
            listLoading: true,
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            this.listLoading = true
            getList(this.listQuery).then(response => {
                this.list = response.data.items
                this.listLoading = false
            })
        }
    }
}
</script>