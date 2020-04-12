/**
 * 地摊公司列表
 */
<template>
  <div class="tableBox">
    <searchForm :formOptions="formOptions" btnItems="search, export"/>

    <div class="addBtn">
      <el-button size="mini" type="primary" @click="toAdd">添加地摊公司</el-button>
    </div>

    <div class="tableBox">
      <el-table :data="tableData" ref="tableRef">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="compName" label="公司名" min-width="100"></el-table-column>
        <el-table-column prop="representative" label="代表姓名" min-width="70"></el-table-column>
        <el-table-column prop="tel" label="联系方式" min-width="90"></el-table-column>
        <el-table-column prop="onlineCodeNum" label="线上推广二维码数量" min-width="110"></el-table-column>
        <el-table-column prop="offlineCodeNum" label="线下推广二维码数量" min-width="110"></el-table-column>
        <el-table-column prop="onlineNewNum" label="线上拉新数量" min-width="80"></el-table-column>
        <el-table-column prop="offlineNewNum" label="线下拉新数量" min-width="80"></el-table-column>
        <el-table-column label="操作" min-width="150">
          <template #default="scope">
            <el-button size="mini" type="primary" @click="toEdit(scope.row)">编辑</el-button>
            <el-button size="mini" type="primary" @click="toList(scope.row)">地摊人员列表</el-button>
          </template>
        </el-table-column>
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
  data () {
    return {
      formOptions: [
        {
          label: '时间',
          prop: 'timeRange',
          element: 'el-date-picker'
        }
      ],
      tableData: [
        {
          id: 1,
          compName: '牛',
          representative: '小王子',
          tel: '13116766623',
          onlineCodeNum: 12,
          offlineCodeNum: 13,
          onlineNewNum: 2,
          offlineNewNum: 4
        },
        {
          id: 2,
          compName: '牛',
          representative: '小王子',
          tel: '13116766623',
          onlineCodeNum: 12,
          offlineCodeNum: 13,
          onlineNewNum: 2,
          offlineNewNum: 4
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
    toAdd () {
      this.$router.push({ name: 'AddStall' })
    },
    toEdit (item) {
      this.$router.push({
        name: 'EditStall',
        query: {
          id: item.id
        }
      })
    },
    toList (item) {
      this.$router.push({
        name: 'StaffList',
        query: {
          id: item.id
        }
      })
    }
  },

  components: { pagination, searchForm }
}
</script>

<style lang='less' scoped>
</style>
