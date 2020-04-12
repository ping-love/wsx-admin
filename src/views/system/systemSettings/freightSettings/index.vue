/** * 运费设置 */
<template>
  <div class="freightSettings">
    <el-form
      label-position="right"
      label-width="120px"
      :model="formData"
      class="formBox"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item label="固定运费" prop="fixedFreight">
        <el-input-number v-model="formData.fixedFreight" controls-position="right" :min="0"></el-input-number>元
      </el-form-item>
      <el-form-item label="满减运费" prop="fullFreight">
        <el-input-number v-model="formData.fullFreight" controls-position="right" :min="0"></el-input-number>元
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
  props: {},

  data () {
    return {
      formData: {
        fixedFreight: undefined,
        fullFreight: undefined
      },
      rules: {
        fixedFreight: [
          { required: true, message: '请输入运费', trigger: 'blur' }
        ],
        fullFreight: [
          { required: true, message: '请输入运费', trigger: 'blur' }
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
    },
    onReset () {
      this.$refs.formRef.resetFields()
    }
  },

  components: {}
}
</script>

<style lang="less" scoped>
.freightSettings {

  .el-input {
    width: 250px;
  }
  /deep/ .el-form-item__label {
    font-weight: 700;
  }
  .el-input-number {
    margin-right: 10px;
  }
}
</style>
