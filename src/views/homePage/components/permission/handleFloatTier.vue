/**
* 添加/编辑浮层
*/
<template>
  <div class="addFloatTier">
    <!-- 通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可 -->
    <el-form class="formContainer" :rules="rules" :model="formData" ref="formRef" label-width="140px">

      <el-form-item label="标题:" prop="title">
        <el-input v-model="formData.title" clearable placeholder="请输入标题"></el-input>
      </el-form-item>

      <el-form-item label="链接类型" prop="linkCategory">
        <el-radio-group v-model="formData.linkCategory">
          <el-radio :label="item.label" v-for="item in linkCategoryArr" :key="item.value"></el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- TODO 非必填但要判断是否是一个链接 -->
      <el-form-item label="链接/商品ID:" prop="linkUrl">
        <el-input v-model="formData.linkUrl" clearable placeholder="请输入链接"></el-input>
      </el-form-item>

      <el-form-item label="渠道" prop="platform">
        <el-select v-model="formData.platform" placeholder="全部">
          <el-option v-for="item in platformArr" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="人群" prop="userType">
        <el-select v-model="formData.userType" placeholder="全部">
          <el-option v-for="item in userTypeArr" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>

      <!-- text输入框 -->
      <el-form-item label="排序号:" prop="sortNum">
        <el-input v-model.number="formData.sortNum" clearable placeholder="请输入排序号"></el-input>
      </el-form-item>

      <!-- 时间选择框 -->
      <el-form-item label="开始时间:" prop="startTime">
        <el-date-picker v-model="formData.startTime" placeholder="选择开始时间" type="datetime"></el-date-picker>
      </el-form-item>

      <el-form-item label="结束时间:" prop="endTime">
        <el-date-picker v-model="formData.endTime" placeholder="选择结束时间" type="datetime"></el-date-picker>
      </el-form-item>

      <!-- 图片上传 -->
      <el-form-item label="图片上传:" prop="uploadPics">
        <img-upload v-model="formData.uploadPics" :limit="4"></img-upload>
      </el-form-item>

      <!-- radio选择框 -->
      <el-form-item label="是否显示:" prop="isShow">
        <el-radio-group v-model="formData.isShow">
          <el-radio :label="item.label" v-for="item in isShowArr" :key="item.value"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="是否滑动:" prop="isSlide">
        <el-radio-group v-model="formData.isSlide">
          <el-radio :label="item.label" v-for="item in isSlideArr" :key="item.value"></el-radio>
        </el-radio-group>
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
import { getIsShow, getLinkCategory } from '@/filters/transform'
export default {
  name: '',
  data () {
    return {
      linkCategoryArr: getLinkCategory(),
      platformArr: [{ value: 1, label: '全部' }, { value: 2, label: '安卓' }, { value: 3, label: 'IOS' }, { value: 4, label: '小程序' }],
      userTypeArr: [{ value: 1, label: '全部' }, { value: 2, label: '新用户' }, { value: 3, label: '老用户' }],
      isShowArr: getIsShow(),
      isSlideArr: [{ value: 1, label: '是' }, { value: 2, label: '否' }],
      // 验证规则
      rules: {
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        linkCategory: [{ required: true, message: '请选择链接类型', trigger: 'change' }],
        // linkUrl: [{ required: true, message: '请输入链接', trigger: 'blur' }],
        platform: [{ required: true, message: '请选择渠道类型', trigger: 'change' }],
        userType: [{ required: true, message: '请选择用户类型', trigger: 'change' }],
        sortNum: [
          { required: true, message: '排序号不能为空', trigger: 'blur' },
          { type: 'number', message: '排序号必须为数字', trigger: 'blur' }
        ],
        startTime: [{ type: 'date', required: true, message: '请选择开始时间', trigger: 'change' }],
        endTime: [{ type: 'date', required: true, message: '请选择结束时间', trigger: 'change' }],
        isShow: [{ required: true, message: '请选择显示类型', trigger: 'change' }],
        isSlide: [{ required: true, message: '请选择显示类型', trigger: 'change' }],
        uploadPics: [{ type: 'array', required: true, message: '请选择需要上传的图片', trigger: 'change' }]
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
    handleGoodsNumChange (val) {
      console.log('商品数量:', val)
    },
    saveForm () {
      this.$refs.formRef.validate(valid => {
        if (valid) {
          // TODO 请求的成功回调中执行，保存成功提示，并清空输入框数据
          console.log('formData:', this.formData)
          this.$message({
            message: '保存成功'
          })
          // this.$refs.formRef.resetFields() // 请求成功后
          this.$router.push({ name: 'FloatTierListIndex' })
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
.el-input-number {
  width: 220px;
}
/deep/ .el-form-item__label {
  padding-right: 16px;
}
</style>
