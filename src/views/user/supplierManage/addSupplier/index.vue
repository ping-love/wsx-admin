/**
 * 添加供应商
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
        name: '',
        contact: '',
        tel: '',
        address: ''
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
