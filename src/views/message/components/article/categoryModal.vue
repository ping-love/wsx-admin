/**
 * 添加/编辑文章分类
 */
<template>
  <div class=''>
    <el-dialog
      :title="(type === 'add' ? '添加' : '编辑') + '栏目'"
      :visible.sync="dialogVisible"
    >
      <el-form
        :model="formData"
        :rules="rules"
        ref="formRef"
      >
        <el-form-item label="分类名称：" prop="title">
          <el-input
            placeholder="请输入内容"
            v-model="formData.title"
          ></el-input>
        </el-form-item>

        <el-form-item label="排序：" prop="sortNum">
          <el-input-number
            v-model="formData.sortNum"
            controls-position="right"
            :min="0"
          ></el-input-number>
        </el-form-item>

        <el-form-item label="是否显示：" prop="isOpen">
          <el-radio v-model="formData.isOpen" :label="1">是</el-radio>
          <el-radio v-model="formData.isOpen" :label="0">否</el-radio>
        </el-form-item>

        <el-form-item label="分类介绍：" prop="desc">
          <el-input
            type="textarea"
            :autosize="{ minRows: 6 }"
            placeholder="请输入内容"
            v-model="formData.desc"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="onCancel">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
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
      rules: {
        title: [
          { required: true, message: '请输入内容', trigger: 'blur' }
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
.el-input-number {
  width: 100%;
}
</style>
