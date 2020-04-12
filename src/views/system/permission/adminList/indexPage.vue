/**
 * 管理员列表
 */
<template>
  <div class=''>
    <searchForm :formOptions="formOptions"/>

    <div class="tableBox">
      <div class="addBtn">
        <el-button type="primary" @click="toAdd" size="mini">添加管理员</el-button>
      </div>
      <el-table
        :data="tableData"
      >
        <el-table-column prop="name" label="联系人" min-width="150"></el-table-column>
        <el-table-column prop="role" label="角色" min-width="150"></el-table-column>
        <el-table-column prop="email" label="邮件地址" min-width="200"></el-table-column>
        <el-table-column prop="createDate" label="创建时间" min-width="150"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="toEdit(scope)">编辑</el-button>
            <el-button size="mini" type="default" @click="toLog(scope)">操作记录</el-button>
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
import searchForm from '@/components/searchForm'

export default {
  props: {},

  data () {
    return {
      formOptions: [
        {
          label: '联系人',
          prop: 'name',
          element: 'el-input'
        },
        {
          label: '角色',
          prop: 'roleId',
          element: 'el-select',
          options: [
            { value: 0, label: '全部' },
            { value: 1, label: '系统管理员' },
            { value: 2, label: '游戏管理员' },
            { value: 3, label: '测试' }
          ]
        }
      ],
      tableData: [
        {
          id: 1,
          name: '尼欧',
          role: '系统管理员',
          email: 'neohan666@qq.com',
          createDate: '2019-10-25 11:20:22'
        }, {
          id: 2,
          name: '尼欧',
          role: '系统管理员',
          email: 'neohan666@qq.com',
          createDate: '2019-10-25 11:20:22'
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
    toAdd () {
      this.$router.push({
        name: 'AddAdmin'
      })
    },
    toEdit (scope) {
      this.$router.push({
        name: 'EditAdmin',
        id: scope.id
      })
    },
    toLog (scope) {
      this.$router.push({
        name: 'OperationLog',
        id: scope.id
      })
    },
    currentChange (val) {

    }
  },

  components: { pagination, searchForm }
}
</script>

<style lang='less' scoped>
.addBtn {
  padding: 0 0 10px;
}
</style>
