/**
* 商品操作记录
*/
<template>
  <div class='goodsRecord'>

    <p class="goodsId">商品ID: {{ goodsId }}</p>

    <div class="headerBox">
      <el-form class="formBox" :model="formData" ref="formRef" :inline="true">

        <el-form-item label="操作者用户ID:">
          <el-input v-model="formData.operatorId" size="mini" placeholder="请输入用户ID"></el-input>
        </el-form-item>

        <el-form-item label="操作方式:">
          <el-select v-model="formData.operateMode" size="mini" placeholder="请选择操作方式">
            <el-option v-for="item in operateOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="操作时间:">
          <el-date-picker
            v-model="formData.times"
            type="datetimerange"
            size="mini"
            :picker-options="pickerOptions"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            align="right"
          ></el-date-picker>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" size="mini" icon="el-icon-search" @click="onSearch">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="listBox">

      <div class="tableBox">
        <el-table :data="tableData" tooltip-effect="dark" style="width: 100%">
          <el-table-column label="操作者ID" prop="operatorId"></el-table-column>
          <el-table-column label="操作者IP" prop="operatorIp"></el-table-column>
          <el-table-column label="操作时间" prop="startTime"></el-table-column>
          <el-table-column label="操作方式" prop="operateMode"></el-table-column>
          <el-table-column label="操作表" prop="operateTable"></el-table-column>
          <el-table-column label="操作者姓名" prop="operatorName"></el-table-column>
          <el-table-column label="内容">
            <template slot-scope="scope">
              <span>{{ scope.row.content ? scope.row.content : '暂无内容' }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <pagination
        :currentPage.sync="pagination.currentPage"
        :total="pagination.total"
        @currentChange="currentChange"
      ></pagination>

    </div>

  </div>
</template>

<script>
import Pagination from '@/components/pagination' // 分页
import { getOperateMode } from '@/filters/transformTwo'
import tools from '@/utils/tools'
export default {
  name: '',
  data () {
    return {
      operateOptions: getOperateMode(),
      pickerOptions: tools.pickerOptionsRange,
      goodsId: '',
      formData: {
        operatorId: '',
        operateMode: '',
        times: []
      },
      tableData: [],
      pagination: {
        currentPage: 1,
        total: 0
      }
    }
  },
  components: {
    Pagination
  },
  created () {
    console.log('router-query:', this.$route.query)
    this.goodsId = this.$route.query.goodsId
    this.getData(this.goodsId)
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    onSearch () {
      console.log(this.formData)
    },
    // 下一页
    currentChange (data) {
      console.log(data)
    },
    getData (id) {
      console.log('goodsId:', id)
      let res = {
        data: {
          total: 21,
          list: []
        }
      }
      res.data.list = [
        {
          operatorId: 1,
          operatorIp: '192.168.20.244',
          startTime: '2019-10-28 09:25:45',
          operateMode: '修改',
          operateTable: 'tp_item',
          operatorName: '小那',
          content: '下载'
        },
        {
          operatorId: 2,
          operatorIp: '192.168.20.244',
          startTime: '2019-10-28 09:25:45',
          operateMode: '修改',
          operateTable: 'tp_item',
          operatorName: '小那',
          content: ''
        },
        {
          operatorId: 3,
          operatorIp: '192.168.20.244',
          startTime: '2019-10-28 09:25:45',
          operateMode: '修改',
          operateTable: 'tp_item',
          operatorName: '小那',
          content: '下载'
        }
      ]
      setTimeout(() => {
        this.$message({
          message: '请求成功',
          type: 'success'
        })
        this.pagination.total = res.data.total
        this.tableData = res.data.list
      }, 500)
    }
  }
}
</script>

<style lang='less' scoped>
.goodsId {
  font-size: 16px;
  line-height: 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
.headerBox {
  padding-top: 10px;
  .formBox {
    display: flex;
    flex-wrap: wrap;
  }
}

.el-table {
  /deep/ .cell {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /deep/ th,
  td {
    text-align: center !important;
  }
}
</style>
