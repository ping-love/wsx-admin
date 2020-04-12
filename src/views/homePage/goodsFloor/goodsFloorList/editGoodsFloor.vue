/**
* 编辑商品楼层
*/
<template>
  <handle-goods-floor type="edit" :formData="ruleForm"></handle-goods-floor>
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
  created () {
    this.getData()
  },
  mounted () {},
  computed: {},
  methods: {
    getData () {
      this.ruleForm.name = '商品楼层goodsFloor-01'
    }
  }
}
</script>

<style lang="less" scoped>

</style>
