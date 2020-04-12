/**
 * 奖励列表
 */
<template>
  <div class=''>
    <!-- 搜索 -->
    <searchForm :formOptions="formOptions"/>

    <!-- 表格 -->
    <div class="tableBox">
      <el-table
        :data="tableData"
        ref="tableRef"
      >
        <el-table-column prop="title" label="奖励名称" min-width="120"></el-table-column>
        <el-table-column prop="consumeInterval" label="消费区间" min-width="150"></el-table-column>
        <el-table-column prop="prop" label="奖励道具" min-width="120"></el-table-column>
        <el-table-column prop="coin" label="奖励金币" min-width="90"></el-table-column>
        <el-table-column prop="diamond" label="奖励钻石" min-width="90"></el-table-column>
        <el-table-column prop="power" label="奖励体力" min-width="90"></el-table-column>
        <el-table-column prop="time" label="添加时间" min-width="150"></el-table-column>
        <el-table-column label="操作" min-width="150" fixed="right">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="toEdit(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="onDelete(scope.row)">删除</el-button>
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
  props: {},

  data () {
    return {
      formOptions: [
        {
          label: '奖励名称',
          prop: 'title',
          element: 'el-input'
        }
      ],
      tableData: [
        {
          id: 1,
          title: '给点意见1',
          consumeInterval: '50000.00-59999.97',
          prop: '青龙偃月刀',
          coin: '3658',
          diamond: '12',
          power: '23',
          time: '2019-10-25 11:20:22'
        },
        {
          id: 2,
          title: '给点意见1',
          consumeInterval: '50000.00-59999.97',
          prop: '青龙偃月刀',
          coin: '3658',
          diamond: '12',
          power: '23',
          time: '2019-10-25 11:20:22'
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
    onSubmit () {
      console.log(this.formData)
      this.$refs.formRef.validate(valid => {
        if (valid) {
          console.log('提交成功')
        }
      })
    },
    currentChange (val) {

    },
    toEdit (item) {
      this.$router.push({
        name: 'EditReward',
        query: { id: item.id }
      })
    },
    onDelete (item) {
      this.$confirm('是否确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {})
    }
  },

  components: { pagination, searchForm }
}
</script>

<style lang='less' scoped>
</style>
