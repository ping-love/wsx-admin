/**
 * 手动添加玩家 模态框
 */
<template>
  <div class=''>
    <el-dialog
      title="添加玩家"
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
        <el-form-item label="手机号码：" prop="tel">
          <el-input v-model="formData.tel"></el-input>
        </el-form-item>

        <el-form-item label="分销等级：" prop="drpLevel">
          <el-select v-model="formData.drpLevel">
            <el-option
              v-for="item in drpLevelOptions"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
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
import { getDrpLevel } from '@/filters/transform'
import { validCellphone } from '@/utils/validate'

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },

  data () {
    const validateTel = (rule, value, callback) => {
      if (!validCellphone(value)) {
        callback(new Error('请输入正确的手机号'))
      } else {
        callback()
      }
    }
    return {
      formData: {
        tel: '',
        drpLevel: 1
      },
      drpLevelOptions: getDrpLevel().slice(1),
      rules: {
        tel: [{ required: true, validator: validateTel, trigger: 'blur' }],
        drpLevel: [{ required: true, message: '必填项', trigger: 'blur' }]
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

  created () {},

  methods: {
    onCancel () {
      this.dialogVisible = false
    },
    onSubmit () {
      this.$refs.formRef.validate(valid => {
        if (valid) {
          this.$emit('onSubmit')
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
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
</style>
