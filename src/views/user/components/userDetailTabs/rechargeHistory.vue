/**
 * 充值记录
 */
<template>
  <div class=''>
    <div class="infoBox info">
      <h4>充值信息：</h4>
      <ul>
        <li>
          <div class="title">用户昵称：</div>
          <div class="content">小鱼爱打洞</div>
        </li>
        <li>
          <div class="title">UID：</div>
          <div class="content">67348</div>
        </li>
        <li>
          <div class="title">充值总额：</div>
          <div class="content">67348</div>
        </li>
        <li>
          <div class="title">最后一笔充值时间：</div>
          <div class="content">2019-12-31 14:04:31</div>
        </li>
        <li>
          <div class="title">最后一笔充值金额：</div>
          <div class="content">31</div>
        </li>
        <li>
          <div class="title">当前金币：</div>
          <div class="content">0</div>
        </li>
        <li>
          <div class="title">当前钻石：</div>
          <div class="content">0</div>
        </li>
      </ul>
    </div>

    <div class="infoBox time">
      <h4>日内充值金额：</h4>
      <ul>
        <li>
          <div class="title">时间：</div>
          <div class="content">
            <div class="timeContent">3日内</div>
            <div class="timeContent">5日内</div>
            <div class="timeContent">15日内</div>
            <div class="timeContent">30日内</div>
            <div class="timeContent">60日内</div>
          </div>
        </li>
        <li>
          <div class="title">充值金额：</div>
          <div class="content">
            <div class="timeContent">￥0.00</div>
            <div class="timeContent">￥0.00</div>
            <div class="timeContent">￥0.00</div>
            <div class="timeContent">￥0.00</div>
            <div class="timeContent">￥0.00</div>
          </div>
        </li>
      </ul>
    </div>

    <el-tabs v-model="activeName" type="card" @tab-click="tabsClick">
      <el-tab-pane label="福袋充值" name="luckyBag">
        <keep-alive>
          <rechargeHisTable :type="activeName" v-if="activeName==='luckyBag'"/>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="周/月卡充值" name="weekCard">
        <keep-alive>
          <rechargeHisTable :type="activeName" v-if="activeName==='weekCard'"/>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import rechargeHisTable from '@/views/user/components/userManage/rechargeHisTable'

export default {
  props: {},

  data () {
    return {
      activeName: 'luckyBag'
    }
  },

  computed: {},

  created () {},

  methods: {
    tabsClick () {}
  },

  components: {
    rechargeHisTable
  }
}
</script>

<style lang='less' scoped>
@import '~@/views/user/styles/infoBox.less';
</style>
