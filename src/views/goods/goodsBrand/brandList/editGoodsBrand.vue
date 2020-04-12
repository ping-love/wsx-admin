/**
* 编辑商品品牌
*/
<template>
  <div class='editGoodsBrand'>
    <handleGoodsBrand type="eidt" :formData="ruleForm" />
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
    console.log(this.$route.query)
    const { id } = this.$route.query
    this.getData(id)
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    getData (id) {
      console.log(id)
      this.ruleForm = {
        brandName: '品牌一',
        brandIcons: ['https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png'],
        brandPosters: ['https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png'],
        isHomeShow: '否',
        publicityImgs: ['https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png']
      }
    }
  }
}
</script>

<style lang='less' scoped>

</style>
