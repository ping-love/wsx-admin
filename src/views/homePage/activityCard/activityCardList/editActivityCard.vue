/**
* 编辑活动card
*/
<template>
  <handle-activity-card type="edit" :formData="ruleForm"></handle-activity-card>
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
  created () {
    this.getData()
  },
  mounted () {},
  computed: {},
  methods: {
    getData () {
      this.ruleForm.name = '活动card-01'
    }
  }
}
</script>

<style lang="less" scoped>

</style>
