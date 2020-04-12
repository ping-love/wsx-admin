/**
 * 日下载并进入游戏玩家数
 */
<template>
  <div class=''>
    <userTabItem
      :lineData="lineOptions"
      @onSearch="onSearch"
      @onExport="onExport"
      :dateRangeGlobal="dateRangeGlobal"
    />
  </div>
</template>

<script>
import userTabItem from './userTabItem'

export default {
  props: {
    dateRangeGlobal: {
      type: Array,
      default () {
        return []
      }
    }
  },

  data () {
    return {
      valueData: [21, 34, 21, 12, 23, 54, 26, 65, 34, 11, 45, 72, 32, 14, 34]
    }
  },

  computed: {
    lineOptions () {
      return {
        title: {
          text: '日下载并进入游戏玩家数'
        },
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
        series: [{
          name: '日下载并进入游戏玩家数',
          type: 'line',
          data: this.valueData
        }]
      }
    }
  },

  created () {},

  methods: {
    onSearch (val) {
      this.valueData = [...this.valueData]
    },
    onExport () {

    }
  },

  components: { userTabItem }
}
</script>

<style lang='less' scoped>

</style>
