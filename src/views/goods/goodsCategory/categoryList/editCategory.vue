/**
* 编辑分类
*/
<template>
  <div class='editCategory'>
    <handleCategory type="edit" :formData="ruleForm" />
  </div>
</template>

<script>
import handleCategory from '@/views/goods/components/category/handleCategory'
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
  components: { handleCategory },
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
