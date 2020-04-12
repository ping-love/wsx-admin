/**
 * 添加充值模板
 */
<template>
  <div class=''>
    <handleRecharge :formData="formData" type="add"/>
  </div>
</template>

<script>
import handleRecharge from '@/views/reward/components/recharge/handleRecharge'

export default {
  props: {},

  data () {
    return {
      formData: {
        icon: '',
        diamond: undefined,
        amount: undefined
      }
    }
  },

  computed: {},

  created () {},

  methods: {},

  components: { handleRecharge }
}
</script>

<style lang='less' scoped>

</style>
