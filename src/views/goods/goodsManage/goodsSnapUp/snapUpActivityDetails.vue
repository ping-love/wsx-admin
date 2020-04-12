/**
* 抢购活动明细
*/
<template>
  <div class='snapUpDetails'>
    <h3>活动分享图</h3>

    <p class="tipsText" @click="onTipsClick" v-if="!isShowShareImg">还没有设置分享图，点我去设置</p>
    <el-image class="shareImg" :src="shareImgUrl" fit="cover" v-else></el-image>

    <div class="listBox">

      <div class="tableBox">
        <el-table :data="tableData" tooltip-effect="dark" style="width: 100%">
          <el-table-column label="商品ID" prop="goodsId"></el-table-column>
          <el-table-column label="商品图">
            <template slot-scope="scope">
              <!-- fit => contain/cover/fill/scale-down/none -->
              <el-image :src="scope.row.goodsPic" fit="cover" :preview-src-list="previewImgs"></el-image>
            </template>
          </el-table-column>
          <el-table-column label="商品名" prop="goodsName"></el-table-column>
          <el-table-column label="商品描述" prop="goodsDescribe"></el-table-column>
          <el-table-column label="是否爆品" prop="isHotCake"></el-table-column>
          <el-table-column label="状态" prop="status"></el-table-column>
          <el-table-column label="库存" prop="stock"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="onGoodsEdit(scope.row)">商品编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <pagination
        :currentPage.sync="pagination.currentPage"
        :total="pagination.total"
        @currentChange="currentChange"
      ></pagination>

    </div>
  </div>
</template>

<script>
import tools from '@/utils/tools'
import Pagination from '@/components/pagination' // 分页

export default {
  name: '',
  data () {
    return {
      isShowShareImg: false,
      shareImgUrl: '',
      tableData: [],
      pagination: {
        currentPage: 1,
        total: 0
      },
      previewImgs: []
    }
  },
  components: {
    Pagination
  },
  created () {
    console.log(this.$route)
    let { activityId, startTime, endTime } = this.$route.query
    // console.log(activityId, startTime, endTime)
    startTime = tools.formatDate(startTime, '{y}-{m}-{d}')
    endTime = tools.formatDate(endTime, '{y}-{m}-{d}')
    console.log(startTime, endTime)
    this.$route.meta.title = `${startTime}~${endTime}抢购活动明细`
    this.getData(activityId, startTime, endTime)
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    onTipsClick () {
      this.$alert('运营管理==>小程序推荐图片页', '即将前往', {
        confirmButtonText: '确定'
      }).then(() => {
        this.$message({
          type: 'info',
          message: '即将前往 ==> 运营管理的小程序推荐图片页'
        })
      }).catch(() => {})
    },
    // 下一页
    currentChange (data) {
      console.log(data)
    },
    onGoodsEdit (data) {
      console.log(data)
      const { goodsId } = data
      this.$router.push({ name: 'EditGoods', query: { goodsId } })
    },
    getData (id, startTime, endTime) {
      let res = {
        data: {
          total: 21,
          list: [],
          isShareImg: 0,
          shareImgUrl: 'https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png'
        }
      }
      res.data.list = [
        {
          goodsId: '168',
          goodsPic: 'https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png',
          goodsName: '商品名1',
          goodsDescribe: '这是一段商品描述。。。。。。。。',
          isHotCake: '是',
          status: '已结束',
          stock: '199'
        }
      ]
      setTimeout(() => {
        this.$message({
          message: '请求成功',
          type: 'success'
        })
        this.pagination.total = res.data.total
        this.previewImgs = ['https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png']
        this.tableData = res.data.list
        this.isShowShareImg = res.data.isShareImg > 0
        if (this.isShowShareImg) {
          this.shareImgUrl = res.data.shareImgUrl
        }
      }, 500)
    }
  }
}
</script>

<style lang='less' scoped>
h3 {
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 10px;
}

.tipsText {
  font-size: 16px;
  color: rgb(241, 99, 99);
  line-height: 36px;
  padding-bottom: 6px;
  cursor: pointer;
}

.shareImg {
  display: block;
  width: 160px;
  height: 160px;
  border-radius: 6px;
  margin-bottom: 10px;
}

.el-table {
  /deep/ .cell {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /deep/ th,
  td {
    text-align: center !important;
  }
}
</style>
