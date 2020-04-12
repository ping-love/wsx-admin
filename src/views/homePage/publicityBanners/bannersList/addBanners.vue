<template>
  <!-- 添加宣传横幅 -->
  <handle-banners type="add" :formData="ruleForm"></handle-banners>
</template>

<script>
import handleBanners from '@/views/homePage/components/permission/handleBanners'
export default {
  name: '',
  data () {
    return {
      ruleForm: {
        name: '',
        linkUrl: '',
        sortNum: '',
        startTime: '',
        endTime: '',
        isShow: '',
        uploadPics: []
      }
    }
  },
  components: { handleBanners },
  created () {},
  mounted () {},
  computed: {},
  methods: {}
}
</script>

<style lang="less" scoped>

</style>
