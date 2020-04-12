/**
 * 文章分类
 */
<template>
  <div class=''>
    <!-- 搜索 -->
    <searchForm :formOptions="formOptions"/>

    <div class="addBtn">
      <el-button type="primary" size="mini" @click="toAdd">添加栏目</el-button>
    </div>

    <!-- 表格 -->
    <div class="tableBox">
      <el-table
        :data="tableData"
        ref="tableRef"
      >
        <el-table-column prop="num" label="编号" min-width="120"></el-table-column>
        <el-table-column prop="title" label="栏目名称" min-width="120"></el-table-column>
        <el-table-column prop="sortNum" label="排序" min-width="120"></el-table-column>
        <el-table-column prop="isOpen" label="是否显示" min-width="100"></el-table-column>
        <el-table-column label="操作" min-width="120" fixed="right">
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

    <categoryModal :visible.sync="isShow" :type="modalType" :formData="modalFormData"/>
  </div>
</template>

<script>
import pagination from '@/components/pagination'
import categoryModal from '@/views/message/components/article/categoryModal'
import searchForm from '@/components/searchForm'

export default {
  props: {},

  data () {
    return {
      formOptions: [
        {
          label: '分类名称',
          prop: 'title',
          element: 'el-input',
          initValue: '123',
          rules: [{ required: true, message: '请输入内容', trigger: 'blur' }]
        }
      ],
      tableData: [
        {
          id: 1,
          num: 1,
          title: '给点意见1',
          sortNum: 1,
          isOpen: 1
        },
        {
          id: 2,
          num: 2,
          title: '给点意见2',
          sortNum: 2,
          isOpen: 1
        }
      ],
      pagination: {
        currentPage: 1,
        total: 39
      },
      isShow: false,
      modalType: '',
      modalFormData: {}
    }
  },

  computed: {},

  created () {},

  methods: {
    onSearch (val) {
      console.log(val)
    },
    currentChange (val) {

    },
    toEdit (item) {
      this.modalType = 'edit'
      this.modalFormData = {
        title: 'test',
        desc: 'wrwetwwe',
        sortNum: 23,
        isOpen: 0
      }
      this.isShow = true
    },
    toAdd () {
      this.modalType = 'add'
      this.modalFormData = {
        title: '',
        desc: '',
        sortNum: 0,
        isOpen: 1
      }
      this.isShow = true
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

  components: { pagination, categoryModal, searchForm }
}
</script>

<style lang='less' scoped>
.addBtn {
  padding-bottom: 10px;
}
</style>
