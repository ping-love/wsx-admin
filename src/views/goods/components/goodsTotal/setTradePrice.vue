/**
* 设置批发价弹框
*/
<template>
  <el-dialog
    title="设置批发价"
    :visible.sync="dialogVisible"
    width="70%"
    height="70%"
  >
    <div class="operatBtnBox">
      <el-button type="primary" @click="addItem">增加</el-button>
      <!-- <el-button type="primary" @click="save">保存</el-button> -->
      <p>只有所有规格价格都相同的商品才可设置批发价</p>
    </div>

    <el-form class="formContainer" :model="formData" ref="formRef" :rules="rules" :inline="true" label-width="80px">
      <!-- 固定 -->
      <div class="fixedFormBox formItemBox">
        <el-form-item
          label="购买数量:"
          prop="buyNumber"
          :rules="{ required: true, message: '请填写数量且必须为大于0的数字', trigger: 'blur' }"
        >
          <el-input-number v-model="formData.buyNumber" :min="1" :precision="0" controls-position="right" placeholder="请输入数量"></el-input-number>
        </el-form-item>
        <el-form-item
          label="批发优惠:"
          prop="discounts"
          :rules="{ required: true, message: '请填写批发价且必须为大于0的数字', trigger: 'blur' }"
        >
          <el-input v-model="formData.discounts" clearable placeholder="请输入链接"></el-input>
        </el-form-item>
      </div>

      <div class="dynamicFormBox formItemBox" v-for="(item, idx) in formData.childrenItem" :key="idx">
        <el-form-item
          label="购买数量:"
          :prop="'childrenItem.' + idx + '.buyNumber'"
          :rules="{ required: true, message: '请填写数量且必须为大于0的数字', trigger: 'blur' }"
        >
          <el-input-number v-model="item.buyNumber" :min="1" :precision="0" controls-position="right" placeholder="请输入数量"></el-input-number>
        </el-form-item>
        <el-form-item
            label="批发优惠:"
          :prop="'childrenItem.' + idx + '.discounts'"
          :rules="{ required: true, message: '请填写批发价且必须为大于0的数字', trigger: 'blur' }"
        >
          <el-input v-model="item.discounts" clearable placeholder="请输入批发优惠价"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" size="mini" @click="delectItem(item, idx)">删除</el-button>
        </el-form-item>
      </div>
    </el-form>

    <span slot="footer">
      <el-button @click="onCancel">取 消</el-button>
      <el-button type="primary" @click="onSubmit">确 定</el-button>
    </span>
  </el-dialog>
  <!-- <div class='setTradePrice' @click="close">
    <div class="dialogMain" @click.stop>
      <h3>设置批发价</h3>
      <div class="operatBtnBox">
        <el-button type="primary" @click="addItem">增加</el-button>
        <el-button type="primary" @click="save">保存</el-button>
        <p>只有所有规格价格都相同的商品才可设置批发价</p>
      </div>

      <el-form class="formContainer" :model="formData" ref="formRef" :rules="rules" :inline="true" label-width="80px">
        <div class="fixedFormBox formItemBox">
          <el-form-item
            label="购买数量:"
            prop="buyNumber"
            :rules="{ required: true, message: '请填写数量且必须为大于0的数字', trigger: 'blur' }"
          >
            <el-input-number v-model="formData.buyNumber" :min="1" :precision="0" controls-position="right" placeholder="请输入数量"></el-input-number>
          </el-form-item>
          <el-form-item
            label="批发优惠:"
            prop="discounts"
            :rules="{ required: true, message: '请填写批发价且必须为大于0的数字', trigger: 'blur' }"
          >
            <el-input v-model="formData.discounts" clearable placeholder="请输入链接"></el-input>
          </el-form-item>
        </div>

        <div class="dynamicFormBox formItemBox" v-for="(item, idx) in formData.childrenItem" :key="idx">
          <el-form-item
            label="购买数量:"
            :prop="'childrenItem.' + idx + '.buyNumber'"
            :rules="{ required: true, message: '请填写数量且必须为大于0的数字', trigger: 'blur' }"
          >
            <el-input-number v-model="item.buyNumber" :min="1" :precision="0" controls-position="right" placeholder="请输入数量"></el-input-number>
          </el-form-item>
          <el-form-item
             label="批发优惠:"
            :prop="'childrenItem.' + idx + '.discounts'"
            :rules="{ required: true, message: '请填写批发价且必须为大于0的数字', trigger: 'blur' }"
          >
            <el-input v-model="item.discounts" clearable placeholder="请输入批发优惠价"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="danger" size="mini" @click="delectItem(item, idx)">删除</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div> -->

</template>

<script>
export default {
  name: '',
  data () {
    return {
      childrenItemCount: 0,
      formData: {
        buyNumber: undefined,
        discounts: undefined,
        childrenItem: []
      },
      rules: {
        buyNumber: [{ required: true, message: '请填写数量且必须为大于0的数字', trigger: 'blur' }],
        discounts: [{ required: true, message: '请填写批发价且必须为大于0的数字', trigger: 'blur' }]
      }
    }
  },
  props: {
    itemObj: {
      type: Object,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  components: {

  },
  created () {
    console.log(this.itemObj)
    this.initData()
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
    initData () {
      this.formData.childrenItem = []
    },
    onCancel () {
      this.dialogVisible = false
    },
    onSubmit () {
      this.$refs.formRef.validate(valid => {
        if (valid) {
          this.$message({
            message: '保存成功',
            type: 'info'
          })
          console.log('-formData-', this.formData)
          this.dialogVisible = false
        }
      })
    },
    handleNumChange (val) {
      console.log('num', val)
    },
    addItem () {
      if (this.childrenItemCount >= 3) {
        this.$message({
          message: '最多设置四个批发价',
          type: 'info'
        })
        return
      }
      this.childrenItemCount++
      this.formData.childrenItem.push({ buyNumber: undefined, discounts: undefined })
    },
    delectItem (item, idx) {
      if (this.formData.childrenItem.indexOf(item) !== -1) {
        this.childrenItemCount--
        this.formData.childrenItem.splice(idx, 1)
      }
    }
  }
}
</script>

<style lang='less' scoped>
.operatBtnBox {
  p {
    padding: 16px 0;
    color: red;
  }
}
/deep/ .el-dialog__body {
  padding-top: 0;
}

.el-input {
  width: 200px;
}
/deep/ .el-form-item__label {
  padding-right: 10px;
}
/deep/ .el-form-item {
  margin-bottom: 20px;
}

/deep/ .el-form--inline .el-form-item {
  margin-right: 20px;
}
</style>
