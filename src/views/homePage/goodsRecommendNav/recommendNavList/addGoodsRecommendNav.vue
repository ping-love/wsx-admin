<template>
  <handle-goods-recommend-nav type="add" :formData="ruleForm"></handle-goods-recommend-nav>
</template>

<script>
import handleGoodsRecommendNav from '@/views/homePage/components/permission/handleGoodsRecommendNav'
export default {
  name: '',
  data () {
    return {
      ruleForm: {
        title: '',
        subTitle: '',
        sortNum: '',
        startTime: '',
        endTime: '',
        uploadNum: '',
        uploadGoods: '',
        isShow: ''
      }
    }
  },
  components: { handleGoodsRecommendNav },
  created () {},
  mounted () {},
  computed: {},
  methods: {

  }
}
</script>

<style lang="less" scoped>

</style>
