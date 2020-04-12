/**
 * 退款排行列表
 */
<template>
  <div class="tableBox">
    <el-table :data="tableData" ref="tableRef">
      <el-table-column prop="levelName" label="等级名称" min-width="80"></el-table-column>
      <el-table-column prop="fightNum" label="战斗值" min-width="80"></el-table-column>
      <el-table-column prop="attackNum" label="攻击力" min-width="80"></el-table-column>
      <el-table-column prop="critRate" label="暴击率" min-width="80"></el-table-column>
      <el-table-column prop="critDamage" label="暴击伤害" min-width="80"></el-table-column>
      <el-table-column prop="physicalUp" label="体力加成" min-width="100"></el-table-column>
      <el-table-column prop="physicalRecover" label="体力恢复率" min-width="100"></el-table-column>
      <el-table-column prop="redBagRate" label="红包比率" min-width="80"></el-table-column>
      <el-table-column prop="empiricalNum" label="经验值" min-width="100"></el-table-column>
      <el-table-column label="操作" min-width="120">
        <template #default="scope">
          <el-button size="mini" type="primary" @click="toEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="onDelete(scope.row)">删除</el-button>
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

export default {
  data () {
    return {
      tableData: [
        {
          id: 1,
          levelName: 34,
          fightNum: 233,
          attackNum: 0.29,
          critRate: 0.05,
          critDamage: 0.05,
          physicalUp: 158,
          physicalRecover: 0.29,
          redBagRate: 0.29,
          empiricalNum: 1197000
        },
        {
          id: 2,
          levelName: 34,
          fightNum: 233,
          attackNum: 0.29,
          critRate: 0.05,
          critDamage: 0.05,
          physicalUp: 158,
          physicalRecover: 0.29,
          redBagRate: 0.29,
          empiricalNum: 1197000
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
    currentChange (val) {},
    toEdit (item) {
      this.$router.push({
        name: 'EditLevel',
        query: {
          id: item.id
        }
      })
    },
    onDelete (item) {
      this.$confirm('是否确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {})
    }
  },

  components: { pagination }
}
</script>

<style lang='less' scoped>
</style>
