/**
 * 编辑店铺运费模板
 */
<template>
  <div class=''>
    <handleShopFreTempl type="edit" :formData="formData"/>
  </div>
</template>

<script>
import handleShopFreTempl from '@/views/system/components/deliverySettings/handleShopFreTempl'

export default {
  props: {},

  data () {
    return {
      formData: {
        name: '',
        goodsArea: [],
        deliveryArea: [],
        deliveryType: 1,
        ruleType: 1,
        upToFree: undefined,
        baseFreight: undefined,
        fixedFreight: undefined
      }
    }
  },

  computed: {},

  created () {},

  methods: {},

  components: { handleShopFreTempl }
}
</script>

<style lang='less' scoped>

</style>
