/**
 * el-pagination分页 公共组件
 */
<template>
  <div class="pagination">
    <el-pagination
      background
      :hide-on-single-page="true"
      layout="total,prev,pager,next,jumper"
      :current-page.sync="computedCurrentPage"
      :page-size="20"
      :total="total"
      @current-change="currentChange"
    />
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    // 当前页页码，支持.sync修饰符
    currentPage: {
      type: Number,
      required: true
    },
    // 数据总条数
    total: {
      type: Number,
      required: true
    }
  },

  computed: {
    computedCurrentPage: {
      get () {
        return this.currentPage
      },
      set (val) {
        this.$emit('update:currentPage', val)
      }
    }
  },

  methods: {
    // 页面切换事件  通过 @currentChange 绑定
    currentChange (val) {
      this.$emit('currentChange', val)
    }
  }
}
</script>

<style lang="less" scoped>
.pagination {
  padding-top: 15px;
  text-align: center;
}
</style>
