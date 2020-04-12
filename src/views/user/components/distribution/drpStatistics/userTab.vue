/**
 * 用户数据tab
 */
<template>
  <div class=''>
    <div class="date">
      <searchForm :formOptions="formOptions" @onSearch="onSearchGlobal"/>
    </div>

    <div class="chart">
      <dayNewPlayer :dateRangeGlobal="dateRangeGlobal"/>
      <dayNewTenPlayer :dateRangeGlobal="dateRangeGlobal"/>
      <dayActivePlayer :dateRangeGlobal="dateRangeGlobal"/>
      <dayNewDownPlayer :dateRangeGlobal="dateRangeGlobal"/>
      <dayNewRechargePlayer :dateRangeGlobal="dateRangeGlobal"/>
      <dayNewRechargeAmount :dateRangeGlobal="dateRangeGlobal"/>
      <dayDownIntoPlayer :dateRangeGlobal="dateRangeGlobal"/>
    </div>
  </div>
</template>

<script>
import userTabComp from './userTabComp'
import searchForm from '@/components/searchForm'

export default {
  props: {},

  data () {
    return {
      dateRangeGlobal: []
    }
  },

  computed: {
    formOptions () {
      return [
        {
          label: '总时间筛选',
          prop: 'dateRangeGlobal',
          element: 'el-date-picker',
          type: 'daterange'
        }
      ]
    }
  },

  created () {},

  methods: {
    onSearchGlobal (val) {
      this.dateRangeGlobal = val.dateRangeGlobal
    }
  },

  components: { ...userTabComp, searchForm }
}
</script>

<style lang='less' scoped>
.chart {
  & > div {
    &:first-child {
      // /deep/ .el-divider {
      //   display: none;
      // }
    }
  }
}
.date {
  // display: flex;
  // justify-content: center;
}
</style>
