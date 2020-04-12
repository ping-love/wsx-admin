/**
 * 角色列表页
 */
<template>
  <div class=''>
    <div class="btn">
      <el-button type="primary" @click="toAdd">添加新版本</el-button>
    </div>
    <el-table :data="tableData" @sort-change="sortChange" :default-sort="{ prop: 'version', order: 'descending' }">
      <el-table-column label="app类型" prop="appType" min-width="100"></el-table-column>
      <el-table-column label="系统类型" prop="systemType" min-width="80" :formatter="systemTypeFormatter"></el-table-column>
      <el-table-column label="渠道" prop="channel" min-width="100"></el-table-column>
      <el-table-column label="包下载链接" prop="downloadUrl" min-width="200"></el-table-column>
      <el-table-column label="强制更新" prop="isForceUpdate" min-width="80"></el-table-column>
      <el-table-column label="版本号" prop="version" min-width="80" sortable="custom"></el-table-column>
      <el-table-column label="开关" min-width="80">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.isOpen" @change="isOpenChange(scope.row)"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="对外开放" min-width="80">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.isPublic" @change="isPublicChange(scope.row)"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="更新说明" prop="tips" min-width="100"></el-table-column>
      <el-table-column label="添加时间" prop="date" min-width="160"></el-table-column>
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
        {
          id: 1,
          appType: '正常版本',
          systemType: '1',
          channel: '应用宝',
          downloadUrl: 'https://www.baidu.com',
          isForceUpdate: '否',
          version: '2.1.1',
          isOpen: true,
          isPublic: true,
          tips: '哈哈哈啊哈哈哈',
          date: '2019-12-24 11:24:33'
        },
        {
          id: 2,
          appType: '正常版本',
          systemType: '1',
          channel: '应用宝',
          downloadUrl: 'https://www.baidu.com',
          isForceUpdate: '否',
          version: '2.0.9',
          isOpen: true,
          isPublic: true,
          tips: '哈哈哈啊哈哈哈',
          date: '2019-12-24 11:24:33'
        },
        {
          id: 3,
          appType: '正常版本',
          systemType: '1',
          channel: '应用宝',
          downloadUrl: 'https://www.baidu.com',
          isForceUpdate: '否',
          version: '1.3.9',
          isOpen: true,
          isPublic: true,
          tips: '哈哈哈啊哈哈哈',
          date: '2019-12-24 11:24:33'
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
    toAdd () {
      this.$router.push({
        name: 'AddUpdateLog'
      })
    },
    currentChange (val) {

    },
    isOpenChange (item) {
      console.log(item.isOpen)
    },
    isPublicChange (item) {
      console.log(item.isPublic)
    },
    systemTypeFormatter (row, column) {
      return row.systemType === '1' ? '安卓' : 'IOS'
    },
    sortChange ({ column, prop, order }) {
      console.log(column, prop, order)
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
