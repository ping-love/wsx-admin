/**
 * 查看用户详情
 */
<template>
  <div class=''>
    <div class="infoBox">
      <h4>基本信息：</h4>
      <ul>
        <li>
          <div class="title">用户昵称：</div>
          <div class="content">小鱼爱打洞</div>
        </li>
        <li>
          <div class="title">UID：</div>
          <div class="content">67348</div>
        </li>
        <li>
          <div class="title">绑定手机号：</div>
          <div class="content">13721342176</div>
        </li>
        <li>
          <div class="title">收货地址：</div>
          <div class="content"></div>
        </li>
      </ul>
    </div>

    <!-- 搜索 -->
    <searchForm :formOptions="formOptions" @onSearch="onSearch"/>

    <!-- 表格 -->
    <div class="tableBox">
      <el-table
        :data="tableData"
        ref="tableRef"
      >
        <el-table-column prop="goodsName" label="商品名称" min-width="100"></el-table-column>
        <el-table-column prop="type" label="方式" min-width="80"></el-table-column>
        <el-table-column prop="bargainAmount" label="砍价金额" min-width="80"></el-table-column>
        <el-table-column prop="bagAmount" label="获得红包值" min-width="80"></el-table-column>
        <el-table-column prop="time" label="时间" min-width="120"></el-table-column>
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
  props: {},

  data () {
    return {
      formOptions: [
        {
          label: '砍价时间',
          prop: 'timeRange',
          element: 'el-date-picker'
        }
      ],
      tableData: [
        {
          id: 1,
          goodsName: '商品1',
          type: 1,
          bargainAmount: 12,
          bagAmount: 122,
          time: '2023-23-23 12:23:12'
        },
        {
          id: 2,
          goodsName: '商品1',
          type: 2,
          bargainAmount: 12,
          bagAmount: 122,
          time: '2023-23-23 12:23:12'
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
    onSearch (val) {
      console.log(this.val)
    },
    currentChange (val) {

    }
  },

  components: { pagination, searchForm }
}
</script>

<style lang='less' scoped>
@import '~@/views/user/styles/infoBox.less';
</style>
