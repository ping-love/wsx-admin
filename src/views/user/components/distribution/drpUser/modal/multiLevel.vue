/**
 * 批量晋升/降级 模态框
 */
<template>
  <div class=''>
    <el-dialog
      :title="dialogTitle + '玩家'"
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
        <el-form-item :label="dialogTitle + '玩家数：'" prop="num">
          <el-input-number
            v-model="formData.num"
            controls-position="right"
            :min="1"
            disabled
          ></el-input-number>
        </el-form-item>

        <el-form-item :label="dialogTitle + '等级：'" prop="drpLevel">
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

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    // upgrade：晋升  degrade：降级
    type: {
      type: String,
      default: 'upgrade'
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
        drpLevel: 1
      },
      drpLevelOptions: getDrpLevel().slice(1),
      rules: {
        num: [
          { required: true, message: '必填项', trigger: 'blur' }
        ],
        drpLevel: [
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
    },
    dialogTitle () {
      switch (this.type) {
        case 'upgrade':
          return '晋升'
        case 'degrade':
          return '降级'
        default:
          return ''
      }
    }
  },

  watch: {
    ids (val) {
      this.formData = {
        num: val.length,
        drpLevel: 1
      }
      this.$nextTick(() => {
        this.$refs.formRef.clearValidate()
      })
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
.el-select {
  width: 300px;
}
/deep/ .el-input.is-disabled {
  .el-input__inner {
    color: #606266;
  }
}
</style>
