/**
* 不同类型的输入框
* 可清空的输入框、select选择框、时间选择框
*/
<template>
  <!--
    通过type匹配指定的input
    size ==> 设置尺寸 medium/small/mini
    TODO 还需要添加一些事件，暂时不做处理
    -->
  <div class="input-item">

    <el-input
     v-model="currVal"
     size="mini"
     placeholder="请输入内容"
     clearable
     v-if="inputType == '1'"
    ></el-input>

    <el-select
     v-model="currVal"
     size="mini"
     placeholder="全部"
     v-if="inputType == '2'"
     >
      <el-option
       v-for="item in options"
       :key="item.value"
       :label="item.label"
       :value="item.value"
      ></el-option>
    </el-select>

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

    <!-- 级联选择器 -->
    <el-cascader
      v-model="currVal"
      size="mini"
      placeholder="请选择"
      :options="options"
      :props="configObj"
      @change="handleChange"
      @expand-change="expandChange"
      @visible-change="visibleChange"
      v-if="inputType == '4'"
    ></el-cascader>
  </div>
</template>

<script>
import tools from '@/utils/tools'
export default {
  name: '',
  data () {
    return {
      pickerOptions: tools.pickerOptionsRange,
      configObj: {
        lazy: true,
        lazyLoad (node, resolve) {
          // leaf !== 0 有children属性，反之没有
          const { data } = node
          console.log('node:', node, 'data:', data)
          console.log('111', data)
          let resTwo = {
            code: 0,
            data: {
              list: [
                { grade: 'two', typeId: 11, value: '11', label: '坚果', leaf: true },
                { grade: 'two', typeId: 12, value: '12', label: '薯片', leaf: false, children: [] }
              ]
            }
          }
          let resThree = {
            code: 0,
            data: {
              list: [
                { grade: 'Three', typeId: 111, value: '111', label: '坚果1', leaf: true },
                { grade: 'Three', typeId: 112, value: '112', label: '坚果2', leaf: true }
              ]
            }
          }
          setTimeout(() => {
            switch (data.grade) {
              case 'one':
                data['children'] = resTwo.data.list
                break
              case 'two':
                data['children'] = resThree.data.list
                break
            }
            console.log('222', data)
            console.log('nodes:', data)
            resolve(data)
          }, 1000)
        }
      }
    }
  },
  props: {
    value: {},
    // 输入框的类型
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

  },
  components: {},
  created () {
    // console.log(this.options)
  },
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
    handleChange () {
      // console.log(111)
    },
    expandChange () {
      // console.log(222)
      // this.options.map(item => {
      //   console.log(item)
      //   item.children = [
      //     { value: 1, label: '坚果' },
      //     { value: 2, label: '薯片' }
      //   ]
      // })
      // console.log(this.options)
    },
    visibleChange (data) {
      console.log(333, data)
    }
    // handleCascader () {
    //   this.$emit('update:options', false)
    // }
  }
}
</script>

<style lang="less" scoped>
.input-item {

}
</style>
