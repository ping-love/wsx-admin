/**
 * 编辑单品运费模板
 */
<template>
  <div class=''>
    <handleSingleFreTempl type="edit" :data="formData"/>
  </div>
</template>

<script>
import handleSingleFreTempl from '@/views/system/components/deliverySettings/handleSingleFreTempl'

export default {
  props: {},

  data () {
    return {
      formData: {
        name: '',
        goodsArea: [],
        isFreightFree: 0,
        calcType: 1,
        deliveryType: 1,
        // 默认运费配置
        deliveryDefault: {
          firNum: undefined,
          firFreight: undefined,
          secNum: undefined,
          secFreight: undefined
        },
        // 指定地区运费配置
        deliveryArr: [{
          id: 0,
          area: [],
          firNum: undefined,
          firFreight: undefined,
          secNum: undefined,
          secFreight: undefined
        }],
        // 是否开启指定地区包邮
        isConditionalFree: 1,
        // 指定地区包邮配置
        conditionalArr: [{
          id: 1,
          area: [],
          type: 1,
          num: undefined,
          freight: undefined
        }]
      }
    }
  },

  computed: {},

  created () {},

  methods: {},

  components: { handleSingleFreTempl }
}
</script>

<style lang='less' scoped>

</style>
