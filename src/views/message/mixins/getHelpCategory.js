/**
 * 获取使用帮助分类列表 mixins
 */
export default {
  data () {
    return {
      helpCategory: []
    }
  },
  created () {
    this.getHelpCategoryData()
  },
  methods: {
    // 获取ajax数据
    getHelpCategoryData () {
      this.helpCategory = [
        { value: 1, label: '平台简介' },
        { value: 2, label: '账号安全' },
        { value: 3, label: '商城指南' }
      ]
    },
    // get
    getHelpCategory (v) {
      const data = this.helpCategory
      if (v === undefined) {
        return data
      } else {
        for (let i = 0; i < data.length; i++) {
          if (data[i].value === v) {
            return data[i].label
          }
        }
      }
    }
  }
}
