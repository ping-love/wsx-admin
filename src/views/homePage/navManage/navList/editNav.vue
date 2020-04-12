<template>
  <!-- 添加导航 -->
  <handle-nav type="edit" :formData="ruleForm"></handle-nav>
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
  created () {
    this.getData()
  },
  mounted () {},
  computed: {},
  methods: {
    getData () {
      this.ruleForm.navName = '导航名nav-01'
    }
  }
}
</script>

<style lang="less" scoped>

</style>
