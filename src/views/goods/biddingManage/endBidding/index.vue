/**
* 竞拍结束的
*/
<template>
  <div class="endBidding">
    <GoodsHeaderComp :formOptions="formOptions" @onSearch="handleSearch"/>
    <ListComp :tableData="tableData" :total="total" @update="handleUpdate" />
  </div>
</template>

<script>

import GoodsHeaderComp from '@/views/goods/components/goodsHeaderComp'
import ListComp from '@/views/goods/components/bidding/listComp'
export default {
  name: '',
  data () {
    return {
      total: 0,
      tableData: [],
      formOptions: [
        {
          label: '发起者',
          prop: 'sponsor',
          element: 'el-input',
          initValue: '',
          placeholder: '请输入发起者'
          // rules: [{ required: true, message: '请输入发起者', trigger: 'blur' }]
        },
        {
          label: '道具名',
          prop: 'propName',
          element: 'el-input',
          initValue: '',
          placeholder: '请输入道具名'
          // rules: [{ required: true, message: '请输入道具名', trigger: 'blur' }]
        },
        {
          label: '最后竞拍者',
          prop: 'bidders',
          element: 'el-input',
          initValue: '',
          placeholder: '请输入竞拍者'
          // rules: [{ required: true, message: '请输入竞拍者', trigger: 'blur' }]
        }
      ]
    }
  },
  components: { GoodsHeaderComp, ListComp },
  created () {
    this.getData()
  },
  mounted () {},
  computed: {},
  methods: {
    // 搜索
    handleSearch (data) {
      // console.log('-search-搜索', data)
      this.getSearchData(data)
    },
    handleUpdate (data) {
      // console.log('-currentPage-', data)
      this.getData(data)
    },
    getSearchData (params) {
      console.log('-search-params-', params)
    },
    // 数据请求
    getData (currentPage) {
      currentPage = currentPage || 1
      console.log('-currentPage-', currentPage)
      let res = {
        data: {
          total: 21,
          list: []
        }
      }
      res.data.list = [
        {
          biddingId: 1,
          propName: '道具一',
          sponsor: '发起者名',
          startPrice: '10',
          fixedPrice: '66',
          bidders: '最后竞拍者名',
          maxPrice: '99',
          addTime: 1578387075,
          endTime: 1578387075
        }
      ]
      setTimeout(() => {
        this.$message({
          message: '请求成功',
          type: 'success'
        })
        this.total = res.data.total
        this.tableData = res.data.list
      }, 500)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
