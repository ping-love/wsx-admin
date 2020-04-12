/**
* 品牌商品列表
*/
<template>
  <div class="brandGoodsList">
    <div class='listBox'>
        <div class="tableBox">
          <p
            style="color: red;line-height: 36px;font-weight: 600"
          >列表</p>
          <el-table
            ref="multipleTable"
            :data="list"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelChange"
          >
            <el-table-column
            type="selection"
            :min-width="minWidths.selWid"
            >
            </el-table-column>
            <el-table-column
              prop="goodsId"
              label="ID"
              :min-width="minWidths.goodsIdWid"
            ></el-table-column>
            <el-table-column
              label="图片"
              :min-width="minWidths.imgWid"
            >
              <template slot-scope="scope">
                <!-- fit => contain/cover/fill/scale-down/none -->
                <el-image
                  :src="scope.row.imgUrl"
                  fit="cover"
                  :preview-src-list="previewImgs"
                ></el-image>
              </template>
            </el-table-column>
            <el-table-column
              prop="goodsName"
              label="商品名称"
              :min-width="minWidths.goodsNameWid"
            ></el-table-column>
            <el-table-column
              prop="articleNum"
              label="货号"
              :min-width="minWidths.articleNumWid"
            ></el-table-column>
            <el-table-column
              prop="goodsPrice"
              label="商品价格"
              :min-width="minWidths.goodsPriceWid"
            ></el-table-column>
            <el-table-column
              prop="stock"
              label="库存"
              :min-width="minWidths.stockWid"
            ></el-table-column>
            <el-table-column
              prop="sellNum"
              label="销售量"
              :min-width="minWidths.sellNumWid"
            ></el-table-column>
            <el-table-column
              prop="sortNum"
              label="排序号"
              :min-width="minWidths.sortNumWid"
            ></el-table-column>
            <el-table-column
              prop="syncErp"
              label="同步到ERP"
              :min-width="minWidths.syncErpWid"
            >
              <template slot-scope="scope">
                <span :class="scope.row.syncErp == '1' ? 'unsync' : 'sync'" >{{scope.row.syncErp == '1' ? '未同步' : '已同步' }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="brandName"
              label="品牌名称"
              :min-width="minWidths.brandNameWid"
            ></el-table-column>
            <!-- 按钮操作 -->
            <el-table-column
              label="操作"
              fixed="right"
              :min-width="minWidths.operateWid"
            >
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="primary"
                  @click="handleSetPrice(scope.row)"
                >设批发价</el-button>
                <el-button
                  size="mini"
                  type="primary"
                  @click="handleEdit(scope.row)"
                >编辑</el-button>
                <el-button
                  size="mini"
                  type="primary"
                  @click="handleOperatingRecord(scope.row)"
                >操作记录</el-button>
                <el-button
                  size="mini"
                  type="primary"
                  @click="handleCopyAppletUrl($event, scope.row)"
                >小程序</el-button>
                <el-button
                  size="mini"
                  type="primary"
                  @click="handleCopyLink($event, scope.row)"
                >链接</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelect(scope.$index, scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>

        <div class="operatBtn">
          <el-button type="primary" size="mini" @click="syncErpClick">同步商品到ERP</el-button>
          <el-button type="danger" size="mini" @click="delectClick">删除</el-button>
          <el-button type="danger" size="mini" @click="soldOutClick">下架</el-button>
        </div>

        <pagination
          :currentPage.sync="pagination.currentPage"
          :total="pagination.total"
          @currentChange="currentChange"
        ></pagination>
    </div>
    <!-- 设置批发价 -->
    <setTradePrice @close="handleCloseDialog" v-show="isShowTradePrice" />
  </div>
</template>

<script>
import Pagination from '@/components/pagination' // 分页
import setTradePrice from '@/views/goods/components/goodsTotal/setTradePrice' // 设置弹框
import clipboard from '@/utils/clipboard'
export default {
  name: '',
  data () {
    return {
      minWidths: {
        selWid: '60',
        goodsIdWid: '60',
        goodsNameWid: '100',
        imgWid: '140',
        articleNumWid: '100',
        goodsPriceNumWid: '100',
        stockWid: '100',
        sellNumWid: '100',
        sortNumWid: '80',
        brandNameWid: '100',
        syncErpWid: '100',
        operateWid: '260'
      },
      multipleSelVal: [],
      isShowTradePrice: false
    }
  },
  props: {
    // 页码
    pagination: {
      type: Object,
      default () {
        return { currentPage: 1, total: 0 }
      }
    },
    // 数据源
    list: {
      type: Array,
      default () {
        return []
      }
    },
    // 预览图
    previewImgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: { Pagination, setTradePrice },
  created () {

  },
  mounted () {

  },
  computed: {

  },
  methods: {
    handleCloseDialog () {
      this.isShowTradePrice = false
    },
    // 设置批发价
    handleSetPrice (row) {
      console.log('前往设置批发价界面', row)
      this.isShowTradePrice = true
    },
    // 编辑
    handleEdit (row) {
      console.log('编辑:', row)
      const { goodsId } = row
      this.$router.push({ name: 'EditGoods', query: { goodsId } })
    },
    handleOperatingRecord (row) {
      console.log('操作记录:', row)
      const { goodsId } = row
      this.$router.push({ name: 'GoodsRecord', query: { goodsId } })
    },
    // 复制小程序页面访问路径，例如：/pages/Body/pages/details/details?id=1545
    handleCopyAppletUrl (e, row) {
      console.log('复制小程序访问路径:', row, e)
      clipboard(row.appletLink, e)
    },
    // 复制商品链接
    handleCopyLink (e, row) {
      console.log('复制链接:', row)
      clipboard(row.goodsLink, e)
    },
    // 删除
    handleDelect (idx, row) {
      this.$confirm('是否确认删除当前商品?', '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        setTimeout(() => {
          this.$message({
            type: 'success',
            message: '删除成功'
          })

          this.$emit('refresh', row.goodsId)
        }, 1000)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 下一页
    currentChange (data) {
      this.$emit('update', data)
    },
    handleSelChange (val) {
      this.multipleSelVal = val
      console.log(this.multipleSelVal)
    },
    syncErpClick () {
      this.$message({
        type: 'info',
        message: '即将同步erp'
      })
    },
    delectClick () {
      this.$message({
        type: 'info',
        message: '即将删除多条数据'
      })
      console.log(this.multipleSelVal)
    },
    soldOutClick () {
      this.$message({
        type: 'info',
        message: '下架'
      })
    }
  }
}
</script>

<style lang='less' scoped>
.listBox {
  .operatBtn{
    padding: 10px 16px;
  }
}
.unsync {
  color: #991F1F;
}
.sync {
  color: #0cb700;
}
.el-table {
  /deep/ .cell {
    display: flex;
    justify-content: space-around;
    align-content: space-around; // 侧轴多行对齐
    align-items: center; // 侧轴单行对齐
    flex-wrap: wrap;
  }
  /deep/ th,
  td {
    text-align: center !important;
  }
  /deep/ .el-table__row {
    .cell {
      height: 80px;
    }
  }
}
.el-image {
  width: 80px;
  height: 80px;
}
</style>
