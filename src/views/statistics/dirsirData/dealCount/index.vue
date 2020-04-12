/**
* 商品交易数量概况
*/
<template>
  <div class='dealCount'>
    <dirsirComp type="dealCount" />
  </div>
</template>

<script>
import dirsirComp from '@/views/statistics/components/dirsir/dirsirComp'
export default {
  name: '',
  data () {
    return {
      // 交易金额、订单数量、退款金额、退款数量、退货金额、退货数量
    }
  },
  components: {
    dirsirComp
  },
  created () {

  },
  mounted () {

  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang='less' scoped>

</style>
