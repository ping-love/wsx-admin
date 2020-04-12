/**
 * 编辑等级
 */
<template>
  <div class=''>
    <handleLevel :formData="formData" type="edit"/>
  </div>
</template>

<script>
import handleLevel from '@/views/user/components/levelConfig/handleLevel'

export default {
  props: {},

  data () {
    return {
      formData: {
        levelName: 34,
        fightNum: 233,
        attackNum: 0.29,
        critRate: 0.05,
        critDamage: 0.05,
        physicalUp: 158,
        physicalRecover: 0.29,
        redBagRate: 0.29,
        empiricalNum: 1197000
      }
    }
  },

  computed: {},

  created () {},

  methods: {},

  components: { handleLevel }
}
</script>

<style lang='less' scoped>

</style>
