/**
 * 添加等级
 */
<template>
  <div class=''>
    <handleLevel :formData="formData" type="add"/>
  </div>
</template>

<script>
import handleLevel from '@/views/user/components/levelConfig/handleLevel'

export default {
  props: {},

  data () {
    return {
      formData: {
        levelName: undefined,
        fightNum: undefined,
        attackNum: undefined,
        critRate: undefined,
        critDamage: undefined,
        physicalUp: undefined,
        physicalRecover: undefined,
        redBagRate: undefined,
        empiricalNum: undefined
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
