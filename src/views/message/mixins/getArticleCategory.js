/**
 * 获取文章分类列表 mixins
 */
export default {
  data () {
    return {
      articleCategory: []
    }
  },
  created () {
    this.getArticleCategoryData()
  },
  methods: {
    // 获取ajax数据
    getArticleCategoryData () {
      setTimeout(() => {
        this.articleCategory = [
          { value: 1, label: '关于我们' },
          { value: 2, label: '会员等级说明' },
          { value: 3, label: '注册协议' }
        ]
      }, 3000)
    },
    // get
    getArticleCategory (v) {
      const data = this.articleCategory
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
