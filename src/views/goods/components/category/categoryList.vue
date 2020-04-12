/**
* 分类列表list
*/
<template>
  <div class='categoryList'>
    <div class="tableBox">
      <el-table
        :data="list"
        tooltip-effect="dark"
        style="width: 100%"
        row-key="id"
        lazy
        :load="load"
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column prop="categoryId" label="分类ID" min-width="80"></el-table-column>
        <el-table-column prop="categoryName" label="分类名称" min-width="120"></el-table-column>
        <el-table-column prop="categoryLevel" label="分类级别" min-width="120"></el-table-column>
        <el-table-column prop="order" label="顺序" min-width="120"></el-table-column>
        <el-table-column prop="goodsNum" label="商品数量" min-width="120"></el-table-column>
        <el-table-column prop="nextLevelCategoryNum" label="下级分类数量" :formatter="categoryFormatter" min-width="120"></el-table-column>
        <el-table-column label="操作" fixed="right" min-width="200">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="onAddCategory(scope.row)" v-if="scope.row.nextLevelCategoryNum">添加分类</el-button>

            <!-- <el-button type="primary" size="mini" @click="onLook(scope.row)" v-if="categoryLevel < 3">查看下级分类</el-button> -->
            <!-- <el-button type="primary" size="mini" @click="onManageGoods(scope.row)" v-else>管理商品</el-button> -->
            <el-button type="primary" size="mini" @click="onEdit(scope.row)">编辑</el-button>
            <el-button type="danger" size="mini" @click="onDel(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Pagination :currentPage.sync="currentPage" :total="total" @currentChange="currentChange" />
  </div>
</template>

<script>
import Pagination from '@/components/pagination'
export default {
  name: '',
  data () {
    return {
      currentPage: 1,
      pagination: {
        currentPage: 1,
        total: 31
      }
    }
  },
  props: {
    categoryLevel: {
      type: String,
      default: '1'
    },
    list: {
      type: Array,
      default () {
        return []
      }
    },
    total: {
      type: Number,
      required: true
    }
  },
  components: { Pagination },
  created () {

  },
  mounted () {

  },
  // watch: {
  //   pagination: {
  //     handler (newVal, oldVal) {
  //       console.log(newVal, oldVal)
  //     },
  //     deep: true,
  //     immediate: true
  //   }
  // },
  computed: {

  },
  methods: {
    load (tree, treeNode, resolve) {
      this.$emit('load', tree, treeNode, resolve)
    },
    categoryFormatter (row, column) {
      return row.nextLevelCategoryNum ? row.nextLevelCategoryNum : '已是最低级'
    },
    onAddCategory (row) {
      console.log(row)
      const { categoryParent } = row
      this.$router.push({ name: 'AddCategory', query: { categoryParent } })
    },
    // onManageGoods (row) {
    //   const { categoryArr } = row
    //   this.$router.push({ name: 'GoodsTotalIndex', query: { categoryArr } })
    // },

    onLook (row) {
      const { categoryId } = row
      let name = this.categoryLevel === '1' ? 'SecondLevelCategory' : 'ThreeLevelCategory'
      this.$router.push({ name, query: { categoryId } })
    },
    onEdit (row) {
      console.log(row)
      const { id } = row
      this.$router.push({ name: 'EditCategory', query: { id } })
    },
    onDel (row) {
      console.log(row)
      const { id } = row
      console.log('-id-', id)
      this.$confirm('是否确认删除?', '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$emit('update', this.currentPage)
      }).catch(() => {})
    },
    currentChange (val) {
      this.$emit('update', val)
    }
  }
}
</script>

<style lang='less' scoped>
.el-table {
  /deep/ .cell {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
// .el-table {
//   /deep/ .el-table__row:last-child {
//     td:last-child {
//       .cell {
//         justify-content: flex-end;
//       }
//     }
//   }
// }
</style>
