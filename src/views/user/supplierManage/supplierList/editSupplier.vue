/**
 * 编辑供应商
 */
<template>
  <div class=''>
    <handleSupplier :formData="formData" type="edit"/>
  </div>
</template>

<script>
import handleSupplier from '@/views/user/components/supplierManage/handleSupplier'

export default {
  props: {},

  data () {
    return {
      formData: {
        name: 'phone-x供应商',
        contact: '苹果',
        tel: '13116766623',
        address: '中国苹果总代理_1'
      }
    }
  },

  computed: {},

  created () {},

  methods: {},

  components: { handleSupplier }
}
</script>

<style lang='less' scoped>

</style>
