<template>
  <!--
    通过type匹配指定的input
    size ==> 设置尺寸 medium/small/mini
    -->
  <div class="input-item">
    <!-- 可清空的输入框，type == "1" -->
    <el-input v-model="currVal" size="mini" placeholder="请输入内容" clearable v-if="inputType == '1'"></el-input>
    <!-- select选择框 type == "2" -->
    <el-select v-model="currVal" size="mini" placeholder="全部" v-if="inputType == '2'">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
    </el-select>
    <!-- 时间选择框 type == "3" -->
    <el-date-picker
      v-model="currVal"
      type="datetimerange"
      size="mini"
      :picker-options="pickerOptions"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right"
      v-if="inputType == '3'"
    ></el-date-picker>
  </div>
</template>

<script>
import tools from '@/utils/tools'
export default {
  name: '',
  data () {
    return {
      // currVal: this.value
      pickerOptions: tools.pickerOptionsRange
    }
  },
  props: {
    value: {},
    inputType: {
      type: String,
      default: '1'
    },
    options: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  watch: {
    // currVal (val) {
    //   console.log(this.currVal)
    //   this.$emit('input', val)
    // }
  },
  components: {},
  created () {},
  mounted () {},
  computed: {
    currVal: {
      get () {
        return this.value
      },
      set (val) {
        // console.log('输入框的值:', val)
        this.$emit('input', val)
      }
    }
  },
  methods: {
    // handleInput () {
    //   console.log('text输入框')
    //   console.log(this.currVal)
    // },
    // handleSelect () {
    //   console.log('select选项选择')
    //   console.log(this.currVal)
    // },
    // handleSelTime () {
    //   console.log('时间选择')
    //   console.log(this.currVal)
    // }
  }
}
</script>

<style lang="less" scoped>
.input-item {

}
</style>
