/**
 * 用户画像公共tab组件
 */
<template>
  <div class=''>
    <div class="chart-t">
      <div id="barChart"></div>
      <div id="pieChart"></div>
    </div>

    <div class="chart-b">
      <searchFrom :formOptions="formOptions" @onSearch="onSearch"></searchFrom>
      <div id="lineChart"></div>
    </div>
  </div>
</template>

<script>
import searchFrom from '@/components/searchForm'
import tools from '@/utils/tools'
import echarts from 'echarts'

export default {
  props: {
    barData: {
      type: Object,
      default () {
        return {}
      }
    },
    pieData: {
      type: Object,
      default () {
        return {}
      }
    },
    lineData: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  data () {
    return {
      lineChart: {},
      timeRange: []
    }
  },

  computed: {
    formOptions () {
      return [
        {
          label: '时间',
          prop: 'timeRange',
          element: 'el-date-picker',
          type: 'monthrange'
        }
      ]
    },
    baseOptions () {
      return {
        grid: {
          top: 80,
          containLabel: true
        },
        title: {
          left: '50%',
          textAlign: 'center',
          textStyle: {
            fontWeight: 'normal'
          }
        }
      }
    },
    barOptions () {
      return tools.objectMerge(this.barData, this.baseOptions)
    },
    pieOptions () {
      return tools.objectMerge(this.pieData, this.baseOptions)
    },
    lineOptions () {
      const options = tools.objectMerge(this.lineData, this.baseOptions)
      options.xAxis[0].data = tools.getDateRangeItems('month', this.timeRange)
      return options
    }
  },

  watch: {
    lineData () {
      this.lineChart.setOption(this.lineOptions)
      this.lineChart.hideLoading()
    }
  },

  created () {
  },

  mounted () {
    this.initCharts('barChart', this.barOptions)
    this.initCharts('pieChart', this.pieOptions)
    this.initCharts('lineChart', this.lineOptions)
  },

  methods: {
    onSearch (val) {
      if (!val.timeRange) {
        this.$message({ type: 'warning', message: '请选择日期' })
        return
      }
      this.$emit('onSearch', val)
      // 改变timeRange触发computed的lineOptions更新
      this.timeRange = val.timeRange
      // 加载状态，等待父组件数据更新，在watch里监听到再结束加载状态
      this.lineChart = echarts.init(document.querySelector('#lineChart'), 'light')
      this.lineChart.showLoading('default', {
        text: '飞速加载中',
        color: '#409eff'
      })
    },
    initCharts (chartId, options) {
      const myChart = echarts.init(document.querySelector(`#${chartId}`), 'light')
      myChart.showLoading('default', {
        text: '飞速加载中',
        color: '#409eff'
      })
      myChart.setOption(options)
      myChart.hideLoading()
    },
    // 获取默认月份初始值（最近一年）
    getDefaultRange () {
      let end = new Date()
      let start = new Date()
      start.setMonth(start.getMonth() - 12)
      start = tools.formatDate(start, '{y}-{m}')
      end = tools.formatDate(end, '{y}-{m}')
      return [start, end]
    }
  },

  components: { searchFrom }
}
</script>

<style lang='less' scoped>
.chart-t {
  display: flex;
  padding-bottom: 10px;

  & > div {
    width: 49%;
    height: 400px;
  }
}
.chart-b {
  #lineChart {
    height: 400px;
  }
}
</style>
