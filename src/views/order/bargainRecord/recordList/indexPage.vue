/**
* 砍价记录列表
*/
<template>
  <div class='recordList'>
    <searchForm :formOptions="formOptions" @onSearch="handleSearch" />
    <div class="listWrap">
      <el-table :data="tableData" tooltip-effect="dark" style="width: 100%">
        <el-table-column prop="username" label="用户姓名" min-width="100"></el-table-column>
        <el-table-column prop="goodsName" label="商品名称" min-width="100"></el-table-column>
        <el-table-column label="商品图片" min-width="100">
          <template slot-scope="scope">
            <el-image
            :src="scope.row.goodsImg"
            fit="cover"
            :preview-src-list="scope.row.previewImgs"
          ></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="count" label="数量" min-width="100"></el-table-column>
        <el-table-column prop="totalPrice" label="总价格" min-width="100"></el-table-column>
        <el-table-column prop="bargainPrice" label="砍价" min-width="100"></el-table-column>
        <el-table-column prop="bargainAfterPrice" label="砍后价格" min-width="100"></el-table-column>
        <el-table-column prop="bargainTime" label="砍价时间" :formatter="timeFormatter" min-width="160"></el-table-column>
        <el-table-column prop="redpack" label="红包值" min-width="100"></el-table-column>
        <el-table-column prop="exp" label="经验值" min-width="100"></el-table-column>
        <el-table-column prop="isGain" label="是否领取" min-width="100"></el-table-column>
      </el-table>
      <pagination :currentPage.sync="pagination.currentPage" :total="pagination.total" @currentChange="handleCurrentChange" />
    </div>
  </div>
</template>

<script>
import searchForm from '@/components/searchForm'
import pagination from '@/components/pagination'
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
      formOptions: [{
        label: '用户姓名',
        prop: 'username',
        element: 'el-input',
        initValue: '',
        placeholder: '请输入用户名'
      }]
    }
  },
  components: {
    searchForm,
    pagination
  },
  created () {
    this.getData()
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    timeFormatter (row, column) {
      return tools.formatDate(row.bargainTime)
    },
    handleSearch (data) {

    },
    handleCurrentChange (data) {
      console.log(data)
    },
    getData (currentPage) {
      currentPage = currentPage || 1
      let res = {
        data: {
          total: 36,
          list: [
            {
              username: '小王',
              goodsName: '商品1999',
              goodsImg: 'http://img.51k1k.com/Uploads/image/default/2018-12/20181226163904_27422_800_800.jpg',
              count: 19,
              totalPrice: '19.9',
              bargainPrice: '1.0',
              bargainAfterPrice: '18.9',
              bargainTime: 1555555555,
              redpack: '1.6',
              exp: '1620',
              isGain: '是',
              previewImgs: ['http://img.51k1k.com/Uploads/image/default/2018-12/20181226163904_27422_800_800.jpg']
            }
          ]
        }
      }
      setTimeout(() => {
        this.pagination.total = res.data.total
        this.tableData = res.data.list
      }, 500)
    }
  }
}
</script>

<style lang='less' scoped>
.el-image {
  width: 60px;
  height: 60px;
  vertical-align: middle;
}
</style>
