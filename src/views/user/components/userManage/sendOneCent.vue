/**
 * 批量发放一分购活动券 模态框
 */
<template>
  <div class=''>
    <el-dialog
      title="批量发放一分购活动券"
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
        <p class="tips">您将对已选中的1位用户发送活动券，请选择单个用户发放活动券数量</p>
        <el-form-item label="选择数量：" prop="num">
          <el-input-number
            v-model="formData.num"
            :min="1"
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
        num: undefined
      },
      rules: {
        num: [
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
.tips {
  padding-bottom: 10px;
  color: #999;
}
.el-input,
.el-input-number,
.el-select {
  width: 100%;
}
</style>
