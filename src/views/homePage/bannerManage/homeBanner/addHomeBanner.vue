<template>
  <!-- 添加首页banner -->
  <handle-home-banner type="add" :formData="ruleForm"></handle-home-banner>
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
  created () {},
  mounted () {},
  computed: {},
  methods: {}
}
</script>

<style lang="less" scoped>

</style>
