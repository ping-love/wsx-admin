/**
* 供应商列表
*/
<template>
  <div class='providersList'>

    <div class="headerBox">
      <goodsHeaderComp :formOptions="formOptions" :btnItems="btnItems" @onSearch="handleSearch" />
      <div class="syncErp">
        <el-button class="syncErp" type="primary" size="mini" @click="onSyncErp">同步ERP</el-button>
      </div>
    </div>

    <!-- <div class="headerBox">
      <el-form :model="formData" ref="formRef" :inline="true">
        <el-form-item label="供货商名称:">
          <el-input v-model="formData.providersName" size="mini" placeholder="请输入供货商名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini" icon="el-icon-search" @click="onSearch">搜索</el-button>
          <el-button type="primary" size="mini" icon="el-icon-search" @click="onExport">导出</el-button>
        </el-form-item>
      </el-form>

      <div class="syncErp">
        <el-button type="primary" size="mini" @click="onSyncErp">同步ERP</el-button>
      </div>
    </div> -->

    <!-- list-box -->
    <div class="listBox">

      <div class="tableBox">
        <el-table :data="tableData" tooltip-effect="dark" style="width: 100%">
          <el-table-column label="供销商ID" prop="providersId"></el-table-column>
          <el-table-column label="供销商名称" prop="providersName"></el-table-column>
          <el-table-column label="添加时间" prop="addTime" :formatter="addTimeFormatter"></el-table-column>
        </el-table>
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
import goodsHeaderComp from '@/views/goods/components/goodsHeaderComp'
import pagination from '@/components/pagination'
import tools from '@/utils/tools'
export default {
  name: '',
  data () {
    return {
      formData: {
        providersName: ''
      },
      tableData: [],
      pagination: {
        currentPage: 1,
        total: 0
      },
      btnItems: 'search, export',
      formOptions: [
        {
          label: '供货商名称',
          prop: 'providersName',
          element: 'el-input',
          initValue: '',
          placeholder: '请输入供货商名',
          rules: [{ required: true, message: '请填写供货商名称', trigger: 'blur' }]
        }
      ]
    }
  },
  components: { goodsHeaderComp, pagination },
  created () {
    this.getData()
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    addTimeFormatter (row, column) {
      return tools.formatDate(row.addTime)
    },
    onSearch () {
      console.log(this.formData)
    },
    onExport () {
      this.$alert('即将导出商品!!!', '提示', {
        confirmButtonText: '确定'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '恭喜你导出成功'
        })
      }).catch(() => {})
    },
    onSyncErp () {
      this.$alert('即将同步erp!!!', '提示', {
        confirmButtonText: '确定'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '恭喜你同步成功'
        })
      }).catch(() => {})
    },
    handleSearch (data) {

    },
    currentChange (data) {
      console.log(data)
    },
    // 获取data
    getData () {
      let res = {
        data: {
          total: 21,
          list: []
        }
      }
      res.data.list = [
        {
          providersId: '168',
          providersName: '供销商名-杭州供销商',
          addTime: '1578045303'
        }
      ]
      setTimeout(() => {
        this.$message({
          message: '请求成功',
          type: 'success'
        })
        this.pagination.total = res.data.total
        this.tableData = res.data.list
      }, 500)
    }
  }
}
</script>

<style lang='less' scoped>
.headerBox {
  display: flex;
  justify-content: space-between;
  .syncErp {
    padding-top: 6px;
  }
}

.el-table {
  /deep/ .cell {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /deep/ th,
  td {
    text-align: center !important;
  }
}
</style>
