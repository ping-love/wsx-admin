/**
 * 发送通知
 */
<template>
  <div class=''>
    <el-form
      label-position="right"
      label-width="80px"
      :model="formData"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item label="推送内容" prop="content">
        <tinymce v-model="formData.content"></tinymce>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">发送</el-button>
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
        content: ''
      },
      rules: {
        content: [
          { required: true, message: '请输入内容', trigger: 'blur' }
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
        }
      })
    }
  },

  components: { tinymce }
}
</script>

<style lang='less' scoped>
/deep/ .el-form-item__label {
  font-weight: 700;
}
</style>
