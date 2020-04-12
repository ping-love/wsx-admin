/**
 * 批量发放优惠券 模态框
 */
<template>
  <div class=''>
    <el-dialog
      title="批量发放优惠券"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
    >
      <el-form
        :model="formData"
        :rules="rules"
        ref="formRef"
        label-position="right"
        label-width="170px"
      >
        <el-form-item label="优惠券名称：" prop="name">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>

        <el-form-item label="优惠券使用条件(>元)：" prop="min">
          <el-input-number
            v-model="formData.min"
            :min="1"
            :precision="2"
            :step="0.1"
            controls-position="right"
          ></el-input-number>
        </el-form-item>

        <el-form-item label="优惠券面额：" prop="amount">
          <el-input-number
            v-model="formData.amount"
            :min="1"
            :precision="2"
            :step="0.1"
            controls-position="right"
          ></el-input-number>
        </el-form-item>

        <el-form-item label="有效天数：" prop="days">
          <el-input-number
            v-model="formData.days"
            :min="1"
            :precision="2"
            :step="0.1"
            controls-position="right"
          ></el-input-number>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="onCancel">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      formData: {
        name: '',
        min: undefined,
        amount: undefined,
        days: undefined
      },
      rules: {
        name: [
          { required: true, message: '请输入内容', trigger: 'blur' }
        ],
        min: [
          { required: true, message: '请输入内容', trigger: 'blur' }
        ],
        amount: [
          { required: true, message: '请输入内容', trigger: 'blur' }
        ],
        days: [
          { required: true, message: '请输入内容', trigger: 'blur' }
        ]
      }
    }
  },

  computed: {
    dialogVisible: {
      get () {
        return this.visible
      },
      set (val) {
        this.$emit('update:visible', val)
      }
    }
  },

  watch: {
    visible (val) {
      if (val) {
        this.$nextTick(() => {
          this.$refs.formRef.clearValidate()
        })
      }
    }
  },

  created () {},

  methods: {
    onCancel () {
      this.dialogVisible = false
    },
    onSubmit () {
      this.$refs.formRef.validate(valid => {
        if (valid) {
          console.log('提交成功')
          this.dialogVisible = false
        }
      })
    }
  },

  components: {}
}
</script>

<style lang='less' scoped>
/deep/ .el-dialog__body {
  padding: 10px 20px;
}
/deep/ .el-dialog {
  max-width: 600px;
}
/deep/ .el-form-item__label {
  font-weight: 700;
}
.el-input,
.el-input-number,
.el-select {
  width: 100%;
}
</style>
