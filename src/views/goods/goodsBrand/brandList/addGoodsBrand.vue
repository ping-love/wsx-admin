/**
* 添加商品品牌
*/
<template>
  <div class='addGoodsBrand'>
    <handleGoodsBrand type="add" :formData="ruleForm" />
  </div>
</template>

<script>
import handleGoodsBrand from '@/views/goods/components/brand/handleGoodsBrand'
export default {
  name: '',
  data () {
    return {
      ruleForm: {
        brandName: undefined,
        brandIcons: [],
        branPosters: [],
        isHomeShow: undefined,
        publicityImgs: []
      }
    }
  },
  components: { handleGoodsBrand },
  created () {

  },
  mounted () {

  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang='less' scoped>

</style>
