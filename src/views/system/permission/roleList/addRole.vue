/**
 * 添加角色
 */
<template>
  <div class=''>
    <handleRole :formData="formData" type="add"/>
  </div>
</template>

<script>
import handleRole from '@/views/system/components/permission/handleRole'

export default {
  props: {},

  data () {
    return {
      formData: {
        roleName: '',
        systemMenus: [],
        marketMenus: [],
        userMenus: []
      }
    }
  },

  computed: {},

  created () {},

  methods: {},

  components: { handleRole }
}
</script>

<style lang='less' scoped>

</style>
