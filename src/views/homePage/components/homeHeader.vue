<template>
  <div class="header">
    <ul class="header-left">
      <li v-for="(item, idx) in inputArr" :key="idx">

        <span>{{ item.name }}:</span>
        <!-- 可清空的输入框 -->
        <input-item :inputType="item.type" :options="item.options" v-model="formData[item.key]"></input-item>
      </li>
      <li>
        <!-- 按钮父级设置了flex，必须要设置aling-item:center，按钮设置size属性才会生效 -->
        <el-button class="search" type="primary" icon="el-icon-search" size="mini" @click="searchClick">搜索</el-button>
      </li>
    </ul>
    <div class="header-right" v-if="btnObj">
      <el-button type="primary" size="mini" @click="openAddClick">{{ btnObj.text }}</el-button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import inputItem from './inputItem'
export default {
  name: '',
  data () {
    return {
      formData: {}
    }
  },
  props: {
    btnObj: Object,
    inputArr: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  components: { inputItem },
  created () {},
  mounted () {},
  computed: {

  },
  methods: {
    searchClick () {
      console.log(this.formData)
      this.$emit('search', this.formData)
    },
    openAddClick () {
      console.log('打开添加banner页')
      this.$router.push({ name: this.btnObj.name })
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  .header-left {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    align-content: flex-start;
    li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-right: 10px;
      margin-bottom: 8px;
      span {
        padding-right: 6px;
      }
      .search {
      }
    }
  }
  .header-right {
  }
}
</style>
