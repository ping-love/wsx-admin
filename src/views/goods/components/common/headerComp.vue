/**
* 商品管理公共header
*/
<template>
  <div class='headerComp'>
    <searchForm
      :formOptions="formOptions"
      :btnItems="btnItems"
      @onSearch="handleSearch"
      @onExport="handleExport"
    />
    <div class="operateBtnBox">
      <el-button type="primary" size="mini" @click="importCsvClick">导入商品</el-button>
      <el-button type="primary" size="mini" @click="syncErpClick">同步商品到ERP</el-button>
      <!-- 多图片上传 TODO 不显示文件缩略图 -->
      <img-upload v-model="uploadImgs" :limit="3"></img-upload>
    </div>
  </div>
</template>

<script>
import searchForm from '@/components/searchForm'
import imgUpload from './imgUpload'
import { getGoodsStatus, getSyncStatus } from '@/filters/transformTwo'
import { cascaderGoodsCategory } from '@/views/goods/cascaderApi'
import tools from '@/utils/tools'
export default {
  name: '',
  data () {
    return {
      uploadImgs: [],
      btnItems: 'search, export',
      formOptions: [
        {
          label: '商品名称',
          prop: 'goodsName',
          element: 'el-input',
          initValue: '',
          placeholder: '请输入商品名'
          // rules: [{ required: true, message: '请填写商品名', trigger: 'blur' }]
        },
        {
          label: '商品分类',
          prop: 'goodsCategory',
          element: 'el-cascader',
          props: {
            lazy: true,
            checkStrictly: true,
            lazyLoad (node, resolve) {
              const { level } = node
              console.log(level)
              if (level >= 3) {
                resolve()
                return
              }
              setTimeout(() => {
                resolve(cascaderGoodsCategory(node))
              }, 1000)
            }
          },
          options: [
            {
              value: 1,
              label: '一级分类1',
              leaf: false,
              children: []
            }
          ],
          initValue: '',
          placeholder: '全部'
          // rules: [{ required: true, message: '请选择商品分类', trigger: 'blur' }]
        },
        {
          label: '商品状态',
          prop: 'goodsStatus',
          element: 'el-select',
          options: getGoodsStatus(),
          initValue: '',
          placeholder: '全部'
          // rules: [{ required: true, message: '请选择商品状态', trigger: 'change' }]
        },
        {
          label: '商品同步状态',
          prop: 'goodsSyncStatus',
          element: 'el-select',
          options: getSyncStatus(),
          initValue: '',
          placeholder: '全部'
          // rules: [{ required: true, message: '请选择商品同步状态', trigger: 'change' }]
        },
        {
          label: '商品货号',
          prop: 'goodsCode',
          element: 'el-input',
          initValue: '',
          placeholder: '请输入商品货号'
          // rules: [{ required: true, message: '请填写商品货号', trigger: 'blur' }]
        },
        {
          label: '最低价',
          prop: 'minPrice',
          element: 'el-input',
          initValue: '',
          placeholder: '请输入最低价'
          // rules: [{ required: true, message: '请填写最低价', trigger: 'blur' }]
        },
        {
          label: '最高价',
          prop: 'maxPrice',
          element: 'el-input',
          initValue: '',
          placeholder: '请输入最高价'
          // rules: [{ required: true, message: '请填写最高价', trigger: 'blur' }]
        },
        {
          label: '添加时间',
          prop: 'addPrice',
          element: 'el-date-picker',
          initValue: '',
          placeholder: ''
          // rules: [{ required: true, message: '请选择时间', trigger: 'change' }]
        }

      ]
    }
  },
  components: { imgUpload, searchForm },
  props: {
    addBtnObj: {
      type: Object,
      default () {
        return null
      }
    }
  },
  created () {

  },
  mounted () {

  },
  computed: {

  },
  methods: {
    handleSearch (data) {
      this.$emit('onSearch', data)
    },
    handleExport (data) {
      console.log('-export-', data)
      tools.downloadFile() // TODO
    },
    importCsvClick () {
      this.$message({
        type: 'info',
        message: '即将导入csv'
      })
      // 导出请求， 参数==>当前页码
    },
    syncErpClick () {
      this.$message({
        type: 'info',
        message: '即将同步erp'
      })
    }
  }
}
</script>

<style lang='less' scoped>
.operateBtnBox {
  display: flex;
}
/deep/ .uploadBox {
  display: flex;
  /deep/ .el-upload {
    .el-button {
      margin-left: 5px;
    }
  }
}
/deep/ .el-button+.el-button {
    margin-left: 5px;
}
// /deep/ .uploadBox {
//   padding-top: 5px;
// }
</style>
