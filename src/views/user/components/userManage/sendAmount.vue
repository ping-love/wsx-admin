/**
 * 批量发放金额 模态框
 */
<template>
  <div class=''>
    <el-dialog
      title="批量发放金额"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
    >
      <el-form
        :model="formData"
        :rules="rules"
        ref="formRef"
        label-position="right"
        label-width="100px"
      >
        <el-form-item label="金额类型：" prop="type">
          <el-select v-model="formData.type">
            <el-option label="金币" :value="1"></el-option>
            <el-option label="钻石" :value="2"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="金额数：" prop="amount">
          <el-input-number
            v-model="formData.amount"
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
        type: '',
        amount: undefined
      },
      rules: {
        type: [
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
.el-input,
.el-input-number,
.el-select {
  width: 100%;
}
</style>
