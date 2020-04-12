/**
 * 添加/编辑使用帮助
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
      <el-form-item label="标题：" prop="title">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>

      <el-form-item label="所属栏目：" prop="category">
        <el-select v-model="formData.category" clearable>
          <el-option
            v-for="item in helpCategory"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="排序：" prop="sortNum">
        <el-input-number
          v-model="formData.sortNum"
          controls-position="right"
          :min="0"
        ></el-input-number>
      </el-form-item>

      <el-form-item label="显示：" prop="isShow">
        <el-radio v-model="formData.isShow" :label="1">是</el-radio>
        <el-radio v-model="formData.isShow" :label="0">否</el-radio>
      </el-form-item>

      <el-form-item label="内容：" prop="content">
        <el-input
          type="textarea"
          :autosize="{ minRows: 12 }"
          placeholder="请输入内容"
          v-model="formData.content"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button type="default" @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import getHelpCategory from '@/views/message/mixins/getHelpCategory'

export default {
  mixins: [getHelpCategory],

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
  .el-input {
    width: 500px;
  }
  .el-select {
    width: 500px;
  }
  .el-input-number {
    width: 500px;
  }
  .el-textarea {
    width: 500px;
  }
  /deep/ .el-form-item__label {
    font-weight: 700;
  }
}
</style>
