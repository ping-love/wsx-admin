/**
* 编辑浮层
*/
<template>
  <handle-float-tier type="edit" :formData="ruleForm"></handle-float-tier>
</template>

<script>
import handleFloatTier from '@/views/homePage/components/permission/handleFloatTier'
export default {
  name: '',
  data () {
    return {
      ruleForm: {
        title: '',
        linkCategory: '',
        linkUrl: '',
        platform: '',
        userType: '',
        sortNum: '',
        startTime: '',
        endTime: '',
        uploadPics: [],
        isShow: '',
        isSlide: ''
      }
    }
  },
  components: { handleFloatTier },
  created () {
    this.getData()
  },
  mounted () {},
  computed: {},
  methods: {
    getData () {
      this.ruleForm.title = '浮层floatTier-01'
    }
  }
}
</script>

<style lang="less" scoped>

</style>
