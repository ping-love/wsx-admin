/**
 * 新用户成员列表
 */
<template>
  <div class="tableBox">
    <div class="compInfo">
      所属公司：<span>砍一砍</span>
    </div>
    <el-divider></el-divider>

    <searchForm :formOptions="formOptions" btnItems="search, export"/>

    <div class="tableBox">
      <el-table :data="tableData" ref="tableRef">
        <el-table-column type="index" width="30" fixed="left"></el-table-column>
        <el-table-column prop="nickname" label="新用户昵称" min-width="90"></el-table-column>
        <el-table-column prop="tel" label="手机号码" min-width="110"></el-table-column>
        <el-table-column prop="appDownloadNum" label="APP下载" min-width="80"></el-table-column>
        <el-table-column prop="firstAppOrderNum" label="APP首单购买" min-width="80"></el-table-column>
        <el-table-column prop="firstAppOrderTime" label="APP首单时间" min-width="80"></el-table-column>
        <el-table-column prop="firAppOrderRefundMoney" label="APP首单仅退款" min-width="90"></el-table-column>
        <el-table-column prop="firAppOrderRefundAll" label="APP首单退货退款" min-width="100"></el-table-column>
        <el-table-column prop="firAppOrderRefundMoneyDay" label="APP首单下单当日仅退款" min-width="140"></el-table-column>
        <el-table-column prop="firAppOrderRefundAllDay" label="APP首单下单当日退货退款" min-width="140"></el-table-column>
        <el-table-column prop="rapOnce" label="抢1次红包/金币" min-width="100"></el-table-column>
        <el-table-column prop="rapOnceTime" label="第1次抢红包/金币时间" min-width="120"></el-table-column>
        <el-table-column prop="gameLevelTen" label="游戏10级" min-width="80"></el-table-column>
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
          label: '新用户昵称',
          prop: 'nickname',
          element: 'el-input'
        },
        {
          label: '新用户手机号',
          prop: 'tel',
          element: 'el-input'
        }
      ],
      tableData: [
        {
          id: 1,
          nickname: '阿黄',
          tel: '12212121212',
          appDownloadNum: 345,
          firstAppOrderNum: 32,
          firstAppOrderTime: '2012-02-12 23:23:23',
          firAppOrderRefundMoney: 34,
          firAppOrderRefundAll: 22,
          firAppOrderRefundMoneyDay: 12,
          firAppOrderRefundAllDay: 2,
          rapOnce: 22,
          rapOnceTime: '2012-02-12 23:23:23',
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
    currentChange (val) {}
  },

  components: { pagination, searchForm }
}
</script>

<style lang='less' scoped>
</style>
