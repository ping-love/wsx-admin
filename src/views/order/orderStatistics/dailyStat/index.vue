/**
* 订单日统计
*/
<template>
  <div class='dailyStat'>
    <chartComp
      typeName="dailyChart"
      :searchData="searchData"
      :chartData="chartData"
      @onSearch="handleSearch"
    />
  </div>
</template>

<script>
import tools from '@/utils/tools'
import chartComp from '@/views/order/components/orderStat/chartComp'
export default {
  name: '',
  data () {
    return {
      chartTitle: '',
      // 图表x坐标
      xAxisData: [
        '01', '02', '03', '04', '05', '06',
        '07', '08', '09', '10', '11', '12',
        '13', '14', '15', '16', '17', '18',
        '19', '20', '21', '22', '23', '24'
      ],
      // 图表数据渲染
      seriesData: []
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
      return tools.formatDate(new Date(), '{y}-{m}-{d}')
    },
    searchData () {
      let formOpt = [
        {
          label: '选择时间',
          prop: 'time',
          element: 'el-date-picker',
          type: 'date',
          initValue: this.currentTime,
          placeholder: '',
          rules: [{ required: true, message: '请选择时间', trigger: 'change' }]
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
          interval: 50,
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
    // 加载失败
    loadFild () {
      setTimeout(() => {
        this.seriesData = [...this.seriesData]
        this.$message({
          message: '加载失败',
          type: 'warning'
        })
      }, 5000)
    },
    handleSearch (params) {
      console.log('-search-params-', params)
      let time = tools.formatDate(new Date(params.time), '{y}-{m}-{d}')
      this.getUpdate(time)
      // TODO 加载失败处理 catch ==> this.loadFild()
    },
    getUpdate (updateTime) {
      console.log('-update-time-', updateTime)
      let timeStamp = tools.getTimestamp(updateTime)
      console.log(timeStamp)
      let res = {
        data: {
          list: [60, 20, 36, 10, 10, 20, 70, 90, 80, 36, 12, 94, 5, 20, 36, 10, 10, 20, 60, 53, 80, 36, 12, 94]
        }
      }
      setTimeout(() => {
        this.$message({
          message: '请求完成',
          type: 'success'
        })
        this.chartTitle = updateTime
        this.seriesData = res.data.list
      }, 1000)
    },
    getChartData (currentTime) {
      currentTime = currentTime || this.currentTime
      console.log('-current-time-', currentTime)
      let timeStamp = tools.getTimestamp(currentTime)
      console.log(timeStamp)
      let res = {
        data: {
          list: [60, 20, 36, 10, 10, 20, 60, 53, 80, 36, 12, 94, 5, 20, 36, 10, 10, 20, 60, 53, 80, 36, 12, 94]
        }
      }
      setTimeout(() => {
        this.$message({
          message: '请求完成',
          type: 'success'
        })
        this.chartTitle = currentTime
        this.seriesData = res.data.list
      }, 1000)
    }
  }
}
</script>

<style lang='less' scoped>

</style>
