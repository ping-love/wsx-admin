/**
* 订单管理公共headerComp
*/
<template>
  <div class='headerComp'>
    <searchComp
      :formOptions="formOptions"
      :btnItems="btnItems"
      @onSearch="handleSearch"
      @onExport="handleExport"
    />
  </div>
</template>

<script>
import searchComp from '@/components/searchForm'
import tools from '@/utils/tools'
export default {
  name: '',
  data () {
    return {
      btnItems: 'search, export',
      formOptions: [
        {
          label: '订单编号',
          prop: 'orderNumber',
          element: 'el-input',
          initValue: '',
          placeholder: '主/父/子订单编号'
        },
        {
          label: '商品名',
          prop: 'goodsName',
          element: 'el-input',
          initValue: '',
          placeholder: '请输入商品名'
        },
        {
          label: '时间',
          prop: 'times',
          element: 'el-date-picker',
          initValue: '',
          placeholder: ''
        }
      ]
    }
  },
  props: {
    type: {
      type: String,
      required: true
    }
  },
  components: {
    searchComp
  },
  created () {

  },
  mounted () {

  },
  computed: {

  },
  methods: {
    handleSearch (val) {
      console.log('-type-', this.type)
      // this.$emit('onSearch', val)
    },
    handleExport (val) {
      console.log('-type-', this.type)
      // this.$emit('onExport', val)
      tools.downloadFile() // TODO
    }
  }
}
</script>

<style lang='less' scoped>

</style>
