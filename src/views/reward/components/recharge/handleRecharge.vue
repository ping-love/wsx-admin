/**
 * 添加/编辑充值模板
 */
<template>
  <div class=''>
    <el-form
      label-position="right"
      label-width="120px"
      :model="formData"
      class="formBox"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item label="充值模板图片：" prop="icon">
        <imgUpload v-model="imgList" :isSingle="true"/>
      </el-form-item>

      <el-form-item label="钻石数：" prop="diamond">
        <el-input-number
          v-model="formData.diamond"
          controls-position="right"
          :min="0"
        ></el-input-number>
      </el-form-item>

      <el-form-item label="充值金额：" prop="amount">
        <el-input-number
          v-model="formData.amount"
          controls-position="right"
          :min="0"
          :precision="2"
        ></el-input-number>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button type="default" @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import imgUpload from '@/components/imgUpload'

export default {

  props: {
    // add: 添加  edit: 编辑
    type: {
      type: String,
      default: ''
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
      rules: {
        title: [{ required: true, trigger: 'blur', message: '必填项' }]
      }
    }
  },

  computed: {
    imgList: {
      get () {
        return this.formData.icon ? [this.formData.icon] : []
      },
      set (val) {
        this.formData.icon = val[0] || ''
      }
    }
  },

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

  components: { imgUpload }
}
</script>

<style lang='less' scoped>
.el-form {
  .el-input {
    width: 500px;
  }
  .el-input-number {
    width: 500px;

    &.consumeInput {
      width: 244px;
    }
  }
  /deep/ .el-form-item__label {
    font-weight: 700;
  }
}
</style>
