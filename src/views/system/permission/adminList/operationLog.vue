/**
 * 管理员操作记录
 */
<template>
  <div class=''>
    <el-form
      label-position="right"
      label-width="110px"
      :model="formData"
      class="formBox"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item label="操作者用户ID:" prop="userId">
        <el-input size="mini" v-model="formData.userId"></el-input>
      </el-form-item>

      <el-form-item label="操作方式:" prop="type">
        <el-select size="mini" v-model="formData.type">
          <el-option
            v-for="item in typeData"
            :key="item.id"
            :label="item.label"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="操作时间:" prop="timeRange">
        <el-date-picker
          size="mini"
          v-model="formData.timeRange"
          type="datetimerange"
          :picker-options="pickerOptions"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          align="right"
        ></el-date-picker>
      </el-form-item>

      <el-form-item>
        <el-button size="mini" type="primary" class="saveComp" @click="onSubmit">搜索</el-button>
      </el-form-item>
    </el-form>

    <div class="tableBox">
      <el-table
        :data="tableData"
      >
        <el-table-column prop="userId" label="操作者用户ID" min-width="110"></el-table-column>
        <el-table-column prop="toUserId" label="被修改的用户ID" min-width="120"></el-table-column>
        <el-table-column prop="ip" label="操作者IP" min-width="120"></el-table-column>
        <el-table-column prop="time" label="操作时间" min-width="150"></el-table-column>
        <el-table-column prop="type" label="操作方式" min-width="80"></el-table-column>
        <el-table-column prop="tableName" label="操作表名" min-width="120"></el-table-column>
        <el-table-column prop="tableId" label="操作表中的id号" min-width="120"></el-table-column>
        <el-table-column prop="desc" label="日志说明" min-width="150"></el-table-column>
        <el-table-column prop="name" label="操作者姓名" min-width="90"></el-table-column>
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
import tools from '@/utils/tools'

export default {
  props: {},

  data () {
    return {
      formData: {
        userId: '',
        type: '',
        timeRange: []
      },
      typeData: [
        { id: 0, label: '全部' },
        { id: 1, label: '增加' },
        { id: 2, label: '修改' },
        { id: 3, label: '删除' },
        { id: 4, label: '访问' }
      ],
      rules: {},
      tableData: [
        {
          id: 1,
          userId: '123',
          toUserId: '3434',
          ip: '192.168.1.112',
          time: '2019-11-26 15:56:33',
          type: '修改',
          tableName: 'tp_name',
          tableId: '2432',
          desc: '修改',
          name: '阿黄'
        }
      ],
      pagination: {
        currentPage: 1,
        total: 39
      },
      pickerOptions: tools.pickerOptionsRange
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

    }
  },

  components: { pagination }
}
</script>

<style lang='less' scoped>
.el-form {
  display: flex;

  .el-input {
    margin-right: 20px;
  }
  /deep/ .el-form-item__label {
    font-weight: 700;
  }
}
.addBtn {
  padding: 0 0 10px;
}

</style>
