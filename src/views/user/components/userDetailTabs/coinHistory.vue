/**
 * 金币记录
 */
<template>
  <div class="tableBox">
    <el-table :data="tableData" ref="tableRef">
      <el-table-column type="index" min-width="50"></el-table-column>
      <el-table-column prop="consumeType" label="支出类型" min-width="80"></el-table-column>
      <el-table-column prop="operateType" label="操作类型" min-width="80"></el-table-column>
      <el-table-column prop="oldNum" label="变动前" min-width="80"></el-table-column>
      <el-table-column prop="newNum" label="变动后" min-width="80"></el-table-column>
      <el-table-column prop="changedNum" label="变动值" min-width="80"></el-table-column>
      <el-table-column prop="remark" label="说明" min-width="120"></el-table-column>
      <el-table-column prop="time" label="新增时间" min-width="150"></el-table-column>
      <el-table-column prop="status" label="状态" min-width="80"></el-table-column>
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
  data () {
    return {
      tableData: [
        {
          id: 1,
          consumeType: 2,
          operateType: 2,
          oldNum: 23,
          newNum: 34,
          changedNum: 11,
          remark: '说明一你啊',
          time: '2012-12-12 12:34:34',
          status: 3
        },
        {
          consumeType: 2,
          operateType: 2,
          oldNum: 23,
          newNum: 34,
          changedNum: 11,
          remark: '说明一你啊',
          time: '2012-12-12 12:34:34',
          status: 3
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

  components: { pagination }
}
</script>

<style lang='less' scoped>
</style>
