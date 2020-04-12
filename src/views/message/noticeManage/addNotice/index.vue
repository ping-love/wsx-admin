/**
 * 添加公告
 */
<template>
  <div class=''>
    <handleNotice :formData="formData" type="add"/>
  </div>
</template>

<script>
import handleNotice from '@/views/message/components/notice/handleNotice'

export default {
  props: {},

  data () {
    return {
      formData: {
        title: '',
        category: '',
        artist: '',
        from: '',
        sortNum: undefined,
        isShow: 1,
        imgList: [],
        tags: ['韩', '奥'],
        desc: '',
        content: ''
      }
    }
  },

  computed: {},

  created () {},

  methods: {},

  components: { handleNotice }
}
</script>

<style lang='less' scoped>

</style>
