/**
* 订单月统计
*/
<template>
  <div class='monthlyStat'>
    <chartComp
      typeName="monthlyChart"
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
      xAxisData: [], // 图表x坐标
      seriesData: [], // 图表渲染数据
      yearData: [], // 年份集合
      selectOptions: [
        { value: '01', label: '01' },
        { value: '02', label: '02' },
        { value: '03', label: '03' },
        { value: '04', label: '04' },
        { value: '05', label: '05' },
        { value: '06', label: '06' },
        { value: '07', label: '07' },
        { value: '08', label: '08' },
        { value: '09', label: '09' },
        { value: '10', label: '10' },
        { value: '11', label: '11' },
        { value: '12', label: '12' }
      ]
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
      return tools.formatDate(new Date(), '{y}-{m}')
    },
    searchData () {
      let formOpt = [
        {
          label: '选择年月:',
          prop: 'year',
          element: 'el-select',
          options: this.yearData,
          initValue: this.getDefaultYearMonth('year'),
          placeholder: '年份',
          rules: [{ required: true, message: '请选择年份', trigger: 'change' }]
        },
        {
          label: '',
          prop: 'month',
          element: 'el-select',
          options: this.selectOptions,
          initValue: this.getDefaultYearMonth('month'),
          placeholder: '月份',
          rules: [{ required: true, message: '请选择月份', trigger: 'change' }]
        }
      ]
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
      console.log('-search-params-', params)
      let time = `${params.year}-${params.month}`
      this.getUpdate(time)
    },
    // 获取默认的年月
    getDefaultYearMonth (type) {
      return type === 'year' ? tools.formatDate(new Date(), '{y}') : tools.formatDate(new Date(), '{m}')
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
          xAxis: [
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'
          ],
          series: [
            '69', '80', '800', '900', '600', '200', '486', '129', '321', '126',
            '69', '80', '800', '900', '600', '200', '486', '129', '321', '126',
            '69', '80', '800', '900', '600', '200', '486', '129', '321', '126'
          ]
        }
      }
      setTimeout(() => {
        this.$message({
          message: '请求完成',
          type: 'success'
        })
        this.chartTitle = updateTime
        this.xAxisData = res.data.xAxis
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
          xAxis: [
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
            '31'
          ],
          series: [
            '69', '80', '800', '900', '600', '200', '486', '629', '321', '126',
            '69', '180', '800', '900', '600', '200', '486', '129', '321', '126',
            '169', '80', '800', '900', '600', '200', '486', '129', '321', '126',
            '561'
          ]
        }
      }
      setTimeout(() => {
        this.$message({
          message: '请求完成',
          type: 'success'
        })
        this.chartTitle = currentTime
        this.xAxisData = res.data.xAxis
        this.seriesData = res.data.series
        this.yearData = this.setYearData(res.data.years)
      }, 1000)
    }
  }
}
</script>

<style lang='less' scoped>

</style>
