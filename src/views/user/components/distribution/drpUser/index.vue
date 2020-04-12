/**
 * 玩家管理组件
 */
<template>
  <div id="drp-user">
    <!-- 数据呈现栏 -->
    <dataShow/>

    <!-- 搜索栏 -->
    <searchData @onSearch="onSearch"/>

    <!-- table数据栏 -->
    <tableData :searchParams="searchParams" :userId="userId" :viewType="viewType"/>
  </div>
</template>

<script>
import dataShow from './dataShow'
import searchData from './searchData'
import tableData from './tableData'

export default {
  props: {},

  data () {
    return {
      searchParams: {}, // 提交请求的搜索参数
      userId: '', // 用户id
      viewType: '' // 查看类型
    }
  },

  computed: {},

  created () {
    this.getParams()
  },

  methods: {
    getParams () {
      const query = this.$route.query
      this.userId = query.userId || ''
      this.viewType = query.viewType || ''
      if (this.userId) {
        this.userId = this.userId + ''
      }
    },
    onSearch (res) {
      this.searchParams = res
    }
  },

  components: { dataShow, searchData, tableData }
}
</script>

<style lang='less' scoped>
</style>
