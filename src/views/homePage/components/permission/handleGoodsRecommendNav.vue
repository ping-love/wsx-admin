/**
* 添加/编辑商品推荐导航
*/
<template>
  <div class="goodsRecommendNav">
    <!-- 通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可 -->
    <el-form class="formContainer" :rules="rules" :model="formData" ref="formRef" label-width="140px">

      <!-- text输入框 -->
      <el-form-item label="标题:" prop="title">
        <el-input v-model="formData.title" clearable placeholder="请输入标题"></el-input>
      </el-form-item>

      <!-- text输入框 -->
      <el-form-item label="副标题:" prop="subTitle">
        <el-input v-model="formData.subTitle" clearable placeholder="请输入标题"></el-input>
      </el-form-item>

      <!-- text输入框 -->
      <el-form-item label="排序号:" prop="sortNum">
        <el-input v-model.number="formData.sortNum" clearable placeholder="请输入排序号"></el-input>
      </el-form-item>

      <!-- 时间选择框 -->
      <el-form-item label="开始时间:" prop="startTime">
        <el-date-picker v-model="formData.startTime" placeholder="选择开始时间" type="datetime"></el-date-picker>
      </el-form-item>

      <el-form-item label="结束时间:" prop="endTime">
        <el-date-picker v-model="formData.endTime" placeholder="选择结束时间" type="datetime"></el-date-picker>
      </el-form-item>

      <!-- 上传excel -->
      <el-form-item label="上传商品" prop="uploadNum">
        <!-- TODO 上传商品组件 -->

      </el-form-item>

      <!-- radio选择框 -->
      <el-form-item label="是否显示:" prop="isShow">
        <el-radio-group v-model="formData.isShow">
          <el-radio label="是"></el-radio>
          <el-radio label="否"></el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- 确认/重置按钮 -->
      <el-form-item>
        <el-button type="primary" @click="saveForm">保存</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      isGoodsUploaded: false,
      goodsNum: 0,
      tableData: [
        {
          num: 1,
          name: '小王',
          price: '19.99',
          goodsId: '60056',
          stock: 199
        }
      ],
      fileList: [],

      // 验证规则
      rules: {
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        subTitle: [{ required: true, message: '请输入副标题', trigger: 'blur' }],
        sortNum: [
          { required: true, message: '排序号不能为空', trigger: 'blur' },
          { type: 'number', message: '排序号必须为数字', trigger: 'blur' }
        ],
        startTime: [{ type: 'date', required: true, message: '请选择开始时间', trigger: 'change' }],
        endTime: [{ type: 'date', required: true, message: '请选择结束时间', trigger: 'change' }],
        uploadNum: [{ required: true, message: '请上传商品', trigger: 'blur' }],
        uploadGoods: [{ required: true, message: '请选择上传的商品' }],
        isShow: [{ required: true, message: '请选择显示类型', trigger: 'change' }]
      }
    }
  },
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
  components: {},
  created () {},
  mounted () {},
  computed: {},
  methods: {
    saveForm () {
      console.log(this.isGoodsUploaded)
      this.$refs.formRef.validate(valid => {
        if (valid) {
          // TODO 请求的成功回调中执行，保存成功提示，并清空输入框数据
          console.log('formData:', this.formData)
          this.$message({
            message: '保存成功'
          })
          // this.$refs.formRef.resetFields() // 请求成功后
          this.$router.push({ name: 'RecommendNavListIndex' })
        } else {
          console.log('no submit!')
          return false
        }
      })
    },
    resetForm () {
      this.$refs.formRef.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
@tabBorderCol: rgba(214, 221, 228, 0.856);
.addGoodsFloor {
  .tableBox {
    width: 800px;
  }
}

.el-input {
  width: 220px;
}
/deep/ .el-form-item__label {
  padding-right: 16px;
}

.el-table {
  /deep/ .cell {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /deep/ thead {
    font-weight: 600;
  }
  /deep/ th,
  td {
    text-align: center !important;
  }
  // 带状态表格的css
  /deep/ .warning-row {
    background: oldlace;
  }
  /deep/ .success-row {
    background: #f0f9eb;
  }
}

/deep/ .el-table--border {
  border: 1px solid @tabBorderCol;
  th,td {
    border-right: 1px solid @tabBorderCol;
  }
}
/deep/ .el-table__header {
  border-bottom: 1px solid @tabBorderCol;
}
/deep/ .el-table td, .el-table th.is-leaf {
    border-bottom: 1px solid @tabBorderCol;
}
</style>
