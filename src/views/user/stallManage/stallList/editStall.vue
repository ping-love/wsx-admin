/**
 * 编辑地摊公司
 */
<template>
  <div class=''>
    <handleStall :formData="formData" type="edit"/>
  </div>
</template>

<script>
import handleStall from '@/views/user/components/stallManage/handleStall'

export default {
  props: {},

  data () {
    return {
      formData: {
        compName: 'phone-x供应商',
        representative: '阿黄',
        tel: '13116766623',
        email: '15872363132@163.com'
      }
    }
  },

  computed: {},

  created () {},

  methods: {},

  components: { handleStall }
}
</script>

<style lang='less' scoped>

</style>
