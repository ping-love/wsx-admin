/**
 * 添加奖励
 */
<template>
  <div class=''>
    <handleReward :formData="formData" type="add"/>
  </div>
</template>

<script>
import handleReward from '@/views/reward/components/reward/handleReward'

export default {
  props: {},

  data () {
    return {
      formData: {
        title: '',
        consumeStart: undefined,
        consumeEnd: undefined,
        coin: undefined,
        diamond: undefined,
        power: undefined,
        prop: []
      }
    }
  },

  computed: {},

  created () {},

  methods: {},

  components: { handleReward }
}
</script>

<style lang='less' scoped>

</style>
