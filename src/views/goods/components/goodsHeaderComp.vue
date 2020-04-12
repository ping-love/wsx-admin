/**
* 公共header
*/
<template>
  <div class='headerComp'>
    <searchForm
      :formOptions="formOptions"
      :btnItems="btnItems"
      @onSearch="handleSearch"
    />
    <el-button type="primary" size="mini" @click="onAdd" v-if="addBtnObj">{{ addBtnObj.text }}</el-button>
  </div>
</template>

<script>
import searchForm from '@/components/searchForm'
export default {
  name: '',
  data () {
    return {}
  },
  components: { searchForm },
  props: {
    addBtnObj: {
      type: Object,
      default () {
        return null
      }
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
