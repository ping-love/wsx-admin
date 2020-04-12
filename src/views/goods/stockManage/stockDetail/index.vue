/**
* 库存明细
*/
<template>
  <div class='stockDetail'>
    <GoodsHeaderComp :formOptions="formOptions" @onSearch="handleSearch" />
    <div class="listWrap">
      <div class="tableContent">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="selectionChange"
        >
          <el-table-column type="selection" prop="goodsId" label="商品信息" width="60"></el-table-column>
          <el-table-column prop="goodsInfo" label="商品信息"></el-table-column>
          <el-table-column prop="stockType" label="库存类型"></el-table-column>
          <el-table-column prop="supplier" label="供应商"></el-table-column>
          <el-table-column prop="tradePrice" label="进价"></el-table-column>
          <el-table-column prop="changeNum" label="变动数量"></el-table-column>
          <el-table-column prop="beforeChange" label="变动前"></el-table-column>
          <el-table-column prop="afterChange" label="变动后"></el-table-column>
          <el-table-column prop="changePerson" label="变更人"></el-table-column>
          <el-table-column prop="time" label="时间" :formatter="timeFormatter" min-width="120" ></el-table-column>
        </el-table>
      </div>
      <div class="operateContent">
        <div class="operateBtnBox">
          <el-button type="danger" size="mini" @click="onSoldOut">下架</el-button>
          <el-button type="danger" size="mini" @click="onDel">删除</el-button>
        </div>
        <Pagination :currentPage.sync="pagination.currentPage" :total="pagination.total" @currentChange="currentChange" />
      </div>
    </div>

  </div>
</template>

<script>
import GoodsHeaderComp from '@/views/goods/components/goodsHeaderComp'
import Pagination from '@/components/pagination'
import tools from '@/utils/tools'
export default {
  name: '',
  data () {
    return {
      pagination: {
        currentPage: 1,
        total: 0
      },
      tableData: [],
      multipleSelVal: [],
      formOptions: [
        {
          label: '商品名称',
          prop: 'goodsName',
          element: 'el-input',
          initValue: '',
          placeholder: '请输入商品名'
          // rules: [{ required: true, message: '请输入商品名', trigger: 'blur' }]
        },
        {
          label: '商品货号',
          prop: 'productNum',
          element: 'el-input',
          initValue: '',
          placeholder: '请输入商品货号'
          // rules: [{ required: true, message: '请输入商品货号', trigger: 'blur' }]
        },
        {
          label: '商品分类',
          prop: 'goodsCategory',
          element: 'el-select',
          initValue: '',
          options: [],
          placeholder: '商品分类'
          // rules: [{ required: true, message: '请选择商品分类', trigger: 'change' }]
        },
        {
          label: '商品状态',
          prop: 'goodsStatus',
          element: 'el-select',
          initValue: '',
          options: [],
          placeholder: '商品状态'
          // rules: [{ required: true, message: '请选择商品状态', trigger: 'change' }]
        },
        {
          label: '添加时间',
          prop: 'addTime',
          element: 'el-date-picker',
          initValue: '',
          options: [],
          placeholder: ''
          // rules: [{ required: true, message: '请选择添加时间', trigger: 'change' }]
        }
      ]
    }
  },
  components: { GoodsHeaderComp, Pagination },
  created () {
    this.getData()
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    timeFormatter (row, column) {
      return tools.formatDate(row.time)
    },
    handleSearch (data) {
      this.getSearchData(data)
    },
    selectionChange (val) {
      console.log(val)
      this.multipleSelVal = val
    },
    onSoldOut () {
      console.log(this.multipleSelVal.length)
      if (this.multipleSelVal.length === 0) {
        this.$message({
          type: 'warning',
          message: '请先选中选项'
        })
        return
      }
      console.log('-下架-', this.multipleSelVal)
      this.getOperateData('下架')
    },
    onDel () {
      if (this.multipleSelVal.length === 0) {
        this.$message({
          type: 'warning',
          message: '请先选中选项'
        })
        return
      }
      console.log('-删除-', this.multipleSelVal)
      this.getOperateData('删除')
    },
    currentChange (val) {
      console.log('-currentPage-', val)
      this.getData(val)
    },
    getSearchData (data) {
      console.log('-search-', data)
    },
    getOperateData (msg) {
      console.log('删除/下架')
      setTimeout(() => {
        this.$message({
          type: 'success',
          message: `${msg}成功`
        })
      }, 1000)
    },
    getData (currentPage) {
      currentPage = currentPage || 1
      let res = {
        code: 0,
        data: {
          list: [],
          total: 1000
        },
        error_msg: ''
      }
      res.data.list = [
        {
          goodsId: '60026',
          goodsInfo: '苹果',
          stockType: '进货入库',
          supplier: '供应商1',
          tradePrice: '19',
          changeNum: '100',
          beforeChange: '1000',
          afterChange: '1200',
          changePerson: '小王',
          time: 1529040576
        }
      ]
      setTimeout(() => {
        this.$message({
          type: 'success',
          message: '请求成功'
        })
        this.tableData = res.data.list
        // console.log(this.tableData)
        this.pagination.total = res.data.total
      }, 1000)
    }
  }
}
</script>

<style lang='less' scoped>
.el-table {
  /deep/ .cell {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.pagination {
  padding: 0
}

.operateContent {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}
</style>
