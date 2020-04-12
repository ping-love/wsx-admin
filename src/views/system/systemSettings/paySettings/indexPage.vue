/** * 支付方式设置 */
<template>
  <div class="paySettings">
    <el-table :data="tableData">
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column prop="name" label="支付方式名称" width="180"> </el-table-column>
      <el-table-column prop="description" label="支付方式描述" width="180"> </el-table-column>
      <el-table-column prop="status" label="状态"> </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="toSettings(scope)">设置</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      :currentPage.sync="pagination.currentPage"
      :total="pagination.total"
      @currentChange="currentChange"
    ></pagination>
  </div>
</template>

<script>
import pagination from '@/components/pagination'

export default {
  props: {},

  data () {
    return {
      pagination: {
        currentPage: 1,
        total: 45
      },
      tableData: [
        {
          name: '微信支付',
          description: '微信支付',
          status: '正在使用中'
        },
        {
          name: '微信支付',
          description: '微信支付',
          status: '正在使用中'
        },
        {
          name: '微信支付',
          description: '微信支付',
          status: '正在使用中'
        },
        {
          name: '微信支付',
          description: '微信支付',
          status: '正在使用中'
        }
      ]
    }
  },

  computed: {},

  created () {},

  methods: {
    currentChange (val) {},
    toSettings (scope) {
      this.$router.push({
        name: 'PaySettingsEdit',
        query: {
          id: 1
        }
      })
    }
  },

  components: { pagination }
}
</script>

<style lang="less" scoped></style>
