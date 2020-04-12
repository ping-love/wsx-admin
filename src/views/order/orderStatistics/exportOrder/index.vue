/**
* 导出订单
*/
<template>
  <div class='exportOrder'>
    <searchForm
      :btnItems="btnItems"
      :formOptions="formOptions"
      @onExport="handleExport"
    />
    <div class="explainText">
      <p>注：</p>
      <p>1 . 每个 EXCEL文件 导出的最大订单条数和平均每个订单中所包含的商品件数成正比！</p>
      <p>2 . 如果您在进行订单导出时遇到未知的问题，请试图改小每个 EXCEL文件 导出的订单条数 ！</p>
      <p>3 . 在进行订单导出时，可能需要很长一段时间，请不要刷新页面 ！</p>
    </div>
  </div>
</template>

<script>
import searchForm from '@/components/searchForm'
import { getHistoryOrderStatus } from '@/filters/transformTwo'
import tools from '@/utils/tools'
export default {
  name: '',
  data () {
    return {
      btnItems: 'export',
      formOptions: [
        {
          label: '订单状态',
          prop: 'orderStatus',
          element: 'el-select',
          options: getHistoryOrderStatus(),
          initValue: '',
          placeholder: '全部'
          // rules: [{ required: true, message: '请选择订单状态', trigger: 'change' }]
        },
        {
          label: '时间',
          prop: 'times',
          element: 'el-date-picker',
          initValue: '',
          placeholder: ''
          // rules: [{ required: true, message: '请选择时间', trigger: 'change' }]
        }
      ]
    }
  },
  components: {
    searchForm
  },
  created () {

  },
  mounted () {

  },
  computed: {

  },
  methods: {
    handleExport (data) {
      console.log('-export-data-', data)
      tools.downloadFile()
    }
  }
}
</script>

<style lang='less' scoped>
.explainText {
  padding-top: 20px;
  p{
    color: red;
    line-height: 24px;
    padding-left: 20px;
    &:first-child {
      padding-left: 0;
    }
  }
}
</style>
