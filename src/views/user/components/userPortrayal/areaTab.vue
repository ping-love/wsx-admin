/**
 * 区域统计tab组件
 */
<template>
  <div class=''>
    <div class="chart">
      <div id="mapChart"></div>
      <div id="pieChart"></div>
    </div>

    <div class="table">
      <div class="province">
        <h4>各省用户量排名及数量TOP10</h4>
        <el-table :data="provinceTop10">
          <el-table-column label="排名" prop="sortNum"></el-table-column>
          <el-table-column label="省份" prop="province"></el-table-column>
          <el-table-column label="用户数" prop="userNum"></el-table-column>
        </el-table>
      </div>

      <div class="city">
        <h4>城市用户量排名及数量TOP10</h4>
        <el-table :data="cityTop10">
          <el-table-column label="排名" prop="sortNum"></el-table-column>
          <el-table-column label="城市" prop="city"></el-table-column>
          <el-table-column label="用户数" prop="userNum"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import tools from '@/utils/tools'
import echarts from 'echarts'
import 'echarts/map/js/china.js'

export default {
  props: {},

  data () {
    return {
      provinceTop10: [
        { sortNum: 1, province: '浙江', userNum: 23 },
        { sortNum: 2, province: '北京', userNum: 13 },
        { sortNum: 3, province: '河南', userNum: 23 },
        { sortNum: 4, province: '重庆', userNum: 26 },
        { sortNum: 5, province: '甘肃', userNum: 9 }
      ],
      cityTop10: [
        { sortNum: 1, city: '温州市', userNum: 123 },
        { sortNum: 2, city: '杭州市', userNum: 13 },
        { sortNum: 3, city: '北京市', userNum: 23 },
        { sortNum: 4, city: '武汉市', userNum: 33 },
        { sortNum: 5, city: '界首市', userNum: 63 }
      ]
    }
  },

  computed: {
    baseOptions () {
      return {
        grid: {
          top: 80,
          containLabel: true
        },
        title: {
          left: '50%',
          textAlign: 'center',
          textStyle: {
            fontWeight: 'normal'
          }
        }
      }
    },
    mapOptions () {
      const options = {
        title: {
          text: '主要省份地图数据'
        },
        tooltip: {
          trigger: 'item'
          // formatter: '{b}<br/>{a}：{c}'
        },
        visualMap: {
          min: 0,
          max: 50,
          left: 'left',
          top: 'bottom',
          text: ['高', '低'],
          inRange: {
            color: ['#e0ffff', '#006edd']
          },
          show: true
        },
        geo: {
          map: 'china',
          roam: false, // 不开启缩放和平移
          zoom: 1.1, // 视角缩放比例
          label: {
            normal: {
              show: true,
              fontSize: '10',
              color: 'rgba(0,0,0,0.7)'
            }
          },
          itemStyle: {
            normal: {
              borderColor: 'rgba(0, 0, 0, 0.2)'
            },
            emphasis: {
              areaColor: '#F3B329', // 鼠标选择区域颜色
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        series: [
          {
            type: 'map',
            geoIndex: 0,
            name: '用户数',
            data: this.provinceTop10.map(v => {
              return {
                name: v.province,
                value: v.userNum
              }
            })
          }
        ]
      }
      return tools.objectMerge(options, this.baseOptions)
    },
    pieOptions () {
      const options = {
        title: {
          text: '主要省份所占比例'
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
            data: this.provinceTop10.map(v => {
              return {
                name: v.province,
                value: v.userNum
              }
            })
          }
        ]
      }
      return tools.objectMerge(options, this.baseOptions)
    }
  },

  created () {},

  mounted () {
    this.initCharts('mapChart', this.mapOptions)
    this.initCharts('pieChart', this.pieOptions)
  },

  methods: {
    initCharts (chartId, options) {
      const myChart = echarts.init(document.querySelector(`#${chartId}`), 'light')
      myChart.showLoading('default', {
        text: '飞速加载中',
        color: '#409eff'
      })
      myChart.setOption(options)
      myChart.hideLoading()
    }
  },

  components: { }
}
</script>

<style lang='less' scoped>
.chart {
  display: flex;
  padding-bottom: 30px;

  & > div {
    width: 49%;
    height: 600px;
  }
}

.table {
  display: flex;
  justify-content: space-around;

  h4 {
    padding: 20px 0;
    text-align: center;
    font-size: 16px;
  }
  .province {
    width: 40%;
  }
  .city {
    width: 40%;
  }
}
</style>
