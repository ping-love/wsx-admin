/**
* 品牌列表
*/
<template>
  <div class='brandList'>

    <div class="headWrap">
      <el-form :model="formData" ref="formRef" :inline="true" >
        <el-form-item label="品牌名称关键字:">
          <el-input v-model="formData.keyword" size="mini"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" size="mini" @click="onSearch">搜索</el-button>
        </el-form-item>
      </el-form>
      <div>
        <el-button type="primary" size="mini" @click="onAddBrand">添加商品品牌</el-button>
      </div>
    </div>

    <div class="listWrap">
      <div class="tableBox">
        <el-table :data="tableArr" tooltip-effect="dark" style="width: 100%">
          <el-table-column prop="serialNum" label="序号" min-width="50"></el-table-column>
          <el-table-column prop="brandName" label="品牌名称" min-width="80"></el-table-column>
          <el-table-column label="品牌图标" min-width="140">
            <template slot-scope="scope">
              <el-image :src="scope.row.brandIconUrl" fit="cover" :preview-src-list="iconPreviewImgs" ></el-image>
            </template>
          </el-table-column>
          <el-table-column label="品牌海报" min-width="140">
            <template slot-scope="scope">
              <el-image :src="scope.row.brandPosterUrl" fit="cover" :preview-src-list="posterPreviewImgs" ></el-image>
            </template>
          </el-table-column>
          <el-table-column prop="goodsNum" label="商品数量" min-width="80"></el-table-column>
          <el-table-column prop="isHomePageShow" label="是否显示在首页" min-width="120"></el-table-column>
          <el-table-column label="首页品牌图" min-width="140">
            <template slot-scope="scope">
              <el-image :src="scope.row.homeBrandPicUrl" fit="cover" :preview-src-list="brandPreviewImgs" ></el-image>
            </template>
          </el-table-column>
          <el-table-column prop="addTime" label="添加时间" min-width="160" :formatter="addTimeFormatter"></el-table-column>
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
import tools from '@/utils/tools'
export default {
  name: '',
  data () {
    return {
      formData: {
        keyword: undefined
      },
      pagination: {
        currentPage: 1,
        total: 0
      },
      tableArr: [],
      iconPreviewImgs: [],
      posterPreviewImgs: [],
      brandPreviewImgs: []
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
    addTimeFormatter (row, column) {
      return tools.formatDate(row.addTime * 1000)
    },
    onSearch () {
      console.log(this.formData)
    },
    onAddBrand () {
      this.$router.push({ name: 'AddGoodsBrand' })
    },
    onEdit (row) {
      console.log(row)
      const { id } = row
      this.$router.push({ name: 'EditGoodsBrand', query: { id } })
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
          brandName: '家具日用',
          brandIconUrl: 'https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png',
          brandPosterUrl: 'https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png',
          goodsNum: '199',
          isHomePageShow: '否',
          homeBrandPicUrl: 'https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png',
          addTime: 1578297537
        }
      ]
      setTimeout(() => {
        this.$message({
          message: '请求成功',
          type: 'success'
        })
        this.pagination.total = res.data.total
        this.iconPreviewImgs = ['https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png']
        this.posterPreviewImgs = ['https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png']
        this.brandPreviewImgs = ['https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png']
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
  width: 120px;
  height: 50px;
}
</style>
