/**
 * 价格偏好tab组件
 */
<template>
  <div class=''>
    <tabComp
      @onSearch="onSearch"
      :barData="barOptions"
      :pieData="pieOptions"
      :lineData="lineOptions"
    />
  </div>
</template>

<script>
import tabComp from './tabComp'

export default {
  props: {},

  data () {
    return {
      seriesData: [
        { name: '100以下', value: 647 },
        { name: '100~300', value: 409 },
        { name: '301~500', value: 78 },
        { name: '501~800', value: 348 },
        { name: '801~1500', value: 82 },
        { name: '1501~3000', value: 116 },
        { name: '3000以上', value: 32 }
      ],
      valueData: [
        [21, 34, 21, 12, 23, 54, 26, 65, 34, 11, 45, 72, 32, 14, 34],
        [21, 34, 21, 12, 23, 54, 26, 65, 34, 11, 45, 72, 32, 14, 34],
        [1, 14, 7, 24, 21, 4, 36, 5, 4, 21, 9, 7, 23, 12, 7],
        [1, 43, 13, 24, 21, 4, 36, 5, 4, 21, 9, 7, 23, 12, 7],
        [1, 24, 54, 24, 21, 4, 36, 5, 4, 21, 9, 7, 23, 12, 7],
        [1, 75, 63, 24, 21, 4, 36, 5, 4, 21, 9, 7, 23, 12, 7],
        [1, 9, 17, 24, 21, 4, 36, 5, 4, 21, 9, 7, 23, 12, 7]
      ]
    }
  },

  computed: {
    barOptions () {
      return {
        title: {
          text: '不同价格区间成交次数'
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
        dataset: {
          dimensions: ['name', 'value'],
          source: this.seriesData
        },
        xAxis: [
          {
            type: 'category',
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '次数',
            min: 0,
            max: 2000,
            interval: 200,
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            type: 'bar'
          }
        ]
      }
    },
    pieOptions () {
      return {
        title: {
          text: '不同价格区间成交比例'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>{c} ({d}%)'
        },
        series: [
          {
            type: 'pie',
            radius: '60%',
            roseType: 'angle',
            data: this.seriesData
          }
        ]
      }
    },
    lineOptions () {
      return {
        title: {
          text: '不同价格区间新增成交次数'
        },
        legend: {
          data: this.seriesData.map(v => v.name),
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
            data: [],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '次数',
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
            type: 'line',
            data: this.valueData[i]
          }
        })
      }
    }
  },

  created () {},

  methods: {
    onSearch (val) {
      this.valueData = [...this.valueData]
    }
  },

  components: { tabComp }
}
</script>

<style lang='less' scoped>
</style>
