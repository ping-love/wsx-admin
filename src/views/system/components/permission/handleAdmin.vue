/**
 * 添加和编辑管理员组件
 */
<template>
  <div class=''>
    <el-form
      label-position="right"
      label-width="120px"
      :model="formData"
      class="formBox"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item label="联系人：" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>

      <el-form-item label="登录用户名：" prop="userName">
        <el-input v-model="formData.userName" placeholder="全站唯一"></el-input>
      </el-form-item>

      <el-form-item label="初始密码：" prop="password">
        <el-input
          v-model="formData.password"
          type="password"
          placeholder="若不填写，则默认与登录名相同(不能少于6位)"
        ></el-input>
      </el-form-item>

      <el-form-item label="重复密码：" prop="againPwd">
        <el-input
          v-model="formData.againPwd"
          type="password"
          placeholder="当手动设置密码时，请在此处再次输入密码"
        ></el-input>
      </el-form-item>

      <el-form-item label="手机：" prop="mobile">
        <el-input v-model="formData.mobile" placeholder="手机和固话至少填写一个"></el-input>
      </el-form-item>

      <el-form-item label="固话：" prop="tel">
        <el-input v-model="formData.tel"></el-input>
      </el-form-item>

      <el-form-item label="电子邮件：" prop="email">
        <el-input v-model="formData.email"></el-input>
      </el-form-item>

      <el-form-item label="性别" prop="gender">
        <el-radio v-model="formData.gender" :label="1">女</el-radio>
        <el-radio v-model="formData.gender" :label="2">男</el-radio>
        <el-radio v-model="formData.gender" :label="3">保密</el-radio>
      </el-form-item>

      <el-form-item label="所属角色：" prop="roleId">
        <el-select v-model="formData.roleId">
          <el-option
            v-for="item in roleData"
            :key="item.id"
            :label="item.label"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" class="saveComp" @click="onSubmit">保存</el-button>
        <el-button type="default" class="saveComp" @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    // add: 添加  edit: 编辑
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
      roleData: [
        { id: 1, label: '系统管理员' },
        { id: 2, label: '游戏管理员' },
        { id: 3, label: '测试' }
      ],
      rules: {
        name: [{ required: true, trigger: 'blur', message: '必填项' }],
        userName: [{ required: true, trigger: 'blur', message: '必填项' }],
        password: [{ required: true, trigger: 'blur', message: '必填项' }],
        againPwd: [{ required: true, trigger: 'blur', message: '必填项' }],
        email: [{ required: true, trigger: 'blur', message: '必填项' }],
        roleId: [{ required: true, trigger: 'blur', message: '必填项' }]
      }
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
  .el-select {
    width: 500px;
  }
  /deep/ .el-form-item__label {
    font-weight: 700;
  }
}
</style>
