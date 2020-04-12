/** * 修改密码 */
<template>
  <div class="modifyPwd">
    <el-form
      label-position="right"
      label-width="120px"
      :model="formData"
      class="formBox"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item label="旧密码" prop="pwd">
        <el-input type="password" v-model="formData.pwd"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newPwd">
        <el-input type="password" v-model="formData.newPwd"></el-input>
      </el-form-item>
      <el-form-item label="确认新密码" prop="confirmNewPwd">
        <el-input type="password" v-model="formData.confirmNewPwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {},

  data () {
    const checkConfirmPwd = (rule, value, callback) => {
      if (value !== this.formData.newPwd) {
        callback(new Error('两次输入密码不一致'))
      } else {
        callback()
      }
    }
    return {
      formData: {
        pwd: '',
        newPwd: '',
        confirmNewPwd: ''
      },
      rules: {
        pwd: [
          { required: true, message: '请输入旧密码', trigger: 'blur' }
        ],
        newPwd: [
          { required: true, message: '请输入新密码', trigger: 'blur' }
        ],
        confirmNewPwd: [
          { required: true, message: '请再次输入新密码', trigger: 'blur' },
          { validator: checkConfirmPwd, trigger: 'blur' }
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

  components: {}
}
</script>

<style lang="less" scoped>
.modifyPwd {

  .el-input {
    width: 250px;
  }
  /deep/ .el-form-item__label {
    font-weight: 700;
  }
}
</style>
