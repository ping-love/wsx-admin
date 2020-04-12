/**
 * 意见反馈列表
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
        <el-table-column prop="type" label="意见类型" min-width="80"></el-table-column>
        <el-table-column prop="feedbackUser" label="反馈用户" min-width="100"></el-table-column>
        <el-table-column prop="content" label="意见内容" min-width="200"></el-table-column>
        <el-table-column prop="time" label="提交时间" min-width="150"></el-table-column>
        <el-table-column prop="status" label="状态" min-width="120" :formatter="statusFormatter"></el-table-column>
        <el-table-column label="操作" width="480" fixed="right">
          <template slot-scope="scope">
            <el-button size="mini" @click="toUserDetail(scope.row)">用户详情</el-button>
            <el-button size="mini" @click="onStatus(scope.row, 1)">无用</el-button>
            <el-button size="mini" @click="onStatus(scope.row, 2)">有待商榷</el-button>
            <el-button size="mini" @click="onStatus(scope.row, 3)">有用</el-button>
            <el-button size="mini" @click="onStatus(scope.row, 4)">将更新到系统中</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="btns">
        <!-- <el-button size="mini" type="primary" @click="onSelection(true)">全选</el-button> -->
        <!-- <el-button size="mini" type="primary" @click="onSelection()">取消</el-button> -->
        <el-button size="mini" type="primary" @click="onMultiStatus(1)">批量标记无用</el-button>
        <el-button size="mini" type="primary" @click="onMultiStatus(2)">批量标记有待商榷</el-button>
        <el-button size="mini" type="primary" @click="onMultiStatus(3)">批量标记有用</el-button>
        <el-button size="mini" type="primary" @click="onMultiStatus(4)">批量标记将更新到系统中</el-button>
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
import { getFeedbackStatus } from '@/filters/transform'
import searchForm from '@/components/searchForm'

export default {
  props: {},

  data () {
    return {
      formOptions: [
        {
          label: '意见内容',
          prop: 'content',
          element: 'el-input'
        },
        {
          label: '类型',
          prop: 'type',
          element: 'el-select',
          options: [
            { label: '给点意见', value: '1' },
            { label: '售后问题', value: '2' }
          ]
        },
        {
          label: '状态',
          prop: 'status',
          element: 'el-select',
          options: getFeedbackStatus()
        },
        {
          label: '提交时间',
          prop: 'timeRange',
          element: 'el-date-picker'
        }
      ],
      tableData: [
        {
          id: 1,
          type: '给点意见',
          feedbackUser: '会员',
          content: '哈哈啊哈哈哈哈哈哈哈',
          time: '2019-10-25 11:20:22',
          status: 3
        },
        {
          id: 2,
          type: '给点意见',
          feedbackUser: '会员',
          content: '哈哈啊哈哈哈哈哈哈哈',
          time: '2019-10-25 11:20:22',
          status: 2
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
    toUserDetail (item) {
      this.$router.push({
        name: 'Index',
        query: { id: item.id }
      })
    },
    onStatus (item, type) {

    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    onSelection (isChooseAll) {
      if (isChooseAll) {
        this.tableData.forEach(row => {
          this.$refs.tableRef.toggleRowSelection(row, true)
        })
      } else {
        this.$refs.tableRef.clearSelection()
      }
    },
    onMultiStatus (type) {
      console.log(this.multipleSelection)
      if (this.multipleSelection.length === 0) {
        this.$message({
          type: 'warning',
          message: '请先选中项'
        })
      }
    },
    statusFormatter (row) {
      return getFeedbackStatus(row.status)
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
