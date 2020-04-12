/**
 * 道具奖励列表
 */
<template>
  <div class=''>
    <div class="addBtn">
      <el-button type="success" size="mini" @click="onAdd">添加</el-button>
    </div>

    <!-- 表格 -->
    <div class="tableBox">
      <el-table
        :data="tableData"
        ref="tableRef"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="icon" label="图像" min-width="100"></el-table-column>
        <el-table-column prop="name" label="名称" min-width="120"></el-table-column>
        <el-table-column prop="probability" label="获得几率" min-width="100"></el-table-column>
        <el-table-column label="操作" min-width="100" fixed="right">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="onDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="btns">
        <el-button size="mini" type="danger" @click="onMultiDelete">批量删除</el-button>
      </div>
    </div>

    <propListModal :visible.sync="isShow" @onSubmit="onGetEquipData"/>
  </div>
</template>

<script>
import propListModal from './propListModal'

export default {
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    }
  },

  data () {
    return {
      multipleSelection: [],
      isShow: false
    }
  },

  computed: {
    tableData: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },

  created () {},

  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    onDelete (item) {
      this.$confirm('是否确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteItems([item])
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {})
    },
    onMultiDelete () {
      console.log(this.multipleSelection)
      if (this.multipleSelection.length === 0) {
        this.$message({
          type: 'warning',
          message: '请先选中项'
        })
      }
      this.$confirm('是否确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteItems(this.multipleSelection)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {})
    },
    // 从tableData中删除某些项
    deleteItems (items) {
      this.tableData = this.tableData.filter(v => {
        let isNotIn = true
        for (let i = 0; i < items.length; i++) {
          if (v.id === items[i].id) {
            isNotIn = false
            break
          }
        }
        return isNotIn
      })
    },
    onAdd () {
      this.isShow = true
    },
    onGetEquipData (val) {
      let newData = []
      // 根据id过滤重复数据
      val.forEach(item => {
        let isNotIn = true
        this.tableData.forEach(v => {
          if (item.id === v.id) {
            isNotIn = false
          }
        })
        if (isNotIn) {
          newData.push(item)
        }
      })
      this.tableData = [...this.tableData, ...newData]
    }
  },

  components: { propListModal }
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
