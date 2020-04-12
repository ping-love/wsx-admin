/**
* 所有完成订单
*/
<template>
  <div class='allCompleteOrder'>
    <headerComp type="allCompleteOrder"/>
    <listComp type="allCompleteOrder" :total="total" :tableData="tableData" @update="handleUpdate" />
  </div>
</template>

<script>
import headerComp from '@/views/order/components/common/headerComp'
import listComp from '@/views/order/components/common/listComp'
export default {
  name: '',
  data () {
    return {
      total: 21,
      tableData: [
        {
          orderId: '66666',
          mainOrderNumber: '20200110000050',
          parentOrderNumber: '2020011015211810092',
          placeOrderTime: 1555555555,
          consignee: '小王',
          orderPrice: '160.9',
          payWay: '支付宝支付', // 余额支付/微信支付/支付宝支付
          deliveryWay: '配送方式',
          freight: '7',
          orderActualPrice: '160.9',
          redpack: '10',
          orderStatus: '1',
          linkUrl: 'https://test.51k1k.com/h5/oneCent/#/index'
        }
      ]
    }
  },
  components: { headerComp, listComp },
  created () {

  },
  mounted () {

  },
  computed: {

  },
  methods: {
    handleUpdate (val) {
      console.log('-currentPage-', val)
    }
  }
}
</script>

<style lang='less' scoped>

</style>
