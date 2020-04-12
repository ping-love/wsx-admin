/**
* 修改地址
*/
<template>
  <div class='editAddress'>
    <el-dialog
      title="修改地址"
      :visible.sync=" outerVisible"
      width="50%"
      :before-close="handleBeforeClose"
    >
      <!-- 用户地址 -->
      <div class="addressBox">
        <div class="" v-for="(item, index) in radioList" :key="index">
          <el-radio v-model="currentSelId" :label="item.addressId" @change="handleRadioChange(item.addressId)">{{ item.totalAddress }}</el-radio>
          <el-button type="primary" size="mini" @click="onEdit" v-show="isShowEditBtn && index === radioList.length - 1">编辑</el-button>
        </div>
      </div>

      <!-- 编辑当前地址 -->
      <editCurrentAddress :visible.sync="isShowInnerDialog" :formData="formData" />

      <span slot="footer">
        <el-button type="info" @click="onClose">关 闭</el-button>
        <el-button type="primary" @click="onSave">保 存</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import editCurrentAddress from './editCurrentAddress'
import areaData from '@/utils/areaData'
export default {
  name: '',
  data () {
    return {
      isShowEditBtn: true,
      isShowInnerDialog: false,
      addressFormData: {
        username: '',
        phone: '',
        addressName: '',
        other: ''
      },
      // addressId: '', // 地址id
      addressList: []
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    addressId: {
      type: String,
      required: true
    }
  },
  components: {
    editCurrentAddress
  },
  created () {
    this.getData()
  },
  mounted () {

  },
  computed: {
    outerVisible: {
      get () {
        return this.visible
      },
      set (val) {
        this.$emit('update:visible', val)
      }
    },
    // 当前选中的radio
    currentSelId: {
      get () {
        return this.addressId
      },
      set (val) {
        this.$emit('update:addressId', val)
      }
    },
    radioList () {
      let midArr = []
      this.addressList.map(val => {
        let mid = {}
        mid = { ...val }
        mid['totalAddress'] = `${val.username},${val.phone}, ${areaData.getAddressByIds(val.addressName)} ${val.other}`
        midArr.push(mid)
      })
      console.log('-radio-list-', midArr)
      return midArr
    },
    formData () {
      return this.addressList[this.addressList.length - 1]
    }
  },
  methods: {
    initData () {
      this.outerVisible = false
      this.isShowEditBtn = true
      this.currentSelId = this.radioList[this.radioList.length - 1].addressId
    },
    handleRadioChange (val) {
      console.log('-sel-radio-', val)
      this.isShowEditBtn = val === this.radioList[this.radioList.length - 1].addressId
    },
    onEdit () {
      this.isShowInnerDialog = true
    },
    handleBeforeClose () {
      this.initData()
    },
    onClose () {
      this.initData()
    },
    onSave () {
      setTimeout(() => {
        this.outerVisible = false
        let info = {
          addressId: '10013',
          username: '小红',
          phone: '18696132656',
          province: '浙江省',
          city: '杭州市',
          area: '下城区',
          other: '建国北路168号',
          name: '330103'
        }
        this.$emit('update', info)
      }, 500)
    },
    getData () {
      console.log('请求数据...')
      // 用户地址list
      let list = [
        {
          addressId: '10011',
          username: '小王',
          phone: '18696132622',
          addressName: '330109',
          other: '钱江世纪城'
        },
        {
          addressId: '10012',
          username: '小小王',
          phone: '18696132611',
          addressName: '330105',
          other: '运河上街'
        }
      ]
      let addressInfo = {
        addressId: '10013',
        username: '小王',
        phone: '18696132611',
        addressName: '330103',
        other: '钱江世纪城'
      }
      // this.addressId = addressInfo.addressId
      setTimeout(() => {
        this.addressList = [...list, addressInfo]
        this.$message({
          message: '请求成功',
          type: 'success'
        })
      }, 1000)
    }
  }
}
</script>

<style lang='less' scoped>
.addressBox {
  display: flex;
  flex-direction: column;
}
.el-radio {
  padding: 10px 0;
}
/deep/ .el-dialog__body {
  padding:30px 50px;
}
</style>
