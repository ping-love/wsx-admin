/**
 * 基础信息统计
 */
<template>
  <div class=''>
    <info/>

    <el-tabs v-model="activeName" @tab-click="tabsClick">
      <el-tab-pane label="年龄统计" name="age">
        <keep-alive>
          <ageTab v-if="activeName==='age'"/>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="性别统计" name="gender">
        <keep-alive>
          <genderTab v-if="activeName==='gender'"/>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="职业统计" name="profession">
        <keep-alive>
          <professionTab v-if="activeName==='profession'"/>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="区域统计" name="area">
        <keep-alive>
          <areaTab v-if="activeName==='area'"/>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import info from '@/views/user/components/userPortrayal/info'
import ageTab from '@/views/user/components/userPortrayal/ageTab'
import genderTab from '@/views/user/components/userPortrayal/genderTab'
import professionTab from '@/views/user/components/userPortrayal/professionTab'
import areaTab from '@/views/user/components/userPortrayal/areaTab'

export default {
  props: {},

  data () {
    return {
      activeName: this.$route.query.activeName || 'age'
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

  components: { info, ageTab, genderTab, professionTab, areaTab }
}
</script>

<style lang='less' scoped>
</style>
