/**
 * 单个操作，晋升/降级/审核/查看 模态框
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
        <el-form-item label="玩家名称：" prop="nickname">
          <el-input v-model="formData.nickname" :disabled="isApprove"></el-input>
        </el-form-item>

        <el-form-item label="手机号码：" prop="tel">
          <el-input v-model="formData.tel" :disabled="isApprove"></el-input>
        </el-form-item>

        <el-form-item label="分销等级：" prop="drpLevel">
          <el-select v-model="formData.drpLevel" :disabled="isApprove || isView">
            <el-option
              v-for="item in drpLevelOptions"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="玩家ID：" prop="userId">
          <el-input v-model="formData.userId" disabled></el-input>
        </el-form-item>

        <el-form-item label="上级ID：" prop="upperId">
          <el-input v-model="formData.upperId" disabled></el-input>
        </el-form-item>

        <el-form-item label="充值金额：" prop="rechargeTotal">
          <el-input-number
            v-model="formData.rechargeTotal"
            controls-position="right"
            :min="0"
            :precision="2"
            disabled
          ></el-input-number> 元
        </el-form-item>

        <el-form-item label="直属玩家：" prop="playerTotalNum" v-if="!isView">
          <el-input-number
            v-model="formData.playerTotalNum"
            controls-position="right"
            :min="0"
            disabled
          ></el-input-number> 人
        </el-form-item>

        <el-form-item label="10级玩家数：" prop="levelTenNum">
          <el-input-number
            v-model="formData.levelTenNum"
            controls-position="right"
            :min="0"
            disabled
          ></el-input-number> 人
        </el-form-item>

        <el-form-item label="初审员ID：" prop="firApproveId" v-if="isApprove">
          <el-input v-model="formData.firApproveId" disabled></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <template v-if="isApprove">
         <el-button type="default" @click="onCancel">取 消</el-button>
          <el-button type="danger" @click="onSubmit(0)">拒 绝</el-button>
          <el-button type="success" @click="onSubmit(1)">通过</el-button>
        </template>
        <template v-else>
          <el-button type="default" @click="onCancel">取 消</el-button>
          <el-button type="primary" @click="onSubmit">确 定</el-button>
        </template>
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
    },
    // upgrade：晋升  degrade：降级  approve：审核  view：查看
    type: {
      type: String,
      default: 'upgrade'
    },
    data: {
      type: Object,
      default () {
        return {}
      }
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
        nickname: '',
        tel: '',
        drpLevel: '',
        userId: '',
        upperId: '',
        rechargeTotal: undefined,
        playerTotalNum: undefined,
        levelTenNum: undefined,
        firApproveId: ''
      },
      drpLevelOptions: getDrpLevel().slice(1),
      rules: {
        nickname: [{ required: true, message: '必填项', trigger: 'blur' }],
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
    },
    dialogTitle () {
      switch (this.type) {
        case 'upgrade':
          return '晋升'
        case 'degrade':
          return '降级'
        case 'approve':
          return '审核'
        case 'view':
          return '查看'
        default:
          return ''
      }
    },
    isApprove () {
      return this.type === 'approve'
    },
    isView () {
      return this.type === 'view'
    }
  },

  watch: {
    data: {
      handler (val) {
        const {
          nickname,
          tel,
          drpLevel,
          userId,
          upperId,
          rechargeTotal,
          playerTotalNum,
          levelTenNum
        } = val
        this.formData = {
          nickname,
          tel,
          drpLevel,
          userId,
          upperId,
          rechargeTotal,
          playerTotalNum,
          levelTenNum
        }
        this.playerTotalNum = undefined
        if (this.type === 'approve') {
          this.formData.firApproveId = ''
        }
        this.$nextTick(() => {
          this.$refs.formRef.clearValidate()
        })
      },
      deep: true
    }
  },

  created () {
  },

  methods: {
    onCancel () {
      if (this.isApprove) {
        console.log('拒绝')
        this.dialogVisible = false
      } else {
        this.dialogVisible = false
      }
    },
    onSubmit (num) {
      this.$refs.formRef.validate(valid => {
        if (valid) {
          console.log('提交成功')
          switch (this.type) {
            case 'upgrade':
              this.onUpgrade()
              break
            case 'degrade':
              this.onDegrade()
              break
            case 'approve':
              this.onApprove(num)
              break
            default:
              this.dialogVisible = false
          }
        }
      })
    },
    // 审批
    onApprove (num) {
      console.log(num)
      this.$emit('onSubmit')
      this.dialogVisible = false
    },
    // 晋升
    onUpgrade () {
      this.$emit('onSubmit')
      this.dialogVisible = false
    },
    // 降级
    onDegrade () {
      this.$emit('onSubmit')
      this.dialogVisible = false
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
.el-input {
  width: 300px;
}
.el-select {
  width: 300px;
}
.el-input-number {
  width: 300px;
}
/deep/ .el-input.is-disabled {
  .el-input__inner {
    color: #606266;
  }
}
</style>
