/**
 * 编辑奖励
 */
<template>
  <div class=''>
    <handleReward :formData="formData" type="edit"/>
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
        prop: [
          {
            id: 1,
            icon: '',
            name: '武器1',
            probability: '4%'
          },
          {
            id: 2,
            icon: '',
            name: '武器2',
            probability: '4%'
          }
        ]
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
