/**
 * 任务列表
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
        <el-table-column prop="id" label="任务ID" min-width="80"></el-table-column>
        <el-table-column prop="title" label="任务名称" min-width="90"></el-table-column>
        <el-table-column prop="desc" label="任务描述" min-width="120"></el-table-column>
        <el-table-column prop="icon" label="任务ICON" min-width="90"></el-table-column>
        <el-table-column prop="jumpType" label="跳转类型" min-width="90" :formatter="jumpTypeFormatter"></el-table-column>
        <el-table-column prop="taskReward" label="任务奖励" min-width="90" :formatter="taskRewardFormatter"></el-table-column>
        <el-table-column prop="condition" label="条件" min-width="100"></el-table-column>
        <el-table-column prop="startTime" label="开始时间" min-width="150"></el-table-column>
        <el-table-column prop="taskTriggerType" label="任务类型" min-width="90" :formatter="taskTriggerTypeFormatter"></el-table-column>
        <el-table-column prop="activeCondition" label="激活条件" min-width="150"></el-table-column>
        <el-table-column prop="activeStatus" label="激活状态" min-width="90" :formatter="activeStatusFormatter"></el-table-column>
        <el-table-column label="操作" min-width="100" fixed="right">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="toEdit(scope.row)">编辑</el-button>
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
import {
  getTaskTriggerType,
  getJumpType,
  getTaskReward
} from '@/filters/transform'
import searchForm from '@/components/searchForm'

export default {
  props: {},

  data () {
    return {
      formOptions: [
        {
          label: '任务名称',
          prop: 'title',
          element: 'el-input'
        }
      ],
      tableData: [
        {
          id: 10000,
          title: '给点意见1',
          desc: '描述一下',
          icon: '',
          jumpType: 1,
          taskReward: 1,
          condition: 2,
          startTime: '2019-12-30 10:50:52',
          taskTriggerType: 1,
          activeCondition: '2018-12-08 15:43:41',
          activeStatus: 0
        },
        {
          id: 10001,
          title: '给点意见1',
          desc: '描述一下',
          icon: '',
          jumpType: 1,
          taskReward: 1,
          condition: 2,
          startTime: '2019-12-30 10:50:52',
          taskTriggerType: 1,
          activeCondition: '2018-12-08 15:43:41',
          activeStatus: 0
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
        name: 'EditTask',
        query: { id: item.id }
      })
    },
    jumpTypeFormatter (row, column) {
      return getJumpType(row.jumpType)
    },
    taskRewardFormatter (row, column) {
      return getTaskReward(row.taskReward)
    },
    taskTriggerTypeFormatter (row, column) {
      return getTaskTriggerType(row.taskTriggerType)
    },
    activeStatusFormatter (row, column) {
      return +row.activeStatus === 1 ? '已激活' : '已关闭'
    }
  },

  components: { pagination, searchForm }
}
</script>

<style lang='less' scoped>
</style>
