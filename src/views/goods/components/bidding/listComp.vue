/**
* 竞价列表
*/
<template>
  <div class='listComp'>
    <div class="tableBox">
      <el-table :data="tableData" tooltip-effect="dark" style="width: 100%">
        <el-table-column prop="propName" label="道具名" min-width="100"></el-table-column>
        <el-table-column prop="sponsor" label="发起者" min-width="100"></el-table-column>
        <el-table-column prop="startPrice" label="起步价" min-width="100"></el-table-column>
        <el-table-column prop="fixedPrice" label="一口价" min-width="100"></el-table-column>
        <el-table-column prop="bidders" label="最后竞拍者" min-width="100"></el-table-column>
        <el-table-column prop="maxPrice" label="最高价" min-width="100"></el-table-column>
        <el-table-column prop="addTime" label="添加时间" :formatter="addTimeFormatter" min-width="160"></el-table-column>
        <el-table-column prop="endTime" label="结束时间" :formatter="endTimeFormatter" min-width="160"></el-table-column>
        <!-- 按钮操作 -->
        <el-table-column label="操作" fixed="right" min-width="100">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="onLookDetail(scope.row)">查看竞价详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <Pagination
      :currentPage.sync="currentPage"
      :total="total"
      @currentChange="currentChange"
    />
  </div>
</template>

<script>
import Pagination from '@/components/pagination' // 分页
import tools from '@/utils/tools'
export default {
  name: '',
  data () {
    return {
      currentPage: 1
    }
  },
  props: {
    tableData: {
      type: Array,
      default () {
        return []
      }
    },
    total: {
      type: Number,
      default () {
        return 0
      }
    }
  },
  components: { Pagination },
  created () {

  },
  mounted () {

  },
  computed: {

  },
  methods: {
    addTimeFormatter (row, column) {
      return tools.formatDate(row.addTime * 1000)
    },
    endTimeFormatter (row, column) {
      return tools.formatDate(row.endTime * 1000)
    },
    currentChange (val) {
      console.log(val)
      this.$emit('update', val)
    },
    onLookDetail (row) {
      console.log('-row-', row)
      const { biddingId } = row
      this.$router.push({ name: 'BiddingDetail', query: { biddingId } })
    }
  }
}
</script>

<style lang='less' scoped>
/deep/ .el-table {
  .cell {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
