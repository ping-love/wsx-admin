/**
 * 奖励发放明细
 */
<template>
  <div class=''>
    <!-- 搜索 -->
    <searchForm :formOptions="formOptions"/>

    <!-- 表格 -->
    <div class="tableBox">
      <el-table
        :data="tableData"
        ref="tableRef"
      >
        <el-table-column prop="name" label="姓名" min-width="100"></el-table-column>
        <el-table-column prop="type" label="奖励类型" min-width="100"></el-table-column>
        <el-table-column prop="prop" label="奖励道具" min-width="150"></el-table-column>
        <el-table-column prop="coin" label="奖励金币" min-width="90"></el-table-column>
        <el-table-column prop="diamond" label="奖励钻石" min-width="90"></el-table-column>
        <el-table-column prop="power" label="奖励体力" min-width="90"></el-table-column>
        <el-table-column prop="time" label="添加时间" min-width="150"></el-table-column>
      </el-table>

      <pagination
        :currentPage.sync="pagination.currentPage"
        :total="pagination.total"
        @currentChange="currentChange"
      />
    </div>
  </div>
</template>

<script>
import pagination from '@/components/pagination'
import searchForm from '@/components/searchForm'

export default {
  props: {},

  data () {
    return {
      formOptions: [
        {
          label: '姓名',
          prop: 'name',
          element: 'el-input'
        }
      ],
      tableData: [
        {
          id: 1,
          name: '韩某某',
          type: '体力',
          prop: '青龙偃月刀',
          coin: '3658',
          diamond: '12',
          power: '23',
          time: '2019-10-25 11:20:22'
        },
        {
          id: 2,
          name: '韩某某',
          type: '体力',
          prop: '青龙偃月刀',
          coin: '3658',
          diamond: '12',
          power: '23',
          time: '2019-10-25 11:20:22'
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
    onSubmit () {
      console.log(this.formData)
      this.$refs.formRef.validate(valid => {
        if (valid) {
          console.log('提交成功')
        }
      })
    },
    currentChange (val) {

    }
  },

  components: { pagination, searchForm }
}
</script>

<style lang='less' scoped>
</style>
