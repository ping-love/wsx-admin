/**
 * 配送管理
 */
<template>
  <div class='delivTimeManage'>
    <div class="addBtn">
      <el-button type="primary" @click="toAdd">新增配送时间模板</el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column prop="name" label="模板名" width="150"></el-table-column>
      <el-table-column label="发货地" width="150">
        <template slot-scope="scope">
          {{getAreaById(scope.row.deliveryFrom)}}
        </template>
      </el-table-column>
      <el-table-column label="配送时间">
        <template slot-scope="scope">
          {{getStrTime(scope.row.areaTime)}}
        </template>
      </el-table-column>
      <el-table-column prop="time" label="最后编辑时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="toEdit(scope)">修改</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import areaData from '@/utils/areaData'

export default {
  props: {},

  data () {
    return {
      active: 'shop',
      tableData: [
        {
          id: '1',
          name: '342342',
          deliveryFrom: '130000',
          areaTime: [
            { id: '130000', time: 3 }
          ],
          time: '2019-11-06 18:06:22'
        },
        {
          id: '2',
          name: '342342',
          deliveryFrom: '130000',
          areaTime: [
            { id: '130000', time: 3 }
          ],
          time: '2019-11-06 18:06:22'
        },
        {
          id: '3',
          name: '342342',
          deliveryFrom: '130000',
          areaTime: [
            { id: '130000', time: 3 }
          ],
          time: '2019-11-06 18:06:22'
        }
      ]
    }
  },

  computed: {},

  created () {
    const id = '130000'
    console.log(this.getAreaById(id))
  },

  methods: {
    toEdit (scope) {
      this.$router.push({
        name: 'EditDelivTimeTempl',
        query: {
          id: scope.id
        }
      })
    },
    toAdd () {
      this.$router.push({
        name: 'AddDelivTimeTempl'
      })
    },
    // 省由id转为文字
    getAreaById (id) {
      const provinceData = areaData.getProvince()
      let res = ''
      provinceData.forEach(v => {
        if (v.id === id) {
          res = v.value
        }
      })
      return res
    },
    // 配送时间转换文字
    getStrTime (arr) {
      let res = []
      arr.forEach(v => {
        res.push(this.getAreaById(v.id) + '：' + v.time + '天')
      })
      return res.join('，')
    }
  },

  components: {}
}
</script>

<style lang='less' scoped>
.addBtn {
  padding: 0 0 20px;
}
</style>
