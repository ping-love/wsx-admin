/**
* 添加道具
*/
<template>
  <div class='addProp'>
    <handleProp/>
  </div>
</template>

<script>
import handleProp from '@/views/goods/components/prop/handleProp'
export default {
  name: '',
  data () {
    return {}
  },
  components: { handleProp },
  created () {
    const { propId } = this.$route.query
    console.log('-propId-', propId)
    propId && this.getData()
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    getData () {
      console.log('请求数据...')
    }
  }
}
</script>

<style lang='less' scoped>

</style>
