/**
 * 退款排行列表
 */
<template>
  <div class="tableBox">
    <searchForm :formOptions="formOptions"/>

    <el-table :data="tableData" ref="tableRef">
      <el-table-column prop="userId" label="用户ID" min-width="80"></el-table-column>
      <el-table-column prop="nickname" label="昵称" min-width="100"></el-table-column>
      <el-table-column prop="tel" label="手机" min-width="120"></el-table-column>
      <el-table-column prop="time" label="最后退款时间" min-width="150"></el-table-column>
      <el-table-column prop="orderNum" label="订单数" min-width="80"></el-table-column>
      <el-table-column prop="refundNum" label="退款数" min-width="80"></el-table-column>
      <el-table-column prop="refundRate" label="退款率" min-width="80"></el-table-column>
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
import searchForm from '@/components/searchForm'

export default {
  data () {
    return {
      formOptions: [
        {
          label: '时间',
          prop: 'time',
          element: 'el-select',
          options: [
            { value: 1, label: '全部' },
            { value: 2, label: '七天内' },
            { value: 3, label: '三十天内' }
          ]
        }
      ],
      tableData: [
        {
          id: 1,
          userId: 12223,
          nickname: '小王子',
          tel: '13116766623',
          time: '2012-12-12 12:34:34',
          orderNum: 12,
          refundNum: 2,
          refundRate: '100%'
        },
        {
          id: 2,
          userId: 12223,
          nickname: '小王子',
          tel: '13116766623',
          time: '2012-12-12 12:34:34',
          orderNum: 12,
          refundNum: 2,
          refundRate: '100%'
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

  components: { pagination, searchForm }
}
</script>

<style lang='less' scoped>
</style>
