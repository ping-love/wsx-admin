<template>
  <!-- 添加导航 -->
  <handle-nav type="add" :formData="ruleForm"></handle-nav>
</template>

<script>
import handleNav from '@/views/homePage/components/permission/handleNav'
export default {
  name: '',
  data () {
    return {
      ruleForm: {
        linkType: '',
        linkUrl: '',
        navName: '',
        sortNum: '',
        startTime: '',
        endTime: '',
        isShow: '',
        uploadPics: []
      }
    }
  },
  components: { handleNav },
  created () {},
  mounted () {},
  computed: {},
  methods: {

  }
}
</script>

<style lang="less" scoped>

</style>
