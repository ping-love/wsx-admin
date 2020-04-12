/**
* 订单统计echarts图表组件
*/
<template>
  <div class='chartWrapper'>
    <div class="searchBox">
      <searchForm :formOptions="formOptions" @onSearch="handleSearch" />
    </div>
    <div class="chartItem">
      <div :id="typeName"></div>
    </div>
  </div>
</template>

<script>
import searchForm from '@/components/searchForm'
import echarts from 'echarts'
import tools from '@/utils/tools'
export default {
  name: '',
  data () {
    return {
      lineChart: {}
    }
  },
  props: {
    // dailyChart、monthlyChart、yearlyChart
    typeName: {
      type: String,
      default: 'dailyChart'
    },
    searchData: {
      type: Array,
      default () {
        return []
      }
    },
    chartData: {
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
    chartData () {
      console.log('-watch-chartData-')
      this.lineChart.setOption(this.chartOptions)
      this.lineChart.hideLoading()
    }
  },
  created () {

  },
  mounted () {
    this.initEcharts(this.chartOptions)
  },
  computed: {
    formOptions () {
      return this.searchData
    },
    // echarts基础配置项
    baseOptions () {
      const options = {
        grid: {
          top: 120,
          containLabel: false
        },
        title: {
          textAlign: 'center',
          left: '50%',
          textStyle: {
            fontWeight: 'normal'
          }
        },
        tooltip: { // 提示框组件
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: { // 工具栏组件
          show: true,
          showTitle: false,
          feature: {
            dataView: { show: false, readOnly: false },
            saveAsImage: { show: false },
            restore: { show: false },
            magicType: { show: true, type: ['line', 'bar'] }
          },
          top: 50,
          right: '10%'
        }
      }
      return options
    },
    chartOptions () {
      let options = tools.objectMerge(this.chartData, this.baseOptions)
      return options
    }
  },
  methods: {
    initEcharts (options) {
      this.lineChart = echarts.init(document.querySelector(`#${this.typeName}`), 'light')
      console.log('-init-lineChart-', this.lineChart)
      this.lineChart.showLoading('default', {
        text: '飞速加载中...',
        color: '#409eff'
      })
      this.lineChart.setOption(options)
      this.lineChart.hideLoading()
    },
    handleSearch (val) {
      console.log(val)
      this.lineChart = echarts.init(document.querySelector(`#${this.typeName}`), 'light')
      // console.log('-search-lineChart-', this.lineChart)
      this.lineChart.showLoading('default', {
        text: '飞速加载中...',
        color: '#409eff'
      })
      this.$emit('onSearch', val)
    }
  }
}
</script>

<style lang='less' scoped>
.chartItem {
  & > div {
    width: 100%;
    height: 500px;
  }
}
</style>
