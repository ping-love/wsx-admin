/**
* 商品推荐导航列表
*/
<template>
  <div class='bannersList'>

    <HeaderComp
      :formOptions="formOptions"
      :addBtnObj="addBtnObj"
      @onSearch="handleSearch"
    />

    <div class="listBox">
      <div class="tableBox">
        <p
          style="color: red;line-height: 36px;font-weight: 600"
        >商品推荐导航列表</p>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
        >
          <el-table-column
            prop="id"
            label="ID"
            :min-width="minWidths.idWid"
          ></el-table-column>
          <el-table-column
            prop="title"
            label="标题"
            :min-width="minWidths.titleWid"
          ></el-table-column>
          <el-table-column
            prop="subTitle"
            label="副标题"
            :min-width="minWidths.subTitleWid"
          ></el-table-column>
          <el-table-column
            prop="sortNum"
            label="排序"
            :min-width="minWidths.sortNumWid"
          ></el-table-column>
          <el-table-column
            prop="goodsNum"
            label="导航下商品数"
            :min-width="minWidths.goodsNumWid"
          ></el-table-column>
          <el-table-column
            prop="isShow"
            label="是否显示"
            :min-width="minWidths.isShowWid"
          ></el-table-column>
          <el-table-column
            prop="startTime"
            label="开始时间"
            :min-width="minWidths.startTimeWid"
          ></el-table-column>
          <el-table-column
            prop="endTime"
            label="结束时间"
            :min-width="minWidths.endTimeWid"
          ></el-table-column>
          <el-table-column
           prop="creator"
           label="创建人"
           :min-width="minWidths.creatorWid"
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
                @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button>
              <el-button
                size="mini"
                type="info"
                @click="handleCheckGoods(scope.$index, scope.row)"
              >查看商品</el-button>
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
import HeaderComp from '@/views/homePage/components/headerComp'
import Pagination from '@/components/pagination' // 分页
export default {
  name: '',
  data () {
    return {
      minWidths: {
        idWid: '60',
        titleWid: '100',
        subTitleWid: '100',
        sortNumWid: '80',
        goodsNumWid: '120',
        isShowWid: '120',
        startTimeWid: '150',
        endTimeWid: '150',
        creatorWid: '100',
        operateWid: '240'
      },
      tableData: [],
      pagination: {
        currentPage: 1,
        total: 0
      },
      addBtnObj: {
        text: '添加商品推荐导航',
        name: 'AddGoodsRecommendNav'
      },
      formOptions: [
        {
          label: '标题',
          prop: 'title',
          element: 'el-input',
          initValue: '',
          placeholder: '请输入标题'
          // rules: [{ required: true, message: '请输入标题', trigger: 'blur' }]
        },
        {
          label: '显示时间',
          prop: 'times',
          element: 'el-date-picker',
          initValue: '',
          placeholder: ''
          // rules: [{ required: true, message: '请选择显示的时间', trigger: 'change' }]
        }
      ]
    }
  },
  components: { HeaderComp, Pagination },
  created () {
    this.getData()
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    // 搜索
    handleSearch (data) {
      console.log('search参数对象:', data)
      // TODO ==> 搜索请求, 参数为data
    },
    // 下一页
    currentChange (data) {
      console.log(data)
    },
    // 编辑
    handleEdit (index, row) {
      console.log('编辑:', index, row)
      setTimeout(() => {
        this.$router.push({ name: 'EditGoodsRecommendNav' })
      }, 1000)
    },
    // 删除
    handleDelete (index, row) {
      console.log('删除:', index, row)
      this.$confirm('是否确认删除商品推荐导航?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          setTimeout(() => {
            this.$message({
              type: 'success',
              message: '删除成功'
            })
            this.getData()
            // this.tableData.splice(idx, 1) // TODO 不适用分页删除
          }, 1000)
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    // 查看商品
    handleCheckGoods (index, row) {
      console.log('查看:', index, row)
      setTimeout(() => {
        this.$router.push({ name: 'CheckGoodsList', params: { data: row } })
      }, 1000)
    },
    // 数据请求
    getData () {
      let res = {
        data: {
          total: 21,
          list: []
        }
      }
      res.data.list = [
        {
          id: 1,
          title: '家具日用',
          subTitle: '副标题',
          sortNum: 9,
          goodsNum: 10,
          isShow: '显示',
          startTime: '2019-10-28 09:25:45',
          endTime: '2019-10-28 16:25:45',
          creator: '小那'
        },
        {
          id: 2,
          title: '家具日用',
          subTitle: '副标题',
          sortNum: 9,
          goodsNum: 10,
          isShow: '显示',
          startTime: '2019-10-28 09:25:45',
          endTime: '2019-10-28 16:25:45',
          creator: '小那'
        },
        {
          id: 3,
          title: '家具日用',
          subTitle: '副标题',
          sortNum: 9,
          goodsNum: 10,
          isShow: '显示',
          startTime: '2019-10-28 09:25:45',
          endTime: '2019-10-28 16:25:45',
          creator: '小那'
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
      }, 500)
    }
  }
}
</script>

<style lang='less' scoped>
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
