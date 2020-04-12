/**
 * 提现数据统计
 */
<template>
  <div class=''>
    <div class="choose">
      统计类型：
      <el-select size="mini" v-model="dayNum" @change="onSelectChange">
        <el-option :value="3" label="3日"></el-option>
        <el-option :value="7" label="7日"></el-option>
        <el-option :value="15" label="15日"></el-option>
        <el-option :value="30" label="30日"></el-option>
      </el-select>
    </div>

    <div class="chartsBox" :class="{ threeCols: isThreeCols }" :key="domKey">
      <div id="timesChart"></div>
      <div id="amountChart"></div>
    </div>
  </div>
</template>

<script>
import tools from '@/utils/tools'

import echarts from 'echarts'

export default {
  props: {},

  data () {
    return {
      dayNum: 7,
      timesData: [1, 2, 4, 5, 23, 2, 7, 8, 15, 15, 12, 9, 13, 24, 10],
      amountData: [9, 2, 4, 5, 23, 2, 7, 8, 15, 15, 12, 9, 13, 24, 10],
      domKey: 1
    }
  },

  computed: {
    isThreeCols () {
      return this.dayNum >= 15
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
      let xAxisData = []
      let seriesData = []
      for (let i = 0; i < this.dayNum; i++) {
        xAxisData.push(i + 1 + '日')
        seriesData = this.timesData.slice(0, this.dayNum)
      }
      const options = {
        title: {
          text: '多日提现次数'
        },
        xAxis: [
          {
            type: 'category',
            data: xAxisData,
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
            type: 'line',
            data: seriesData
          }
        ]
      }
      return tools.objectMerge(options, this.baseOptions)
    },
    amountOptions () {
      let xAxisData = []
      let seriesData = []
      for (let i = 0; i < this.dayNum; i++) {
        xAxisData.push(i + 1 + '日')
        seriesData = this.amountData.slice(0, this.dayNum)
      }
      const options = {
        title: {
          text: '多日提现金额'
        },
        xAxis: [
          {
            type: 'category',
            data: xAxisData,
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
        series: [
          {
            type: 'line',
            data: seriesData
          }
        ]
      }
      return tools.objectMerge(options, this.baseOptions)
    }
  },

  created () {},

  mounted () {
    this.renderCharts()
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
    renderCharts () {
      this.initCharts('timesChart', this.timesOptions)
      this.initCharts('amountChart', this.amountOptions)
    },
    onSelectChange () {
      this.domKey++
      this.$nextTick(() => {
        this.renderCharts()
      })
    }
  },

  components: {}
}
</script>

<style lang='less' scoped>
.choose {
  padding-bottom: 30px;
}

.chartsBox {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > div {
    width: 49%;
    height: 600px;
    margin-bottom: 30px;
  }

  &.threeCols > div {
    width: 99%;
  }
}
</style>
