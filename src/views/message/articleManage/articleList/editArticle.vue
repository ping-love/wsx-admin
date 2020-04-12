/**
 * 编辑文章
 */
<template>
  <div class=''>
    <handleArticle :formData="formData" type="edit"/>
  </div>
</template>

<script>
import handleArticle from '@/views/message/components/article/handleArticle'

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

  components: { handleArticle }
}
</script>

<style lang='less' scoped>

</style>
