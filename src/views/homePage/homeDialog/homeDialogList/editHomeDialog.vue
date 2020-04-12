/**
* 编辑首页弹框
*/
<template>
  <handle-home-dialog type="edit" :formData="ruleForm"></handle-home-dialog>
</template>

<script>
import handleHomeDialog from '@/views/homePage/components/permission/handleHomeDialog'
export default {
  name: '',
  data () {
    return {
      ruleForm: {
        title: '',
        category: '',
        linkUrl: '',
        sortNum: '',
        startTime: '',
        endTime: '',
        uploadPics: [],
        isShow: ''
      }
    }
  },
  components: { handleHomeDialog },
  created () {
    this.getData()
  },
  mounted () {},
  computed: {},
  methods: {
    getData () {
      this.ruleForm.title = '首页弹框homeDialog-01'
    }
  }
}
</script>

<style lang="less" scoped>

</style>
