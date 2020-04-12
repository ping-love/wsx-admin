/**
 * 添加/编辑地摊公司组件
 */
<template>
  <div class=''>
    <el-form
      ref="formRef"
      :model="formData"
      :rules="rules"
      label-position="right"
      label-width="120px"
    >
      <el-form-item prop="compName" label="公司全称：">
        <el-input v-model="formData.compName"></el-input>
      </el-form-item>

      <el-form-item prop="representative" label="代表姓名：">
        <el-input v-model="formData.representative"></el-input>
      </el-form-item>

      <el-form-item prop="tel" label="联系方式：">
        <el-input v-model="formData.tel"></el-input>
      </el-form-item>

      <el-form-item prop="email" label="有效邮箱：">
        <el-input v-model="formData.email"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button type="default" @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { validEmail } from '@/utils/validate'

export default {
  props: {
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
    const validateEmail = (rule, value, callback) => {
      if (!validEmail(value)) {
        callback(new Error('请输入正确的email格式'))
      } else {
        callback()
      }
    }
    return {
      rules: {
        email: [
          { required: true, trigger: 'blur', validator: validateEmail }
        ]
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
          console.log('提交完成')
        }
      })
    },
    onReset () {
      this.$refs.formRef.resetFields()
    }
  },

  components: {}
}
</script>

<style lang='less' scoped>
.el-form {
  .el-input,
  .el-textarea {
    width: 500px;
  }
  /deep/ .el-form-item__label {
    font-weight: 700;
  }
}
</style>
