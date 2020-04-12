/**
 * 查看用户详情
 */
<template>
  <div class=''>
    <div class="userStatus">
      <span class="normal">当前用户状态：正常</span>
      <span class="disabled">当前用户状态：已禁用</span>
    </div>
    <el-divider></el-divider>

    <div class="btns">
      <el-button size="mini" type="primary" @click="toPage('BuyHistory')">购买记录</el-button>
      <el-button size="mini" type="primary" @click="toPage('CreditHistory')">信用记录</el-button>
      <el-button size="mini" type="primary" @click="changeCreditVal">调整信用值</el-button>
    </div>

    <el-tabs v-model="activeName" @tab-click="tabsClick">
      <el-tab-pane label="用户详情" name="userInfo">
        <keep-alive>
          <userInfo v-if="activeName==='userInfo'"/>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="积分明细" name="integralHistory">
        <keep-alive>
          <integralHistory v-if="activeName==='integralHistory'"/>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="用户道具" name="userProperty">
        <keep-alive>
          <userProperty v-if="activeName==='userProperty'"/>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="基本信息" name="baseInfo">
        <keep-alive>
          <baseInfo v-if="activeName==='baseInfo'"/>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="消费信息" name="consumeInfo">
        <keep-alive>
          <consumeInfo v-if="activeName==='consumeInfo'"/>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="充值记录" name="rechargeHistory">
        <keep-alive>
          <rechargeHistory v-if="activeName==='rechargeHistory'"/>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="提现记录" name="withdrawHistory">
        <keep-alive>
          <withdrawHistory v-if="activeName==='withdrawHistory'"/>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="登入历史" name="loginHistory">
        <keep-alive>
          <loginHistory v-if="activeName==='loginHistory'"/>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="实名信息" name="authentication">
        <keep-alive>
          <authentication v-if="activeName==='authentication'"/>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="红包记录" name="redBagHistory">
        <keep-alive>
          <redBagHistory v-if="activeName==='redBagHistory'"/>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="评价记录" name="commentHistory">
        <keep-alive>
          <commentHistory v-if="activeName==='commentHistory'"/>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="操作记录" name="operateHistory">
        <keep-alive>
          <operateHistory v-if="activeName==='operateHistory'"/>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="金币记录" name="coinHistory">
        <keep-alive>
          <coinHistory v-if="activeName==='coinHistory'"/>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="钻石记录" name="diamondHistory">
        <keep-alive>
          <diamondHistory v-if="activeName==='diamondHistory'"/>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>

    <changeCredit :visible.sync="isShowChangeCredit"/>
  </div>
</template>

<script>
import userDetailTabs from '@/views/user/components/userDetailTabs'
import changeCredit from '@/views/user/components/userManage/changeCredit'

export default {
  props: {},

  data () {
    return {
      activeName: this.$route.query.activeName || 'userInfo',
      isShowChangeCredit: false
    }
  },

  computed: {},

  created () {},

  methods: {
    toPage (name) {
      this.$router.push({
        name,
        query: {}
      })
    },
    tabsClick () {
      if (window.history.replaceState) {
        window.history.replaceState(null, null, `#${this.$route.path}?activeName=${this.activeName}`)
      }
    },
    changeCreditVal () {
      this.isShowChangeCredit = true
    }
  },

  components: {
    ...userDetailTabs,
    changeCredit
  }
}
</script>

<style lang='less' scoped>
@import '~@/assets/styles/variables';
@import '~@/views/user/styles/infoBox.less';

.userStatus {
  font-size: 15px;
  font-weight: 700;

  .normal {
    color: @green;
  }
  .disabled {
    color: @red;
  }
}

.btns {
  padding: 0 0 5px;
  background-color: @bgColor;

  .el-button {
    margin-bottom: 5px;
  }
  .el-button--mini {
    padding: 8px 8px;
  }
  .el-button + .el-button {
    margin-left: 0;
  }
}

.el-tabs {
  /deep/ .el-tabs__content {
    padding: 0 10px;
  }
  /deep/ .el-tabs__item {
    padding: 0 10px;
  }
}
</style>
