/**
 * 短信设置
 */
<template>
  <div class="messageSettings">
    <el-form
      label-position="right"
      label-width="150px"
      :model="formData"
      class="formBox"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item label="短信开启/关闭" prop="openStatus">
        <el-radio v-model="formData.openStatus" :label="1">开启</el-radio>
        <el-radio v-model="formData.openStatus" :label="0">关闭</el-radio>
      </el-form-item>

      <el-form-item label="短信服务商" prop="provider">
        <el-radio v-model="formData.provider" :label="1">网建</el-radio>
        <el-radio v-model="formData.provider" :label="2">创蓝</el-radio>
        <el-radio v-model="formData.provider" :label="3">极速</el-radio>
      </el-form-item>

      <el-form-item label="管理员设置" prop="adminTel">
        <el-input v-model="formData.adminTel"></el-input>
        <el-button class="testSend">测试发送</el-button>
        <div class="adminTelInfo">短信发送速度视网络情况会略有延迟。</div>
      </el-form-item>

      <el-form-item label="设置短信发送动作">
        <div>
          <el-checkbox v-model="formData.isWhenRegister">用户注册时</el-checkbox>
          <el-checkbox v-model="formData.isNotifyAdmin">抄送管理员</el-checkbox>
          <el-button class="resetModel">恢复默认模板</el-button>
        </div>
      </el-form-item>

      <el-form-item label="用户注册时短信内容">
        <el-input
          type="textarea"
          :autosize="{ minRows: 6 }"
          placeholder="请输入内容"
          v-model="formData.whenRegContent"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {},

  data () {
    return {
      formData: {
        openStatus: 1,
        provider: 1,
        adminTel: '',
        isWhenRegister: 0,
        isNotifyAdmin: 0,
        whenRegContent: ''
      },
      rules: {
        adminTel: [
          { required: true, message: '请输入管理员手机号', trigger: 'blur' }
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
.messageSettings {

  .el-input {
    width: 250px;
  }
  .el-textarea {
    width: 380px;
  }

  .resetModel {
    margin-left: 25px;
  }
  /deep/ .el-form-item__label {
    font-weight: 700;
  }
  .testSend {
    padding-right: 44px;
  }
}
</style>
