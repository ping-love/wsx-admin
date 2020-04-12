/**
 * 设置红包 模态框
 */
<template>
  <div class=''>
    <el-dialog
      title="设置红包"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
    >
      <el-form
        :model="formData"
        :rules="rules"
        ref="formRef"
        label-position="right"
        label-width="120px"
      >
        <el-form-item label="红包数量：" prop="num">
          <el-input-number
            v-model="formData.num"
            controls-position="right"
            :min="1"
          ></el-input-number>
        </el-form-item>

        <el-form-item label="单个红包金额：" prop="amount">
          <el-input-number
            v-model="formData.amount"
            controls-position="right"
            :min="0.01"
            :precision="2"
          ></el-input-number>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="default" @click="onCancel">取 消</el-button>
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
    },
    ids: {
      type: Array,
      default () {
        return []
      }
    }
  },

  data () {
    return {
      formData: {
        num: undefined,
        amount: undefined
      },
      rules: {
        num: [
          { required: true, message: '必填项', trigger: 'blur' }
        ],
        amount: [
          { required: true, message: '必填项', trigger: 'blur' }
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
        console.log(this.ids)
        this.$nextTick(() => {
          this.$refs.formRef.resetFields()
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
  max-width: 500px;
}
.el-input-number {
  width: 300px;
}
</style>
