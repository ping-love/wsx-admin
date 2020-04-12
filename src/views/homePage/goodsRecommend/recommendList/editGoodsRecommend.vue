/**
* 编辑商品推荐
*/
<template>
  <handle-goods-recommend type="edit" :formData="ruleForm"></handle-goods-recommend>
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
  created () {
    this.getData()
  },
  mounted () {},
  computed: {},
  methods: {
    getData () {
      this.ruleForm.name = '商品推荐goodsRecommend-01'
    }
  }
}
</script>

<style lang="less" scoped>

</style>
