<template>
  <!-- 编辑首页banner -->
  <handle-home-banner type="edit" :formData="ruleForm"></handle-home-banner>
</template>

<script>
import handleHomeBanner from '@/views/homePage/components/permission/handleHomeBanner'
export default {
  name: '',
  data () {
    return {
      ruleForm: {
        name: '',
        classify: '',
        linkOrId: '',
        sortNum: '',
        startTime: '',
        endTime: '',
        isShow: '',
        uploadPics: []
      }
    }
  },
  components: { handleHomeBanner },
  created () {
    this.getData()
  },
  mounted () {},
  computed: {},
  methods: {
    getData () {
      this.ruleForm.name = '首页banner-01'
      this.ruleForm.classify = '承接页'
      this.ruleForm.linkOrId = 'https://www.aidyd.com/#/'
    }
  }
}
</script>

<style lang="less" scoped>

</style>
