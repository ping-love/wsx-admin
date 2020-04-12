/**
* 添加/编辑道具
*/
<template>
  <div class="handleProp">
    <!-- 通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可 -->
    <el-form class="formContainer" :rules="rules" :model="formData" ref="formRef" label-width="140px">

      <el-form-item label="装备类型:" prop="equipType">
        <el-select v-model="formData.equipType" placeholder="请输入装备类型">
          <el-option v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <!-- 图片上传 -->
      <el-form-item label="上传道具图片:" prop="uploadPic">
        <img-upload v-model="formData.uploadPic" :limit="1"></img-upload>
      </el-form-item>

      <el-form-item label="装备名称:" prop="equipName">
        <el-input v-model="formData.equipName" clearable placeholder="请输入数值"></el-input>
      </el-form-item>
      <el-form-item label="装备价格:" prop="equipPrice">
        <el-input v-model="formData.equipPrice" clearable placeholder="请输入数值"></el-input>
      </el-form-item>
      <el-form-item label="战力值:" prop="fightingCapacity">
        <el-input v-model="formData.fightingCapacity" clearable placeholder="请输入数值"></el-input>
      </el-form-item>
      <el-form-item label="装备攻击力:" prop="equipAttack">
        <el-input v-model="formData.equipAttack" clearable placeholder="请输入数值"></el-input>
      </el-form-item>
      <el-form-item label="装备暴击率:" prop="equipCrit">
        <el-input v-model="formData.equipCrit" clearable placeholder="请输入数值"></el-input>
      </el-form-item>
      <el-form-item label="暴击伤害:" prop="criticalDamage">
        <el-input v-model="formData.criticalDamage" clearable placeholder="请输入数值"></el-input>
      </el-form-item>
      <el-form-item label="体力加成:" prop="physicalPowerAdd">
        <el-input v-model="formData.physicalPowerAdd" clearable placeholder="请输入数值"></el-input>
      </el-form-item>
      <el-form-item label="体力恢复率(点/分):" prop="physicalPowerRecoveryRate">
        <el-input v-model="formData.physicalPowerRecoveryRate" clearable placeholder="请输入数值"></el-input>
      </el-form-item>
      <el-form-item label="装备等级限制:" prop="equipLevelLimit">
        <el-input v-model="formData.equipLevelLimit" clearable placeholder="请输入数值"></el-input>
      </el-form-item>
      <el-form-item label="装备折损率:" prop="equipWreckRate">
        <el-input v-model="formData.equipWreckRate" clearable placeholder="请输入数值"></el-input>
        <el-tooltip content="请填写0到1之间的数值" placement="right" effect="dark">
          <!-- content to trigger tooltip here -->
          <i class="el-icon-question"></i>
        </el-tooltip>

      </el-form-item>
      <el-form-item label="耐久值:" prop="durableValue">
        <el-input v-model="formData.durableValue" clearable placeholder="请输入数值"></el-input>
      </el-form-item>
      <el-form-item label="装备等级:" prop="equipLevel">
        <el-input v-model="formData.equipLevel" clearable placeholder="请输入数值"></el-input>
      </el-form-item>

      <!-- 确认/重置按钮 -->
      <el-form-item>
        <el-button type="primary" @click="saveForm">保存</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import ImgUpload from '@/components/imgUpload'
import { getEquipType } from '@/filters/transformTwo'
export default {
  name: '',
  data () {
    return {
      options: getEquipType(),
      // 验证规则
      rules: {
        equipName: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        uploadPic: [{ type: 'array', required: true, message: '请选择需要上传的图片', trigger: 'change' }]
      }
    }
  },
  props: {
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
  components: { ImgUpload },
  created () {},
  mounted () {},
  computed: {},
  methods: {
    saveForm () {
      this.$refs.formRef.validate(valid => {
        if (valid) {
          // TODO 请求的成功回调中执行，保存成功提示，并清空输入框数据
          console.log('formData:', this.formData)
          this.$message({
            message: '保存成功'
          })
          // this.$refs.formRef.resetFields() // 请求成功后
          this.$router.push({ name: 'BannersListIndex' })
        } else {
          console.log('no submit!')
          return false
        }
      })
    },
    resetForm () {
      this.$refs.formRef.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.el-input {
  width: 220px;
}
/deep/ .el-form-item__label {
  padding-right: 16px;
}
.handleProp {
  i {
    font-size: 24px;
    color: #666;
    vertical-align: middle;
  }
}
</style>
