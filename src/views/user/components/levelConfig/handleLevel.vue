/**
 * 添加/编辑等级组件
 */
<template>
  <div class=''>
    <el-form
      ref="formRef"
      :model="formData"
      :rules="rules"
      label-position="right"
      label-width="120px"
    >
      <el-form-item prop="levelName" label="等级名称：">
        <el-input-number
          v-model="formData.levelName"
          :min="1"
          controls-position="right"
        ></el-input-number>
      </el-form-item>

      <el-form-item prop="fightNum" label="战斗力：">
        <el-input-number
          v-model="formData.fightNum"
          :min="1"
          controls-position="right"
        ></el-input-number>
      </el-form-item>

      <el-form-item prop="attackNum" label="攻击力：">
        <el-input-number
          v-model="formData.attackNum"
          :min="0.01"
          :precision="2"
          :step="0.01"
          controls-position="right"
        ></el-input-number>
      </el-form-item>

      <el-form-item prop="levelName" label="暴击率：">
        <el-input-number
          v-model="formData.critRate"
          :min="0.01"
          :precision="2"
          :step="0.01"
          controls-position="right"
        ></el-input-number>
      </el-form-item>

      <el-form-item prop="critDamage" label="暴击伤害：">
        <el-input-number
          v-model="formData.critDamage"
          :min="0.01"
          :precision="2"
          :step="0.01"
          controls-position="right"
        ></el-input-number>
      </el-form-item>

      <el-form-item prop="physicalUp" label="体力加成：">
        <el-input-number
          v-model="formData.physicalUp"
          :min="1"
          controls-position="right"
        ></el-input-number>
      </el-form-item>

      <el-form-item prop="physicalRecover" label="体力恢复率：">
        <el-input-number
          v-model="formData.physicalRecover"
          :min="0.01"
          :precision="2"
          :step="0.01"
          controls-position="right"
        ></el-input-number>
      </el-form-item>

      <el-form-item prop="redBagRate" label="红包比率：">
        <el-input-number
          v-model="formData.redBagRate"
          :min="0.01"
          :precision="2"
          :step="0.01"
          controls-position="right"
        ></el-input-number>
      </el-form-item>

      <el-form-item prop="empiricalNum" label="经验值：">
        <el-input-number
          v-model="formData.empiricalNum"
          :min="1"
          controls-position="right"
        ></el-input-number>
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
      rules: {}
    }
  },

  computed: {},

  created () {},

  methods: {
    onSubmit () {
      console.log(this.formData)
      this.$refs.formRef.validate(valid => {
        if (valid) {
          console.log('提交完成')
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
  /deep/ .el-form-item__label {
    font-weight: 700;
  }
}
</style>
