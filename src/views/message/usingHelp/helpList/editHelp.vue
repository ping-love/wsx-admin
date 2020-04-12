/**
 * 编辑使用帮助
 */
<template>
  <div class=''>
    <handleHelp :formData="formData" type="edit"/>
  </div>
</template>

<script>
import handleHelp from '@/views/message/components/help/handleHelp'

export default {
  props: {},

  data () {
    return {
      formData: {
        title: '',
        category: '',
        sortNum: undefined,
        isShow: 1,
        content: ''
      }
    }
  },

  computed: {},

  created () {},

  methods: {},

  components: { handleHelp }
}
</script>

<style lang='less' scoped>

</style>
