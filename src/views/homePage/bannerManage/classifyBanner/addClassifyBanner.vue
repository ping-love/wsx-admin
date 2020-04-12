<template>
  <!-- 添加分类banner -->
  <handle-classify-banner type="add" :formData="ruleForm"></handle-classify-banner>
</template>

<script>
import handleClassifyBanner from '@/views/homePage/components/permission/handleClassifyBanner'
export default {
  name: '',
  data () {
    return {
      ruleForm: {
        name: '',
        classify: '',
        genre: '',
        linkOrId: '',
        sortNum: '',
        startTime: '',
        endTime: '',
        isShow: '',
        uploadPics: []
      }
    }
  },
  components: { handleClassifyBanner },
  created () {},
  mounted () {},
  computed: {},
  methods: {}
}
</script>

<style lang="less" scoped></style>
