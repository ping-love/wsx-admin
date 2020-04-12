/**
* 添加活动card
*/
<template>
  <handle-activity-card type="add" :formData="ruleForm"></handle-activity-card>
</template>

<script>
import handleActivityCard from '@/views/homePage/components/permission/handleActivityCard'
export default {
  name: '',
  data () {
    return {
      ruleForm: {
        name: '',
        cardClassify: '',
        linkUrl: '',
        startTime: '',
        endTime: '',
        isShow: '',
        uploadPics: []
      }
    }
  },
  components: { handleActivityCard },
  created () {},
  mounted () {},
  computed: {},
  methods: {

  }
}
</script>

<style lang="less" scoped>

</style>
