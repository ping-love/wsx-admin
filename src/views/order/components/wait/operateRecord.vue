/**
* 操作记录
*/
<template>
  <div class='operateRecord'>
    <el-dialog
      title="操作记录"
      :visible.sync=" dialogVisible"
      width="70%"
    >
      <el-table :data="tableData" tooltip-effect="dark" border style="width: 100%">
        <el-table-column prop="serialNum" label="序号" min-width="60"></el-table-column>
        <el-table-column prop="changeBeforeStatus" label="变更前状态" :formatter="changeBeforeFormatter" min-width="80"></el-table-column>
        <el-table-column prop="changeAfterStatus" label="变更后状态" :formatter="changeAfterFormatter" min-width="80"></el-table-column>
        <el-table-column prop="changeTime" label="变更时间" :formatter="timeFormatter" min-width="120"></el-table-column>
        <el-table-column prop="operatorIp" label="操作人IP" min-width="100"></el-table-column>
        <el-table-column prop="operatorDesc" label="操作人描述" min-width="260"></el-table-column>
      </el-table>

      <span slot="footer">
        <el-button type="primary" @click="onClose">关 闭</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import tools from '@/utils/tools'
import { getOrderStatus } from '@/filters/transformTwo'
export default {
  name: '',
  data () {
    return {

    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    tableData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {

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
    }
  },
  methods: {
    changeBeforeFormatter (row, column) {
      return getOrderStatus(row.changeBeforeStatus)
    },
    changeAfterFormatter (row, column) {
      return getOrderStatus(row.changeAfterStatus)
    },
    timeFormatter (row, column) {
      return tools.formatDate(row.changeTime * 1000)
    },
    onClose () {
      this.dialogVisible = false
    }
  }
}
</script>

<style lang='less' scoped>
/deep/ .el-dialog__body {
  height: 400px;
  overflow: auto;
}
.el-table {
  /deep/ .cell {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
