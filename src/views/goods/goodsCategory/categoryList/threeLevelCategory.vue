/**
* 三级分类列表
*/
<template>
  <div class='categoryList'>
    <div class="headWrap">
      <el-button type="primary" size="mini" icon="el-icon-search" @click="onExport">导入</el-button>
    </div>

    <div class="listWrap">
      <categoryList
        :list="tableData"
        :total="total"
        @update="handleUpdate"
        @load="handleLoad"
      />
    </div>
  </div>
</template>

<script>
import categoryList from '@/views/goods/components/category/categoryList'
export default {
  name: '',
  data () {
    return {
      tableData: [],
      total: 0
    }
  },
  components: { categoryList },
  created () {
    this.getData()
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    handleLoad (tree, treeNode, resolve) {
      console.log(tree, treeNode, resolve)
      setTimeout(() => {
        if (tree.categoryLevel === '一级分类') {
          resolve(this.getSecondList(tree))
        } else {
          resolve(this.getThreeList(tree))
        }
      }, 1000)
    },
    getSecondList (params) {
      console.log('-params-', params)
      let res = {
        data: {
          list: [
            {
              id: '20000',
              categoryId: '11',
              categoryName: '办公文具',
              categoryLevel: '二级分类',
              order: '1',
              goodsNum: '199',
              nextLevelCategoryNum: '1',
              hasChildren: true
            }
          ],
          categoryParent: ''
        }
      }
      let list = res.data.list
      let midArr = []
      list.map(val => {
        let mid = {}
        mid = { ...val, categoryParent: params.categoryName }
        midArr.push(mid)
      })
      console.log('-second-', list, midArr)
      return midArr
    },
    getThreeList (data) {
      console.log('-params-', data)
      let list = [
        {
          id: '30000',
          categoryId: '111',
          categoryName: '纸笔',
          categoryLevel: '三级分类',
          order: '1',
          goodsNum: '199',
          nextLevelCategoryNum: null
        }
      ]
      return list
    },
    onExport () {
      this.$alert('即将导入商品', '提示', {
        confirmButtonText: '确认'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '导入成功'
        })
      }).catch(() => {})
    },
    handleUpdate (val) {
      console.log('-currentPage-', val)
      this.getData(val)
    },
    getData (currentPage) {
      console.log('-currentPage-', currentPage)
      currentPage = currentPage || 1
      let res = {
        data: {
          total: 21,
          list: [],
          categoryParent: null
        }
      }
      res.data.list = [
        {
          id: '10000',
          categoryId: '1',
          categoryName: '家居日用',
          categoryLevel: '一级分类',
          order: '1',
          goodsNum: '199',
          nextLevelCategoryNum: '1',
          hasChildren: true
        }
      ]
      setTimeout(() => {
        this.$message({
          message: '请求成功',
          type: 'success'
        })
        this.total = res.data.total
        this.tableData = res.data.list
      }, 500)
    }
  }
}
</script>

<style lang='less' scoped>
.headWrap {
  margin-bottom: 10px;
}
</style>
