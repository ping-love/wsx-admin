/**
* 添加品牌banner
*/
<template>
  <div class='addBrandBanner'>
    <handleHomeBrandBanner type="add" :formData="ruleForm" />
  </div>
</template>

<script>
import handleHomeBrandBanner from '@/views/goods/components/brand/handleHomeBrandBanner'
export default {
  name: '',
  data () {
    return {
      ruleForm: {
        title: undefined,
        isShow: undefined,
        linkOrId: undefined,
        sortNum: undefined,
        brandBanners: [],
        imgSizeType: undefined
      }
    }
  },
  components: { handleHomeBrandBanner },
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
