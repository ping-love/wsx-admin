/**
 * 积分明细
 */
<template>
  <div class=''>
    <!-- 搜索 -->
    <searchForm :formOptions="formOptions" @onSearch="onSearch"/>

    <!-- 表格 -->
    <div class="tableBox">
      <el-table
        :data="tableData"
        ref="tableRef"
      >
        <el-table-column prop="username" label="用户名" min-width="100"></el-table-column>
        <el-table-column prop="time" label="时间" min-width="120"></el-table-column>
        <el-table-column prop="type" label="类型" min-width="80"></el-table-column>
        <el-table-column prop="changeNum" label="变动数量" min-width="80"></el-table-column>
        <el-table-column prop="oldIntegral" label="变动前积分" min-width="80"></el-table-column>
        <el-table-column prop="newIntegral" label="变动后积分" min-width="80"></el-table-column>
        <el-table-column prop="remark" label="备注" min-width="120"></el-table-column>
      </el-table>

      <div class="btns">
        <el-button type="primary" size="mini" @click="onCopyShopMall($event)">复制积分商城链接</el-button>
        <el-button type="primary" size="mini" @click="onCopyDetail($event)">复制积分明细链接</el-button>
        <el-button type="primary" size="mini" @click="onCopyChangeHistory($event)">复制积分兑换记录链接</el-button>
      </div>

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
import clipboard from '@/utils/clipboard'

export default {
  props: {},

  data () {
    return {
      formOptions: [
        {
          label: '起始时间',
          prop: 'timeRange',
          element: 'el-date-picker'
        }
      ],
      tableData: [
        {
          id: 1,
          username: '用户名1',
          time: '2023-23-23 12:23:12',
          type: '1',
          changeNum: 12,
          oldIntegral: 122,
          newIntegral: 134,
          remark: '备注一下'
        },
        {
          id: 2,
          username: '用户名2',
          time: '2023-23-23 12:23:12',
          type: '1',
          changeNum: 12,
          oldIntegral: 122,
          newIntegral: 134,
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
    onSearch () {
      console.log(this.formData)
    },
    currentChange (val) {

    },
    onCopyShopMall (e) {
      clipboard('http://test.51k1k.com/FrontMall/integral_mall_home', e)
    },
    onCopyDetail (e) {
      clipboard('http://test.51k1k.com/FrontUser/integral_list', e)
    },
    onCopyChangeHistory (e) {
      clipboard('http://test.51k1k.com/FrontUser/integral_exchange_list', e)
    }
  },

  components: { pagination, searchForm }
}
</script>

<style lang='less' scoped>
.btns {
  padding-top: 15px;
}
</style>
