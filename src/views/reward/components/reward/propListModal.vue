/**
 * 添加道具奖励模态框
 */
<template>
  <div class=''>
    <el-dialog
      title="请选择奖励道具"
      :visible.sync="dialogVisible"
    >
      <div class="selectBtn">
        <el-form
          label-position="right"
          :model="formData"
          class="formBox"
          ref="formRef"
        >
          <el-form-item label="装备类型：" prop="equipType">
            <el-select v-model="formData.equipType" clearable @change="onSelectChange">
              <el-option
                v-for="item in equipTypeData"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
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
        </el-table>

        <pagination
          :currentPage.sync="pagination.currentPage"
          :total="pagination.total"
          @currentChange="currentChange"
        />
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button @click="onCancel">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import pagination from '@/components/pagination'
import { getEquipType } from '@/filters/transform'

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      formData: {
        equipType: 1
      },
      equipTypeData: getEquipType(),
      pagination: {
        currentPage: 1,
        total: 39
      },
      multipleSelection: [],
      tableData: []
    }
  },

  computed: {
    dialogVisible: {
      get () {
        return this.visible
      },
      set (val) {
        this.$emit('update:visible', val)
      }
    }
  },

  created () {},

  methods: {
    onCancel () {
      this.dialogVisible = false
    },
    // 提交数据 table数组
    onSubmit () {
      this.$emit('onSubmit', this.multipleSelection)
      this.dialogVisible = false
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    currentChange (val) {

    },
    onSelectChange (val) {
      console.log(val)
      this.multipleSelection = []
      this.tableData = []
      this.pagination = {
        currentPage: 1,
        total: 39
      }
      this.getTableData()
    },
    getTableData () {
      this.tableData = [
        {
          id: 1,
          icon: '',
          name: '武器1',
          probability: '4%'
        },
        {
          id: 2,
          icon: '',
          name: '武器2',
          probability: '4%'
        }
      ]
    }
  },

  components: { pagination }
}
</script>

<style lang='less' scoped>
/deep/ .el-dialog__body {
  padding-top: 0;
}
.selectBtn {
  padding-bottom: 10px;
}
</style>
