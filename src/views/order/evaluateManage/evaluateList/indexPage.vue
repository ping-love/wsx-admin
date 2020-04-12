/**
* 评价列表
*/
<template>
  <div class='evaluateList'>
    <searchForm :formOptions="formOptions" @onSearch="handleSearch" />
    <div class="listWrap">
      <el-table :data="tableData" tooltip-effect="dark" style="width: 100%">
        <el-table-column prop="commentId" label="评论id" min-width="100"></el-table-column>
        <el-table-column prop="goodsId" label="商品id" min-width="100"></el-table-column>
        <el-table-column prop="goodsName" label="商品名称" min-width="100"></el-table-column>
        <el-table-column prop="commentContent" label="评论内容" min-width="230"></el-table-column>
        <el-table-column label="用户晒图" min-width="100">
          <template slot-scope="scope">
            <el-image
            :src="scope.row.commentImg"
            fit="cover"
            :preview-src-list="scope.row.previewImgs"
          ></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="commentUserName" label="评论用户" min-width="100"></el-table-column>
        <el-table-column prop="commentStar" label="评论星级" min-width="100"></el-table-column>
        <el-table-column prop="commentTime" label="评论时间" :formatter="timeFormatter" min-width="160"></el-table-column>
        <el-table-column prop="status" label="显示状态" min-width="200">
          <template slot-scope="scope">
            <el-select
              v-model="scope.row.status"
              size="mini"
              placeholder="全部"
              @blur="handleSelBlur(scope.row)"
              @change="handleSelChange(scope.row)"
            >
              <el-option v-for="item in displayStatusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column label="操作" min-width="100">
          <template slot-scope="scope">
            <el-button type="danger" size="mini" @click="onDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination :currentPage.sync="pagination.currentPage" :total="pagination.total" @currentChange="handleCurrentChange" />
    </div>
  </div>
</template>

<script>
import searchForm from '@/components/searchForm'
import pagination from '@/components/pagination'
import tools from '@/utils/tools'
import { getEvaluateStatus } from '@/filters/transformTwo'
export default {
  name: '',
  data () {
    return {
      beforeValue: {},
      pagination: {
        currentPage: 1,
        total: 0
      },
      tableData: [],
      displayStatusOptions: getEvaluateStatus(),
      formOptions: [
        {
          label: '状态',
          prop: 'status',
          element: 'el-select',
          options: getEvaluateStatus(),
          initValue: '',
          placeholder: '全部'
        },
        {
          label: '时间',
          prop: 'times',
          element: 'el-date-picker',
          initValue: '',
          placeholder: ''
        },
        {
          label: '评论',
          prop: 'comment',
          element: 'el-select',
          options: [{ value: 1, label: '只显示有内容的评论' }],
          initValue: '',
          placeholder: '全部'
        }
      ]
    }
  },
  components: {
    searchForm,
    pagination
  },
  created () {
    this.getData()
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    timeFormatter (row, column) {
      return tools.formatDate(row.bargainTime)
    },
    handleSearch (data) {
      console.log('-search-', data)
    },
    handleSelBlur (row) {
      console.log('-blur-', row.status)
      this.before = row.status
    },
    handleSelChange (row) {
      console.log('-change-', row.status)
      this.$confirm('你确定要修改这条评论的状态吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        console.log('-row-status-', row.status)
      }).catch(() => {
        console.log('-row-status-', this.before)
        row.status = this.before
      })
    },
    onDelete (row) {

    },
    handleCurrentChange (data) {
      console.log(data)
    },
    getData (currentPage) {
      currentPage = currentPage || 1
      let res = {
        data: {
          total: 36,
          list: [
            {
              commentId: '369',
              goodsId: '69990',
              goodsName: '商品1999',
              commentContent: '这么多年都没看到过这么的好东西就是这样吧！你的手机没有话费哦！在线教育部门负责人参加的这次比赛活动结束后对你进行',
              commentImg: 'http://img.51k1k.com/Uploads/image/default/2018-12/20181226163904_27422_800_800.jpg',
              commentUserName: '张三',
              commentStar: '5',
              commentTime: 1555555555,
              status: 1,
              previewImgs: ['http://img.51k1k.com/Uploads/image/default/2018-12/20181226163904_27422_800_800.jpg']
            }
          ]
        }
      }
      setTimeout(() => {
        this.pagination.total = res.data.total
        this.tableData = res.data.list
      }, 500)
    }
  }
}
</script>

<style lang='less' scoped>
.search-form-box {
  /deep/ .el-form {
    .el-form-item {
      .el-select {
        width: 160px;
      }
    }
  }
}
</style>
