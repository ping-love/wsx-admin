/**
 * 性别统计tab组件
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
        { name: '保密', value: 29 },
        { name: '男', value: 64 },
        { name: '女', value: 86 }
      ],
      valueData: [
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
          text: '总性别分布'
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
            name: '人数',
            min: 0,
            max: 100,
            interval: 10,
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
          text: '不同性别所占比例'
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
          text: '不同性别新增人数'
        },
        legend: {
          data: ['保密', '男', '女'],
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
            name: '人数',
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
