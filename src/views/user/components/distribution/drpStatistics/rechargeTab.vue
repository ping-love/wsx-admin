/**
 * 充值数据tab
 */
<template>
  <div class='rechargeTab'>
    <!-- 表格 -->
    <div class="tabInfo">
      <ul class="title">
        <li></li>
        <li v-for="(item, index) in titleData" :key="index">{{item}}</li>
        <li>总计</li>
      </ul>
      <ul class="times">
        <li>充值总人次</li>
        <li v-for="(item, index) in timeData" :key="index">{{item}}</li>
        <li>{{getSum(timeData)}}</li>
      </ul>
      <ul class="amount">
        <li>充值总金额</li>
        <li v-for="(item, index) in amountData" :key="index">{{item}}</li>
        <li>{{getSum(amountData)}}</li>
      </ul>
      <ul class="num">
        <li>充值总人数</li>
        <li v-for="(item, index) in numData" :key="index">{{item}}</li>
        <li>{{getSum(numData)}}</li>
      </ul>
    </div>

    <!-- 图表 -->
    <div class="chartBox">
      <searchFrom
        :formOptions="formOptions"
        btnItems="search,export"
        @onSearch="onSearch"
        @onExport="onExport"
      ></searchFrom>

      <div class="chart" ref="chartRef"></div>
    </div>
  </div>
</template>

<script>
import searchFrom from '@/components/searchForm'
import echarts from 'echarts'
import tools from '@/utils/tools'

export default {
  props: {},

  data () {
    return {
      titleData: [
        '充值6.00元档', '充值18.00元档', '充值30.00元档', '充值68.00元档',
        '充值128.00元档', '充值648.00元档', '周卡', '月卡'
      ],
      timeData: [12, 62, 12, 82, 12, 12, 12, 12],
      amountData: [12, 14, 12, 12, 52, 2, 12, 12],
      numData: [12, 12, 12, 12, 12, 32, 12, 12]
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
    seriesData () {
      return [
        {
          name: '充值总人次',
          data: this.timeData
        },
        {
          name: '充值总金额',
          data: this.amountData
        }
      ]
    },
    baseOptions () {
      return {
        grid: {
          top: 120,
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
    options () {
      const options = {
        title: {
          text: '柱状图'
        },
        legend: {
          data: this.seriesData.map(v => v.name),
          top: 50
        },
        xAxis: [
          {
            type: 'category',
            data: this.titleData,
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '人次（次）',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
              formatter: '{value}'
            }
          },
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
        series: this.seriesData.map((v, i) => {
          return {
            name: v.name,
            type: 'bar',
            yAxisIndex: i,
            data: v.data
          }
        })
      }
      return tools.objectMerge(options, this.baseOptions)
    }
  },

  created () {},

  mounted () {
    this.initCharts()
    this.getData()
  },

  methods: {
    onSearch (val) {
      if (!val.dateRange) {
        this.$message({ type: 'warning', message: '请选择日期' })
        return
      }
      this.getData(val.dateRange)
    },
    onExport () {
      this.$emit('onExport')
    },
    getData (range) {
      this.timeData = [...this.timeData]
      this.lineChart.setOption(this.options)
      this.lineChart.hideLoading()
    },
    initCharts () {
      this.lineChart = echarts.init(this.$refs.chartRef, 'light')
      this.lineChart.showLoading('default', {
        text: '飞速加载中',
        color: '#409eff'
      })
    },
    getSum (arr) {
      let sum = 0
      arr.forEach(v => {
        sum += v
      })
      return sum
    }
  },

  components: { searchFrom }
}
</script>

<style lang='less' scoped>
.tabInfo {
  margin-bottom: 15px;
  border-left: 1px solid #ddd;
  border-top: 1px solid #ddd;

  ul {
    display: flex;

    li {
      flex: 1;
      padding: 10px 0;
      text-align: center;
      border-right: 1px solid #ddd;
      border-bottom: 1px solid #ddd;

      &:first-child {
        flex: none;
        width: 110px;
        color: #909399;
        font-weight: 700;
      }
    }
    &.title {
      li {
        background-color: #eee;
        color: #909399;
        font-weight: 700;
      }
    }
  }
}

.chart {
  height: 500px;
  padding-top: 20px;
}
</style>
