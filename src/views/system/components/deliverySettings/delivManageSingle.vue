/**
 * 单品运费设置tab栏组件
 */
<template>
  <div class='delivManageSingle'>
    <div class="addBtn">
      <el-button type="primary" @click="toAdd">新增运费模板</el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      row-key="id"
    >
      <el-table-column prop="name" label="模板名" width="150"></el-table-column>
      <el-table-column prop="deliveryType" label="配送方式" width="80"></el-table-column>
      <el-table-column label="运送到" min-width="200">
        <template slot-scope="scope">
          {{transArea(scope.row.area)}}
        </template>
      </el-table-column>
      <el-table-column prop="firNum" label="首件（个）" min-width="90"></el-table-column>
      <el-table-column prop="firFreight" label="运费（元）" min-width="90"></el-table-column>
      <el-table-column prop="secNum" label="续件（个）" min-width="90"></el-table-column>
      <el-table-column prop="secFreight" label="运费（元）" min-width="90"></el-table-column>
      <el-table-column prop="time" label="最后编辑时间" min-width="150"></el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope" v-if="!!scope.row.name">
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
      tableData: [
        {
          id: '1',
          name: '342342',
          deliveryType: '默认',
          area: [
            '120000',
            '130100',
            '130200',
            '130300',
            '130400',
            '130500',
            '130600',
            '130700',
            '130800',
            '130900',
            '131000',
            '131100',
            '140300',
            '140400'
          ],
          firNum: 1,
          firFreight: 10,
          secNum: 1,
          secFreight: 5,
          children: [
            {
              id: 22,
              deliveryType: '快递',
              area: [
                '120000',
                '130100',
                '130200',
                '130300',
                '130400',
                '130500',
                '130600',
                '130700',
                '130800',
                '130900',
                '131000',
                '131100',
                '140300',
                '140400'
              ],
              firNum: 1,
              firFreight: 10,
              secNum: 1,
              secFreight: 5
            },
            {
              id: 23,
              deliveryType: 'EMS',
              area: [
                '120000',
                '130100',
                '130200',
                '130300',
                '130400',
                '130500',
                '130600',
                '130700',
                '130800',
                '130900',
                '131000',
                '131100',
                '140300',
                '140400'
              ],
              firNum: 1,
              firFreight: 10,
              secNum: 1,
              secFreight: 5
            }
          ],
          time: '2019-11-06 18:06:22'
        },
        {
          id: '2',
          name: '342342',
          deliveryType: '默认',
          area: [
            '120000',
            '130100',
            '130200',
            '130300',
            '130400',
            '130500',
            '130600',
            '130700',
            '130800',
            '130900',
            '131000',
            '131100',
            '140300',
            '140400'
          ],
          firNum: 1,
          firFreight: 10,
          secNum: 1,
          secFreight: 5,
          time: '2019-11-06 18:06:22'
        }
      ]
    }
  },

  computed: {},

  created () {
  },

  methods: {
    toEdit (scope) {
      this.$router.push({
        name: 'EditSingleFreTempl',
        query: {
          id: scope.id
        }
      })
    },
    toAdd () {
      this.$router.push({
        name: 'AddSingleFreTempl'
      })
    },
    // 省市id转文字
    transArea (ids) {
      const txt = areaData.getAreaByIds(ids)
      return txt
    }
  },

  components: {}
}
</script>

<style lang='less' scoped>
.addBtn {
  padding: 10px 0 20px;
}
</style>
