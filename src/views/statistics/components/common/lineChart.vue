/**
* 折线图
*/
<template>
  <div class='chartItem'>
    <searchForm :formOptions="formOptions" @onSearch="handleSearch" />
    <div :id="chartObj.chartId" class="lineChart"></div>
    <!-- <div id="lineChart"></div> -->
  </div>
</template>

<script>
import searchForm from '@/components/searchForm'
import tools from '@/utils/tools'
import echarts from 'echarts'
export default {
  name: '',
  data () {
    return {
      lineChart: {},
      dateType: this.chartObj.selectType === 'year-month' ? 2 : 1,
      dayFormOptions: [{
        label: '时间',
        prop: 'times',
        element: 'el-date-picker',
        type: 'daterange',
        // 'value-format': 'yyyy-MM-dd',
        initValue: this.getDefaultDayRange(),
        rules: [{ required: true, message: '请选择时间', trigger: 'change' }]
      }],
      monthFormOptions: [{
        label: '时间',
        prop: 'times',
        element: 'el-date-picker',
        type: 'monthrange',
        initValue: this.getDefaultMonthRange(),
        rules: [{ required: true, message: '请选择时间', trigger: 'change' }]
      }],
      yearFormOptions: [
        {
          label: '开始时间',
          prop: 'startYear',
          element: 'el-date-picker',
          type: 'year',
          initValue: '',
          rules: [{ required: true, message: '请选择开始时间', trigger: 'change' }]
        },
        {
          label: '结束时间',
          prop: 'endYear',
          element: 'el-date-picker',
          type: 'year',
          initValue: '',
          rules: [{ required: true, message: '请选择结束时间', trigger: 'change' }]
        }
      ]
    }
  },
  props: {
    chartObj: {
      type: Object,
      default () {
        return {
          type: 'year-month', // year-month、year-month-day
          chartId: 'chartId'
        }
      }
    },
    lineData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {
    searchForm
  },
  watch: {
    lineData () {
      console.log('-watch-lineData-')
      this.lineChart.setOption(this.chartOptions)
      this.lineChart.hideLoading()
    }
  },
  created () {

  },
  mounted () {
    // this.initChart('lineChart', this.chartOptions)
    this.initChart(this.chartObj.chartId, this.chartOptions)
  },
  computed: {
    lineChartId () {
      return this.chartObj.chartId
    },
    selectOptions () {
      let options = []
      if (this.type === 'year-month') {
        options = [
          { value: 2, label: '按月统计' },
          { value: 3, label: '按年统计' }
        ]
      } else {
        options = [
          { value: 1, label: '按日统计' },
          { value: 2, label: '按月统计' },
          { value: 3, label: '按年统计' }
        ]
      }
      return options
    },
    formOptions () {
      const that = this
      let rangeOptions = []
      if (that.dateType === 1) {
        rangeOptions = that.dayFormOptions
      } else if (that.dateType === 2) {
        rangeOptions = that.monthFormOptions
      } else {
        rangeOptions = that.yearFormOptions
      }
      let options = [
        {
          label: '统计类型',
          prop: 'statType',
          element: 'el-select',
          events: {
            change (val) {
              that.dateType = val
            }
          },
          options: that.selectOptions,
          initValue: that.dateType,
          placeholder: '全部',
          rules: [{ required: true, message: '请选择类型', trigger: 'change' }]
        },
        ...rangeOptions
      ]
      return options
    },
    baseOptions () {
      let options = {
        grid: {
          top: 80,
          containLabel: false
        },
        title: {
          textAlign: 'center',
          left: '50%',
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
        }
        // toolbox: { // 工具栏组件
        //   show: true,
        //   showTitle: false,
        //   feature: {
        //     dataView: { show: false, readOnly: false },
        //     saveAsImage: { show: false },
        //     restore: { show: false },
        //     magicType: { show: true, type: ['line', 'bar'] }
        //   },
        //   top: 50,
        //   right: '10%'
        // }
      }
      return options
    },
    chartOptions () {
      return tools.objectMerge(this.baseOptions, this.lineData)
    }
  },
  methods: {
    handleSearch (data) {
      console.log('-search-', data)
      const { chartId } = this.chartObj
      this.$emit('onSearch', [chartId, data])
      this.lineChart = echarts.init(document.querySelector(`#${chartId}`), 'light')
      this.lineChart.showLoading('default', {
        text: '飞速加载中...',
        color: '#409eff'
      })
    },
    initChart (chartId, options) {
      // console.log('-init-echarts-', chartId, options)
      this.lineChart = echarts.init(document.querySelector(`#${chartId}`), 'light')
      // console.log('-lineChart-', this.lineChart)
      this.lineChart.showLoading('default', {
        text: '飞速加载中...',
        color: '#409eff'
      })
      this.lineChart.setOption(options)
      this.lineChart.hideLoading()
    },
    // 获取默认天数初始值
    getDefaultDayRange () {
      // console.log(tools.getDateRangeItems('day'))
      let range = tools.getDateRangeItems('day')
      let start = tools.formatDate(new Date(range[0]), '{y}-{m}-{d} {h}:{i}:{s}')
      let end = tools.formatDate(new Date(range[range.length - 1]), '{y}-{m}-{d} {h}:{i}:{s}')
      // console.log(start, end)
      return [start, end]
    },
    // 获取默认月份初始值
    getDefaultMonthRange () {
      let start = new Date()
      let end = new Date()
      start.setMonth(start.getMonth() - 12)
      start = tools.formatDate(start, '{y}-{m}')
      end = tools.formatDate(end, '{y}-{m}')
      return [start, end]
    }
  }
}
</script>

<style lang='less' scoped>
.chartItem {
  .lineChart {
    width: 100%;
    height: 400px;
  }
}
</style>
