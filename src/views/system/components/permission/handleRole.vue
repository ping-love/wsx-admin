/**
 * 添加和编辑角色组件
 */
<template>
  <div class=''>
    <el-form
      label-position="right"
      label-width="90px"
      :model="formData"
      class="formBox"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item label="角色名称:" prop="roleName">
        <el-input v-model="formData.roleName"></el-input>
      </el-form-item>

      <el-form-item label="权限列表:" prop="permission">
        <checkboxGroup
          v-model="formData.systemMenus"
          :data="systemMenuData"
          title="系统管理"
        />
        <checkboxGroup
          v-model="formData.marketMenus"
          :data="marketMenuData"
          title="运营管理"
        />
        <checkboxGroup
          v-model="formData.userMenus"
          :data="userMenuData"
          title="用户管理"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import checkboxGroup from '@/views/system/components/permission/checkboxGroup'

export default {
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

  data () {
    return {
      rules: {},
      systemMenuData: ['上海', '北京', '广州', '深圳', '上海1', '北京1', '广州1', '深圳1', '上海2', '北京2', '广州2', '深圳2'],
      marketMenuData: ['上海', '北京', '店铺运费模版修改', '深圳', '上海1', '北京1', '广州1', '深圳1', '上海2', '北京2', '广州2', '深圳2'],
      userMenuData: ['上海', '北京', '广州', '深圳', '上海1', '北京1', '广州1', '深圳1', '上海2', '北京2', '广州2', '深圳2']
    }
  },

  computed: {},

  created () {},

  methods: {
    onSubmit () {
      console.log(this.formData)
      this.$refs.formRef.validate(valid => {
        if (valid) {
          console.log('提交成功')
        }
      })
    },
    onSetData (val) {
      console.log(val)
    }
  },

  components: { checkboxGroup }
}
</script>

<style lang='less' scoped>
/deep/ .el-form-item__label {
  font-weight: 700;
}
.el-input {
  width: 950px;
}
</style>
