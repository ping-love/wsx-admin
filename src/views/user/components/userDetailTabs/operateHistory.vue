/**
 * 评论记录
 */
<template>
  <div class="tableBox">
    <searchForm :formOptions="formOptions"/>

    <el-table :data="tableData" ref="tableRef">
      <el-table-column prop="userId" label="操作者用户ID" min-width="80"></el-table-column>
      <el-table-column prop="ip" label="操作者IP" min-width="100"></el-table-column>
      <el-table-column prop="time" label="操作时间" min-width="150"></el-table-column>
      <el-table-column prop="type" label="操作方式" min-width="100" :formatter="typeFormatter"></el-table-column>
      <el-table-column prop="username" label="操作者姓名" min-width="100"></el-table-column>
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
import { getOperateType } from '@/filters/transform'

export default {
  data () {
    return {
      formOptions: [
        {
          label: '操作者用户ID',
          prop: 'userId',
          element: 'el-input'
        },
        {
          label: '操作方式',
          prop: 'status',
          element: 'el-select',
          options: getOperateType()
        },
        {
          label: '操作时间',
          prop: 'timeRange',
          element: 'el-date-picker'
        }
      ],
      tableData: [
        {
          id: 1,
          userId: 12223,
          ip: '202.022.222.223',
          time: '2012-12-12 12:34:34',
          type: 2,
          username: '小王子'
        },
        {
          id: 2,
          userId: 12223,
          ip: '202.022.222.223',
          time: '2012-12-12 12:34:34',
          type: 3,
          username: '小王子'
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

    },
    typeFormatter (row, column) {
      return getOperateType(row.type)
    }
  },

  components: { pagination, searchForm }
}
</script>

<style lang='less' scoped>
</style>
