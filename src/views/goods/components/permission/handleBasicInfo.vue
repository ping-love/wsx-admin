/**
* 商品基本信息
*/
<template>
  <div class="handleBasicInfo">
    <!-- 通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可 -->
    <el-form class="formContainer" :rules="rules" :model="formData" ref="formRef" label-width="140px">

      <!-- 级联选择器-- 商品前端分类 -->
      <el-form-item label="商品前端分类:">
        <el-cascader
          v-model="formData.goodsCategorys"
          size="mini"
          placeholder="请选择"
          :options="currObj.optionsCategory"
          :props="categoryConfig"
        ></el-cascader>
      </el-form-item>

      <!-- 级联选择器-- 商品类型 -->
      <el-form-item label="商品类型:" prop="goodsTypes">
        <el-cascader
          v-model="formData.goodsTypes"
          size="mini"
          placeholder="请选择"
          :options="currObj.optionsType"
          :props="typeConfig"
        ></el-cascader>
      </el-form-item>

      <!-- text输入框 -->
      <el-form-item label="商品名称:" prop="goodsName">
        <el-input v-model="formData.goodsName" clearable placeholder="请输入商品名称"></el-input>
      </el-form-item>

      <el-form-item label="商品子标题" prop="subTitle">
        <el-input type="textarea" rows="2" v-model="formData.subTitle" placeholder="请输入子标题"></el-input>
      </el-form-item>

      <!-- text输入框 -->
      <el-form-item label="商品货号:" prop="articleNum">
        <el-input v-model="formData.articleNum" clearable placeholder="请输入链接"></el-input>
      </el-form-item>

      <!-- text输入框 -->
      <el-form-item label="排序号:" prop="sortNum">
        <el-input v-model="formData.sortNum" clearable placeholder="请输入链接"></el-input>
      </el-form-item>

      <el-form-item label="选择供销商:" prop="supplierName">
        <el-select v-model="formData.supplierName" size="mini" placeholder="请选择">
          <el-option v-for="item in currObj.supplierArr" :key="item.label" :label="item.label" :value="item.label"></el-option>
        </el-select>
        <el-button class="syncErp" type="primary" size="mini" @click="syncErp(formData.supplierName)">同步ERP</el-button>
      </el-form-item>

      <!-- text输入框 -->
      <el-form-item label="原价:" prop="originalPrice">
        <el-input v-model="formData.originalPrice" clearable placeholder="请输入原价"></el-input> 元
      </el-form-item>

      <!-- text输入框 -->
      <el-form-item label="到手价:" prop="realPrice">
        <el-input v-model="formData.realPrice" clearable placeholder="请输入到手价"></el-input> 元
      </el-form-item>

      <!-- text输入框 -->
      <el-form-item label="抢购活动到手价:" prop="activityRealPrice">
        <el-input v-model="formData.activityRealPrice" clearable placeholder="请输入活动到手价"></el-input> 元
      </el-form-item>

      <!-- text输入框 -->
      <el-form-item label="ERP类目:" prop="erpCategory">
        <el-input v-model="formData.erpCategory" clearable placeholder="请输入ERP类目"></el-input>
      </el-form-item>

      <!-- text输入框 -->
      <el-form-item label="发货地:" prop="sourceGoods">
        <el-input v-model="formData.sourceGoods" clearable placeholder="请输入发货地"></el-input>
      </el-form-item>

      <!-- text输入框 -->
      <el-form-item label="积分抵扣:" prop="integralDeduction">
        <el-input-number v-model="formData.integralDeduction" :min="1" controls-position="right"></el-input-number>
      </el-form-item>

      <!-- text输入框 -->
      <el-form-item label="预售出数量:" prop="presellNum">
        <el-input-number v-model="formData.presellNum" :min="1" controls-position="right"></el-input-number>
      </el-form-item>

      <!-- text输入框 -->
      <el-form-item label="警戒库存:" prop="noStock">
        <el-input-number v-model="formData.noStock" :min="1" controls-position="right"></el-input-number>
      </el-form-item>
      <!-- text输入框 -->
      <el-form-item label="商品重量:" prop="goodsWeight">
        <el-input-number v-model="formData.goodsWeight" :min="1" controls-position="right"></el-input-number> 克
      </el-form-item>

      <!-- text输入框 -->
      <el-form-item label="奖励集:" prop="award">
        <el-input-number v-model="formData.award" :min="1" controls-position="right"></el-input-number>
      </el-form-item>

      <!-- text输入框 -->
      <el-form-item label="开票类型:" prop="invoiceCategory">
        <el-input v-model="formData.invoiceCategory" clearable  placeholder="请输入开票类型"></el-input>
      </el-form-item>

      <!-- text输入框 -->
      <el-form-item label="开票税率:" prop="invoiceTaxRate">
        <el-input-number v-model="formData.invoiceTaxRate" :min="1" controls-position="right"></el-input-number>
      </el-form-item>

      <el-form-item label="是否支持7天无理由退换:" prop="isSupportReturns">
        <el-radio-group v-model="formData.isSupportReturns">
          <el-radio label="不支持"></el-radio>
          <el-radio label="支持"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="是否抢购:" prop="isSnapUp">
        <el-radio-group v-model="formData.isSnapUp">
          <el-radio label="不是"></el-radio>
          <el-radio label="是"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="是否主推爆款:" prop="isGeneralizeHot">
        <el-radio-group v-model="formData.isGeneralizeHot">
          <el-radio label="不是"></el-radio>
          <el-radio label="是"></el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- 时间选择框 -->
      <el-form-item label="抢购时间:" prop="snapUpTime">
        <el-date-picker
          v-model="formData.snapUpTime"
          type="datetimerange"
          size="mini"
          :picker-options="pickerOptions"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          align="right"
        ></el-date-picker>
      </el-form-item>

      <el-form-item label="助力分享标题:" prop="helpShareTitle">
        <el-input v-model="formData.helpShareTitle" clearable placeholder="请输入分享标题"></el-input>
      </el-form-item>

      <el-form-item label="商品分享标题:" prop="goodsShareTitle">
        <el-input v-model="formData.goodsShareTitle" clearable placeholder="请输入分享标题"></el-input>
      </el-form-item>

      <!-- 图片上传 -->
      <el-form-item label="微信分享图:" prop="weixinSharePic">
        <img-upload v-model="formData.weixinSharePic" :limit="4"></img-upload>
        <p>长宽比5：4 (建议750 x 600)</p>
        <p>备注:分享到微信小程序时候，如果这个字段没有配置，默认取商品轮播图的主图(会被5：4比率截取)</p>
      </el-form-item>

      <!-- 图片上传 -->
      <el-form-item label="精品图片:" prop="beautifulPic">
        <img-upload v-model="formData.beautifulPic" :limit="4"></img-upload>
        <p>长方形(建议 718 x 218)</p>
        <p>备注：如果没有配置，默认取商品轮播图的主图</p>
      </el-form-item>

      <!-- 图片上传 -->
      <el-form-item label="活动图片:" prop="activityPic">
        <img-upload v-model="formData.activityPic" :limit="4"></img-upload>
      </el-form-item>

      <el-form-item label="视频地址:" prop="videoAddress">
        <el-input type="textarea" rows="4" v-model="formData.videoAddress" placeholder="请输入视频地址"></el-input>
      </el-form-item>

      <!-- 图片上传 -->
      <el-form-item label="视频底图:" prop="videoBaseMap">
        <img-upload v-model="formData.videoBaseMap" :limit="4"></img-upload>
        <p>正方形(建议 750 x 750)</p>
        <p>如果有视频，必须配置</p>
      </el-form-item>

      <!-- radio选择框 -->
      <el-form-item label="商品销售状态:" prop="goodsSellStatus">
        <el-radio-group v-model="formData.goodsSellStatus">
          <el-radio label="出售中"></el-radio>
          <el-radio label="仓库中"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="积分商品:" prop="isIntegralGoods">
        <el-radio-group v-model="formData.isIntegralGoods">
          <el-radio label="否"></el-radio>
          <el-radio label="是"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="商品是否推荐(显示在首页):" prop="isRecommendGoods">
        <el-radio-group v-model="formData.isRecommendGoods">
          <el-radio label="否"></el-radio>
          <el-radio label="是"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="助力红包小标签:" prop="tags">
        <el-checkbox-group v-model="formData.tags">
          <el-checkbox v-for="item in redpackTags" :key="item.key" :label="item.label"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="运费模板:" prop="freightTemplateName">
        <el-select v-model="formData.freightTemplateName" size="mini" placeholder="请选择">
          <el-option v-for="item in currObj.freightTemplateArr" :key="item.label" :label="item.label" :value="item.label"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="商品轮播图片:" prop="goodsBannerPic">
        <el-button type="primary" icon="el-icon-upload" @click="handleUpload('bannerPic')">上传图片</el-button>
        <el-button type="danger" @click="handleBatchDelete('bannerPic')">批量删除</el-button>
      </el-form-item>

      <el-form-item label="商品简介:" prop="goodsIntroduce">
        <el-input type="textarea" rows="6" v-model="formData.goodsIntroduce" placeholder="请输入商品简介"></el-input>
      </el-form-item>

      <el-form-item label="商品详情图片:" prop="goodsDetailPic">
        <el-button type="primary" icon="el-icon-upload" @click="handleUpload('detailPic')">上传图片</el-button>
        <el-button type="danger" @click="handleBatchDelete('detailPic')">批量删除</el-button>
      </el-form-item>

      <!-- 下一步 -->
      <el-form-item>
        <el-button type="primary" @click="nextForm">下一步</el-button>
      </el-form-item>

      <!-- 确认/重置按钮 -->
      <!-- <el-form-item>
        <el-button type="primary" @click="saveForm">保存</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item> -->

    </el-form>
  </div>
