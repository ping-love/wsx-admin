/**
* 订单月统计
*/
<template>
  <div class='yearlyStat'>
    <chartComp
      typeName="yearlyChart"
      :searchData="searchData"
      :chartData="chartData"
      @onSearch="handleSearch"
    />
  </div>
</template>

<script>
import chartComp from '@/views/order/components/orderStat/chartComp'
import tools from '@/utils/tools'
export default {
  name: '',
  data () {
    return {
      chartTitle: '', // 图表标题
      xAxisData: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], // 图表x坐标
      seriesData: [], // 图表渲染数据
      yearData: [] // 年份集合
    }
  },
  components: {
    chartComp
  },
  created () {

  },
  mounted () {
    this.getChartData()
  },
  computed: {
    currentTime () {
      return tools.formatDate(new Date(), '{y}')
    },
    searchData () {
      let formOpt = [
        {
          label: '选择年份:',
          prop: 'year',
          element: 'el-select',
          options: this.yearData,
          initValue: this.getDefaultYear(),
          placeholder: '年份',
          rules: [{ required: true, message: '请选择年份', trigger: 'change' }]
        }
      ]
      console.log('-formOpt-', formOpt)
      return formOpt
    },
    chartData () {
      let options = {
        title: {
          text: this.chartTitle
        },
        legend: {
          data: ['销量'],
          top: 50
        },
        xAxis: [{ data: this.xAxisData }],
        yAxis: [{ // y坐标系
          type: 'value',
          name: 'RMB(元)',
          min: 0,
          interval: 250,
          axisLabel: {
            formatter: '{value}'
          }
        }],
        series: [
          {
            name: '销量',
            type: 'bar',
            data: this.seriesData
          }
        ]
      }
      return options
    }
  },
  methods: {
    handleSearch (params) {
      console.log(params)
      let year = tools.formatDate(params.year, '{y}')
      this.getUpdate(year)
    },
    // 获取默认年份
    getDefaultYear () {
      let year = tools.formatDate(new Date(), '{y}')
      return year
    },
    setYearData (arr) {
      let midArr = []
      arr.map((val, idx) => (midArr.push({ value: val, label: val })))
      return midArr
    },
    getUpdate (updateTime) {
      console.log('-update-time-', updateTime)
      let timeStamp = tools.getTimestamp(updateTime)
      console.log(timeStamp)
      let res = {
        data: {
          series: [
            '69', '80', '800', '900', '600', '200', '486', '129', '321', '126', '69', '80'
          ]
        }
      }
      setTimeout(() => {
        this.$message({
          message: '请求完成',
          type: 'success'
        })
        this.chartTitle = updateTime
        // this.chartTitle = `${updateTime}年统计`
        this.seriesData = res.data.series
      }, 1000)
    },
    getChartData (currentTime) {
      currentTime = currentTime || this.currentTime
      console.log('-current-time-', currentTime)
      let timeStamp = tools.getTimestamp(currentTime)
      console.log(timeStamp)
      let res = {
        data: {
          years: ['2018', '2019', '2020'],
          series: [
            '69', '80', '800', '900', '600', '200', '486', '629', '321', '126', '69', '180'
          ]
        }
      }
      setTimeout(() => {
        this.$message({
          message: '请求完成',
          type: 'success'
        })
        this.chartTitle = currentTime
        // this.chartTitle = `${currentTime}年统计`
        this.seriesData = res.data.series
        this.yearData = this.setYearData(res.data.years)
      }, 1000)
    }
  }
}
</script>

<style lang='less' scoped>

</style>
