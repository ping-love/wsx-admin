/**
 * 添加配送方式
 */
<template>
  <div class=''>
    <handleDelivType type="add" :formData="formData"/>
  </div>
</template>

<script>
import handleDelivType from '@/views/system/components/deliverySettings/handleDelivType'

export default {
  props: {},

  data () {
    return {
      formData: {
        companyName: '',
        companyUrl: '',
        weightInit: undefined,
        weightAdd: undefined,
        coinInit: undefined,
        coinAdd: undefined,
        companyDesc: '',
        sortNum: undefined,
        isOpen: 1
      }
    }
  },

  computed: {},

  created () {},

  methods: {},

  components: { handleDelivType }
}
</script>

<style lang='less' scoped>

</style>
