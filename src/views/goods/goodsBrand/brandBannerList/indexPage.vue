/**
* 品牌banner列表
*/
<template>
  <div class='brandBannerList'>

    <div class="headWrap">
      <el-form :model="formData" ref="formRef" :inline="true" >
        <el-form-item label="标题:">
          <el-input v-model="formData.title" size="mini" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="是否显示">
          <el-select v-model="formData.isShow" size="mini" placeholder="全部">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" size="mini" @click="onSearch">搜索</el-button>
        </el-form-item>
      </el-form>
      <div>
        <el-button type="primary" size="mini" @click="onAddHomeBrand">添加首页品牌banner</el-button>
      </div>
    </div>

    <div class="listWrap">
      <div class="tableBox">
        <el-table :data="tableArr" tooltip-effect="dark" style="width: 100%">
          <el-table-column prop="serialNum" label="序号" min-width="60"></el-table-column>
          <el-table-column label="图片" min-width="120">
            <template slot-scope="scope">
              <el-image :src="scope.row.imgUrl" fit="cover" :preview-src-list="previewImgs" ></el-image>
            </template>
          </el-table-column>
          <el-table-column prop="title" label="标题" min-width="100"></el-table-column>
          <el-table-column prop="linkOrId" label="链接/商品ID" width="320"></el-table-column>
          <el-table-column prop="imgSizeType" label="图片尺寸类型" :formatter="sizeTypeFormatter" min-width="160"></el-table-column>
          <el-table-column prop="isShow" label="是否显示" :formatter="isShowFormatter" min-width="80"></el-table-column>

          <el-table-column label="操作" fixed="right" min-width="140">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="onEdit(scope.row)">修改</el-button>
              <el-button type="danger" size="mini" @click="onDel(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <Pagination :currentPage="pagination.currentPage" :total="pagination.total" @currentChange="handleCurrChange" />
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/pagination'
import { getIsShow } from '@/filters/transform'
import { getBrandBanner } from '@/filters/transformTwo'
export default {
  name: '',
  data () {
    return {
      options: getIsShow(),
      formData: {
        title: undefined,
        isShow: undefined
      },
      pagination: {
        currentPage: 1,
        total: 0
      },
      tableArr: [],
      previewImgs: []
    }
  },
  components: { Pagination },
  created () {
    this.getData()
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    sizeTypeFormatter (row, column) {
      return getBrandBanner(row.imgSizeType)
    },
    isShowFormatter (row, column) {
      return getIsShow(row.isShow)
    },
    onSearch () {
      console.log(this.formData)
    },
    onAddHomeBrand () {
      this.$router.push({ name: 'AddBrandBanner' })
    },
    onEdit (row) {
      console.log(row)
      const { id } = row
      this.$router.push({ name: 'EditBrandBanner', query: { id } })
    },
    onDel (row) {
      console.log(row)
      const { id } = row
      console.log('-id-', id)
      this.$confirm('是否确认删除?', '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功'
        })
        this.getData(this.pagination.currentPage)
      }).catch(() => {})
    },
    handleCurrChange (val) {
      console.log('-current-', val)
      this.pagination.currentPage = val
    },
    getData (currentPage) {
      console.log('-currentPage-', currentPage)
      currentPage = currentPage || 1
      let res = {
        data: {
          total: 21,
          list: []
        }
      }
      res.data.list = [
        {
          id: '60069',
          serialNum: '1',
          imgUrl: 'https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png',
          title: '家具日用',
          linkOrId: 'https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png',
          imgSizeType: 1,
          isShow: 1
        }
      ]
      setTimeout(() => {
        this.$message({
          message: '请求成功',
          type: 'success'
        })
        this.pagination.total = res.data.total
        this.previewImgs = ['https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png']
        this.tableArr = res.data.list
      }, 500)
    }
  }
}
</script>

<style lang='less' scoped>
.headWrap {
  display: flex;
  justify-content: space-between;
}

.el-table {
  /deep/ .cell {
    display: flex;
    justify-content: center;
    align-items: center
  }
}
.el-image {
  width: 100px;
  height: 50px;
}
</style>
