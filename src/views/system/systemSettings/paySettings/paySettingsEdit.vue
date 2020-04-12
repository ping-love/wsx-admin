/**
 * 支付接口参数设置
 */
<template>
  <div class='paySettingsEdit'>
    <el-form
      label-position="right"
      label-width="180px"
      :model="formData"
      class="formBox"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item label="支付方式名称" prop="payTypeName">
        <el-input v-model="formData.payTypeName" disabled></el-input>
      </el-form-item>

      <el-form-item label="支付方式描述" prop="payTypeDescription">
        <el-input
          type="textarea"
          :autosize="{ minRows: 6 }"
          placeholder="请输入内容"
          v-model="formData.payTypeDescription"
        ></el-input>
      </el-form-item>

      <el-form-item label="APPID" prop="appId">
        <el-input v-model="formData.appId"></el-input>
        <el-tooltip
          content="微信公众号身份的唯一标识。审核通过后，在微信发送的邮件中查看"
          placement="top"
        >
          <i class="el-icon-question"></i>
        </el-tooltip>
      </el-form-item>

      <el-form-item label="MCHID" prop="mchId">
        <el-input v-model="formData.mchId"></el-input>
        <el-tooltip
          content="受理商ID，身份标识"
          placement="top"
        >
          <i class="el-icon-question"></i>
        </el-tooltip>
      </el-form-item>

      <el-form-item label="商户支付密钥Key" prop="shopPayKey">
        <el-input v-model="formData.shopPayKey"></el-input>
        <el-tooltip
          content="商户支付密钥Key。审核通过后，在微信发送的邮件中查看"
          placement="top"
        >
          <i class="el-icon-question"></i>
        </el-tooltip>
      </el-form-item>

      <el-form-item label="APPSECRET" prop="appSecret">
        <el-input v-model="formData.appSecret"></el-input>
        <el-tooltip
          content="用于JSAPI接口中获取openid，审核后在公众平台开启开发模式后可查看"
          placement="top"
        >
          <i class="el-icon-question"></i>
        </el-tooltip>
      </el-form-item>

      <el-form-item label="是否启用" prop="isOpen">
        <el-radio v-model="formData.isOpen" :label="1">是</el-radio>
        <el-radio v-model="formData.isOpen" :label="0">否</el-radio>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
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
        payTypeName: '微信支付',
        payTypeDescription: '',
        appId: '',
        mchId: '',
        shopPayKey: '',
        appSecret: '',
        isOpen: 1
      },
      rules: {}
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

<style lang='less' scoped>
.el-input {
  width: 400px;
}
/deep/ .el-form-item__label {
  font-weight: 700;
}
.el-textarea {
  width: 400px;
}
i {
  font-size: 24px;
  vertical-align: middle;
  color: #999;
}
</style>
