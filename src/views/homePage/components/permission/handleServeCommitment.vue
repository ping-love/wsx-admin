/**
* 添加/编辑服务承诺
*/
<template>
  <div class="handleServeCommitment">
    <!-- 通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可 -->
    <el-form class="formContainer" :rules="rules" :model="formData" ref="formRef" label-width="140px">

      <el-form-item label="名称:" prop="name">
        <el-input v-model="formData.name" clearable placeholder="请输入名称"></el-input>
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
          <el-radio label="是"></el-radio>
          <el-radio label="否"></el-radio>
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
export default {
  name: '',
  data () {
    return {
      // 验证规则
      rules: {
        name: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        startTime: [{ type: 'date', required: true, message: '请选择开始时间', trigger: 'change' }],
        endTime: [{ type: 'date', required: true, message: '请选择结束时间', trigger: 'change' }],
        isShow: [{ required: true, message: '请选择显示类型', trigger: 'change' }],
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
    saveForm () {
      this.$refs.formRef.validate(valid => {
        if (valid) {
          // TODO 请求的成功回调中执行，保存成功提示，并清空输入框数据
          console.log('formData:', this.formData)
          this.$message({
            message: '保存成功'
          })
          // this.$refs.formRef.resetFields() // 请求成功后
          this.$router.push({ name: 'CommitmentListIndex' })
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
