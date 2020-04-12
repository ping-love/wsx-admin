/**
* 添加浮层
*/
<template>
  <handle-float-tier type="add" :formData="ruleForm"></handle-float-tier>
</template>

<script>
import handleFloatTier from '@/views/homePage/components/permission/handleFloatTier'
export default {
  name: '',
  data () {
    return {
      ruleForm: {
        title: '',
        linkCategory: '承接页',
        linkUrl: '',
        platform: '',
        userType: '',
        sortNum: '',
        startTime: '',
        endTime: '',
        uploadPics: [],
        isShow: '是',
        isSlide: '是'
      }
    }
  },
  components: { handleFloatTier },
  created () {},
  mounted () {},
  computed: {},
  methods: {

  }
}
</script>

<style lang="less" scoped>

</style>
