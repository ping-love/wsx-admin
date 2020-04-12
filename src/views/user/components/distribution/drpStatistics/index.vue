/**
 * 分销数据统计
 */
<template>
  <div class=''>
    <el-tabs v-model="activeName" @tab-click="tabsClick">
      <el-tab-pane label="用户数据" name="user">
        <keep-alive>
          <userTab v-if="activeName==='user'"/>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="订单数据" name="order">
        <keep-alive>
          <orderTab v-if="activeName==='order'"/>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="充值数据" name="recharge">
        <keep-alive>
          <rechargeTab v-if="activeName==='recharge'"/>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="红包数据" name="redBag">
        <keep-alive>
          <redBagTab v-if="activeName==='redBag'"/>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import userTab from './userTab'
import orderTab from './orderTab'
import rechargeTab from './rechargeTab'
import redBagTab from './redBagTab'

export default {
  props: {},

  data () {
    return {
      activeName: this.$route.query.activeName || 'user'
    }
  },

  computed: {},

  created () {},

  methods: {
    tabsClick () {
      if (window.history.replaceState) {
        window.history.replaceState(null, null, `#${this.$route.path}?activeName=${this.activeName}`)
      }
    }
  },

  components: { userTab, orderTab, rechargeTab, redBagTab }
}
</script>

<style lang='less' scoped>

</style>
