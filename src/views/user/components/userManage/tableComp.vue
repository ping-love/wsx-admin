/**
 * 用户列表table内容组件
 */
<template>
  <div class="tableBox">
    <el-table
      :data="tableData"
      ref="tableRef"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column prop="userId" label="用户ID" min-width="80"></el-table-column>
      <el-table-column prop="nickname" label="昵称" min-width="100"></el-table-column>
      <el-table-column prop="level" label="用户等级" min-width="80"></el-table-column>
      <el-table-column prop="tel" label="手机" min-width="110"></el-table-column>
      <el-table-column prop="creditVal" label="信用值" min-width="80"></el-table-column>
      <el-table-column prop="lastLogin" label="最后一次登录" min-width="150"></el-table-column>
      <el-table-column prop="regTime" label="注册时间" min-width="150"></el-table-column>
      <el-table-column prop="status" label="状态" min-width="80" :formatter="statusFormatter"></el-table-column>
      <el-table-column prop="realStatus" label="实名情况" min-width="80"></el-table-column>
      <el-table-column label="退款数(退款率)" min-width="120">
        <template slot-scope="scope">
          {{`${scope.row.refundNum}(${scope.row.refundRate})`}}
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="250" fixed="right">
        <template slot-scope="scope">
          <el-button
            size="mini"
            :type="scope.row.status === 1 ? 'danger' : 'success'"
            @click="onOpenOrClose(scope.row)"
          >禁用</el-button>
          <el-button size="mini" type="primary" @click="toDetail(scope.row)">详情</el-button>
          <el-button size="mini" type="primary" @click="onSendJiguang(scope.row)">发送极光消息</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="btns">
      <el-button size="mini" type="primary" @click="onMultiClose" v-if="type==='normal'">批量禁用</el-button>
      <el-button size="mini" type="primary" @click="onMultiOpen" v-else>批量激活</el-button>
      <el-button size="mini" type="primary" @click="onMultiSendTicket">批量发放优惠券</el-button>
      <el-button size="mini" type="primary" @click="onMultiSendAmount">批量发放金额</el-button>
      <el-button size="mini" type="primary" @click="onMultiSendOneCent">批量发放一分购活动券</el-button>
      <el-button size="mini" type="primary" @click="onCopyPersonalCenter($event)">复制个人中心链接</el-button>
    </div>

    <pagination
      :currentPage.sync="pagination.currentPage"
      :total="pagination.total"
      @currentChange="currentChange"
    />

    <sendJiguang :visible.sync="isShowJiguang"/>
    <sendOneCent :visible.sync="isShowOneCent"/>
    <sendAmount :visible.sync="isShowAmount"/>
    <sendTicket :visible.sync="isShowTicket"/>
  </div>
</template>

<script>
import clipboard from '@/utils/clipboard'
import pagination from '@/components/pagination'
import sendJiguang from '@/components/modal/sendJiguang'
import sendOneCent from './sendOneCent'
import sendAmount from './sendAmount'
import sendTicket from './sendTicket'

export default {
  props: {
    // 类型 正常用户列表:normal 禁用用户列表:disabled
    type: {
      type: String,
      default: 'normal'
    }
  },

  data () {
    return {
      tableData: [
        {
          id: 1,
          userId: 67297,
          nickname: '昵称',
          level: 1,
          tel: '12312313222',
          creditVal: 80,
          lastLogin: '1202-12-12 12:23:23',
          regTime: '1232-23-12 12:12:22',
          status: 1,
          realStatus: '未认证',
          refundNum: '3',
          refundRate: '1%'
        },
        {
          id: 2,
          userId: 67297,
          nickname: '昵称',
          level: 1,
          tel: '12312313222',
          creditVal: 80,
          lastLogin: '1202-12-12 12:23:23',
          regTime: '1232-23-12 12:12:22',
          status: 1,
          realStatus: '未认证',
          refundNum: '3',
          refundRate: '1%'
        }
      ],
      pagination: {
        currentPage: 1,
        total: 39
      },
      multipleSelection: [],
      isShowJiguang: false,
      isShowOneCent: false,
      isShowAmount: false,
      isShowTicket: false
    }
  },

  computed: {},

  created () {},

  methods: {
    currentChange (val) {

    },
    onOpenOrClose (item) {

    },
    toDetail () {
      this.$router.push({
        name: 'UserDetail'
      })
    },
    onSendJiguang () {
      this.isShowJiguang = true
    },
    onMultiClose () {
      console.log(this.multipleSelection)
      if (this.multipleSelection.length === 0) {
        this.$message({
          type: 'warning',
          message: '请先选中项'
        })
        return
      }
      this.$confirm('是否确认禁用?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '禁用成功!'
        })
      }).catch(() => {})
    },
    onMultiOpen () {
      console.log(this.multipleSelection)
      if (this.multipleSelection.length === 0) {
        this.$message({
          type: 'warning',
          message: '请先选中项'
        })
      }
    },
    onMultiSendTicket () {
      console.log(this.multipleSelection)
      if (this.multipleSelection.length === 0) {
        this.$message({
          type: 'warning',
          message: '请先选中项'
        })
        return
      }
      this.isShowTicket = true
    },
    onMultiSendAmount () {
      console.log(this.multipleSelection)
      if (this.multipleSelection.length === 0) {
        this.$message({
          type: 'warning',
          message: '请先选中项'
        })
        return
      }
      this.isShowAmount = true
    },
    onMultiSendOneCent () {
      console.log(this.multipleSelection)
      if (this.multipleSelection.length === 0) {
        this.$message({
          type: 'warning',
          message: '请先选中项'
        })
        return
      }
      this.isShowOneCent = true
    },
    onCopyPersonalCenter (e) {
      clipboard('http://test.51k1k.com/FrontUser/personal_center', e)
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    statusFormatter (row, column) {
      return row.status === 1 ? '正常' : '不正常'
    }
  },

  components: { pagination, sendJiguang, sendOneCent, sendAmount, sendTicket }
}
</script>

<style lang='less' scoped>
.btns {
  padding: 15px 0;
}
.el-button+.el-button {
  margin-left: 0;
}
</style>
