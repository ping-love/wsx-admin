/**
 * 角色列表页
 */
<template>
  <div class=''>
    <div class="btn">
      <el-button type="primary" @click="toAdd">添加角色</el-button>
    </div>
    <el-table :data="tableData">
      <el-table-column label="序号" type="index" width="150"></el-table-column>
      <el-table-column label="角色名称" prop="roleName" min-width="200"></el-table-column>
      <el-table-column label="操作" min-width="100">
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
</template>

<script>
import pagination from '@/components/pagination'

export default {
  props: {},

  data () {
    return {
      tableData: [
        { id: 1, roleName: '系统管理员' },
        { id: 2, roleName: '测试' }
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
    toAdd () {
      this.$router.push({
        name: 'AddRole'
      })
    },
    toEdit (item) {
      this.$router.push({
        name: 'EditRole',
        query: {
          id: item.id
        }
      })
    },
    onDelete (item) {
      console.log(item.id)
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
    currentChange (val) {

    }
  },

  components: { pagination }
}
</script>

<style lang='less' scoped>
.btn {
  padding-bottom: 10px;
}
</style>
