/**
 * 充值记录
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
        <el-table-column prop="name" label="姓名" min-width="80"></el-table-column>
        <el-table-column prop="model" label="充值模型" min-width="150"></el-table-column>
        <el-table-column prop="diamond" label="钻石数" min-width="90"></el-table-column>
        <el-table-column prop="amount" label="金额" min-width="90"></el-table-column>
        <el-table-column prop="status" label="状态" min-width="80"></el-table-column>
        <el-table-column prop="payTime" label="支付时间" min-width="150"></el-table-column>
        <el-table-column prop="addTime" label="新增时间" min-width="150"></el-table-column>
        <el-table-column label="操作" min-width="100" fixed="right">
          <template slot-scope="scope">
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
          label: '姓名',
          prop: 'name',
          element: 'el-input'
        }
      ],
      tableData: [
        {
          id: 1,
          name: '韩某某',
          model: '￥128.00-2560.00(钻)',
          diamond: '12',
          amount: '123.00',
          status: '已支付',
          payTime: '2019-10-25 11:20:22',
          addTime: '2019-10-25 11:20:22'
        },
        {
          id: 2,
          name: '韩某某',
          model: '￥128.00-2560.00(钻)',
          diamond: '12',
          amount: '123.00',
          status: '已支付',
          payTime: '2019-10-25 11:20:22',
          addTime: '2019-10-25 11:20:22'
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
