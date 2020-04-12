/**
* 添加分类
*/
<template>
  <div class='addCategory'>
    <handleCategory type="add" :formData="ruleForm" />
  </div>
</template>

<script>
import handleCategory from '@/views/goods/components/category/handleCategory'
export default {
  name: '',
  data () {
    return {
      ruleForm: {
        categoryParent: '',
        categoryName: undefined,
        uploadPics: [],
        sortNum: undefined
      }
    }
  },
  components: { handleCategory },
  created () {
    console.log(this.$route.query.categoryParent)
    const { categoryParent } = this.$route.query
    console.log(categoryParent)
    this.ruleForm.categoryParent = categoryParent || '无'
    console.log(this.ruleForm)
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
