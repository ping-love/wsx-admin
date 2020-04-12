/**
 * 添加/编辑文章
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
      <el-form-item label="任务ID：" prop="id">
        <el-input v-model="formData.id"></el-input>
        <p class="idTip">按照"10000","10001"的格式自增添加</p>
      </el-form-item>

      <el-form-item label="任务标题：" prop="title">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>

      <el-form-item label="任务icon：" prop="icon">
        <imgUpload v-model="imgList" :isSingle="true" :size="2048"/>
        <p class="iconTip">暂时只支持上传2M以内JPG,JPEG,PNG,GIF格式图片</p>
      </el-form-item>

      <el-form-item label="任务触发类型：" prop="taskTriggerType">
        <el-select v-model="formData.taskTriggerType" clearable>
          <el-option
            v-for="item in taskTriggerTypeData"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="任务描述：" prop="desc">
        <el-input
          type="textarea"
          :autosize="{ minRows: 6 }"
          placeholder="请输入内容"
          v-model="formData.desc"
        ></el-input>
      </el-form-item>

      <el-form-item label="完成条件：" prop="condition">
        <el-input v-model="formData.condition"></el-input>
      </el-form-item>

      <el-form-item label="跳转类型：" prop="jumpType">
        <el-select v-model="formData.jumpType" clearable>
          <el-option
            v-for="item in jumpTypeData"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="激活状态：" prop="activeStatus">
        <el-radio v-model="formData.activeStatus" :label="1">激活</el-radio>
        <el-radio v-model="formData.activeStatus" :label="0">关闭</el-radio>
      </el-form-item>

      <el-form-item label="任务奖励：" prop="taskReward">
        <el-radio
          v-model="formData.taskReward"
          v-for="item in taskRewardData"
          :key="item.value"
          :label="item.value"
        >{{item.label}}</el-radio>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button type="default" @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {
  getTaskTriggerType,
  getJumpType,
  getTaskReward
} from '@/filters/transform'
import imgUpload from '@/components/imgUpload'

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
      taskTriggerTypeData: getTaskTriggerType(),
      jumpTypeData: getJumpType(),
      taskRewardData: getTaskReward(),
      rules: {
        title: [{ required: true, trigger: 'blur', message: '必填项' }]
      }
    }
  },

  computed: {
    imgList: {
      get () {
        return this.formData.icon ? [this.formData.icon] : []
      },
      set (val) {
        this.formData.icon = val[0] || ''
      }
    }
  },

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

  components: { imgUpload }
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
  .el-input-number {
    width: 500px;
  }
  .el-textarea {
    width: 500px;
  }
  /deep/ .el-form-item__label {
    font-weight: 700;
  }
}
.idTip, .iconTip {
  color: #999;
}
</style>
