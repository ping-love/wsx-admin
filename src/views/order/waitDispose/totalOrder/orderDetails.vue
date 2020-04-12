/**
* 订单详情
*/
<template>
  <div class='orderDetails'>
    <div class="userStatus">
      <span class="normal">{{`当前订单（${parentOrderNumber}）状态：${orderStatus}`}}</span>
      <!-- <span class="disabled">当前用户状态：已禁用</span> -->
    </div>
    <el-divider></el-divider>

    <div class="btns">
      <el-button size="mini" type="primary" @click="onPrint" v-print="printOptions">打印当前订单</el-button>
      <el-button type="primary" size="mini" @click="onEditPrice" v-if="isShowPriceBtn">修改价格</el-button>
      <el-button type="primary" size="mini" @click="onEditAddress" v-if="isShowAddressBtn">修改收货地址</el-button>
    </div>

    <div class="wrap">

      <div class="infoBox">
        <h4>用户信息：</h4>
        <ul>
          <li>
            <div class="title">联系方式：</div>
            <div class="content">{{ userInfo.phone }}</div>
          </li>
          <li>
            <div class="title">QQ：</div>
            <div class="content">{{ userInfo.qq }}</div>
          </li>
        </ul>
      </div>

      <div class="tableBox">
        <h4>商品信息:</h4>
        <el-table :data="tableData" tooltip-effect="dark">
          <el-table-column label="商品图片" min-width="80">
            <template slot-scope="scope">
              <el-image :src="scope.row.goodsPic" fit="cover"></el-image>
            </template>
          </el-table-column>
          <el-table-column prop="goodsName" label="商品名称" min-width="100"></el-table-column>
          <el-table-column prop="childrenOrderNumber" label="子订单编号" min-width="100"></el-table-column>
          <el-table-column prop="skuAttr" label="规格属性"></el-table-column>
          <el-table-column prop="articleNumber" label="货号" min-width="100"></el-table-column>
          <el-table-column prop="goodsPrice" label="商品价格" min-width="80"></el-table-column>
          <el-table-column prop="number" label="购买数量" min-width="70"></el-table-column>
          <el-table-column prop="totalPrice" label="总价" min-width="60"></el-table-column>
          <el-table-column label="查看">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="onRecord(scope.row)">操作记录</el-button>
            </template>
          </el-table-column>
        </el-table>

      </div>

      <div class="infoBox">
        <h4>订单实收款结算：</h4>
        <ul>
          <li>
            <div class="title">商品原价（元）：</div>
            <div class="content">{{ payInfo.originalPrice }}</div>
          </li>
          <li>
            <div class="title">商品总重量（克）：</div>
            <div class="content">{{ payInfo.goodsWeight }}</div>
          </li>
          <li>
            <div class="title">订单折扣（元）：</div>
            <div class="content">{{ payInfo.discount }}</div>
          </li>
          <li>
            <div class="title">运费（元）：</div>
            <div class="content">{{ payInfo.freight }}</div>
          </li>
          <li>
            <div class="title">订单实收款（元）：</div>
            <div class="content">{{ payInfo.orderActualPrice }}</div>
          </li>
          <li>
            <div class="title">发出红包（元）：</div>
            <div class="content">{{ payInfo.redpack }}</div>
          </li>
        </ul>
      </div>

      <div class="infoBox">
        <h4>物流信息：</h4>
        <ul>
          <li>
            <div class="title">物流公司：</div>
            <div class="content">{{ logisticsCompany }}</div>
          </li>
          <li class="addressInfo">
            <div class="title">收货信息：</div>
            <div class="content">{{ addressInfo }}</div>
          </li>
          <li>
            <div class="title">物流单号：</div>
            <div class="content">{{ logisticsNumber }}</div>
          </li>
          <li>
            <div class="title">买家留言：</div>
            <div class="content">{{ logisticsInfo.leaveMsg }}</div>
          </li>
        </ul>
      </div>

    </div>

    <operateRecord :visible.sync="isShowOperate" :tableData="operateTableData" />
    <editAddress
      :visible.sync="editAddress.isShowEditAddress"
      :addressId.sync="editAddress.addressId"
      @update="handleEditAddress"
      v-if="editAddress.isShowDialog"
    />
    <editPrice :visible.sync="isShowEditPrice" :formData="priceFormData" />

  </div>
</template>

<script>
import operateRecord from '@/views/order/components/wait/operateRecord'
import editAddress from '@/views/order/components/wait/editAddress'
import editPrice from '@/views/order/components/wait/editPrice'
import { getOrderStatus } from '@/filters/transformTwo'
import bus from '@/utils/bus'
import print from '@/directive/print'

