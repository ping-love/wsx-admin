/**
* 商品管理公共list组件
*/
<template>
  <div class="goodsList">
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
            min-width="50"
            >
            </el-table-column>
            <el-table-column
              prop="goodsId"
              label="ID"
              min-width="60"
            ></el-table-column>
            <el-table-column
              label="图片"
              min-width="80"
            >
              <template slot-scope="scope">
                <!-- fit => contain/cover/fill/scale-down/none -->
                <el-image
                  :src="scope.row.imgUrl"
                  fit="cover"
                  :preview-src-list="scope.row.previewImgs"
                ></el-image>
              </template>
            </el-table-column>
            <el-table-column
              prop="goodsName"
              label="商品名称"
              min-width="100"
            ></el-table-column>
            <el-table-column
              prop="articleNum"
              label="货号"
              min-width="60"
            ></el-table-column>
            <el-table-column
              prop="goodsPrice"
              label="商品价格"
              min-width="80"
            ></el-table-column>
            <el-table-column
              prop="stock"
              label="库存"
              min-width="70"
            ></el-table-column>
            <el-table-column
              prop="sellNum"
              label="销售量"
              min-width="70"
            ></el-table-column>
            <el-table-column
              prop="sortNum"
              label="排序号"
              min-width="70"
            ></el-table-column>
            <el-table-column
              prop="syncErp"
              label="同步到ERP"
              min-width="100"
            >
              <template slot-scope="scope">
                <span :class="scope.row.syncErp == '1' ? 'unsync' : 'sync'" >{{scope.row.syncErp == '1' ? '未同步' : '已同步' }}</span>
              </template>
            </el-table-column>
            <!-- 按钮操作 -->
            <el-table-column
              label="操作"
              fixed="right"
              width="360"
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
          :currentPage.sync="currentPage"
          :total="total"
          @currentChange="currentChange"
        ></pagination>
    </div>
    <!-- 设置批发价 -->
    <setTradePrice
      :itemObj="itemObj"
      :visible.sync = "isShowTradePrice"
    />
  </div>
</template>

<script>
import pagination from '@/components/pagination' // 分页
import setTradePrice from '@/views/goods/components/goodsTotal/setTradePrice' // 设置弹框
import clipboard from '@/utils/clipboard' // 剪切功能
export default {
  name: '',
  data () {
    return {
      currentPage: 1,
      multipleSelVal: [],
      isShowTradePrice: false,
      itemObj: {}
    }
  },
  props: {
    total: {
      type: Number,
      default () {
        return 0
      }
    },
    // 数据源
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: { pagination, setTradePrice },
  created () {

  },
  mounted () {

  },
  computed: {

  },
  methods: {
    // 设置批发价
    handleSetPrice (row) {
      console.log('前往设置批发价界面', row)
      this.itemObj = row
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
          const { goodsId } = row
          this.$emit('singleDelect', goodsId)
        }, 1000)
      }).catch(() => {})
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
      this.operateEvent('syncErp')
    },
    delectClick () {
      this.operateEvent('delect')
    },
    soldOutClick () {
      this.operateEvent('soldOut')
    },
    operateEvent (type) {
      if (this.multipleSelVal.length === 0) {
        this.$message({
          message: '请选择选项',
          type: 'warning'
        })
        return
      }
      switch (type) {
        case 'syncErp':
          this.$emit('syncErp', this.multipleSelVal)
          break
        case 'soldOut':
          this.$emit('soldOut', this.multipleSelVal)
          break
        case 'delect':
          this.$emit('multipleDelect', this.multipleSelVal)
      }
    }
  }
}
</script>

<style lang='less' scoped>
.listBox {
  .operatBtn{
    padding: 10px 0;
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
    justify-content: center;
    align-items: center; // 侧轴单行对齐
  }
  .el-button+.el-button {
    margin-left: 0;
  }
  .el-button {
    margin-right: 3px;
    padding: 7px;

    &:last-child {
      margin-right: 0;
    }
  }
}
.el-image {
  width: 50px;
  height: 50px;
}

.el-button+.el-button {
  margin-left: 0;
}
</style>
