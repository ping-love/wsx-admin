/**
* 商品属性
*/
<template>
  <div class='handleGoodsAttr'>
    <div class="noPermission" v-if="!type">
      <h3>设置商品属性前，请先选择商品类型</h3>
      <el-button type="primary" size="medium" @click="onSubmit(type)">提交</el-button>
    </div>
    <div class="permission" v-else>

      <el-form :model="formData" ref="formRef" label-width="80px">
        <el-form-item label="商品扩展属性">
          <!-- <el-checkbox v-model="checked1" label="材料" border></el-checkbox> -->
          <el-input v-model="formData.addAttr" placeholder="请输入扩展属性"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(type)">提交</el-button>
          <el-button type="info" @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>

    </div>
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
    type: {
      type: Boolean,
      default: false
    },
    formData: {
      type: Object,
      default () {
        return {}
      }
    },
    currObj: {
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

  },
  methods: {
    // 提交
    onSubmit (type) {
      console.log('-type-', type)
      // 添加商品
      if (!type) {
        this.$alert('商品规格必须开启!!', '提示', {
          confirmButtonText: '确定'
        }).then(() => {
          console.log('提交')
          this.$emit('submit')
        }).catch(() => {})
        return
      }
      // 修改商品
      this.$refs.formRef.validate(valid => {
        if (valid) {
          // TODO 请求的成功回调中执行，保存成功提示，并清空输入框数据
          console.log('formData:', this.formData)
          this.$message({
            message: '保存成功'
          })
          // this.$refs['formData'].resetFields() // 请求成功后
          this.$router.push({ name: 'ActivityCardListIndex' }) // 请求成功后
        } else {
          console.log('no submit!')
          return false
        }
      })
    },
    // 重置
    onReset () {
      this.$refs.formRef.resetFields()
    }
  }
}
</script>

<style lang='less' scoped>
.handleGoodsAttr {
  min-height: 400px;
  border: 1px solid rgb(206, 150, 150);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.noPermission {
  text-align: center;
  h3 {
    font-size: 16px;
    color: #999;
    line-height: 48px;
    margin-bottom: 40px;
  }
}
.permission {

}
</style>
