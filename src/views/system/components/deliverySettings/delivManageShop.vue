/**
 * 店铺运费设置tab栏组件
 */
<template>
  <div class='delivManageShop'>
    <div class="addBtn">
      <el-button type="primary" @click="toAdd">新增运费模板</el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column prop="name" label="模板名" width="150"></el-table-column>
      <el-table-column prop="deliveryType" label="配送方式" width="80"></el-table-column>
      <el-table-column prop="area" label="配送到" min-width="200"></el-table-column>
      <el-table-column prop="rule" label="运费规则"></el-table-column>
      <el-table-column prop="time" label="最后编辑时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="toEdit(scope)">修改</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import areaData from '@/utils/areaData'

export default {
  props: {},

  data () {
    return {
      tableData: [
        {
          id: '1',
          name: '342342',
          deliveryType: '快递',
          area: '内蒙古自治区,辽宁省,吉林省,黑龙江省,云南省,甘肃省,青海省,宁夏回族自治区',
          rule: '每个订单满34元包邮，不满34元，运费12元',
          time: '2019-11-06 18:06:22'
        },
        {
          id: '2',
          name: '342342',
          deliveryType: '快递',
          area: '内蒙古自治区,辽宁省,吉林省,黑龙江省,云南省,甘肃省,青海省,宁夏回族自治区',
          rule: '每个订单满34元包邮，不满34元，运费12元',
          time: '2019-11-06 18:06:22'
        },
        {
          id: '3',
          name: '342342',
          deliveryType: '快递',
          area: '内蒙古自治区,辽宁省,吉林省,黑龙江省,云南省,甘肃省,青海省,宁夏回族自治区',
          rule: '每个订单满34元包邮，不满34元，运费12元',
          time: '2019-11-06 18:06:22'
        }
      ]
    }
  },

  computed: {},

  created () {
    const ids = [
      '120000',
      '130100',
      '130200',
      '130300',
      '130400',
      '130500',
      '130600',
      '130700',
      '130800',
      '130900',
      '131000',
      '131100',
      '140300',
      '140400'
    ]
    console.log(areaData.getAreaByIds(ids))
  },

  methods: {
    toEdit (scope) {
      this.$router.push({
        name: 'EditShopFreTempl',
        query: {
          id: scope.id
        }
      })
    },
    toAdd () {
      this.$router.push({
        name: 'AddShopFreTempl'
      })
    }
  },

  components: {}
}
</script>

<style lang='less' scoped>
.addBtn {
  padding: 10px 0 20px;
}
</style>
