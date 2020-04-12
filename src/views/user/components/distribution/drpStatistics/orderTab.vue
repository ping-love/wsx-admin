/**
 * 订单数据tab
 */
<template>
  <div class='orderTab'>
    <!-- 表格 -->
    <div class="orderTabInfo">
      <div class="wrap">
        <ul>
          <li>
            <div class="title">活跃玩家</div>
            <div class="content">34</div>
          </li>
          <li>
            <div class="title">下单玩家</div>
            <div class="content">34</div>
          </li>
          <li>
            <div class="title">付款玩家</div>
            <div class="content">34</div>
          </li>
          <li>
            <div class="title">订单总数</div>
            <div class="content">34</div>
          </li>
          <li>
            <div class="title">付款订单数</div>
            <div class="content">34</div>
          </li>
        </ul>
      </div>

      <div class="wrap">
        <ul>
          <li>
            <div class="title">下单金额</div>
            <div class="content">34</div>
          </li>
          <li>
            <div class="title">付款金额</div>
            <div class="content">34</div>
          </li>
          <li>
            <div class="title">退款金额</div>
            <div class="content">34</div>
          </li>
          <li>
            <div class="title">笔单价</div>
            <div class="content">34</div>
          </li>
          <li>
            <div class="title">客单价</div>
            <div class="content">34</div>
          </li>
        </ul>
      </div>

      <div class="wrap">
        <ul>
          <li>
            <div class="title">下单转化率</div>
            <div class="content">34</div>
          </li>
          <li>
            <div class="title">付款转化率</div>
            <div class="content">34</div>
          </li>
          <li>
            <div class="title">成交转化率</div>
            <div class="content">34</div>
          </li>
        </ul>
      </div>
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

export default {
  props: {},

  data () {
    return {
      seriesData: [
        { value: 60, name: '活跃' },
        { value: 40, name: '下单' },
        { value: 20, name: '付款' }
      ]
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
    options () {
      return {
        grid: {
          top: 120,
          containLabel: true
        },
        title: {
          text: '漏斗图',
          left: '50%',
          textAlign: 'center',
          textStyle: {
            fontWeight: 'normal'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b} <br/>{c}%'
        },
        legend: {
          data: this.seriesData.map(v => v.name),
          top: 40
        },
        series: [
          {
            name: '漏斗图',
            type: 'funnel',
            top: 80,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
              show: true,
              position: 'inside'
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: 'solid'
              }
            },
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 1
            },
            emphasis: {
              label: {
                fontSize: 20
              }
            },
            data: this.seriesData
          }
        ]
      }
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
      this.seriesData = [...this.seriesData]
      this.lineChart.setOption(this.options)
      this.lineChart.hideLoading()
    },
    initCharts () {
      this.lineChart = echarts.init(this.$refs.chartRef, 'light')
      this.lineChart.showLoading('default', {
        text: '飞速加载中',
        color: '#409eff'
      })
    }
  },

  components: { searchFrom }
}
</script>

<style lang='less' scoped>
.orderTabInfo {
  padding-bottom: 15px;
}
.wrap {
  display: inline-block;
  margin-right: 15px;
  margin-bottom: 15px;

  ul {
    display: flex;
    border-left: 1px solid #ddd;
    border-top: 1px solid #ddd;

    li {
      width: 100px;
      text-align: center;
      border-right: 1px solid #ddd;
      border-bottom: 1px solid #ddd;

      .title {
        background-color: #eee;
        height: 30px;
        line-height: 30px;
        color: #909399;
        font-weight: 700;
        border-bottom: 1px solid #ddd;
      }
      .content {
        height: 30px;
        line-height: 30px;
        color: #606266;
      }
    }
  }
}

.chart {
  height: 500px;
  width: 800px;
  padding-top: 20px;
}
</style>
