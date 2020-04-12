<template>
  <!-- 添加服务承诺 -->
  <handle-serve-commitment type="add" :formData="ruleForm"></handle-serve-commitment>
</template>

<script>
import handleServeCommitment from '@/views/homePage/components/permission/handleServeCommitment'
export default {
  name: '',
  data () {
    return {
      ruleForm: {
        name: '',
        startTime: '',
        endTime: '',
        isShow: '',
        uploadPics: []
      }
    }
  },
  components: { handleServeCommitment },
  created () {},
  mounted () {},
  computed: {},
  methods: {

  }
}
</script>

<style lang="less" scoped>

</style>
