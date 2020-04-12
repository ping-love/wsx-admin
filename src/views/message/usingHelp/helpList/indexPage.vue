/**
 * 使用帮助列表
 */
<template>
  <div class=''>
    <!-- 搜索 -->
    <searchForm :formOptions="formOptions"/>

    <div class="addBtn">
      <el-button type="primary" size="mini" @click="toAdd">添加帮助</el-button>
    </div>

    <!-- 表格 -->
    <div class="tableBox">
      <el-table
        :data="tableData"
        ref="tableRef"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="title" label="标题" min-width="120"></el-table-column>
        <el-table-column prop="category" label="栏目" min-width="120" :formatter="categoryFormatter"></el-table-column>
        <el-table-column prop="sortNum" label="排序" min-width="80"></el-table-column>
        <el-table-column label="操作" min-width="120" fixed="right">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="toEdit(scope.row)">编辑</el-button>
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
import getHelpCategory from '@/views/message/mixins/getHelpCategory'
import searchForm from '@/components/searchForm'

export default {
  mixins: [getHelpCategory],

  props: {},

  data () {
    return {
      tableData: [
        {
          id: 1,
          title: '给点意见1',
          category: 2,
          sortNum: 1
        },
        {
          id: 2,
          title: '给点意见2',
          category: 3,
          sortNum: 2
        }
      ],
      pagination: {
        currentPage: 1,
        total: 39
      },
      multipleSelection: []
    }
  },

  computed: {
    formOptions () {
      return [
        {
          label: '标题',
          prop: 'title',
          element: 'el-input'
        },
        {
          label: '使用帮助分类',
          prop: 'category',
          element: 'el-select',
          options: this.getHelpCategory()
        }
      ]
    }
  },

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
        name: 'EditHelp',
        query: { id: item.id }
      })
    },
    toAdd () {
      this.$router.push({
        name: 'AddHelp'
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
    },
    categoryFormatter (row, column) {
      return this.getHelpCategory(row.category)
    }
  },

  components: { pagination, searchForm }
}
</script>

<style lang='less' scoped>
.btns {
  padding: 15px 0;
}

.addBtn {
  padding-bottom: 10px;
}
</style>
