/**
 * 用户等级设置
 */
<template>
  <div class=''>
    <el-form
      label-position="right"
      label-width="120px"
      :model="formData"
      class="formBox"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item label="标题" prop="title">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>

      <el-form-item label="内容">
        <tinymce v-model="formData.content"></tinymce>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button type="default" @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import tinymce from '@/components/tinymce/index.vue'

export default {
  props: {},

  data () {
    return {
      formData: {
        title: '',
        content: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ]
      }
    }
  },

  computed: {},

  created () {},

  methods: {
    onSubmit () {
      this.$refs.formRef.validate(valid => {
        if (valid) {
          console.log('提交成功')
          console.log(this.formData)
        }
      })
    },
    onReset () {
      this.$refs.formRef.resetFields()
    }
  },

  components: { tinymce }
}
</script>

<style lang='less' scoped>
.el-input {
  width: 500px;
}
/deep/ .el-form-item__label {
  font-weight: 700;
}
</style>
