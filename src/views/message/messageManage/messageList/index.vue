/**
 * 消息列表
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
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="receiver" label="接收者" min-width="120"></el-table-column>
        <el-table-column prop="message" label="消息" min-width="120"></el-table-column>
        <el-table-column prop="date" label="时间" min-width="120"></el-table-column>
        <el-table-column label="操作" min-width="120" fixed="right">
          <template slot-scope="scope">
            <el-button size="mini" type="primary">编辑</el-button>
            <el-button size="mini" type="danger" @click="onDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="btns">
        <el-button size="mini" type="primary" @click="onMultiDelete">批量删除</el-button>
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

export default {
  props: {},

  data () {
    return {
      formOptions: [
        {
          label: '用户名',
          prop: 'username',
          initValue: '张三',
          element: 'el-input'
        }
      ],
      tableData: [
        {
          id: 1,
          receiver: '韩某某',
          message: 'are you ready',
          date: '2019-12-12 12:12:12'
        },
        {
          id: 2,
          receiver: '韩某某',
          message: 'are you ready',
          date: '2019-12-12 12:12:12'
        }
      ],
      pagination: {
        currentPage: 1,
        total: 39
      },
      multipleSelection: []
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
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    onMultiDelete () {
      console.log(this.multipleSelection)
      if (this.multipleSelection.length === 0) {
        this.$message({
          type: 'warning',
          message: '请先选中项'
        })
      }
    }
  },

  components: { pagination, searchForm }
}
</script>

<style lang='less' scoped>
.btns {
  padding: 15px 0;
}
</style>
