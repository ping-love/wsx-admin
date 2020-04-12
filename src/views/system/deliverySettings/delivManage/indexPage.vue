/**
 * 配送管理
 */
<template>
  <div class='delivManage'>
    <el-tabs v-model="type" @tab-click="handleClick">
      <el-tab-pane label="店铺运费设置" name="shop">
        <delivManageShop/>
      </el-tab-pane>

      <el-tab-pane label="单品运费设置" name="single">
        <delivManageSingle/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import delivManageShop from '@/views/system/components/deliverySettings/delivManageShop'
import delivManageSingle from '@/views/system/components/deliverySettings/delivManageSingle'

export default {
  props: {},

  data () {
    return {
      type: ''
    }
  },

  computed: {},

  created () {
    this.getQuery()
  },

  methods: {
    getQuery () {
      const query = this.$route.query
      this.type = query.type || 'shop'
    },
    // 动态改变地址栏type参数
    handleClick (name) {
      if (window.history.replaceState) {
        window.history.replaceState(null, null, `#${this.$route.path}?type=${this.type}`)
      }
    }
  },

  components: { delivManageShop, delivManageSingle }
}
</script>

<style lang='less' scoped>
</style>
