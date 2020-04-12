/**
 * 添加/编辑奖励
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
      <el-form-item label="奖励名称：" prop="title">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>

      <el-form-item label="消费区间：" prop="consumeStart">
        <el-input-number
          v-model="formData.consumeStart"
          controls-position="right"
          :min="0"
          :precision="2"
          class="consumeInput start"
        ></el-input-number> -
        <el-input-number
          v-model="formData.consumeEnd"
          controls-position="right"
          :min="0"
          :precision="2"
          class="consumeInput end"
        ></el-input-number> 元
      </el-form-item>

      <el-form-item label="金币奖励：" prop="coin">
        <el-input-number
          v-model="formData.coin"
          controls-position="right"
          :min="0"
        ></el-input-number>
      </el-form-item>

      <el-form-item label="钻石奖励：" prop="diamond">
        <el-input-number
          v-model="formData.diamond"
          controls-position="right"
          :min="0"
        ></el-input-number>
      </el-form-item>

      <el-form-item label="体力奖励：" prop="power">
        <el-input-number
          v-model="formData.power"
          controls-position="right"
          :min="0"
        ></el-input-number>
      </el-form-item>

      <el-form-item label="道具奖励：" prop="prop">
        <propList v-model="formData.prop" class="propListBox"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button type="default" @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import propList from './propList'

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

  components: { propList }
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
.propListBox {
  width: 800px;
}
</style>
