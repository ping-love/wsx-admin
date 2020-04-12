<template>
  <!-- 编辑分类banner -->
  <handle-classify-banner type="edit" :formData="ruleForm"></handle-classify-banner>
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
  created () {
    this.getData()
  },
  mounted () {},
  computed: {},
  methods: {
    getData () {
      this.ruleForm.name = '分类banner-01'
    }
  }
}
</script>

<style lang="less" scoped></style>
