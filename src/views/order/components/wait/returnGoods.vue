/**
* 售后退款退货订单列表
*/
<template>
  <div class='returnGoods'>
    <searchComp :formOptions="formOptions" @onSearch="handleSearch" />

    <div class="listWrap">
      <el-table :data="tableData" tooltip-effect="dark" style="width: 100%">
        <el-table-column prop="orderNumber" label="订单编号" min-width="190"></el-table-column>
        <el-table-column label="实付款" min-width="80">
          <template slot-scope="scope">
            <p>￥{{ scope.row.actualPrice }}</p>
            <p>￥{{ scope.row.refundAmount }}</p>
            <p>￥{{ scope.row.differenceValue }}</p>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="refundAmount" label="退款金额" min-width="80"></el-table-column> -->
        <!-- <el-table-column prop="differenceValue" label="差值" min-width="80"></el-table-column> -->
        <el-table-column prop="reason" label="退款退货原因" min-width="150"></el-table-column>
        <el-table-column prop="explain" label="退款退货说明" min-width="130"></el-table-column>
        <el-table-column class="explainImg" prop="explainImg" label="退款退货说明图片" min-width="150">
          <template slot-scope="scope">
            <el-image
            :src="scope.row.explainImg"
            fit="cover"
            :preview-src-list="scope.row.previewImgs"
          ></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="applyTime" label="申请时间" :formatter="applyTimeFormatter" min-width="160"></el-table-column>
        <el-table-column prop="handleTime" label="处理时间" :formatter="handleTimeFormatter" min-width="160"></el-table-column>
        <el-table-column prop="handleStatus" label="处理状态" :formatter="handleStatusFormatter" min-width="80"></el-table-column>
        <el-table-column prop="handleNotes" label="处理备注" min-width="120"></el-table-column>
        <el-table-column label="信用值" min-width="160">
          <template slot-scope="scope">
            <el-radio v-model="scope.row.creditValue" label="1">扣除</el-radio>
            <el-radio v-model="scope.row.creditValue" label="2">不扣</el-radio>
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" min-width="330">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="onAgree(scope.row)">同意并退款</el-button>
            <el-button type="primary" size="mini" @click="onReject(scope.row)">拒绝</el-button>
            <el-button type="primary" size="mini" @click="onEdit(scope.row)">修改退款金额</el-button>
            <el-button type="primary" size="mini" @click="onLookOver(scope.row)">查看操作日志</el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination :currentPage.sync="pagination.currentPage" :total="total" @currentChange="handleCurrentChange" />
    </div>

    <operateLog :visible.sync="isShowOperateLog" :currentData="operateLogData" />
  </div>
</template>

<script>
import searchComp from '@/components/searchForm'
import pagination from '@/components/pagination'
import operateLog from './operateLog'
import { getReturnGoodsStatus } from '@/filters/transformTwo'
import tools from '@/utils/tools'
export default {
  name: '',
  data () {
    return {
      isShowOperateLog: false, // 操作日志dialog显示与否
      pagination: {
        currentPage: 1,
        total: 0
      },
      operateLogData: {}, // 操作日志数据
      formOptions: [
        {
          label: '订单编号',
          prop: 'orderNumber',
          element: 'el-input',
          initValue: '',
          placeholder: '请填写订单编号'
        },
        {
          label: '退款退货状态',
          prop: 'status',
          element: 'el-select',
          options: getReturnGoodsStatus(),
          initValue: 1,
          placeholder: '全部'
        },
        {
          label: '商品名称',
          prop: 'goodsName',
          element: 'el-input',
          initValue: '',
          placeholder: '请填写商品名'
        },
        {
          label: '申请时间',
          prop: 'applyTime',
          element: 'el-date-picker',
          initValue: '',
          placeholder: ''
        }
      ]
    }
  },
  props: {
    currentData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {
    searchComp,
    pagination,
    operateLog
  },
  created () {

  },
  mounted () {

  },
  computed: {
    tableData () {
      console.log(this.currentData)
      return this.currentData.list
    },
    total () {
      return this.currentData.total
    }
  },
  methods: {
    applyTimeFormatter (row, column) {
      return tools.formatDate(row.applyTime)
    },
    handleTimeFormatter (row, column) {
      return tools.formatDate(row.handleTime)
    },
    handleStatusFormatter (row, column) {
      return getReturnGoodsStatus(row.handleStatus)
    },
    handleSearch (data) {
      console.log('-search-', data)
    },
    handleCurrentChange (data) {
      console.log('-next-page-', data)
    },
    onAgree (row) {
      console.log(row)
      let text = row.creditValue === '1' ? '扣除' : '不扣除'
      this.$confirm(`您确定要同意将订单金额退给用户且${text}信用值吗?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        this.$emit('agree', row)
      }).catch(() => {})
    },
    onReject (row) {
      console.log(row)
      this.$prompt('请输入备注:', '标题', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputType: 'textarea',
        inputErrorMessage: '备注不能为空',
        inputPlaceholder: '请填写备注...',
        inputValidator: val => !!val
      }).then(({ value }) => {
        console.log(value)
        row.handleNotes = value
        this.$emit('reject', row)
      }).catch(() => {})
    },
    onEdit (row) {
      console.log(row)
      this.$prompt('退款金额:', '标题', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputType: 'number',
        inputValue: row.refundAmount,
        inputErrorMessage: '金额输入不对',
        inputPlaceholder: '请填写退款金额',
        inputValidator: val => {
          console.log(row)
          // console.log(val, !!val, val <= +row.actualPrice, val >= 0)
          return !!val && val <= +row.actualPrice && val >= 0
        }
      }).then(({ value }) => {
        console.log(value)
        row.handleNotes = value
        this.$emit('edit', row)
      }).catch(() => {})
    },
    onLookOver (row) {
      console.log(row)
      this.getOperateLogData()
    },
    getOperateLogData () {
      let res = {
        data: {
          total: 56,
          list: [
            {
              operator: '小王',
              operateTime: 1555555555,
              operateBeforeMoney: '10.00',
              operateAfterMoney: '9.00'
            },
            {
              operator: '小小王',
              operateTime: 1555555000,
              operateBeforeMoney: '10.00',
              operateAfterMoney: '9.00'
            },
            {
              operator: '小小王',
              operateTime: 1555555000,
              operateBeforeMoney: '10.00',
              operateAfterMoney: '9.00'
            }
          ]
        }
      }
      // res.data.list = [...res.data.list, ...res.data.list, ...res.data.list, ...res.data.list, ...res.data.list, ...res.data.list, ...res.data.list, ...res.data.list, ...res.data.list, ...res.data.list ]
      setTimeout(() => {
        this.isShowOperateLog = true
        this.operateLogData = res.data
      }, 500)
    }
  }
}
</script>

<style lang='less' scoped>
.el-table {
  /deep/ .cell {
    // display: flex;
    // flex-direction: column;
    // justify-content: flex-start;
    // align-items: center;
  }
}
.el-image {
  width: 60px;
  height: 60px;
  vertical-align: middle;
}
.el-button+.el-button {
    margin-left: 0;
}
/deep/ .el-button {
  // margin-right: 3px;
  padding: 7px;
  &:last-child {
    margin-right: 0;
  }
}

</style>
