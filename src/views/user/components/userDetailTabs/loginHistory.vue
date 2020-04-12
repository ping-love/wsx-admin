/**
 * 登入历史记录
 */
<template>
  <div class="tableBox">
    <searchForm :formOptions="formOptions"/>

    <el-table :data="tableData" ref="tableRef">
      <el-table-column type="index" min-width="50"></el-table-column>
      <el-table-column prop="loginTime" label="登入时间" min-width="100"></el-table-column>
      <el-table-column prop="ip" label="IP" min-width="100"></el-table-column>
      <el-table-column prop="city" label="IP所在城市" min-width="120"></el-table-column>
      <el-table-column prop="clientType" label="客户端类型" min-width="120"></el-table-column>
      <el-table-column prop="channel" label="登入渠道" min-width="120"></el-table-column>
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
          label: 'IP',
          prop: 'ip',
          element: 'el-input'
        },
        {
          label: '注册时间',
          prop: 'timeRange',
          element: 'el-date-picker'
        }
      ],
      tableData: [
        {
          id: 1,
          loginTime: '2102-12-12 12:34:34',
          ip: '122.121.121.121',
          city: '北京市北京市',
          clientType: '铁军端',
          channel: '安卓'
        },
        {
          id: 2,
          loginTime: '2102-12-12 12:34:34',
          ip: '122.121.121.121',
          city: '北京市北京市',
          clientType: '铁军端',
          channel: '安卓'
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
