/**
* 添加/编辑首页品牌banner
*/
<template>
  <div class="handleHomeBrandBanner">
    <!-- 通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可 -->
    <el-form class="formContainer" :rules="rules" :model="formData" ref="formRef" label-width="140px">

      <el-form-item label="标题:" prop="title">
        <el-input v-model="formData.title" clearable placeholder="请输入标题"></el-input>
      </el-form-item>

      <el-form-item label="是否显示:" prop="isShow">
        <el-radio v-model="formData.isShow" :label="item.label" v-for="item in isShows" :key="item.value"></el-radio>
      </el-form-item>

      <el-form-item label="链接/商品ID:" prop="linkOrId">
        <el-input v-model="formData.linkOrId" clearable placeholder="请输入链接或者商品ID"></el-input>
        <el-tooltip content="如果是外部链接，请填写完整链接；如果是内置商品，请填写商品ID" placement="right">
          <i class="el-icon-question"></i>
        </el-tooltip>
      </el-form-item>

      <el-form-item label="排序号:" prop="sortNum">
        <el-input v-model="formData.sortNum" clearable placeholder="请输入排序号"></el-input>
      </el-form-item>

      <el-form-item label="品牌banner:" prop="brandBanners">
        <img-upload v-model="formData.brandBanners" :limit="1"></img-upload>
      </el-form-item>

      <el-form-item label="图片尺寸类型:" prop="imgSizeType">
        <el-radio v-model="formData.imgSizeType" :label="item.label" v-for="item in imgSizeTypes" :key="item.value"></el-radio>
      </el-form-item>

      <!-- 确认/重置按钮 -->
      <el-form-item>
        <el-button type="primary" @click="saveForm">保存</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import ImgUpload from '@/components/imgUpload'
import { getIsShow } from '@/filters/transform'
import { getBrandBanner } from '@/filters/transformTwo'
export default {
  name: '',
  data () {
    return {
      isShows: getIsShow(),
      imgSizeTypes: getBrandBanner(),
      // 验证规则
      rules: {
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        sortNum: [{ required: true, message: '请输入排序号', trigger: 'blur' }],
        brandBanners: [{ type: 'array', required: true, message: '请选择需要上传的图片', trigger: 'change' }]
      }
    }
  },
  props: {
    type: {
      type: String,
      default: ''
    },
    formData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: { ImgUpload },
  created () {},
  mounted () {},
  computed: {},
  methods: {
    saveForm () {
      this.$refs.formRef.validate(valid => {
        if (valid) {
          // TODO 请求的成功回调中执行，保存成功提示，并清空输入框数据
          console.log('formData:', this.formData)
          this.$message({
            message: '保存成功'
          })
          // this.$refs.formRef.resetFields() // 请求成功后
          this.$router.push({ name: 'BrandBannerListIndex' })
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
.handleHomeBrandBanner {
  i {
    font-size: 24px;
    vertical-align: middle;
    color: #999;
  }
}

.el-input {
  width: 220px;
}
/deep/ .el-form-item__label {
  padding-right: 16px;
}

</style>
