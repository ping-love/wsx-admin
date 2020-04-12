/** * 添加或编辑店铺运费模板 */
<template>
  <div class="handleFreightTempl">
    <el-form
      label-position="right"
      label-width="120px"
      :model="formData"
      class="formBox"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item label="运费模板名称：" prop="name">
        <el-input v-model="formData.name" placeholder="可输入汉字，字母或数字"></el-input>
      </el-form-item>

      <el-form-item label="宝贝地址：" prop="goodsArea">
        <el-cascader
          :options="areaData"
          :props="propsGoods"
          v-model="formData.goodsArea"
          collapse-tags
          clearable
          filterable
        ></el-cascader>
      </el-form-item>

      <el-form-item label="配送区域：" prop="deliveryArea">
        <el-button @click="isVisible = true">选择省市</el-button>
        <div class="chooseArea">{{transArea(formData.deliveryArea)}}</div>
      </el-form-item>

      <el-form-item label="配送方式：" prop="deliveryType">
        <el-radio v-model="formData.deliveryType" :label="1">快递</el-radio>
        <el-radio v-model="formData.deliveryType" :label="2">EMS</el-radio>
        <el-radio v-model="formData.deliveryType" :label="3">平邮</el-radio>
      </el-form-item>

      <el-form-item label="计费规则：" prop="ruleType">
        <div>
          <el-radio v-model="formData.ruleType" :label="1">
            每个订单满
            <el-input-number
              v-model="formData.upToFree"
              controls-position="right"
              :min="0"
            ></el-input-number>元包邮，否则运费
            <el-input-number
              v-model="formData.baseFreight"
              controls-position="right"
              :min="0"
            ></el-input-number>元
          </el-radio>
        </div>
        <div class="fixedFreightBox">
          <el-radio v-model="formData.ruleType" :label="2">
            固定运费为
            <el-input-number
              v-model="formData.fixedFreight"
              controls-position="right"
              :min="0"
            ></el-input-number>元
          </el-radio>
        </div>
        <p>备注：运费按照订单金额－优惠－返现之后的订单金额收取</p>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>

    <remainArea v-model="formData.deliveryArea" :cityDataDid="cityDataDid" :visible.sync="isVisible"/>
  </div>
</template>

<script>
import areaData from '@/utils/areaData'
import remainArea from '@/views/system/components/deliverySettings/remainArea'

export default {
  props: {
    // add：添加  edit：编辑
    type: {
      type: String,
      default: 'add'
    },
    formData: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  data () {
    return {
      rules: {
        name: [
          { required: true, message: '请输入运费模板名称', trigger: 'blur' }
        ]
      },
      propsGoods: {
        value: 'id',
        label: 'value',
        children: 'child'
      },
      areaData: areaData.getArea(),
      cityDataDid: [],
      isVisible: false
    }
  },

  computed: {},

  created () {
    this.getCityDataDid()
  },

  methods: {
    onSubmit () {
      console.log(this.formData)
      this.$refs.formRef.validate(valid => {
        if (valid) {
          console.log('提交成功')
        }
      })
    },
    onReset () {
      this.$refs.formRef.resetFields()
    },
    // 获取已选省市数据
    getCityDataDid () {

    },
    // 省市id转文字
    transArea (ids) {
      const txt = areaData.getAreaByIds(ids)
      return txt ? '已选：' + txt : ''
    }
  },

  components: { remainArea }
}
</script>

<style lang="less" scoped>
@width: 500px;

.handleFreightTempl {

  .el-input {
    width: @width;
  }
  /deep/ .el-form-item__label {
    font-weight: 700;
  }
  .el-input-number {
    margin-right: 10px;
    width: 135px;
  }
  .el-form-item {
    color: #666;
  }
  .el-cascader {
    width: @width;
  }
  .fixedFreightBox {
    padding: 20px 0 10px;
  }

  .chooseArea {
    line-height: 1.5;
    padding-top: 10px;
    color: #4096ff;
  }
}
</style>
