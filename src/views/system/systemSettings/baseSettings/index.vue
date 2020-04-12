/** * 基础设置 */
<template>
  <div class="baseSettings">
    <el-form
      label-position="right"
      label-width="180px"
      :model="formData"
      class="formBox"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item label="系统名称" prop="systemName">
        <el-input v-model="formData.systemName"></el-input>
      </el-form-item>

      <el-form-item label="全局攻击力系数" prop="globalAttCoe">
        <el-input-number v-model="formData.globalAttCoe" controls-position="right" :min="0"></el-input-number>
        <el-tooltip
          content="用户在助力（包括发起助力）的时候，攻击力的数值再乘以一个系数，效果比如系为200%，这样助力的价格会翻倍，同时降低了传播次数。"
          placement="top"
        >
          <i class="el-icon-question"></i>
        </el-tooltip>
      </el-form-item>

      <el-form-item label="全局助力体力消耗系数" prop="globalHelpCoe">
        <el-input-number v-model="formData.globalHelpCoe" controls-position="right" :min="0"></el-input-number>
        <el-tooltip
          content="用户在助力（发起助力）的时候，体力的消耗乘以一个系数，比如50%，这样效果为，体力消耗减半。"
          placement="top"
        >
          <i class="el-icon-question"></i>
        </el-tooltip>
      </el-form-item>

      <el-form-item label="全局商品倍率系数" prop="globalGoodsCoe">
        <el-input-number v-model="formData.globalGoodsCoe" controls-position="right" :min="0"></el-input-number>
        <el-tooltip content="所有商品倍率可以统一做整体调整" placement="top">
          <i class="el-icon-question"></i>
        </el-tooltip>
      </el-form-item>

      <el-form-item label="全局金币购买系数" prop="globalCoinCoe">
        <el-input-number v-model="formData.globalCoinCoe" controls-position="right" :min="0"></el-input-number>
        <el-tooltip
          content="可以先简单的给所有商品价格调整系数，比如此系数为200%，那么效果为所有商品价格会翻倍。"
          placement="top"
        >
          <i class="el-icon-question"></i>
        </el-tooltip>
      </el-form-item>

      <el-form-item label="全局钻石购买系数" prop="globalDiamondsCoe">
        <el-input-number v-model="formData.globalDiamondsCoe" controls-position="right" :min="0"></el-input-number>
        <el-tooltip
          content="可以先简单的给所有商品价格调整系数，比如此系数为200%，那么效果为所有商品价格会翻倍。"
          placement="top"
        >
          <i class="el-icon-question"></i>
        </el-tooltip>
      </el-form-item>

      <el-form-item label="直接放入助力大厅限制" prop="addInHall">
        <el-input-number v-model="formData.addInHall" controls-position="right" :min="0"></el-input-number>
        <el-tooltip
          content="当用户发起助力商品次数小于该值时，自动放入助力大厅"
          placement="top"
        >
          <i class="el-icon-question"></i>
        </el-tooltip>
      </el-form-item>

      <el-form-item label="点点秘境版本" prop="ddSecretVersion">
        <el-input v-model="formData.ddSecretVersion"></el-input>
      </el-form-item>

      <el-form-item label="点点秘境服务器状态" prop="ddSecretServerStatus">
        <el-input v-model="formData.ddSecretServerStatus"></el-input>
        <el-tooltip content="1:审核时期 0:对外时期" placement="top">
          <i class="el-icon-question"></i>
        </el-tooltip>
      </el-form-item>

      <el-form-item label="点点秘境开放等级限制" prop="ddSecretOpenLevel">
        <el-input-number v-model="formData.ddSecretOpenLevel" controls-position="right" :min="0"></el-input-number>
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
  props: {},

  data () {
    return {
      formData: {
        systemName: '点一点商城',
        globalAttCoe: 100,
        globalHelpCoe: 100,
        globalGoodsCoe: 300,
        globalCoinCoe: 100,
        globalDiamondsCoe: 100,
        addInHall: 10000,
        ddSecretVersion: 1.2,
        ddSecretServerStatus: 0,
        ddSecretOpenLevel: 20
      },
      rules: {
        systemName: [{ required: true, message: '请输入系统名称', trigger: 'blur' }]
      }
    }
  },

  computed: {},

  created () {},

  methods: {
    onSubmit () {
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

<style lang="less" scoped>
.baseSettings {

  .el-input, .el-input-number {
    width: 250px;
  }
  i {
    font-size: 24px;
    vertical-align: middle;
    color: #999;
  }
  /deep/ .el-form-item__label {
    font-weight: 700;
  }
}
</style>
