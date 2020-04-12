/**
 * 添加地摊公司
 */
<template>
  <div class=''>
    <handleStall :formData="formData" type="add"/>
  </div>
</template>

<script>
import handleStall from '@/views/user/components/stallManage/handleStall'

export default {
  props: {},

  data () {
    return {
      formData: {
        compName: '',
        representative: '',
        tel: '',
        email: ''
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
