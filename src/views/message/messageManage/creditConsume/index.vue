/**
 * 积分消费
 */
<template>
  <div class=''>
    <el-form
      label-position="right"
      label-width="100px"
      :model="formData"
      class="formBox"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item label="标题：" prop="title">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>

      <el-form-item label="文章内容：" prop="content">
        <tinymce v-model="formData.content"></tinymce>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button type="default" @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import tinymce from '@/components/tinymce'

export default {
  props: {},

  data () {
    return {
      formData: {
        title: '',
        content: '123'
      },
      rules: {
        title: [{ required: true, trigger: 'blur', message: '必填项' }]
      }
    }
  },

  computed: {},

  created () {},

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
    }
  },

  components: { tinymce }
}
</script>

<style lang='less' scoped>
.el-form {
  .el-input {
    width: 500px;
  }
  /deep/ .el-form-item__label {
    font-weight: 700;
  }
}
</style>
