/**
 * 提现记录
 */
<template>
  <div class=''>
    <div class="infoBox">
      <h4>基本信息：</h4>
      <ul>
        <li>
          <div class="title">用户昵称：</div>
          <div class="content">小鱼爱打动</div>
        </li>
        <li>
          <div class="title">UID：</div>
          <div class="content">65566</div>
        </li>
        <li>
          <div class="title">总提现金额：</div>
          <div class="content">100.00</div>
        </li>
        <li>
          <div class="title">余额：</div>
          <div class="content">0.00</div>
        </li>
      </ul>
    </div>

    <searchForm :formOptions="formOptions"/>

    <div class="tableBox">
      <el-table
        :data="tableData"
        ref="tableRef"
      >
        <el-table-column prop="withdrawType" label="提现类型" min-width="100"></el-table-column>
        <el-table-column prop="withdrawAmount" label="提现金额" min-width="100"></el-table-column>
        <el-table-column prop="account" label="提现至账户" min-width="100"></el-table-column>
        <el-table-column prop="time" label="添加时间" min-width="120"></el-table-column>
        <el-table-column prop="remark" label="备注" min-width="120"></el-table-column>
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
import searchForm from '@/components/searchForm'
import pagination from '@/components/pagination'

export default {
  props: {},

  data () {
    return {
      formOptions: [
        {
          label: '提现时间',
          prop: 'timeRange',
          element: 'el-date-picker'
        }
      ],
      tableData: [
        {
          id: 1,
          withdrawType: '支付嘎',
          withdrawAmount: 1.00,
          account: '621700170202122',
          time: '2102-12-12 12:34:34',
          remark: '备注一下'
        },
        {
          id: 2,
          withdrawType: '支付嘎',
          withdrawAmount: 1.00,
          account: '621700170202122',
          time: '2102-12-12 12:34:34',
          remark: '备注一下'
        }
      ],
      pagination: {
        currentPage: 1,
        total: 39
      }
    }
  },

  computed: {},

  created () {},

  methods: {
    currentChange (val) {}
  },

  components: { searchForm, pagination }
}
</script>

<style lang='less' scoped>
@import '~@/views/user/styles/infoBox.less';
</style>
