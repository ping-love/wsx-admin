/**
 * 添加/编辑公告
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
      <el-form-item label="标题：" prop="title">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>

      <el-form-item label="所属栏目：" prop="category">
        <el-select v-model="formData.category" clearable>
          <el-option
            v-for="item in noticeCategory"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="作者：" prop="artist">
        <el-input v-model="formData.artist"></el-input>
      </el-form-item>

      <el-form-item label="来源：" prop="from">
        <el-input v-model="formData.from"></el-input>
      </el-form-item>

      <el-form-item label="排序：" prop="sortNum">
        <el-input-number
          v-model="formData.sortNum"
          controls-position="right"
          :min="0"
        ></el-input-number>
      </el-form-item>

      <el-form-item label="显示：" prop="isShow">
        <el-radio v-model="formData.isShow" :label="1">是</el-radio>
        <el-radio v-model="formData.isShow" :label="0">否</el-radio>
      </el-form-item>

      <el-form-item label="公告图片：" prop="from">
        <imgUpload v-model="formData.imgList"/>
      </el-form-item>

      <el-form-item label="页面关键字：" prop="tags">
        <el-input v-model="tagsStr"></el-input>
        <span class="tagsTip">多个用 | 分隔</span>
      </el-form-item>

      <el-form-item label="页面描述：" prop="desc">
        <el-input
          type="textarea"
          :autosize="{ minRows: 6 }"
          placeholder="请输入内容"
          v-model="formData.desc"
        ></el-input>
      </el-form-item>

      <el-form-item label="内容：" prop="content">
        <tinymce v-model="formData.content"></tinymce>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button type="default" @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import tinymce from '@/components/tinymce'
import imgUpload from '@/components/imgUpload'

import getNoticeCategory from '@/views/message/mixins/getNoticeCategory'

export default {
  mixins: [getNoticeCategory],

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
      rules: {
        title: [{ required: true, trigger: 'blur', message: '必填项' }]
      }
    }
  },

  computed: {
    tagsStr: {
      get () {
        return this.formData.tags.join('|')
      },
      set (val) {
        this.formData.tags = val.split('|')
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

  components: { tinymce, imgUpload }
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
  .tagsTip {
    display: inline-block;
    padding-left: 5px;
    color: #999;
  }
}
</style>
