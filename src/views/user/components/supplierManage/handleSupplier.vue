/**
 * 添加/编辑供应商组件
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
      <el-form-item prop="name" label="供应商：">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>

      <el-form-item prop="contact" label="联系人：">
        <el-input v-model="formData.contact"></el-input>
      </el-form-item>

      <el-form-item prop="tel" label="电话：">
        <el-input v-model="formData.tel"></el-input>
      </el-form-item>

      <el-form-item prop="address" label="地址：">
        <el-input
          type="textarea"
          :autosize="{ minRows: 3 }"
          v-model="formData.address"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button type="default" @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
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
    return {
      rules: {}
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
