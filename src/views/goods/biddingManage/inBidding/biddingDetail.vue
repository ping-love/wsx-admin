/**
* 竞拍详情
*/
<template>
  <div class='biddingDetail'>
    <el-table :data="tableData" tooltip-effect="dark" style="width: 100%">
      <el-table-column prop="bidders" label="竞拍者"></el-table-column>
      <el-table-column prop="price" label="竞拍价格"></el-table-column>
      <el-table-column prop="time" label="竞拍时间" :formatter="timeFormatter"></el-table-column>
    </el-table>
    <Pagination :currentPage.sync="pagination.currentPage" :total="pagination.total" @currentChange="handleCurrChange" />
  </div>
</template>

<script>
import Pagination from '@/components/pagination'
import tools from '@/utils/tools'
export default {
  name: '',
  data () {
    return {
      pagination: {
        currentPage: 1,
        total: 0
      },
      tableData: []
    }
  },
  components: { Pagination },
  created () {
    console.log(this.$route.query)
    this.getData()
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    timeFormatter (row, column) {
      return tools.formatDate(row.time)
    },
    handleCurrChange (data) {
      // console.log('-currentPage-', data)
      this.getData(data)
    },
    getData (currentPage) {
      currentPage = currentPage || 1
      console.log('-currentPage-', currentPage)
      let res = {
        data: {
          total: 21,
          list: []
        }
      }
      res.data.list = [
        {
          biddingId: 1,
          bidders: '竞拍者名',
          price: '99',
          time: 1578387075
        }
      ]
      setTimeout(() => {
        this.$message({
          message: '请求成功',
          type: 'success'
        })
        this.pagination.total = res.data.total
        this.tableData = res.data.list
      }, 500)
    }
  }
}
</script>

<style lang='less' scoped>
.el-table {
  /deep/ .cell {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
