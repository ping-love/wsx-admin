/**
 * 添加配送时间模板
 */
<template>
  <div class=''>
    <handleDelivTime :formData="formData" type="add"/>
  </div>
</template>

<script>
import handleDelivTime from '@/views/system/components/deliverySettings/handleDelivTime'

export default {
  props: {},

  data () {
    return {
      formData: {
        name: '',
        deliveryFrom: '',
        areaTime: []
      }
    }
  },

  computed: {},

  created () {},

  methods: {},

  components: { handleDelivTime }
}
</script>

<style lang='less' scoped>

</style>
