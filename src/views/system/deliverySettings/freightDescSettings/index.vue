/**
 * 运费说明设置
 */
<template>
  <div class='freightDescSettings'>
    <el-form
      label-position="right"
      label-width="80px"
      :model="formData"
      class="formBox"
      :rules="rules"
      ref="formRef"
    >

      <el-form-item label="运费说明" prop="freightDesc">
        <el-input
          type="textarea"
          :autosize="{ minRows: 20 }"
          placeholder="请输入内容"
          v-model="formData.freightDesc"
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
        freightDesc: '点一点自营－直发订单实付满20元包邮，不足金额的订单按照收货地不同收取一定的运费。至西藏，新疆部分较远的地区，固定运费为59元。'
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
          console.log(this.formData)
        }
      })
    }
  },

  components: {}
}
</script>

<style lang='less' scoped>
/deep/ .el-form-item__label {
  font-weight: 700;
}
.el-textarea {
  width: 800px;
}
</style>
