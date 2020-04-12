/**
 * 带全选的多选框组件
 */
<template>
  <div class='checkboxGroup'>
    <el-checkbox
      :indeterminate="isIndeterminate"
      v-model="checkAll"
      @change="handleCheckAllChange"
    >{{title}}</el-checkbox>
    <el-checkbox-group v-model="checkedMenus" @change="handleCheckedMenusChange">
      <el-checkbox v-for="item in data" :label="item" :key="item">{{item}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>

export default {
  props: {
    // 已选数据 通过v-model传递
    value: {
      default () {
        return []
      }
    },
    // 权限菜单基础数据
    data: {
      type: Array,
      default () {
        return []
      }
    },
    title: {
      type: String,
      default: '全选'
    }
  },

  data () {
    return {
      checkAll: false,
      isIndeterminate: true
    }
  },

  computed: {
    checkedMenus: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },

  created () {},

  methods: {
    handleCheckAllChange (val) {
      this.checkedMenus = val ? this.data : []
      this.isIndeterminate = false
    },
    handleCheckedMenusChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.data.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.data.length
    }
  },

  components: {}
}
</script>

<style lang='less' scoped>
.checkboxGroup {
  border: 1px solid #ddd;
  margin-bottom: 20px;
  background-color: #fff;
  padding: 0 10px;
  max-width: 950px;

  & > label {
    font-weight: 700;
  }
  .el-checkbox-group {
    padding-left: 20px;

    & > label {
      width: 150px;
    }
  }
}
</style>
