/**
 * 供应商列表
 */
<template>
  <div class="tableBox">
    <el-table :data="tableData" ref="tableRef">
      <el-table-column prop="name" label="供应商" min-width="80"></el-table-column>
      <el-table-column prop="contact" label="联系人" min-width="80"></el-table-column>
      <el-table-column prop="tel" label="联系电话" min-width="80"></el-table-column>
      <el-table-column prop="address" label="地址" min-width="150"></el-table-column>
      <el-table-column label="操作" min-width="100">
        <template #default="scope">
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
  data () {
    return {
      tableData: [
        {
          id: 1,
          name: 'phone-x供应商',
          contact: '苹果',
          tel: '13116766623',
          address: '中国苹果总代理_1'
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
    currentChange (val) {},
    toEdit (item) {
      this.$router.push({
        name: 'EditSupplier',
        query: {
          id: item.id
        }
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

  components: { pagination }
}
</script>

<style lang='less' scoped>
</style>
