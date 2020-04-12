/**
 * 用户道具
 */
<template>
  <div class=''>
    <!-- 搜索 -->
    <searchForm :formOptions="formOptions" @onSearch="onSearch"/>

    <div class="addBtn">
      <el-button type="primary" size="mini" @click="onShowModal">添加</el-button>
    </div>

    <!-- 表格 -->
    <div class="tableBox">
      <el-table
        :data="tableData"
        ref="tableRef"
      >
        <el-table-column prop="icon" label="预览" min-width="100"></el-table-column>
        <el-table-column prop="name" label="名称" min-width="120"></el-table-column>
        <el-table-column prop="isEquiv" label="是否装备" min-width="80"></el-table-column>
        <el-table-column prop="isBind" label="是否绑定" min-width="80"></el-table-column>
        <el-table-column label="操作" min-width="80">
          <template #default="scope">
            <el-button type="primary" size="mini" @click="onClick(scope.row)">操作</el-button>
          </template>
        </el-table-column>
      </el-table>

      <pagination
        :currentPage.sync="pagination.currentPage"
        :total="pagination.total"
        @currentChange="currentChange"
      />
    </div>

    <addUserProperty :visible.sync="isShow"/>
  </div>
</template>

<script>
import pagination from '@/components/pagination'
import searchForm from '@/components/searchForm'
import addUserProperty from '@/views/user/components/userManage/addUserProperty'

export default {
  props: {},

  data () {
    return {
      formOptions: [
        {
          label: '',
          prop: 'type',
          element: 'el-select',
          options: [
            { label: '背包中', value: 1 },
            { label: '已出售', value: 2 }
          ],
          placeholder: '请选择类型'
        }
      ],
      tableData: [
        {
          id: 1,
          icon: '图片1',
          name: '青龙偃月刀',
          isEquiv: 1,
          isBind: 1
        },
        {
          id: 2,
          icon: '图片1',
          name: '青龙偃月刀',
          isEquiv: 1,
          isBind: 1
        }
      ],
      pagination: {
        currentPage: 1,
        total: 39
      },
      isShow: false
    }
  },

  computed: {},

  created () {},

  methods: {
    onSearch () {
      console.log(this.formData)
    },
    currentChange (val) {

    },
    onClick (item) {
      console.log(item)
    },
    onShowModal () {
      this.isShow = true
    }
  },

  components: { pagination, searchForm, addUserProperty }
}
</script>

<style lang='less' scoped>
.addBtn {
  padding-bottom: 15px;
}
</style>
