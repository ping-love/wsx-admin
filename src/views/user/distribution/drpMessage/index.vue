/**
 * 消息配置
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
      <el-form-item label="弹窗设置：">
        <div>
          庄主弹窗：<el-switch v-model="formData.isOpenSuzerain"></el-switch>
        </div>
        <div>
          星级弹窗：<el-switch v-model="formData.isOpenStar"></el-switch>
        </div>
      </el-form-item>

      <el-form-item label="文案设置：">
        <div class="suzerainTextarea">
          <p>庄主弹窗文案：</p>
          <el-input
            type="textarea"
            :autosize="{ minRows: 8 }"
            placeholder="请输入内容"
            v-model="formData.companyDesc"
          ></el-input>
        </div>
        <div>
          <p>星级弹窗文案：</p>
          <el-input
            type="textarea"
            :autosize="{ minRows: 8 }"
            placeholder="请输入内容"
            v-model="formData.companyDesc"
          ></el-input>
        </div>
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
        isOpenSuzerain: false,
        isOpenStar: false,
        contentSuzerain: '',
        contentStar: ''
      },
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
          console.log('提交成功')
        }
      })
    }
  },

  components: {}
}
</script>

<style lang='less' scoped>
.el-form {
  .el-textarea {
    width: 500px;
    vertical-align: top;
  }
  /deep/ .el-form-item__label {
    font-weight: 700;
  }
}
.suzerainTextarea {
  padding-bottom: 20px;
}
</style>
