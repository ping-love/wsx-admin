/**
 * 通知列表
 */
<template>
  <div class=''>
    <div class="btns">
      <el-button type="primary" @click="toSendNotification">发送通知</el-button>
      <el-button @click="sendJiguang">发送极光消息</el-button>
    </div>
    <el-table :data="tableData">
      <el-table-column label="标题" prop="title" min-width="500"></el-table-column>
      <el-table-column label="时间" prop="date" min-width="200"></el-table-column>
    </el-table>

    <pagination
      :currentPage.sync="pagination.currentPage"
      :total="pagination.total"
      @currentChange="currentChange"
    />

    <sendJiguang :visible.sync="isShow"/>
  </div>
</template>

<script>
import pagination from '@/components/pagination'
import sendJiguang from '@/components/modal/sendJiguang'

export default {
  props: {},

  data () {
    return {
      tableData: [
        { id: 1, title: '消息1', date: '2019-12-12' },
        { id: 2, title: '消息2', date: '2019-12-12' }
      ],
      pagination: {
        currentPage: 1,
        total: 39
      },
      isShow: false
    }
  },

  computed: {},

  created () {},

  methods: {
    toSendNotification () {
      this.$router.push({
        name: 'SendNotification'
      })
    },
    sendJiguang () {
      this.isShow = true
    },
    currentChange (val) {

    }
  },

  components: { pagination, sendJiguang }
}
</script>

<style lang='less' scoped>
.btns {
  padding-bottom: 10px;
}
</style>
