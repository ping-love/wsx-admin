/**
 * table内容组件
 */
<template>
  <div class="tableData">
    <div class="buttons">
      <div class="multi">
        <el-button size="small" type="primary" @click="onMultiFreeze">冻结</el-button>
        <el-button size="small" type="primary" @click="onMultiSetRedBag">设置红包</el-button>
        <el-button size="small" type="primary" @click="onMultiDegrade">降级</el-button>
        <el-button size="small" type="primary" @click="onMultiUpgrade">晋升</el-button>
        <el-button size="small" type="primary" @click="onMultiApprove">审核</el-button>
      </div>
      <div class="operate">
        <el-button size="small" type="primary" @click="onShowAddPlayer">手动添加</el-button>
        <csvUpload size="small" type="primary" @onSuccess="onDoneAddPlayer">批量导入</csvUpload>
        <el-button size="small" type="primary" @click="onExportPlayer">导出数据</el-button>
      </div>
    </div>

    <el-table
      :data="tableData"
      ref="tableRef"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column prop="userId" label="玩家ID" min-width="70" fixed="left"></el-table-column>
      <el-table-column prop="nickname" label="玩家昵称" min-width="100"></el-table-column>
      <el-table-column prop="tel" label="联系方式" min-width="110"></el-table-column>
      <el-table-column prop="drpLevel" label="玩家等级" min-width="80" :formatter="drpLevelFormatter"></el-table-column>
      <el-table-column label="上级ID" min-width="70">
        <template #default="scope">
          <span class="upperIdStyle" @click="onViewLevelList(scope.row, 'upper')">{{scope.row.upperId}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="rechargeTotal" label="充值总额" min-width="90"></el-table-column>
      <el-table-column prop="earnings" label="玩家收益" min-width="90"></el-table-column>
      <el-table-column prop="levelTenNum" label="10级玩家" min-width="80"></el-table-column>
      <el-table-column prop="regNum" label="注册玩家" min-width="80"></el-table-column>
      <el-table-column prop="downloadNum" label="下载玩家" min-width="80"></el-table-column>
      <el-table-column prop="gameLevel" label="游戏等级" min-width="80"></el-table-column>
      <el-table-column prop="regTime" label="注册时间" min-width="100"></el-table-column>
      <el-table-column prop="bindTime" label="绑定时间" min-width="100"></el-table-column>
      <el-table-column prop="beSuzerainTime" label="成庄时间" min-width="100"></el-table-column>
      <el-table-column prop="beStarTime" label="成星时间" min-width="100"></el-table-column>
      <el-table-column prop="playerStatus" label="玩家状态" min-width="80" :formatter="playerStatusFormatter"></el-table-column>
      <el-table-column prop="redBagTotal" label="红包发放总数量" min-width="80"></el-table-column>
      <el-table-column prop="refBagRemain" label="红包剩余数量" min-width="80"></el-table-column>
      <el-table-column label="操作" min-width="275" fixed="right">
        <template slot-scope="scope">
          <div class="tableBtn">
            <el-button size="mini" type="primary" @click="onViewLevelList(scope.row, 'lower')">成员列表</el-button>
            <el-button size="mini" type="primary" @click="toChartPage(scope.row)">图表数据</el-button>
            <el-button size="mini" type="primary" @click="onHandleLevel(scope.row, 'view')">查看玩家</el-button>
            <el-button size="mini" type="primary" @click="onHandleLevel(scope.row, 'approve')">审核玩家</el-button>
            <el-button size="mini" type="primary" @click="onHandleLevel(scope.row, 'upgrade')">晋升玩家</el-button>
            <el-button size="mini" type="primary" @click="onHandleLevel(scope.row, 'degrade')">降级玩家</el-button>
            <el-button size="mini" type="primary" @click="onSetRedBag(scope.row)">设置红包</el-button>
            <el-button size="mini" type="primary" @click="onUnBind(scope.row)">解除绑定</el-button>
            <el-button size="mini" type="primary" @click="onFreeze(scope.row)">
              {{scope.row.playerStatus === 4 ? '取消冻结' : '冻结玩家'}}
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      :currentPage.sync="pagination.currentPage"
      :total="pagination.total"
      @currentChange="currentChange"
    />

    <!-- 单个：审核、晋升、降级、查看玩家 -->
    <handleLevel
      :visible.sync="isShowHandleLevel"
      :type="handleLevelType"
      :data="handleLevelData"
      @submit="initData"
    />
    <!-- 批量晋升/降级 -->
    <multiLevel
      :visible.sync="isShowMultiLevel"
      :ids="multiLevelIds"
      :type="multiLevelType"
    />
    <!-- 设置红包 -->
    <setRedBag
      :visible.sync="isShowSetRedBag"
      :ids="setRedBagIds"
    />
    <!-- 手动添加玩家 -->
    <addPlayer
      :visible.sync="isShowAddPlayer"
      @onSubmit="onDoneAddPlayer"
    />
  </div>
</template>

<script>
import pagination from '@/components/pagination'
import csvUpload from '@/components/csvUpload'
import handleLevel from './modal/handleLevel'
import setRedBag from './modal/setRedBag'
import multiLevel from './modal/multiLevel'
import addPlayer from './modal/addPlayer'
import { getDrpUserStatus, getDrpLevel } from '@/filters/transform'
import tools from '@/utils/tools'

export default {
  props: {
    searchParams: {
      type: Object,
      default () {
        return {}
      }
    },
    // 用户id
    userId: {
      type: String,
      default: ''
    },
    // 查看类型
    viewType: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      tableData: [],
      pagination: {
        currentPage: 1,
        total: 39
      },
      multipleSelection: [],

      isShowHandleLevel: false,
      handleLevelType: '',
      handleLevelData: {},

      isShowSetRedBag: false,
      setRedBagIds: [],

      isShowMultiLevel: false,
      multiLevelIds: [],
      multiLevelType: '',

      isShowAddPlayer: false,

      searchData: this.searchParams || {},
      currentUserId: this.userId || '',
      currentViewType: this.viewType || ''
    }
  },

  computed: {},

  watch: {
    searchParams: {
      handler (val) {
        this.searchData = val
        this.$router.push({
          name: this.$route.name
        })
        this.currentUserId = ''
        this.currentViewType = ''
        this.initData()
      },
      deep: true
    }
  },

  created () {
    this.initData()
  },

  methods: {
    initData () {
      this.multipleSelection = []

      if (this.currentViewType === 'lower') {
        // 请求该id下成员列表数据
        // 模拟数据
        this.tableData = [{
          id: 1,
          userId: 67297,
          nickname: '下级成员数据',
          tel: '12312313222',
          drpLevel: 1,
          upperId: 22222,
          rechargeTotal: 100008.01,
          earnings: 0.00,
          levelTenNum: 0,
          regNum: 0,
          downloadNum: 0,
          gameLevel: 1,
          regTime: '2020-12-12',
          bindTime: '2020-13-13',
          beSuzerainTime: '2020-12-12',
          beStarTime: '2020-12-12',
          playerStatus: 2,
          redBagTotal: 80,
          refBagRemain: 9000000
        }]
      } else if (this.currentViewType === 'upper') {
        this.searchData = {
          searchType: 1,
          userId: this.currentUserId
        }
        // 模拟数据
        this.tableData = [{
          id: 1,
          userId: 67297,
          nickname: '上级id数据',
          tel: '12312313222',
          drpLevel: 1,
          upperId: 22222,
          rechargeTotal: 100008.01,
          earnings: 0.00,
          levelTenNum: 0,
          regNum: 0,
          downloadNum: 0,
          gameLevel: 1,
          regTime: '2020-12-12',
          bindTime: '2020-13-13',
          beSuzerainTime: '2020-12-12',
          beStarTime: '2020-12-12',
          playerStatus: 2,
          redBagTotal: 80,
          refBagRemain: 9000000
        }]
      } else {
        // 模拟数据
        this.tableData = [
          {
            id: 1,
            userId: 67297,
            nickname: '天上的星星掉下来',
            tel: '12312313222',
            drpLevel: 1,
            upperId: 22222,
            rechargeTotal: 100008.01,
            earnings: 0.00,
            levelTenNum: 0,
            regNum: 0,
            downloadNum: 0,
            gameLevel: 1,
            regTime: '2020-12-12',
            bindTime: '2020-13-13',
            beSuzerainTime: '2020-12-12',
            beStarTime: '2020-12-12',
            playerStatus: 2,
            redBagTotal: 80,
            refBagRemain: 9000000
          },
          {
            id: 2,
            userId: 67298,
            nickname: '小王子',
            tel: '12312313222',
            drpLevel: 3,
            upperId: 33333,
            rechargeTotal: 0.00,
            earnings: 0.00,
            levelTenNum: 0,
            regNum: 0,
            downloadNum: 0,
            gameLevel: 1,
            regTime: '2020-12-12',
            bindTime: '2020-13-13',
            beSuzerainTime: '2020-12-12',
            beStarTime: '2020-12-12',
            playerStatus: 3,
            redBagTotal: 80,
            refBagRemain: 9
          }
        ]
      }
    },
    currentChange (val) {},
    toChartPage (item) {
      this.$router.push({
        name: 'DrpStatistics'
      })
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    drpLevelFormatter (row, column) {
      return getDrpLevel(row.drpLevel)
    },
    playerStatusFormatter (row, column) {
      return getDrpUserStatus(row.playerStatus)
    },
    onValidateIsSelect () {
      if (this.multipleSelection.length === 0) {
        this.$message({
          type: 'warning',
          message: '请先选中项'
        })
        return true
      }
    },
    onMultiFreeze () {
      if (this.onValidateIsSelect()) return
      this.$confirm('是否确定冻结?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '冻结成功!'
        })
      }).catch(() => {})
    },
    onMultiSetRedBag () {
      if (this.onValidateIsSelect()) return
      this.setRedBagIds = this.multipleSelection.map(v => {
        return v.id
      })
      this.isShowSetRedBag = true
    },
    onMultiDegrade () {
      if (this.onValidateIsSelect()) return
      this.multiLevelType = 'degrade'
      this.multiLevelIds = this.multipleSelection.map(v => {
        return v.id
      })
      this.isShowMultiLevel = true
    },
    onMultiUpgrade () {
      if (this.onValidateIsSelect()) return
      this.multiLevelType = 'upgrade'
      this.multiLevelIds = this.multipleSelection.map(v => {
        return v.id
      })
      this.isShowMultiLevel = true
    },
    onMultiApprove () {
      if (this.onValidateIsSelect()) return
      this.$confirm('是否确定批量审核?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '批量审核成功!'
        })
      }).catch(() => {})
    },
    onShowAddPlayer () {
      this.isShowAddPlayer = true
    },
    onDoneAddPlayer () {
      console.log('添加成功')
      this.initData()
    },
    onExportPlayer () {
      tools.downloadFile()
    },
    onSetRedBag (item) {
      this.setRedBagIds = [item.id]
      this.isShowSetRedBag = true
    },
    onUnBind (item) {
      this.$confirm('是否确定解绑?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '解绑成功!'
        })
      }).catch(() => {})
    },
    onFreeze (item) {
      this.$confirm('是否确定冻结?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '冻结成功!'
        })
      }).catch(() => {})
    },
    // 单个：审核、晋升、降级、查看玩家
    onHandleLevel (item, type) {
      this.handleLevelType = type
      this.handleLevelData = { ...item }
      this.isShowHandleLevel = true
    },
    // 查看上级/下级列表
    onViewLevelList (item, type) {
      this.$router.push({
        name: this.$route.name,
        query: {
          userId: item.userId,
          viewType: type
        }
      })
      this.currentUserId = item.userId
      this.currentViewType = type
      this.initData()
    }
  },

  components: {
    pagination,
    handleLevel,
    setRedBag,
    multiLevel,
    csvUpload,
    addPlayer
  }
}
</script>

<style lang='less' scoped>
.buttons {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;

  .el-button+.el-button {
    margin-left: 5px;
  }
  .operate {
    span {
      vertical-align: bottom;
      margin-right: 10px;
      color: #999;
    }
  }
}

.tableBtn {
  display: flex;
  flex-wrap: wrap;
  .el-button {
    margin-right: 5px;
    margin-left: 0;
    margin-bottom: 5px;

    &:nth-child(3n) {
      margin-right: 0;
    }
  }
}

.upperIdStyle {
  color: #409eff;
  cursor: pointer;
}
</style>
