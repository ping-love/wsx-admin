/**
* 新增库存
*/
<template>

  <div class="addStock">
    <el-form :model="formData" ref="formRef" :rules="rules" :inline="true">

      <!-- 固定的表单 -->
      <el-form-item
        label=""
        prop="goodsName"
        :rules="{ required: true, message: '请填写商品名', trigger: 'blur' }"
      >
        <el-input v-model="formData.goodsName" size="mini" placeholder="请输入商品名"></el-input>
      </el-form-item>
      <el-form-item
        label=""
        prop="supplier"
        :rules="{ required: true, message: '请填写供应商', trigger: 'blur' }"
      >
        <el-input v-model="formData.supplier" size="mini" placeholder="请输入供应商"></el-input>
      </el-form-item>
      <el-form-item
        label=""
        prop="price"
        :rules="{ required: true, message: '请填写商品进价', trigger: 'blur' }"
      >
        <el-input-number v-model="formData.price" size="mini" :min="0" controls-position="right" placeholder="请输入商品进价" @change="handlePriceChange" ></el-input-number>
      </el-form-item>
      <el-form-item
        label=""
        prop="goodsNum"
        :rules="{ required: true, message: '请填写数量', trigger: 'blur' }"
      >
        <el-input-number v-model="formData.goodsNum" size="mini" :min="1" :precision="0" controls-position="right" placeholder="请输入数量" @change="handleNumChange" ></el-input-number>
      </el-form-item>

      <!-- 动态添加的 -->
      <div class="" v-for="(item, idx) in formData.childrenItem" :key="idx">
        <el-form-item
          label=""
          :prop="'childrenItem.' + idx + '.goodsName'"
          :rules="{ required: true, message: '请填写商品名', trigger: 'blur' }"
        >
          <el-input v-model="item.goodsName" size="mini" placeholder="请输入商品名"></el-input>
        </el-form-item>
        <el-form-item
          label=""
          :prop="'childrenItem.' + idx + '.supplier'"
          :rules="{ required: true, message: '请填写供应商', trigger: 'blur' }"
        >
          <el-input v-model="item.supplier" size="mini" placeholder="请输入供应商"></el-input>
        </el-form-item>
        <el-form-item
          label=""
          :prop="'childrenItem.' + idx + '.price'"
          :rules="{ required: true, message: '请填写商品进价', trigger: 'blur' }"
        >
          <el-input-number v-model="item.price" size="mini" :min="0" controls-position="right" placeholder="请输入商品进价" @change="handlePriceChange" ></el-input-number>
        </el-form-item>
        <el-form-item
          label=""
          :prop="'childrenItem.' + idx + '.goodsNum'"
          :rules="{ required: true, message: '请填写数量', trigger: 'blur' }"
        >
          <el-input-number v-model="item.goodsNum" size="mini" :min="1" :precision="0" controls-position="right" placeholder="请输入数量" @change="handleChange" ></el-input-number>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" size="mini" @click="delItem(item, idx)">删除</el-button>
        </el-form-item>
      </div>
    </el-form>
    <div class="">
      <el-button type="primary" size="mini" @click="addItem">新增</el-button>
      <el-button type="primary" size="mini" @click="save">保存</el-button>
      <!-- <el-button type="primary" size="mini" @click="reset">重置</el-button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      formData: {
        goodsName: undefined,
        supplier: undefined,
        price: undefined,
        goodsNum: undefined,
        childrenItem: []
      },
      // 验证规则
      rules: {
        goodsName: [{ required: true, message: '请填写商品名', trigger: 'blur' }],
        supplier: [{ required: true, message: '请填写供应商名', trigger: 'blur' }],
        price: [{ required: true, message: '请填写商品进价', trigger: 'blur' }],
        goodsNum: [{ required: true, message: '请填写数量', trigger: 'blur' }]
      }
    }
  },
  components: {

  },
  watch: {

  },
  created () {
    this.initData()
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    initData () {
      this.formData.childrenItem = []
    },
    addItem () {
      console.log('-add-')
      this.formData.childrenItem.push({ goodsName: undefined, supplier: undefined, price: undefined, goodsNum: undefined })
      // console.log(this.formData)
    },
    delItem (item, idx) {
      console.log('-delete-')
      if (this.formData.childrenItem.indexOf(item) !== -1) {
        this.formData.childrenItem.splice(idx, 1)
      }
    },
    handlePriceChange (val) {
      console.log('-price-', val)
    },
    // 数量
    handleNumChange (val) {
      console.log('-num-', val)
    },
    save () {
      this.$refs.formRef.validate(valid => {
        if (valid) {
          this.$message({
            message: '保存成功',
            type: 'info'
          })
          console.log('-formData-', this.formData)
        } else {
          console.log('no message!')
          return false
        }
      })
    },
    reset () {
      this.$refs.formRef.resetFields()
    }
  }
}
</script>

<style lang='less' scoped>

</style>
