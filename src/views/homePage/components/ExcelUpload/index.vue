/**
* 商品导入
*/
<template>
  <div class='goodsImport'>
    <el-input v-model="formData.uploadNum" placeholder="请上传图片"></el-input>
        <el-upload
          ref="uploadRef"
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-success="handleSuccess"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">已导入{{ goodsNum }}个商品</div>
          <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
        </el-upload>
        <el-table class="tableBox" :data="tableData" v-model="formData.uploadGoods" border stripe>
          <el-table-column prop="num" label="编号"> </el-table-column>
          <el-table-column prop="name" label="商品名称"> </el-table-column>
          <el-table-column prop="price" label="商品价格"> </el-table-column>
          <el-table-column prop="goodsId" label="商品ID"> </el-table-column>
          <el-table-column prop="stock" label="库存"> </el-table-column>
        </el-table>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
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
    // 上传成功回调
    handleSuccess (res, file, fileList) {
      // console.log('handleSuccess:', res, file, fileList)
      // console.log(this.$refs.uploadRef)
      if (this.$refs.uploadRef.uploadFiles.length > 0) {
        this.ruleForm.uploadNum = 1
      }
      this.$refs.uploadRef.uploadFiles.map(v => {
        console.log(v)
        if (v.response) {
          console.log(v.response.id)
        } else {
          console.log(v.id)
        }
      })
    },
    // 移除某个文件后的回调
    handleRemove (file, fileList) {
      console.log('handleRemove:', file, fileList)
    },
    // 预览上传的文件
    handlePreview (file) {
      console.log('Preview', file)
    },

    // 超出设置的上传文件的最大值，触发
    handleExceed (files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`
      )
    },
    // 点击上传的文件最右边删除按钮触发
    beforeRemove (file, fileList) {
      console.log(file, fileList)
      return this.$confirm(`确定移除 ${file.name}？`)
    },

    handleGoodsEntry () {
      // console.log('商品数量:', this.goodsNum)
      this.tableData = [
        {
          num: 1,
          name: '小王',
          price: '19.99',
          goodsId: '60056',
          stock: 199
        },
        {
          num: 2,
          name: '小王',
          price: '19.99',
          goodsId: '60056',
          stock: 199
        }
      ]
      this.goodsNum = this.tableData.length
      this.isGoodsUploaded = true
      this.$message({
        message: `商品导入成功,已导入${this.goodsNum}个商品`
      })
    }
  }
}
</script>

<style lang='less' scoped>

</style>
