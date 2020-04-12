/**
 * 信用日志
 */
<template>
  <div class="tableBox">
    <!-- 搜索 -->
    <searchForm :formOptions="formOptions" @onSearch="onSearch"/>

    <el-table :data="tableData" ref="tableRef">
      <el-table-column prop="username" label="姓名" min-width="100"></el-table-column>
      <el-table-column prop="creditNum" label="信用值" min-width="80"></el-table-column>
      <el-table-column prop="paymentStatus" label="收支状态" min-width="100"></el-table-column>
      <el-table-column prop="remark" label="收支说明" min-width="100"></el-table-column>
      <el-table-column prop="time" label="新增时间" min-width="150"></el-table-column>
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
          label: '姓名',
          prop: 'username',
          element: 'el-input'
        }
      ],
      tableData: [
        {
          id: 1,
          username: '小王子',
          creditNum: 233,
          paymentStatus: '收入',
          remark: '信用购物',
          time: '2302-32-23 34:34:34'
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
    currentChange (val) {},
    onSearch (val) {
      console.log(val)
    }
  },

  components: { pagination, searchForm }
}
</script>

<style lang='less' scoped>
</style>
