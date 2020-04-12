/**
* 操作日志
*/
<template>
  <div class='operateLog'>
    <el-dialog
      title="日志"
      :visible.sync="dialogVisible"
      width="50%"
      top="0"
    >

      <el-table
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        border
        height="100%"
        @sort-change="handleSortChange"
      >
        <el-table-column prop="operator" label="操作人"></el-table-column>
        <el-table-column prop="operateTime" label="操作时间" sortable="custom" :formatter="timeFormatter"></el-table-column>
        <el-table-column prop="operateBeforeMoney" label="操作前退款金额"></el-table-column>
        <el-table-column prop="operateAfterMoney" label="操作后退款金额"></el-table-column>
      </el-table>
      <pagination :currentPage.sync="pagination.currentPage" :total="total" @currentChange="handleCurrentChange" />

      <span slot="footer">
        <el-button type="primary" size="medium" @click="onClose">关 闭</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import pagination from '@/components/pagination'
import tools from '@/utils/tools'
export default {
  name: '',
  data () {
    return {
      pagination: {
        currentPage: 1,
        total: 0
      }
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    currentData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {
    pagination
  },
  created () {

  },
  mounted () {

  },
  computed: {
    dialogVisible: {
      get () {
        return this.visible
      },
      set (val) {
        this.$emit('update:visible', val)
      }
    },
    tableData () {
      return this.currentData.list
    },
    total () {
      return this.currentData.total
    }
  },
  methods: {
    timeFormatter (row, column) {
      return tools.formatDate(row.operateTime)
    },
    handleCurrentChange (data) {
      console.log('-next-page-', data)
    },
    handleSortChange ({ column, prop, order }) {
      console.log(column, prop, order)
      order && this.getSortData(order)
    },
    onClose () {
      this.dialogVisible = false
    },
    getSortData (data) {
      data === 'ascending' ? console.log('向上排序') : console.log('向下排序')
    }
  }
}
</script>

<style lang='less' scoped>
@import '~@/views/order/styles/dialogBox.less';
</style>
