/**
* 商品添加
*/
<template>
  <div class='goodsAdd'>

    <el-tabs v-model="activeName" @tab-click="handleTabClick">

      <el-tab-pane label="基本信息" name="first">
        <handleBasicInfo
         :formData="basicFormData"
         :currObj="baseInfoObj"
         @nextstep="handleNextstep"
        />
      </el-tab-pane>

      <el-tab-pane label="商品属性" name="second">
        <handleGoodsAttr
          :type="goodsAttrBool"
          :formData="attrFormData"
          :currObj="goodsAttrObj"
          @submit="handleSubmitEvent"
        />
      </el-tab-pane>

    </el-tabs>

  </div>
</template>

<script>
import handleBasicInfo from '@/views/goods/components/permission/handleBasicInfo'
import handleGoodsAttr from '@/views/goods/components/permission/handleGoodsAttr'
export default {
  name: '',
  data () {
    return {
      activeName: 'first',
      goodsAttrBool: false, // 商品属性的显示状态
      goodsId: '',
      basicFormData: {
        goodsCategorys: [],
        goodsTypes: [],
        name: '',
        cardClassify: '',
        linkUrl: '',
        supplierName: '',
        startTime: '',
        endTime: '',
        isShow: '',
        uploadPics: [],
        tags: [],
        freightTemplateName: ''
      },
      attrFormData: {
        classifyOne: {
          checked: false,
          typeText: '材料'
        }
      },
      baseInfoObj: {},
      goodsAttrObj: {}
    }
  },
  components: {
    handleBasicInfo,
    handleGoodsAttr
  },
  created () {
    this.getData()
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    handleTabClick (tab, event) {
      console.log(tab.name, event)
      this.goodsAttrBool = tab.name === 'second' && this.basicFormData.goodsTypes.length > 0
    },
    handleNextstep (data) {
      console.log('基本信息--formdata:', data)
      this.activeName = 'second'
    },
    handleSubmitEvent (data) {
      console.log(data)
      if (!data) {
        console.log('没有传递参数')
        this.activeName = 'first'
      } else {
        console.log('有传递参数')
      }
    },
    //
    getData () {
      this.baseInfoObj = this.setInfoTestData()
    },
    // 获取基本属性
    getBasicInfo () {

    },
    // 获取商品属性
    getGoodsAttr () {

    },
    setInfoTestData () {
      let res = {
        code: 0,
        data: {
          optionsCategory: [
            {
              grade: 'one',
              typeId: 1,
              value: '1',
              label: '分类1',
              leaf: false
            }
          ],
          optionsType: [
            {
              grade: 'one',
              typeId: 1,
              value: '1',
              label: '类别1',
              leaf: false
            }
          ],
          supplierArr: [
            { value: 1, supplierId: '111', label: '供货商1' },
            { value: 2, supplierId: '112', label: '供货商2' },
            { value: 3, supplierId: '113', label: '供货商3' }
          ],
          freightTemplateArr: [
            { value: 1, templateId: '111', label: '运费模板1' },
            { value: 2, templateId: '112', label: '运费模板2' },
            { value: 3, templateId: '113', label: '运费模板3' }
          ]
        },
        error_msg: ''
      }
      return res.data
    },
    setAttrTextData () {
      let res = {
        code: 0,
        data: {

        },
        erroe_msg: ''
      }
      return res.data
    }
  }
}
</script>

<style lang='less' scoped>

</style>
