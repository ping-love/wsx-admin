/**
 *
 */
<template>
  <div class=''>
    <handleAdmin :formData="formData" type="add"/>
  </div>
</template>

<script>
import handleAdmin from '@/views/system/components/permission/handleAdmin'

export default {
  props: {},

  data () {
    return {
      formData: {
        name: '',
        userName: '',
        password: '',
        againPwd: '',
        mobile: '',
        tel: '',
        email: '',
        gender: 1,
        roleId: ''
      }
    }
  },

  computed: {},

  created () {},

  methods: {},

  components: { handleAdmin }
}
</script>

<style lang='less' scoped>

</style>
