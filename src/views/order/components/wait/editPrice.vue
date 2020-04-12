/**
* 修改价格
*/
<template>
  <div class='editPrice'>
    <el-dialog
      title="修改价格"
      :visible.sync=" dialogVisible"
      width="50%"
    >
      <el-form :model="formData" ref="formRef" label-width="80px">
        <el-form-item label="商品价格:">
          <!-- <el-input v-model="formData.price" placeholder="请输入商品价格"></el-input> -->
          <el-input-number v-model="formData.price" :min="0" controls-position="right" @change="handleChange" placeholder="请输入商品价格"></el-input-number>
        </el-form-item>
      </el-form>

      <span slot="footer">
        <el-button type="info" @click="onClose">关 闭</el-button>
        <el-button type="primary" @click="onConfirm">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  },
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
    dialogVisible: {
      get () {
        return this.visible
      },
      set (val) {
        this.$emit('update:visible', val)
      }
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    },
    onClose () {
      this.dialogVisible = false
    },
    onConfirm () {
      this.$refs.formRef.validate(valid => {
        if (valid) {
          this.dialogVisible = false
          this.$message({
            message: '商品价格修改成功！',
            type: 'success'
          })
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>

</style>
