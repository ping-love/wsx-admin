/**
* 编辑品牌banner
*/
<template>
  <div class='editBrandBanner'>
    <handleHomeBrandBanner type="edit" :formData="ruleForm" />
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
    const { id } = this.$route.query
    this.getData(id)
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    getData () {
      this.ruleForm = {
        title: '标题',
        isShow: '是',
        linkOrId: '69903',
        sortNum: '169',
        brandBanners: ['https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png'],
        imgSizeType: '半幅中图(300px*300px)'
      }
    }
  }
}
</script>

<style lang='less' scoped>

</style>
