/**
* 多图片上传
* list-type ==> text/picture/picture-card
*/
<template>
  <div class='imgUpload'>
    <el-upload
      class="uploadBox"
      ref="uploadRef"
      action="https://httpbin.org/post"
      :show-file-list="true"
      list-type="text"
      :limit="limit"
      multiple
      :file-list="fileList"
      :before-upload="beforeUpload"
      :on-success="onSuccessHandler"
      :on-exceed="onExceed"
      :before-remove="beforeRemove"
      :on-remove="onRemove"
      :on-preview="onPreview"
    >
      <el-button size="small" type="primary">多图片上传</el-button>
    </el-upload>
  </div>
</template>

<script>
function defaultFunc () {}
export default {
  name: '',
  data () {
    return {
      fileList: []
    }
  },
  props: {
    limit: {
      type: Number,
      default: 99
    },
    onSuccess: {
      type: Function,
      default () {
        return defaultFunc
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
    // 上传之前需要验证格式是否正确
    beforeUpload (file) {
      console.log(1, file)
    },
    onSuccessHandler (res, file, fileList) {
      console.log(2, res, file, fileList)
    },
    onExceed (files, fileList) {
      console.log(3, files, fileList)
    },
    beforeRemove (file, fileList) {
      console.log(4, file)
    },
    onRemove (file, fileList) {
      console.log(5, file, fileList)
    },
    // 点击已经上传的文件
    onPreview (file) {
      console.log(6, file)
    }
  }
}
</script>

<style lang='less' scoped>

</style>
