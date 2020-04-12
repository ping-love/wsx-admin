/**
* 首页管理公共header
*/
<template>
  <div class='headerComp'>
    <SearchForm
      :formOptions="formOptions"
      :btnItems="btnItems"
      @onSearch="handleSearch"
    />
    <el-button type="primary" size="mini" @click="onAdd">{{ addBtnObj.text }}</el-button>
  </div>
</template>

<script>
import SearchForm from '@/components/searchForm'
export default {
  name: '',
  data () {
    return {}
  },
  components: { SearchForm },
  props: {
    addBtnObj: {
      type: Object,
      required: true
    },
    formOptions: {
      type: Array,
      default () {
        return []
      }
    },
    btnItems: {
      type: String,
      default () {
        return 'search'
      }
    }
  },
  created () {

  },
  mounted () {

  },
  computed: {

  },
  methods: {
    handleSearch (data) {
      this.$emit('onSearch', data)
    },
    onAdd () {
      this.$router.push({ name: this.addBtnObj.name })
    }
  }
}
</script>

<style lang='less' scoped>

</style>
