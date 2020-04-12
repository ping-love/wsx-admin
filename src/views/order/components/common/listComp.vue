<!--
 * @Descripttion:
 * @version:
 * @Author: wangshengxian
 * @Date: 2020-01-10 15:35:35
 * @LastEditors  : wangshengxian
 * @LastEditTime : 2020-01-11 10:32:04
 -->
/**
* 订单管理公共listComp
*/
<template>
  <div class='listComp'>
    <el-table
      ref="multipleRef"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="selectionChange"
    >
      <el-table-column type="selection" min-width="60"></el-table-column>
      <el-table-column prop="mainOrderNumber" label="主订单编号" min-width="140"></el-table-column>
      <el-table-column prop="parentOrderNumber" label="父订单编号" min-width="180"></el-table-column>
      <el-table-column prop="placeOrderTime" label="下单时间" :formatter="timeFormatter" min-width="150"></el-table-column>
      <el-table-column prop="consignee" label="收货人"></el-table-column>
      <el-table-column prop="orderPrice" label="订单金额"></el-table-column>
      <el-table-column prop="payWay" label="付款方式" min-width="90"></el-table-column>
      <el-table-column prop="deliveryWay" label="配送方式" min-width="80"></el-table-column>
      <el-table-column prop="freight" label="运费" min-width="60"></el-table-column>
      <el-table-column prop="orderActualPrice" label="订单实收款" min-width="90"></el-table-column>
      <el-table-column prop="redpack" label="发出红包" min-width="80"></el-table-column>
      <el-table-column prop="orderStatus" label="订单状态" min-width="80" :formatter="statusFormatter"></el-table-column>
      <el-table-column label="操作" fixed="right">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="onLookOver(scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="operateBtnBox">
      <el-button type="primary" size="mini" @click="onCloseOrder">关闭订单</el-button>
      <el-button type="primary" size="mini" @click="onCopyLink($event)">复制链接</el-button>
    </div>

    <pagination :currentPage.sync="currentPage" :total="total" @currentChange="currentChange" />

  </div>
</template>

<script>
import pagination from '@/components/pagination'
import tools from '@/utils/tools'
import clipboard from '@/utils/clipboard'
import { getOrderStatus } from '@/filters/transformTwo'
export default {
  name: '',
  data () {
    return {
      currentPage: 1,
      multipleSelArr: [],
      isShowOrderDetails: false
    }
  },
  props: {
    type: {
      type: String,
      required: true
    },
    total: {
      type: Number,
      default () {
        return 0
      }
    },
    tableData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: { pagination },
  created () {

  },
  mounted () {

  },
  computed: {

  },
  methods: {
    timeFormatter (row, column) {
      return tools.formatDate(row.placeOrderTime * 1000)
    },
    statusFormatter (row, column) {
      return getOrderStatus(row.orderStatus)
    },
    selectionChange (val) {
      this.multipleSelArr = val
    },
    onLookOver (row) {
      console.log(row)
      const { parentOrderNumber, orderStatus } = row
      this.$router.push({ name: 'OrderDetails', query: { parentOrderNumber, orderStatus } })
    },
    onCloseOrder () {
      if (this.multipleSelArr.length === 0) {
        this.$message({
          message: '请选择选项',
          type: 'warning'
        })
        return
      }
      console.log('-multipleSelArr-', this.multipleSelArr)
    },
    onCopyLink (e) {
      let linkUrl = 'https://test.51k1k.com/h5/oneCent/#/index'
      clipboard(linkUrl, e)
    },
    currentChange (val) {
      this.$emit('update', val)
    }
  }
}
</script>

<style lang='less' scoped>
.el-table {
  /deep/ .cell {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.operateBtnBox {
  padding: 10px 0;
}
</style>
