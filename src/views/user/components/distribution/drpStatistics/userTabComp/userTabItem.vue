/**
 * 用户数据tab下单个图表组件
 */
<template>
  <div class='userTabItem'>
    <el-divider></el-divider>
    <div class="chart-b">
      <searchFrom
        :formOptions="formOptions"
        btnItems="search,export"
        @onSearch="onSearch"
        @onExport="onExport"
      ></searchFrom>

      <div ref="lineChartRef" class="lineChart"></div>
    </div>
  </div>
</template>

<script>
import searchFrom from '@/components/searchForm'
import tools from '@/utils/tools'
import echarts from 'echarts'

export default {
  props: {
    lineData: {
      type: Object,
      default () {
        return {}
      }
    },
    dateRangeGlobal: {
      type: Array,
      default () {
        return []
      }
    }
  },

  data () {
    return {
      lineChart: {},
      dateRange: []
    }
  },

  computed: {
    formOptions () {
      return [
        {
          label: '日期',
          prop: 'dateRange',
          element: 'el-date-picker',
          type: 'daterange'
        }
      ]
    },
    baseOptions () {
      return {
        grid: {
          top: 80,
          containLabel: true,
          left: '20px',
          right: '20px'
        },
        title: {
          left: '50%',
          textAlign: 'center',
          textStyle: {
            fontWeight: 'normal'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        xAxis: [
          {
            type: 'category',
            data: [],
            axisPointer: {
              type: 'shadow'
            }
          }
        ]
      }
    },
    lineOptions () {
      const options = tools.objectMerge(this.lineData, this.baseOptions)
      options.xAxis[0].data = tools.getDateRangeItems('day', this.dateRange)
      return options
    }
  },

  watch: {
    lineData () {
      this.lineChart.setOption(this.lineOptions)
      this.lineChart.hideLoading()
    },
    dateRangeGlobal (val) {
      this.onSearch({ dateRange: val })
    }
  },

  created () {
  },

  mounted () {
    this.initCharts('lineChartRef', this.lineOptions)
  },

  methods: {
    onSearch (val) {
      if (!val.dateRange) {
        this.$message({ type: 'warning', message: '请选择日期' })
        return
      }
      this.$emit('onSearch', val)
      // 改变dateRange触发computed的lineOptions更新
      this.dateRange = val.dateRange
      // 加载状态，等待父组件数据更新，在watch里监听到再结束加载状态
      this.initCharts('lineChartRef', this.lineOptions, true)
    },
    onExport () {
      this.$emit('onExport')
    },
    initCharts (ref, options, isOnlyInit) {
      this.lineChart = echarts.init(this.$refs['lineChartRef'], 'light')
      this.lineChart.showLoading('default', {
        text: '飞速加载中',
        color: '#409eff'
      })
      if (isOnlyInit) return
      this.lineChart.setOption(options)
      this.lineChart.hideLoading()
    }
  },

  components: { searchFrom }
}
</script>

<style lang='less' scoped>
.chart-b {
  // background-color: #fff;

  .lineChart {
    height: 400px;
  }
  .search-form-box {
    padding-left: 20px;
  }
}
.userTabItem {
  overflow: hidden;
}
.el-divider--horizontal {
  margin-bottom: 30px;
}
</style>
