/**
 * 评论记录
 */
<template>
  <div class="tableBox">
    <searchForm :formOptions="formOptions"/>

    <el-table :data="tableData" ref="tableRef">
      <el-table-column prop="id" label="评论id" min-width="70"></el-table-column>
      <el-table-column prop="goodsId" label="商品id" min-width="70"></el-table-column>
      <el-table-column prop="goodsName" label="商品名" min-width="120"></el-table-column>
      <el-table-column prop="comment" label="评论内容" min-width="200"></el-table-column>
      <el-table-column label="用户晒图" min-width="150">
        <template #default="scope">
          <el-image
            v-for="item in scope.row.images"
            :key="item"
            :src="item"
            :preview-src-list="[item]">
          </el-image>
        </template>
      </el-table-column>
      <el-table-column prop="user" label="评论用户" min-width="100"></el-table-column>
      <el-table-column label="评论星级" min-width="140">
        <template #default="scope">
          <el-rate v-model="scope.row.star" disabled></el-rate>
        </template>
      </el-table-column>
      <el-table-column prop="time" label="评论时间" min-width="150"></el-table-column>
      <el-table-column label="操作" min-width="120">
        <template #default="scope">
          <el-button type="danger" size="mini" @click="onDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      :currentPage.sync="pagination.currentPage"
      :total="pagination.total"
      @currentChange="currentChange"
    />
  </div>
</template>

<script>
import pagination from '@/components/pagination'
import searchForm from '@/components/searchForm'
import { getCommentType } from '@/filters/transform'

export default {
  data () {
    return {
      formOptions: [
        {
          label: '时间',
          prop: 'timeRange',
          element: 'el-date-picker'
        },
        {
          label: '评论状态',
          prop: 'status',
          element: 'el-select',
          options: getCommentType()
        }
      ],
      tableData: [
        {
          id: 1,
          goodsId: 12,
          goodsName: '感冒灵',
          comment: '就是不灵',
          images: [
            'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
            'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
          ],
          user: '小王子',
          star: 2,
          time: '2012-12-12 12:34:34'
        },
        {
          id: 2,
          goodsId: 12,
          goodsName: '感冒灵',
          comment: '就是不灵',
          images: [
            'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
            'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
          ],
          user: '小王子',
          star: 5,
          time: '2012-12-12 12:34:34'
        }
      ],
      pagination: {
        currentPage: 1,
        total: 39
      }
    }
  },

  computed: {},

  created () {},

  methods: {
    currentChange (val) {

    },
    onDelete (item) {}
  },

  components: { pagination, searchForm }
}
</script>

<style lang='less' scoped>
.el-image {
  width: 50px;
  height: 50px;
  margin: 3px;
}
</style>
