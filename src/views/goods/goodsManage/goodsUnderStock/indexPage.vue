/**
* 库存报警的商品
*/
<template>
  <div class='underStockGoods'>
    <headerComp @onSearch="handleSearch" />
    <goodsList
      :total="total"
      :list="list"
      @update="handleUpdate"
      @singleDelect="handleSingleDelect"
      @multipleDelect="handleMultipleDelect"
      @syncErp="handleSyncErp"
      @soldOut="handleSoldOut"
    />
  </div>
</template>

<script>
import headerComp from '@/views/goods/components/common/headerComp'
import goodsList from '@/views/goods/components/goodsManage/goodsList'
export default {
  name: '',
  data () {
    return {
      list: [],
      total: 0
    }
  },
  components: {
    headerComp,
    goodsList
  },
  created () {
    if (!this.$route.query.categoryArr) {
      console.log('-没有地址栏传参-')
      this.getData()
    } else {
      console.log('-地址栏传递了参数-', this.$route.query)
      this.getData()
    }
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    handleSearch (data) {
      this.getSearchData(data)
    },
    // 下一页/翻页
    handleUpdate (data) {
      console.log('-page-number-', data)
    },
    handleSingleDelect (id) {
      console.log('single-delect-id:', id)
    },
    handleMultipleDelect (idArr) {
      console.log('-multiple-delect-id', idArr)
    },
    handleSyncErp (idArr) {
      console.log('-sync-erp-id-', idArr)
    },
    handleSoldOut (idArr) {
      console.log('-sold-out-id-', idArr)
    },
    getSearchData (data) {
      // 搜索
      console.log('goods-total-search:', data)
    },
    // 只请求当前页数据
    getData (currentPage) {
      currentPage = currentPage || 1
      let res = {
        data: {
          total: 21,
          list: []
        }
      }
      res.data.list = [
        {
          goodsId: '60066',
          goodsName: '家具日用',
          articleNum: '199',
          goodsPrice: '8.88',
          stock: '999',
          sellNum: '10',
          imgUrl: 'https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png',
          sortNum: 9,
          syncErp: 1,
          goodsLink: 'https://app.51k1k.com/product/index?item_id=1545',
          appletLink: '/pages/Body/pages/details/details?id=1545',
          previewImgs: ['https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png']
        },
        {
          goodsId: '60088',
          goodsName: '家具日用',
          articleNum: '199',
          goodsPrice: '8.88',
          stock: '999',
          sellNum: '10',
          imgUrl: 'https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png',
          sortNum: 9,
          syncErp: 2,
          goodsLink: 'https://app.51k1k.com/product/index?item_id=1545',
          appletLink: '/pages/Body/pages/details/details?id=1545',
          previewImgs: ['https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png']
        },
        {
          goodsId: '60099',
          goodsName: '家具日用',
          articleNum: '199',
          goodsPrice: '8.88',
          stock: '999',
          sellNum: '10',
          imgUrl: 'https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png',
          sortNum: 9,
          syncErp: 1,
          goodsLink: 'https://app.51k1k.com/product/index?item_id=1545',
          appletLink: '/pages/Body/pages/details/details?id=1545',
          previewImgs: ['https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png']
        }
      ]
      setTimeout(() => {
        this.$message({
          message: '请求成功',
          type: 'success'
        })
        this.total = res.data.total
        this.list = res.data.list
      }, 500)
    }
  }
}
</script>

<style lang='less' scoped>

</style>
