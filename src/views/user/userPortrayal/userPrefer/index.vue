/**
 * 用户偏好属性
 */
<template>
  <div class=''>
    <info/>

    <el-tabs v-model="activeName" @tab-click="tabsClick">
      <el-tab-pane label="价格偏好" name="price">
        <keep-alive>
          <priceTab v-if="activeName==='price'"/>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="类目偏好" name="category">
        <keep-alive>
          <categoryTab v-if="activeName==='category'"/>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="支付方式偏好" name="payType">
        <keep-alive>
          <payTypeTab v-if="activeName==='payType'"/>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import info from '@/views/user/components/userPortrayal/info'
import priceTab from '@/views/user/components/userPortrayal/priceTab'
import categoryTab from '@/views/user/components/userPortrayal/categoryTab'
import payTypeTab from '@/views/user/components/userPortrayal/payTypeTab'

export default {
  props: {},

  data () {
    return {
      activeName: this.$route.query.activeName || 'price'
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

  components: { info, priceTab, categoryTab, payTypeTab }
}
</script>

<style lang='less' scoped>

</style>
