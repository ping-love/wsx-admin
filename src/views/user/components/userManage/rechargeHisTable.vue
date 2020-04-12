/**
 *
 */
<template>
  <div class="tableBox">
    <el-table
      :data="tableData"
      ref="tableRef"
    >
      <el-table-column prop="amount" label="充值金额" min-width="100"></el-table-column>
      <el-table-column prop="diamond" label="钻石" min-width="100"></el-table-column>
      <el-table-column prop="payType" label="支付方式" min-width="100"></el-table-column>
      <el-table-column prop="time" label="时间" min-width="120"></el-table-column>
    </el-table>

    <pagination
      :currentPage.sync="pagination.currentPage"
      :total="pagination.total"
      @currentChange="currentChange"
    />
  </div>
</template>

<script>
import pagination from '@/components/pagination'

export default {
  props: {
    // 充值类型：福袋充值 luckyBag  周/月卡充值 weekCard
    type: {
      type: String,
      default: 'luckyBag'
    }
  },

  data () {
    return {
      tableData: [
        {
          id: 1,
          amount: this.type === 'luckyBag' ? 12 : 122,
          diamond: 123,
          payType: '支付嘎',
          time: '2102-12-12 12:34:34'
        },
        {
          id: 2,
          amount: 12,
          diamond: 123,
          payType: '支付嘎',
          time: '2102-12-12 12:34:34'
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
    currentChange (val) {

    }
  },

  components: { pagination }
}
</script>

<style lang='less' scoped>

</style>
