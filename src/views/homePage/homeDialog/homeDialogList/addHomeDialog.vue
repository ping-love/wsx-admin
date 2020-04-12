/**
* 添加首页弹框
*/
<template>
  <handle-home-dialog type="add" :formData="ruleForm"></handle-home-dialog>
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
  created () {},
  mounted () {},
  computed: {},
  methods: {

  }
}
</script>

<style lang="less" scoped>

</style>
