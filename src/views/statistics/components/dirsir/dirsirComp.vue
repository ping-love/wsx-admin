/**
* 电商数据图表
*/
<template>
  <div class='chartComp'>
    <tableInfo :infoData="infoData" />
    <lineChart :chartObj="dirsirChartObj" :lineData="dirsirChartData" @onSearch="handleSearch" />
    <lineChart :chartObj="categoryChartObj" :lineData="categoryChartData" @onSearch="handleSearch"/>
  </div>
</template>

<script>
import tableInfo from '../common/tableInfo'
import lineChart from '../common/lineChart'
import tools from '@/utils/tools'
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      infoData: [], // 表格数据信息
      dirsirSeriesData: [], // 电商交易额统计数据
      categorySeriesData: [], // 不同一级类目交易额比重变化数据
      dirsirChartObj: {
        selectType: 'year-month-day',
        chartId: 'dirsirDealChart'
      },
      dealData: {
        chartTitle: '电商交易额统计',
        chartTypeName: ['交易金额'],
        xAxisData: tools.getDateRangeItems('day')
      },
      categoryChartObj: {
        selectType: 'year-month',
        chartId: 'categoryDealChart'
      },
      categoryData: {
        chartTitle: '不同一级类目交易额比重变化',
        chartTypeName: ['家居日用', '美妆个护', '母婴用品', '服饰箱包', '数码电器', '食品饮料', '粮油副食'], // TODO 类别异步获取
        xAxisData: tools.getDateRangeItems('month')
      }
    }
  },
  components: {
    tableInfo,
    lineChart
  },
  created () {

  },
  mounted () {
    // console.log('-xAxis-', this.xAxisData)
    this.getData(this.type)
  },
  computed: {
    dirsirChartData () {
      const { chartTitle, chartTypeName, xAxisData } = this.dealData
      const options = {
        title: {
          text: chartTitle
        },
        legend: {
          data: chartTypeName,
          top: 40
        },
        xAxis: [{
          data: xAxisData
        }],
        yAxis: {
          type: 'value',
          name: 'RMB(元)',
          min: 0,
          interval: 5,
          axisLabel: {
            formatter: '{value}k'
          }
        },
        series: this.dirsirSeriesData.map((val, index) => {
          return {
            name: chartTypeName[index],
            type: 'line',
            data: val
          }
        })
      }
      // console.log('-deal-options-', options)
      return options
    },
    categoryChartData () {
      const { chartTitle, chartTypeName, xAxisData } = this.categoryData
      const options = {
        title: {
          text: chartTitle
        },
        legend: {
          data: chartTypeName,
          top: 40
        },
        xAxis: [{
          data: xAxisData
        }],
        yAxis: {
          type: 'value',
          name: 'RMB(元)',
          min: 0,
          interval: 25,
          axisLabel: {
            formatter: '{value}'
          }
        },
        series: this.categorySeriesData.map((val, index) => {
          return {
            name: chartTypeName[index],
            type: 'line',
            data: val
          }
        })
      }
      // console.log('-category-options-', options)
      return options
    }
  },
  methods: {
    handleSearch (arg) {
      console.log(arg[0], arg[1])
      arg[0] === this.dirsirChartObj.chartId ? this.getDirsirDealData(arg[1]) : this.getCategoryDealData(arg[1])
    },
    getDirsirDealData (data) {
      console.log('-dirsir-', data)
      // TODO statType == 3 取 startYear和endYear 否则取值 times
      this.getData() // TODO 假数据
    },
    getCategoryDealData (data) {
      console.log('-category-', data)
      // TODO statType == 3 取 startYear和endYear 否则取值 times
      this.getData() // TODO 假数据
    },
    getData (type) {
      console.log('-page-type-', type)
      let info = [
        { name: '家居日用', value: '28652' },
        { name: '美妆个护', value: '16168' },
        { name: '母婴用品', value: '2884' },
        { name: '服饰箱包', value: '32885' },
        { name: '数码电器', value: '32979' },
        { name: '食品饮料', value: '3270' },
        { name: '粮油副食', value: '0' }
      ]
      let dealList = [
        [
          '20', '15', '42', '16', '19', '30', '20', '15', '60', '16', '19', '30',
          '45', '15', '5', '16', '19', '30', '20', '15', '10', '16', '19', '30',
          '13', '15', '2', '16', '51', '20'
        ]
      ]
      let categoryList = [
        ['10', '15', '70', '16', '19', '90', '20', '15', '60', '16', '19', '90'],
        ['20', '25', '60', '36', '49', '20', '80', '35', '10', '66', '59', '20'],
        ['30', '35', '50', '36', '49', '20', '80', '35', '10', '66', '59', '20'],
        ['40', '45', '40', '36', '49', '20', '80', '35', '10', '66', '59', '20'],
        ['50', '55', '30', '36', '49', '20', '80', '35', '10', '66', '59', '20'],
        ['60', '65', '20', '36', '49', '20', '80', '35', '10', '66', '59', '20'],
        ['70', '75', '10', '36', '49', '20', '80', '35', '10', '66', '59', '20']
      ]
      setTimeout(() => {
        this.infoData = info
        this.dirsirSeriesData = [...dealList]
        this.categorySeriesData = [...categoryList]
        console.log(this.dirsirSeriesData, this.categorySeriesData)
        this.$message({
          message: '请求成功',
          type: 'success'
        })
      }, 1000)
    }
  }
}
</script>

<style lang='less' scoped>

</style>
