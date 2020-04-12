/**
* 售后订单
*/
<template>
  <div class='afterSale'>
    <el-tabs
      v-model="activeName"
      @tab-click="handleTabClick"
    >
      <el-tab-pane label="仅退款订单(未发货)" name="first" >
        <returnMoney
          :currentData="returnMoneyData"
          @agree="handleAgree"
          @reject="handleReject"
          @edit="handleEdit"
          v-if="activeName === 'first'"
        />
      </el-tab-pane>
      <el-tab-pane label="仅退款退货订单(已发货)" name="second" >
        <returnGoods
          :currentData="returnGoodsData"
          @agree="handleAgree"
          @reject="handleReject"
          @edit="handleEdit"
          v-if="activeName === 'second'"
        />
      </el-tab-pane>
      <el-tab-pane label="仅换货订单(已发货)" name="third" >
        <exchangeGoods
          :currentData="exchangeGoodsData"
          @agree="handleAgree"
          @reject="handleReject"
          @edit="handleEdit"
          v-if="activeName === 'third'"
        />
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
import returnMoney from '@/views/order/components/wait/returnMoney'
import returnGoods from '@/views/order/components/wait/returnGoods'
import exchangeGoods from '@/views/order/components/wait/exchangeGoods'
export default {
  name: '',
  data () {
    return {
      activeName: 'first',
      returnMoneyData: {},
      returnGoodsData: {},
      exchangeGoodsData: {}
    }
  },
  components: {
    returnMoney,
    returnGoods,
    exchangeGoods
  },
  created () {
    this.getReturnMoneyData()
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    handleAgree (data) {
      console.log('-agree-', data)
    },
    handleReject (data) {
      console.log('-reject-', data)
    },
    handleEdit (data) {
      console.log('-edit-', data)
    },
    handleTabClick (tab, event) {
      console.log(tab.name, event)
      switch (tab.name) {
        case 'first':
          this.getReturnMoneyData()
          break
        case 'second':
          this.getReturnGoodsData()
          break
        case 'third':
          this.getExchangeGoodsData()
          break
      }
    },
    getReturnMoneyData () {
      let data = {
        total: 41,
        list: [
          {
            orderNumber: '20200113093005708554',
            actualPrice: '12.00',
            refundAmount: '10.00',
            differenceValue: '2.00',
            reason: '多拍/拍错了/不想要',
            explain: '7天无理由退换货',
            explainImg: 'https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png',
            applyTime: 1555555555,
            handleTime: 1555555555,
            handleStatus: 1,
            handleNotes: '暂无备注信息',
            creditValue: '1',
            previewImgs: ['https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png']
          }
        ]
      }
      this.returnMoneyData = data
    },
    getReturnGoodsData () {
      let data = {
        total: 36,
        list: [
          {
            orderNumber: '20200113093005708554',
            actualPrice: '12.00',
            refundAmount: '10.00',
            differenceValue: '2.00',
            reason: '多拍/拍错了/不想要',
            explain: '7天无理由退换货',
            explainImg: 'https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png',
            applyTime: 1555555555,
            handleTime: 1555555555,
            handleStatus: 1,
            handleNotes: '暂无备注信息',
            creditValue: '1',
            previewImgs: ['https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png']
          }
        ]
      }
      this.returnGoodsData = data
    },
    getExchangeGoodsData () {
      let data = {
        total: 36,
        list: [
          {
            orderNumber: '20200113093005708554',
            reason: '多拍/拍错了/不想要',
            explain: '7天无理由退换货',
            explainImg: 'https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png',
            applyTime: 1555555555,
            handleTime: 1555555555,
            handleStatus: 1,
            handleNotes: '暂无备注信息',
            previewImgs: ['https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png']
          }
        ]
      }
      this.exchangeGoodsData = data
    }
  }
}
</script>

<style lang='less' scoped>

</style>
