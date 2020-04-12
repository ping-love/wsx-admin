/**
 * 红包领取记录
 */
<template>
  <div class="tableBox">
    <searchForm :formOptions="formOptions"/>

    <el-table :data="tableData" ref="tableRef">
      <el-table-column prop="type" label="红包类型" min-width="100"></el-table-column>
      <el-table-column prop="amount" label="红包金额" min-width="100"></el-table-column>
      <el-table-column prop="oldNum" label="变动前数量" min-width="120"></el-table-column>
      <el-table-column prop="newNum" label="变动后数量" min-width="120"></el-table-column>
      <el-table-column prop="sendStatus" label="发放状态" min-width="120"></el-table-column>
      <el-table-column prop="time" label="新增时间" min-width="120"></el-table-column>
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
          label: '新增时间',
          prop: 'timeRange',
          element: 'el-date-picker'
        }
      ],
      tableData: [
        {
          id: 1,
          type: 1,
          amount: '100.00',
          oldNum: 12,
          newNum: 23,
          sendStatus: 1,
          time: '2102-12-12 12:34:34'
        },
        {
          id: 2,
          type: 1,
          amount: '100.00',
          oldNum: 12,
          newNum: 23,
          sendStatus: 1,
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

  components: { pagination, searchForm }
}
</script>

<style lang='less' scoped>

</style>
