/**
 * 退换货行为统计
 */
<template>
  <div class=''>
    <div class="txt">
      <p>退款率：9.44%</p>
      <p>退货率：2.22%</p>
    </div>
    <el-divider></el-divider>

    <div class="refundRate">
      <searchFrom :formOptions="formOptions" @onSearch="onSearch"></searchFrom>
      <div id="refundRateChart"></div>
    </div>

    <div class="refundReason">
      <div id="refundReasonBar"></div>
      <div id="refundReasonPie"></div>
    </div>
  </div>
</template>

<script>
import tools from '@/utils/tools'
import searchFrom from '@/components/searchForm'
import echarts from 'echarts'

export default {
  props: {},

  data () {
    return {
      timeStart: '',
      timeEnd: '',
      timeRange: [],
      dateType: ''
    }
  },

  computed: {
    formOptions () {
      const that = this
      let rangeOptions = []
      if (that.dateType === 1) {
        rangeOptions = [
          {
            label: '时间',
            prop: 'timeRange',
            element: 'el-date-picker',
            type: 'monthrange'
          }
        ]
      } else if (that.dateType === 2) {
        rangeOptions = [
          {
            label: '开始时间',
            prop: 'timeStart',
            element: 'el-date-picker',
            type: 'year',
            'value-format': 'yyyy'
          },
          {
            label: '结束时间',
            prop: 'timeEnd',
            element: 'el-date-picker',
            type: 'year',
            'value-format': 'yyyy'
          }
        ]
      }
      return [
        {
          label: '统计类型',
          prop: 'dateType',
          element: 'el-select',
          initValue: that.dateType,
          options: [
            { value: 1, label: '按月统计' },
            { value: 2, label: '按年统计' }
          ],
          events: {
            change (val) {
              that.dateType = val
            }
          }
        },
        ...rangeOptions
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
    refundRateOptions () {
      const seriesDataMoney = [21, 34, 21, 12, 23, 54, 26, 65, 34, 11, 45, 72, 32, 14, 34]
      const seriesDataRefund = [1, 14, 7, 24, 21, 4, 36, 5, 4, 21, 9, 7, 23, 12, 7]
      const options = {
        title: {
          text: '退款/退货率'
        },
        legend: { // 指示栏
          data: ['退款率', '退货率'],
          top: 40
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
            data: this.getxAxisData(),
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '百分比',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: '退款率',
            type: 'line',
            data: seriesDataMoney
          },
          {
            name: '退货率',
            type: 'line',
            data: seriesDataRefund
          }
        ]
      }
      return tools.objectMerge(options, this.baseOptions)
    },
    refundReasonBarOptions () {
      const aAxisData = ['多拍/错拍/不想要', '不喜欢/效果不好', '货物与描述不符合', '卖家发错货', '其他']
      const seriesData = [62, 29, 64, 86, 35]
      const options = {
        title: { // 标题
          text: '售后原因订单数'
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
            data: aAxisData,
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '订单数',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [ // 数据
          {
            type: 'bar',
            data: seriesData
          }
        ]
      }
      return tools.objectMerge(options, this.baseOptions)
    },
    refundReasonPieOptions () {
      const seriesData = [
        { value: 25, name: '多拍/错拍/不想要' },
        { value: 74, name: '不喜欢/效果不好' },
        { value: 10, name: '货物与描述不符合' },
        { value: 35, name: '卖家发错货' },
        { value: 40, name: '其他' }
      ]
      const options = {
        title: { // 标题
          text: '不同原因所占比例'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>{c} ({d}%)'
        },
        series: [ // 数据
          {
            type: 'pie',
            radius: '60%',
            // roseType: 'angle',
            data: seriesData
          }
        ]
      }
      return tools.objectMerge(options, this.baseOptions)
    }
  },

  created () {
  },

  mounted () {
    this.initCharts('refundRateChart', this.refundRateOptions)
    this.initCharts('refundReasonBar', this.refundReasonBarOptions)
    this.initCharts('refundReasonPie', this.refundReasonPieOptions)
  },

  methods: {
    initCharts (chartId, options) {
      const myChart = echarts.init(document.querySelector(`#${chartId}`), 'light')
      myChart.showLoading('default', {
        text: '飞速加载中',
        color: '#409eff'
      })
      myChart.setOption(options)
      myChart.hideLoading()
    },
    onSearch (val) {
      if (val.dateType === 1) {
        if (!val.timeRange) {
          return
        }
        this.timeRange = val.timeRange
      } else if (val.dateType === 2) {
        if (+val.timeStart > +val.timeEnd) {
          console.log('结束日期不能小于开始日期')
          return
        }
        this.timeStart = val.timeStart
        this.timeEnd = val.timeEnd
      }
      this.initCharts('refundRateChart', this.refundRateOptions)
    },
    getxAxisData () {
      if (this.dateType === 1) {
        return tools.getDateRangeItems('month', this.timeRange)
      } else if (this.dateType === 2) {
        return this.getYears()
      } else {
        const arr = []
        for (let i = 1; i <= 31; i++) {
          arr.push(i)
        }
        return arr
      }
    },
    getYears () {
      const arr = []
      let start = this.timeStart
      let end = this.timeEnd
      while (start <= end) {
        arr.push(start)
        start++
      }
      return arr
    }
  },

  components: { searchFrom }
}
</script>

<style lang='less' scoped>
.txt {
  font-size: 16px;
  // color: #409eff;
  display: flex;

  p:last-child {
    padding-left: 50px;
  }
}

.refundRate {
  padding-bottom: 10px;

  #refundRateChart {
    height: 390px;
  }
}
.refundReason {
  display: flex;

  & > div {
    width: 49%;
    height: 390px;
  }
}
</style>
