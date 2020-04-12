/**
* 添加商品楼层
*/
<template>
  <handle-goods-floor type="add" :formData="ruleForm"></handle-goods-floor>
</template>

<script>
import handleGoodsFloor from '@/views/homePage/components/permission/handleGoodsFloor'
export default {
  name: '',
  data () {
    return {
      ruleForm: {
        name: '',
        sortNum: '',
        linkUrl: '',
        startTime: '',
        endTime: '',
        isShow: '',
        uploadPics: []
      }
    }
  },
  components: { handleGoodsFloor },
  created () {},
  mounted () {},
  computed: {},
  methods: {

  }
}
</script>

<style lang="less" scoped>

</style>
