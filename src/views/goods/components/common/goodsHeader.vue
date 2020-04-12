/**
* 商品管理公共header组件
*/
<template>
  <div class="header">
    <ul class="headerLeft">

      <!-- el-input标签没有使用div包裹，可能会出现，span中的标题名不在一条线上 -->
      <!-- <li>
        <span>标题名:</span>

        <el-input v-model="value" placeholder="请输入内容"></el-input>
        <div>
          <el-input v-model="value" placeholder="请输入内容"></el-input>
        </div>
      </li> -->

      <li v-for="(item, idx) in inputArr" :key="idx">
        <span>{{ item.name }}:</span>
        <input-item :inputType="item.type" :options="item.options" v-model="formData[item.key]"></input-item>
      </li>

      <li>
        <!-- 按钮父级设置了flex，必须要设置aling-item:center，按钮设置size属性才会生效 -->
        <el-button class="search" type="primary" icon="el-icon-search" size="mini" @click="searchClick">搜索</el-button>
        <el-button class="search" type="primary" icon="el-icon-search" size="mini" @click="exportCsvClick">导出</el-button>
      </li>

    </ul>

    <div class="headerRight">
      <el-button type="primary" size="mini" @click="importCsvClick">导入商品</el-button>
      <el-button type="primary" size="mini" @click="syncErpClick">同步商品到ERP</el-button>
      <img-upload v-model="uploadImgs" :limit="3"></img-upload>
      <!-- <el-button type="primary" size="mini" @click="morePicUploadClick">多图片上传</el-button> -->
    </div>

  </div>
</template>

<script>
import inputItem from './inputItem'
import imgUpload from './imgUpload'
import tools from '@/utils/tools'
import { getGoodsStatus, getSyncStatus } from '@/filters/transformTwo'
export default {
  name: '',
  data () {
    return {
      formData: [],
      uploadImgs: [],
      // type == 1、普通输入框；2、下拉搜索框；3、时间选择框
      inputArr: [
        {
          name: '商品名称',
          type: '1',
          key: 'title'
        },
        {
          name: '商品分类',
          type: '4',
          options: [
            {
              grade: 'one',
              typeId: 1,
              value: '1',
              label: '零食水饮',
              leaf: false,
              children: []
            },
            {
              grade: 'one',
              typeId: 2,
              value: '2',
              label: '水果',
              leaf: false,
              children: []
            }
          ],
          key: 'goodsCategory'
        },
        // {
        //   name: '商品分类',
        //   type: '4',
        //   options: getGoodsCategory(),
        //   key: 'goodsCategory'
        // },
        {
          name: '商品状态',
          type: '2',
          options: getGoodsStatus(),
          key: 'goodsStatus'
        },
        {
          name: '商品同步状态',
          type: '2',
          options: getSyncStatus(),
          key: 'goodsSyncStatus'
        },
        {
          name: '商品货号',
          type: '1',
          key: 'goodsCode'
        },
        {
          name: '最低价',
          type: '1',
          key: 'minPrice'
        },
        {
          name: '最高价',
          type: '1',
          key: 'maxPrice'
        },
        {
          name: '添加时间',
          type: '3',
          pickerOptions: tools.pickerOptionsRange,
          key: 'addTime'
        }
      ]
    }
  },
  // props: {
  //   inputArr: {
  //     type: Array,
  //     default: function () {
  //       return []
  //     }
  //   }
  // },
  components: {
    inputItem,
    imgUpload
  },
  created () {},
  mounted () {},
  computed: {
    currVal: {
      get () {
        return this.value
      },
      set (val) {
        // console.log('输入框的值:', val)
        this.$emit('input', val)
      }
    }
  },
  methods: {
    searchClick () {
      console.log(this.formData)
      this.$emit('search', this.formData)
    },
    exportCsvClick () {
      this.$message({
        type: 'info',
        message: '即将导出csv'
      })
      // 导出请求， 参数==>当前页码
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
    },
    morePicUploadClick () {
      let res = {
        code: 0,
        data: {
          success_number: 2,
          error_number: 1
        },
        error_msg: '请求成功'
      }
      let data = res.data
      if (res.code === 0) {
        let alertMsg
        if (data.error_number === 0) {
          alertMsg = `${data.success_number}张图片上传成功，${data.error_number}张图片上传失败`
        } else {
          alertMsg = `${data.success_number}张图片上传成功，${data.error_number}张图片上传失败，图片名称格式不正确`
        }
        this.$alert(alertMsg, '提示信息', {
          confirmButtonText: '确定',
          callback: action => {
            // console.log(action)
            // this.$message({
            //   type: 'info',
            //   message: action
            // })
          }
        })
      }
      // let msg = `0张图片上传成功,0张图片上传失败,图片名称格式不正确`
      // this.$message({
      //   type: 'info',
      //   message: '即将上传多图片'
      // })
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  // display: flex;
  // align-items: flex-start;
  // justify-content: space-between;
  .headerLeft {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    align-content: flex-start;
    li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-right: 10px;
      margin-bottom: 8px;
      span {
        display: block;
        padding-right: 6px;
      }
      .search {
      }
    }
  }
  .headerRight {
    display: flex;
    .imgUpload {
      margin-left: 10px;
    }
  }
}
</style>
