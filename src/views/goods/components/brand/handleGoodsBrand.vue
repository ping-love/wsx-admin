/**
* 添加/编辑商品品牌
*/
<template>
  <div class="handleGoodsBrand">
    <!-- 通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可 -->
    <el-form class="formContainer" :rules="rules" :model="formData" ref="formRef" label-width="140px">

      <el-form-item label="品牌名称:" prop="brandName">
        <el-input v-model="formData.brandName" clearable placeholder="请输入分类名称"></el-input>
      </el-form-item>

      <el-form-item label="品牌图标:" prop="brandIcons">
        <img-upload v-model="formData.brandIcons" :limit="1"></img-upload>
      </el-form-item>

      <el-form-item label="品牌海报:" prop="brandPosters">
        <img-upload v-model="formData.brandPosters" :limit="1"></img-upload>
      </el-form-item>

      <el-form-item label="是否显示在首页:" prop="isHomeShow">
        <el-radio v-model="formData.isHomeShow" :label="item.label" v-for="item in isShowArr" :key="item.value"></el-radio>
      </el-form-item>

      <el-form-item label="首页宣传图:" prop="publicityImgs">
        <img-upload v-model="formData.publicityImgs" :limit="1"></img-upload>
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
export default {
  name: '',
  data () {
    return {
      isShowArr: getIsShow(),
      // 验证规则
      rules: {
        brandName: [{ required: true, message: '请输入品牌名称', trigger: 'blur' }],
        brandIcons: [{ type: 'array', required: true, message: '请选择需要上传的图片', trigger: 'change' }],
        brandPosters: [{ type: 'array', required: true, message: '请选择需要上传的图片', trigger: 'change' }],
        publicityImgs: [{ type: 'array', required: true, message: '请选择需要上传的图片', trigger: 'change' }]
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
          this.$router.push({ name: 'BrandListIndex' })
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
.el-input {
  width: 220px;
}
/deep/ .el-form-item__label {
  padding-right: 16px;
}
</style>
