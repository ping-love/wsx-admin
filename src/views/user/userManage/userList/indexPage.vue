/**
 * 用户列表
 */
<template>
  <div class=''>
    <!-- 搜索 -->
    <searchComp type="normal"/>

    <!-- 表格 -->
    <tableComp type="normal"/>

  </div>
</template>

<script>
import searchComp from '@/views/user/components/userManage/searchComp'
import tableComp from '@/views/user/components/userManage/tableComp'

export default {
  props: {},

  data () {
    return {

    }
  },

  computed: {},

  created () {},

  methods: {},

  components: { searchComp, tableComp }
}
</script>

<style lang='less' scoped>

</style>
