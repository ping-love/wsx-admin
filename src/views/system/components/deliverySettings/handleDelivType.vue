/** * 添加或编辑配送方式 */
<template>
  <div class="handleDelivType">
    <el-form
      label-position="right"
      label-width="120px"
      :model="formData"
      class="formBox"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item label="快递公司名称：" prop="companyName">
        <el-input
          v-model="formData.companyName"
          placeholder="长度限制在32个字符以内"
          maxlength="32"
          show-word-limit
        ></el-input>
      </el-form-item>

      <el-form-item label="快递公司网址：" prop="companyUrl">
        <el-input v-model="formData.companyUrl" placeholder="请输入带协议的完整URL地址，如：http://www.360shop.com.cn"></el-input>
      </el-form-item>

      <el-form-item label="重量设置：" prop="weightInit">
        首重重量：
        <el-input-number
          v-model="formData.weightInit"
          controls-position="right"
          :min="0"
          placeholder="单位：千克，最多2位小数"
        ></el-input-number>
        续重重量：
        <el-input-number
          v-model="formData.weightAdd"
          controls-position="right"
          :min="0"
          placeholder="单位：千克，最多2位小数"
        ></el-input-number>
      </el-form-item>

      <el-form-item label="配送费用：" prop="coinInit">
        首重费用：
        <el-input-number
          v-model="formData.coinInit"
          controls-position="right"
          :min="0"
          placeholder="单位：元，最多2位小数"
        ></el-input-number>
        续重费用：
        <el-input-number
          v-model="formData.coinAdd"
          controls-position="right"
          :min="0"
          placeholder="单位：元，最多2位小数"
        ></el-input-number>
      </el-form-item>

      <el-form-item label="快递公司简介：" prop="companyDesc">
        <el-input
          type="textarea"
          :autosize="{ minRows: 8 }"
          placeholder="请输入内容"
          v-model="formData.companyDesc"
        ></el-input>
      </el-form-item>

      <el-form-item label="排列序号：" prop="sortNum">
        <el-input-number v-model="formData.sortNum" controls-position="right" :min="0"></el-input-number>
      </el-form-item>

      <el-form-item label="启用：" prop="isOpen">
        <el-radio v-model="formData.isOpen" :label="1">是</el-radio>
        <el-radio v-model="formData.isOpen" :label="0">否</el-radio>
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
    // add：添加  edit：编辑
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
      rules: {
        companyName: [
          { required: true, message: '请输入快递公司名称', trigger: 'blur' }
        ],
        companyUrl: [
          { required: true, message: '请输入快递公司网址', trigger: 'blur' }
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
.handleDelivType {

  .el-input {
    width: 620px;
  }
  /deep/ .el-form-item__label {
    font-weight: 700;
  }
  .el-input-number {
    margin-right: 10px;
    width: 230px;
  }
  .el-textarea {
    width: 620px;
  }
  .el-form-item {
    color: #666;
  }
}
</style>
