/**
 * 分销设置
 */
<template>
  <div class=''>
    <el-tabs v-model="activeName" @tab-click="tabsClick">
      <el-tab-pane label="分佣设置" name="divide">
        <keep-alive>
          <divideTab v-if="activeName==='divide'"/>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="等级设置" name="level">
        <keep-alive>
          <levelTab v-if="activeName==='level'"/>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import divideTab from '@/views/user/components/distribution/divideTab'
import levelTab from '@/views/user/components/distribution/levelTab'

export default {
  props: {},

  data () {
    return {
      activeName: this.$route.query.activeName || 'divide'
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

  components: { divideTab, levelTab }
}
</script>

<style lang='less' scoped>

</style>
