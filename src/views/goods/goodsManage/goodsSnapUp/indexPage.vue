/**
* 抢购的商品
*/
<template>
  <div class='goodsSnapUp'>
    <div class="listBox">

      <div class="tableBox">
        <el-table :data="tableData" tooltip-effect="dark" style="width: 100%">
          <el-table-column label="活动标题" prop="activityTitle"></el-table-column>
          <el-table-column label="开始时间" prop="startTime"></el-table-column>
          <el-table-column label="结束时间" prop="endTime"></el-table-column>
          <el-table-column label="状态" prop="status"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="onLookGoods(scope.row)">查看商品</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <pagination
        :currentPage.sync="pagination.currentPage"
        :total="pagination.total"
        @currentChange="currentChange"
      ></pagination>

    </div>
  </div>
</template>

<script>
import Pagination from '@/components/pagination' // 分页
export default {
  name: '',
  data () {
    return {
      tableData: [],
      pagination: {
        currentPage: 1,
        total: 0
      }
    }
  },
  components: {
    Pagination
  },
  created () {
    this.getData()
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    // 下一页
    currentChange (data) {
      console.log(data)
    },
    onLookGoods (data) {
      console.log(data)
      const { activityId, startTime, endTime } = data
      this.$router.push({ name: 'SnapUpActivityDetails', query: { activityId, startTime, endTime } })
    },
    getData () {
      let res = {
        data: {
          total: 21,
          list: []
        }
      }
      res.data.list = [
        {
          activityId: '156',
          activityTitle: '这是标题',
          startTime: '2019-10-28 09:25:45',
          endTime: '2019-10-28 09:25:45',
          status: '已结束'
        },
        {
          activityId: '156',
          activityTitle: '这是标题',
          startTime: '2019-10-28 09:25:45',
          endTime: '2019-10-28 09:25:45',
          status: '已结束'
        },
        {
          activityId: '156',
          activityTitle: '这是标题',
          startTime: '2019-10-28 09:25:45',
          endTime: '2019-10-28 09:25:45',
          status: '已结束'
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
  /deep/ th,
  td {
    text-align: center !important;
  }
}
</style>