</template>

<script>
import imgUpload from '@/components/imgUpload'
import tools from '@/utils/tools'
import { categoryConfig, typeConfig } from '@/views/goods/cascaderApi'

export default {
  name: '',
  data () {
    return {
      categoryConfig: categoryConfig,
      typeConfig: typeConfig,
      pickerOptions: tools.pickerOptionsRange,
      redpackTags: [ // 助力红包小标签
        { key: '1', label: '不显示' },
        { key: '2', label: '分享底价购' },
        { key: '3', label: '助力得红包' },
        { key: '4', label: '红包可提现' }
      ],
      // 验证规则
      rules: {
        goodsTypes: [{ type: 'array', required: true, message: '请选择商品类型', trigger: 'change' }],
        goodsName: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        cardClassify: [{ required: true, message: '请选择类型', trigger: 'change' }],
        articleNum: [{ required: true, message: '请输入链接', trigger: 'blur' }],
        startTime: [{ type: 'date', required: true, message: '请选择开始时间', trigger: 'change' }],
        endTime: [{ type: 'date', required: true, message: '请选择结束时间', trigger: 'change' }],
        isShow: [{ required: true, message: '请选择显示类型', trigger: 'change' }],
        uploadPics: [{ type: 'array', required: true, message: '请选择需要上传的图片', trigger: 'change' }]
      }
    }
  },
  props: {
    /** add=添加、edit=编辑 */
    type: {
      type: String,
      default: ''
    },
    formData: {
      type: Object,
      default () {
        return {}
      }
    },
    currObj: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: { imgUpload },
  created () {},
  mounted () {
    // console.log(this.type, this.formData)
  },
  computed: {},
  methods: {
    syncErp (supplierName) {
      console.log('supplierName:', supplierName)
    },
    handleUpload (typeName) {
      console.log(typeName)
    },
    handleBatchDelete (typeName) {
      console.log(typeName)
    },
    // 下一步 商品类型没有选择 ==> 商品属性显示状态一，页面只有一个提交按钮，反之，显示状态二
    nextForm () {
      console.log(this.formData)
      this.$refs.formRef.validate(valid => {
        if (valid) {
          // TODO 请求的成功回调中执行，保存成功提示，并清空输入框数据
          console.log('formData:', this.formData)
          this.$message({
            type: 'info',
            message: '下一步'
          })
          // if (this.formData.goodsTypes.length === 0) {
          //   this.$emit('nextstep', this.formData)
          // } else {

          // }
        } else {
          console.log('no submit!')
          this.$message({
            type: 'info',
            message: '请你查看一下是否有些必填的字段没有填写'
          })
          return false
        }
      })
    },
    saveForm () {
      this.$refs.formRef.validate(valid => {
        if (valid) {
          // TODO 请求的成功回调中执行，保存成功提示，并清空输入框数据
          console.log('formData:', this.formData)
          this.$message({
            message: '保存成功'
          })
          // this.$refs['formData'].resetFields() // 请求成功后
          this.$router.push({ name: 'ActivityCardListIndex' }) // 请求成功后
        } else {
          console.log('no submit!')
          return false
        }
      })
    },
    resetForm () {
      this.$refs.formRef.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.linkExplain {
  font-size: 12px;
  color: #d2d2d2;
  line-height: 12px;
  padding-top: 12px;
}
.el-input {
  width: 360px;
}
.el-textarea {
  width: 360px;
}
/deep/ .el-form-item__label {
  padding-right: 16px;
}

.handleBasicInfo {
  border: 1px solid #ccc;
  border-radius: 4px;
}
.syncErp {
  margin-left: 10px;
}
</style>
