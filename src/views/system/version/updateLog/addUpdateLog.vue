/** * 添加新版本 */
<template>
  <div class="">
    <el-form
      label-position="right"
      label-width="140px"
      :model="formData"
      class="formBox"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item label="系统类型：" prop="systemType">
        <el-select v-model="formData.systemType" clearable>
          <el-option label="安卓" :value="1"></el-option>
          <el-option label="IOS" :value="2"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="渠道：" prop="channel">
        <el-select v-model="formData.channel" clearable>
          <el-option
            v-for="item in channelData"
            :key="item.id"
            :label="item.label"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="包下载链接：" prop="downloadUrl">
        <el-input v-model="formData.downloadUrl" clearable></el-input>
      </el-form-item>

      <el-form-item label="是否需要强制更新：" prop="isForceUpdate">
        <el-radio v-model="formData.isForceUpdate" :label="0">否</el-radio>
        <el-radio v-model="formData.isForceUpdate" :label="1">是</el-radio>
      </el-form-item>

      <el-form-item label="版本号：" prop="version">
        <el-input v-model="formData.version"></el-input>
      </el-form-item>

      <el-form-item label="开关：" prop="isOpen">
        <el-radio v-model="formData.isOpen" :label="0">关</el-radio>
        <el-radio v-model="formData.isOpen" :label="1">开</el-radio>
      </el-form-item>

      <el-form-item label="是否对外开放：" prop="isPublic">
        <el-radio v-model="formData.isPublic" :label="0">否</el-radio>
        <el-radio v-model="formData.isPublic" :label="1">是</el-radio>
      </el-form-item>

      <el-form-item label="更新说明：" prop="tips">
        <el-input
            type="textarea"
            :autosize="{ minRows: 6 }"
            placeholder="请输入内容"
            v-model="formData.tips"
          ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button type="default" @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>

export default {
  data () {
    return {
      formData: {
        systemType: '',
        channel: '',
        downloadUrl: '',
        isForceUpdate: 0,
        version: '',
        isOpen: 0,
        isPublic: 0,
        tips: ''
      },
      rules: {
        systemType: [
          { required: true, message: '请选择', trigger: 'blur' }
        ]
      },
      channelData: [
        { id: 0, label: 'ios' },
        { id: 1, label: '点一点' },
        { id: 2, label: '应用宝' },
        { id: 3, label: '华伪' }
      ]
    }
  },

  computed: {},

  created () {
  },

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

  components: { }
}
</script>

<style lang="less" scoped>
@width: 500px;

/deep/ .el-form-item__label {
  font-weight: 700;
}
.el-form-item {
  color: #666;
}
.el-textarea,
.el-input,
.el-select {
  width: @width;
}
</style>
