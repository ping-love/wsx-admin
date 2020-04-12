/**
 * 提现行为统计
 */
<template>
  <div class=''>
    <div class="txt">
      总提现金额：￥9.2
    </div>
    <el-divider></el-divider>

    <div class="chartsBox">
      <div id="timesChart"></div>
      <div id="amountChart"></div>
      <div id="userNumChart"></div>
    </div>
  </div>
</template>

<script>
import tools from '@/utils/tools'

import echarts from 'echarts'

export default {
  props: {},

  data () {
    return {}
  },

  computed: {
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
      }
    },
    timesOptions () {
      const options = {
        title: {
          text: '提现次数'
        },
        xAxis: [
          {
            type: 'category',
            data: ['日均提现次数', '今日提现次数'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '次数（次）',
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
            type: 'bar',
            data: [5, 9]
          }
        ]
      }
      return tools.objectMerge(options, this.baseOptions)
    },
    amountOptions () {
      const options = {
        title: { // 标题
          text: '提现金额'
        },
        xAxis: [
          {
            type: 'category',
            data: ['日均提现金额', '今日提现金额'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '金额（元）',
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
            data: [5, 9]
          }
        ]
      }
      return tools.objectMerge(options, this.baseOptions)
    },
    userNumOptions () {
      const options = {
        title: {
          text: '提现人数'
        },
        xAxis: [
          {
            type: 'category',
            data: ['日均提现人数', '今日提现人数'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '人数（人）',
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
            type: 'bar',
            data: [5, 9]
          }
        ]
      }
      return tools.objectMerge(options, this.baseOptions)
    }
  },

  created () {},

  mounted () {
    this.initCharts('timesChart', this.timesOptions)
    this.initCharts('amountChart', this.amountOptions)
    this.initCharts('userNumChart', this.userNumOptions)
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
    }
  },

  components: {}
}
</script>

<style lang='less' scoped>
.txt {
  font-size: 18px;
  // color: #409eff;
}

.chartsBox {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > div {
    width: 33%;
    height: 600px;
    margin-bottom: 30px;
  }
}
</style>
