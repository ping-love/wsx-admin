/**
* 编辑当前地址(内层dialog)
*/
<template>
  <div class='innerDialog'>
    <el-dialog
      title="当前地址"
      :visible.sync="innerVisible"
      width="50%"
      append-to-body
      :before-close="handleBeforeClose"
    >
      <!-- 当前地址 -->
      <el-form :model="formData" ref="formRef" :rules="rules" label-width="140px">
        <el-form-item prop="username" label="用户名:">
          <el-input v-model="formData.username" size="mini" clearable placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="phone" label="用户手机号:">
          <el-input v-model="formData.phone" size="mini" clearable placeholder="请输入用户手机号"></el-input>
        </el-form-item>

        <el-form-item prop="addressName" label="省市区地址:">
          <el-cascader
            v-model="formData.addressName"
            :options="cascaderData"
            :props="propsOrder"
            size="mini"
            placeholder="请选择省市区"
            @change="handleChange"
          >
          </el-cascader>
        </el-form-item>

        <el-form-item prop="other" label="详细住址:">
          <el-input v-model="formData.other" size="mini" clearable placeholder="请填写住址，例如：xx街道xx号"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer">
        <el-button type="info" @click="onClose">关 闭</el-button>
        <el-button type="primary" @click="onSave">保 存</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import areaData from '@/utils/areaData'
import bus from '@/utils/bus'
export default {
  name: '',
  data () {
    return {
      // 级联选择器配置项
      propsOrder: {
        multiple: false,
        emitPath: false,
        value: 'id',
        label: 'value',
        children: 'child'
      },
      cascaderData: areaData.getArea(),
      rules: {
        username: [{ required: true, message: '请填写姓名', trigger: 'blur' }],
        phone: [{ required: true, message: '请填写手机号', trigger: 'blur' }],
        addressName: [{ required: true, message: '请选择省市区地址', trigger: 'change' }],
        other: [{ required: true, message: '请填写住址，例如：xx街道xx号', trigger: 'blur' }]
      }
    }
  },
  // inheritAttrs: false,
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    formData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {

  },
  created () {

  },
  mounted () {

  },
  computed: {
    innerVisible: {
      get () {
        return this.visible
      },
      set (val) {
        this.$emit('update:visible', val)
      }
    }
  },
  methods: {
    initData () {
      this.innerVisible = false
      this.$refs.formRef.resetFields()
    },
    handleChange (val) {
      console.log(val)
    },
    handleBeforeClose () {
      console.log('-before-close-')
      this.initData()
    },
    onClose () {
      console.log('-close-')
      this.initData()
    },
    onSave () {
      console.log('-formdata-', this.formData)
      this.$refs.formRef.validate(valid => {
        if (valid) {
          setTimeout(() => {
            this.innerVisible = false
            this.initData()
            // TODO 向orderDetails发送update事件
            bus.$emit('update', '这是editCurrentAddress组件传递的数据--111')
          }, 500)
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
/deep/ .el-dialog__body {
  // padding-right: 50px;
}
.el-input {
  width: 240px;
}
.el-cascader {
  width: 240px;
}
/deep/ .el-form-item__label {
  padding-right: 16px;
}
</style>
