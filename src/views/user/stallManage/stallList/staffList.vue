/**
 * 地摊公司人员列表
 */
<template>
  <div class="tableBox">
    <el-tabs v-model="activeName" @tab-click="tabsClick">
      <el-tab-pane label="线下推广" name="offline"></el-tab-pane>
      <el-tab-pane label="线上推广" name="online"></el-tab-pane>
    </el-tabs>

    <searchForm :formOptions="formOptions" btnItems="search, export"/>

    <div class="tableBox">
      <el-table :data="tableData" ref="tableRef">
        <el-table-column type="index" width="30" fixed="left"></el-table-column>
        <el-table-column prop="qrCode" label="二维码编号" min-width="120"></el-table-column>
        <el-table-column prop="company" label="所属公司" min-width="110"></el-table-column>
        <el-table-column prop="newNum" label="拉新人数" min-width="80"></el-table-column>
        <el-table-column prop="rechargeNum" label="充值人数" min-width="80"></el-table-column>
        <el-table-column prop="rechargeAmount" label="充值金额" min-width="80"></el-table-column>
        <el-table-column prop="buyNum" label="购买用户数" min-width="90"></el-table-column>
        <el-table-column prop="consumeRedBag" label="支出红包" min-width="80"></el-table-column>
        <el-table-column prop="expiredRedBag" label="过期红包" min-width="80"></el-table-column>
        <el-table-column prop="withDrawToRemain" label="提现到余额" min-width="90"></el-table-column>
        <el-table-column prop="withDrawToOffline" label="提现到线下" min-width="90"></el-table-column>
        <el-table-column prop="placeOrderNum" label="下单数" min-width="70"></el-table-column>
        <el-table-column prop="pricePerOrder" label="笔单价" min-width="80"></el-table-column>
        <el-table-column prop="appDownloadNum" label="APP下载数" min-width="100"></el-table-column>
        <el-table-column prop="firstOrderNum" label="首单数" min-width="70"></el-table-column>
        <el-table-column prop="firstAppOrderNum" label="首单APP下单数" min-width="80"></el-table-column>
        <el-table-column prop="firAppOrderRefundMoney" label="APP首单仅退款" min-width="80"></el-table-column>
        <el-table-column prop="firAppOrderRefundAll" label="APP首单退货退款" min-width="80"></el-table-column>
        <el-table-column prop="firAppOrderRefundMoneyDay" label="APP首单下单当日仅退款" min-width="110"></el-table-column>
        <el-table-column prop="firAppOrderRefundAllDay" label="APP首单下单当日退货退款" min-width="110"></el-table-column>
        <el-table-column prop="rapOnce" label="抢1次红包/金币" min-width="120"></el-table-column>
        <el-table-column prop="gameLevelTen" label="游戏10级" min-width="80"></el-table-column>
        <el-table-column label="操作" min-width="200" fixed="right">
          <template #default="scope">
            <el-button size="mini" type="primary" @click="toListNew(scope.row)">成员列表</el-button>
            <el-button size="mini" type="primary" @click="toBaseInfo(scope.row)">基础信息</el-button>
          </template>
        </el-table-column>
      </el-table>

      <pagination
        :currentPage.sync="pagination.currentPage"
        :total="pagination.total"
        @currentChange="currentChange"
      />
    </div>
  </div>
</template>

<script>
import pagination from '@/components/pagination'
import searchForm from '@/components/searchForm'

export default {
  data () {
    return {
      formOptions: [
        {
          label: '二维码编号',
          prop: 'qrCode',
          element: 'el-input'
        },
        {
          label: '时间',
          prop: 'timeRange',
          element: 'el-date-picker'
        },
        {
          label: '排序方式',
          prop: 'sortType',
          element: 'el-select',
          initValue: 0,
          options: [
            { value: 0, label: '默认排序' },
            { value: 1, label: '拉新人数从高到低' },
            { value: 2, label: '拉新人数从低到高' }
          ]
        }
      ],
      tableData: [
        {
          id: 1,
          qrCode: 'D34242423234',
          company: '杭州砍一砍',
          newNum: 12,
          rechargeNum: 34,
          rechargeAmount: 2.00,
          buyNum: 23,
          consumeRedBag: 2.12,
          expiredRedBag: 1.23,
          withDrawToRemain: 2.34,
          withDrawToOffline: 3.23,
          placeOrderNum: 23,
          pricePerOrder: 23.23,
          appDownloadNum: 345,
          firstOrderNum: 34,
          firstAppOrderNum: 32,
          firAppOrderRefundMoney: 34,
          firAppOrderRefundAll: 22,
          firAppOrderRefundMoneyDay: 12,
          firAppOrderRefundAllDay: 2,
          rapOnce: 22,
          gameLevelTen: 23
        }
      ],
      pagination: {
        currentPage: 1,
        total: 39
      },
      activeName: 'offline'
    }
  },

  computed: {},

  created () {},

  methods: {
    currentChange (val) {},
    toListNew (item) {
      this.$router.push({
        name: 'NewUserList',
        query: {
          id: item.id
        }
      })
    },
    toBaseInfo (item) {
      this.$router.push({
        name: 'StaffBaseInfo',
        query: {
          id: item.id
        }
      })
    },
    tabsClick () {
      console.log(this.activeName)
    }
  },

  components: { pagination, searchForm }
}
</script>

<style lang='less' scoped>
/deep/ .el-select {
  width: 140px !important;
}
</style>