export default {
  name: '',
  data () {
    return {
      parentOrderNumber: '',
      isShowOperate: false,

      // 修改地址dialog
      editAddress: {
        isShowDialog: false,
        isShowEditAddress: false,
        addressId: ''
      },

      isShowEditPrice: false,
      tableData: [],
      userInfo: {},
      payInfo: {},
      logisticsInfo: {},
      operateTableData: [],
      priceFormData: {
        price: ''
      },

      printOptions: {
        selector: '.orderDetails',
        popTitle: '订单详情',
        extraHead: '',
        beforeCallback () {
          console.log('开始打印')
        },
        endCallback () {
          console.log('关闭打印')
        }
      }
    }
  },
  components: {
    operateRecord,
    editAddress,
    editPrice
  },
  created () {
    console.log('-currentData-', this.$route.query)
    this.parentOrderNumber = this.$route.query.parentOrderNumber
    this.getData()
  },
  mounted () {
    bus.$on('update', (data) => {
      console.log(data)
      this.editAddress.isShowEditAddress = false
    })
  },
  computed: {
    orderStatus () {
      // console.log(this.$route.query.orderStatus)
      let { orderStatus } = this.$route.query
      return getOrderStatus(+orderStatus)
    },
    logisticsCompany () {
      return this.logisticsInfo.logisticsCompany || '暂无运单信息'
    },
    addressInfo () {
      // const { username, phone } = this.userInfo
      const { username, phone, province, city, area, other } = this.logisticsInfo.addressInfo
      return `${username},${phone} ${province} ${city} ${area} ${other}`
    },
    logisticsNumber () {
      return this.logisticsInfo.logisticsNumber || '暂无运单信息'
    },
    isShowPriceBtn () {
      return this.orderStatus === '待付款'
    },
    isShowAddressBtn () {
      // console.log('-orderStatus-', this.orderStatus)
      return this.orderStatus === '待付款' || this.orderStatus === '已付款'
    }
  },
  directives: {
    print
  },
  methods: {
    handleEditAddress (data) {
      console.log(data)
      this.$message({
        message: '保存成功，用户收货地址已更新...',
        type: 'info'
      })
      this.logisticsInfo.addressInfo = data
    },
    onPrint () {
      console.log('打印当前订单')
    },
    onEditPrice () {
      console.log('-修改价格-')
      this.isShowEditPrice = true
      this.priceFormData.price = this.payInfo.orderActualPrice
    },
    onEditAddress () {
      console.log('-修改收货地址-')
      this.editAddress.isShowEditAddress = true
      this.editAddress.isShowDialog = true
    },
    onRecord (row) {
      let list = [
        {
          serialNum: 1,
          changeBeforeStatus: 1,
          changeAfterStatus: 2,
          changeTime: 1555555555,
          operatorIp: '192.168.20.244',
          operatorDesc: 'ID为67249的用户于2020-01-11 15:21:43将订单状态由待付款改为已付款,支付方式为 余额支付'
        }
      ]
      console.log('-操作记录-', row)
      this.isShowOperate = true
      this.operateTableData = [...list, ...list, ...list, ...list]
      this.operateTableData = [...this.operateTableData, ...this.operateTableData]
    },
    getData () {
      let detailData = {
        orderId: '66666',
        orderStatus: '1',
        userInfo: {
          username: '小王',
          phone: '18696132633',
          qq: null
        },
        goodsInfo: [{
          goodsPic: 'http://img.51k1k.com/Uploads/image/default/2018-12/20181226163904_27422_800_800.jpg',
          goodsName: '环球休闲女鞋帆布鞋耐磨防滑小白鞋',
          childrenOrderNumber: '20200111140346556158',
          skuAttr: '白粉色 36码',
          articleNumber: 'test-K0000032',
          goodsPrice: '55.00',
          number: '1',
          totalPrice: '￥55.00'
        }],
        payInfo: {
          originalPrice: '55.00',
          goodsWeight: '',
          discount: '0',
          freight: '0.00',
          orderActualPrice: '55',
          redpack: '0'
        },
        logisticsInfo: {
          logisticsCompany: '',
          addressInfo: {
            addressId: '10013',
            username: '小王',
            phone: '18696132622',
            province: '浙江省',
            city: '杭州市',
            area: '萧山区',
            other: '钱江世纪城',
            name: '330103'
          },
          logisticsNumber: '',
          leaveMsg: '用户留言'
        }
      }
      console.log(detailData)
      this.tableData = detailData.goodsInfo
      this.userInfo = detailData.userInfo
      this.payInfo = detailData.payInfo
      this.logisticsInfo = detailData.logisticsInfo
      this.editAddress.addressId = detailData.logisticsInfo.addressInfo.addressId
    }
  }
}
</script>

<style lang='less' scoped>
@import '~@/assets/styles/variables';
@import '~@/views/user/styles/infoBox.less';

.orderDetails {
  &.v-print {
    // width: 800px;
  }
}
.userStatus {
  font-size: 15px;
  font-weight: 700;

  .normal {
    color: @green;
  }
  .disabled {
    color: @red;
  }
}

.btns {
  padding: 0 0 5px;
  background-color: @bgColor;

  .el-button {
    margin-bottom: 5px;
  }
  .el-button--mini {
    padding: 8px 8px;
  }
  .el-button + .el-button {
    margin-left: 0;
  }
}

.tableBox {
  padding-bottom: 30px;
  h4 {
    font-weight: 700;
    padding: 0 0 10px;
    font-size: 15px;
  }
}

.addressInfo {
  .content {
    display: flex;
    justify-content: space-between;
  }
}

.el-table {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  /deep/ .cell {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.el-image {
  width: 60px;
  height: 60px;
}
</style>
