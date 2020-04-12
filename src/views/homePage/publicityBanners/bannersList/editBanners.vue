<template>
  <!-- 编辑宣传横幅 -->
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
        uploadPis: []
      }
    }
  },
  components: { handleBanners },
  created () {
    this.getData()
  },
  mounted () {},
  computed: {},
  methods: {
    getData () {
      this.ruleForm.name = '宣传横幅banners-01'
    }
  }
}
</script>

<style lang="less" scoped>

</style>
