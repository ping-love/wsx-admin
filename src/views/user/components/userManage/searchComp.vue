/**
 * 用户列表搜索组件
 */
<template>
  <div>
    <searchForm :formOptions="formOptions"/>
  </div>
</template>

<script>
import searchForm from '@/components/searchForm'

export default {
  props: {
    // 类型 正常用户列表:normal 禁用用户列表:disabled
    type: {
      type: String,
      default: 'normal'
    }
  },

  data () {
    return {
      formOptions: [
        {
          label: 'UID',
          prop: 'uid',
          element: 'el-input'
        },
        {
          label: '实名姓名',
          prop: 'realname',
          element: 'el-input'
        },
        {
          label: '昵称',
          prop: 'nickname',
          element: 'el-input'
        },
        {
          label: '手机号',
          prop: 'tel',
          element: 'el-input'
        },
        {
          label: '用户状态',
          prop: 'status',
          element: 'el-select',
          options: [
            { label: '正常', value: 1 },
            { label: '禁用', value: 0 }
          ]
        },
        {
          label: '注册时间',
          prop: 'timeRange',
          element: 'el-date-picker'
        }
      ]
    }
  },

  computed: {},

  created () {},

  methods: {
    onSubmit () {
      console.log(this.formData)
      this.$refs.formRef.validate(valid => {
        if (valid) {
          console.log('提交成功')
        }
      })
    }
  },

  components: { searchForm }
}
</script>

<style lang='less' scoped>
</style>
