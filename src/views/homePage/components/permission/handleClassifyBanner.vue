/**
* 添加/编辑分类banner
*/
<template>
  <div class="handleClassifyBanner">
    <!-- 通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可 -->
    <el-form class="formContainer" :rules="rules" :model="formData" ref="formRef" label-width="140px">

      <!-- text输入框 -->
      <el-form-item label="标题:" prop="name">
        <el-input v-model="formData.name" clearable placeholder="请输入标题"></el-input>
      </el-form-item>

      <!-- 下拉选择框select -->
      <el-form-item label="所属分类:" prop="classify">
        <el-select v-model="formData.classify" placeholder="请选择">
          <el-option v-for="item in options" :key="item.type" :label="item.value" :value="item.value"> </el-option>
        </el-select>
      </el-form-item>

      <!-- radio选择框 -->
      <el-form-item label="类型:" prop="genre">
        <el-radio-group v-model="formData.genre">
          <el-radio label="承接页"></el-radio>
          <el-radio label="内置商品"></el-radio>
          <el-radio label="跳转游戏"></el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- text输入框 -->
      <el-form-item label="链接/商品ID:" prop="linkOrId">
        <el-input v-model="formData.linkOrId" clearable placeholder="请输入链接或ID"></el-input>
        <p class="linkExplain">如果是承接页，请填写完成链接；如果是内置商品，请填写商品ID</p>
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

      <!-- 图片上传 -->
      <el-form-item label="图片上传:" prop="uploadPics">
        <img-upload v-model="formData.uploadPics" :limit="4"></img-upload>
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
import ImgUpload from '@/components/imgUpload'
export default {
  name: '',
  data () {
    return {
      options: [
        {
          type: '1',
          value: '会飞的个'
        },
        {
          type: '2',
          value: '零食水饮'
        },
        {
          type: '3',
          value: '乳品冲调'
        },
        {
          type: '4',
          value: '家居日用'
        },
        {
          type: '5',
          value: '美妆个护'
        },
        {
          type: '6',
          value: '服饰箱包'
        },
        {
          type: '7',
          value: '母婴用品'
        },
        {
          type: '8',
          value: '数码电器'
        }
      ],
      // 验证规则
      rules: {
        name: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        classify: [{ required: true, message: '请选择类别', trigger: 'change' }],
        genre: [{ required: true, message: '请选择类型', trigger: 'change' }],
        sortNum: [
          { required: true, message: '排序号不能为空', trigger: 'blur' },
          { type: 'number', message: '排序号必须为数字', trigger: 'blur' }
        ],
        startTime: [{ type: 'date', required: true, message: '请选择开始时间', trigger: 'change' }],
        endTime: [{ type: 'date', required: true, message: '请选择结束时间', trigger: 'change' }],
        isShow: [{ required: true, message: '请选择显示类型', trigger: 'change' }],
        uploadPics: [{ type: 'array', required: true, message: '请选择需要上传的图片', trigger: 'change' }]
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
  components: {
    ImgUpload
  },
  created () {},
  mounted () {
    // console.log('params:', JSON.stringify(this.$route.params))
    // JSON.stringify(this.$route.params) !== '{}' && this.setRuleForm(this.$route.params)
  },
  computed: {},
  methods: {
    setRuleForm (data) {
      // this.ruleForm.classify = data.classifyName
      // this.ruleForm.genre = data.linkType
      // this.ruleForm.linkOrId = data.linkOrId
      // this.ruleForm.sortNum = data.sort
      // this.ruleForm.startTime = data.startTime
      // this.ruleForm.endTime = data.endTime
      // this.ruleForm.isShow = data.isShow
      // this.ruleForm.uploadPics = data.uploadPics
    },
    // 保存
    saveForm () {
      this.$refs.formRef.validate(valid => {
        if (valid) {
          // TODO 请求的成功回调中执行，保存成功提示，并清空输入框数据
          console.log('formData:', this.formData)
          this.$message({
            message: '保存成功'
          })
          // this.$refs['ruleForm'].resetFields() // 请求成功后
          this.$router.push({ name: 'ClassifyBannerIndex' }) // 请求成功后
        } else {
          console.log('no submit!')
          return false
        }
      })
    },
    // 重置
    resetForm () {
      console.log(this.formData)
      this.$refs.formRef.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.linkExplain {
  font-size: 12px;
  color: #d2d2d2;
  line-height: 12px;
  padding-top: 12px;
}

.el-input {
  width: 360px;
}
.el-select {
  width: 360px;
}
/deep/ .el-form-item__label {
  padding-right: 16px;
}
</style>
