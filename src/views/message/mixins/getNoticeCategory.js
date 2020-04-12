/**
 * 获取公告分类列表 mixins
 */
export default {
  data () {
    return {
      noticeCategory: []
    }
  },
  created () {
    this.getNoticeCategoryData()
  },
  methods: {
    // 获取ajax数据
    getNoticeCategoryData () {
      this.noticeCategory = [
        { value: 1, label: '活动' }
      ]
    },
    // get
    getNoticeCategory (v) {
      const data = this.noticeCategory
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
