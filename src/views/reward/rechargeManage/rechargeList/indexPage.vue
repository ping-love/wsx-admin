/**
 * 充值模板
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
        <el-table-column prop="icon" label="充值图片" min-width="100"></el-table-column>
        <el-table-column prop="diamond" label="钻石数" min-width="100"></el-table-column>
        <el-table-column prop="amount" label="金额" min-width="100"></el-table-column>
        <el-table-column prop="addTime" label="添加时间" min-width="150"></el-table-column>
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
          label: '金额',
          prop: 'amount',
          element: 'el-input'
        }
      ],
      tableData: [
        {
          id: 1,
          icon: '',
          diamond: '12123',
          amount: '232.00',
          addTime: '2019-10-25 11:20:22'
        },
        {
          id: 2,
          icon: '',
          diamond: '12123',
          amount: '232.00',
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
    toEdit (item) {
      this.$router.push({
        name: 'EditRecharge',
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
