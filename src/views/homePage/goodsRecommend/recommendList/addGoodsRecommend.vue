/**
* 添加商品推荐
*/
<template>
  <handle-goods-recommend type="add" :formData="ruleForm"></handle-goods-recommend>
</template>

<script>
import handleGoodsRecommend from '@/views/homePage/components/permission/handleGoodsRecommend'
export default {
  name: '',
  data () {
    return {
      ruleForm: {
        name: '',
        classify: '',
        linkUrl: '',
        startTime: '',
        endTime: '',
        isShow: '',
        uploadPics: []
      }
    }
  },
  components: { handleGoodsRecommend },
  created () {},
  mounted () {},
  computed: {},
  methods: {

  }
}
</script>

<style lang="less" scoped>

</style>
