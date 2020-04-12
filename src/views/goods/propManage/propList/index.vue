/**
* 道具列表
*/
<template>
  <div class='propList'>
      <GoodsHeaderComp :formOptions="formOptions" @onSearch="handleSearch" />
      <div class="operateBtnBox">
        <p>导入excel表:</p>
        <el-button type="primary" size="mini" @click="onExport">导入道具</el-button>
        <el-button type="primary" size="mini" @click="onDownload">下载道具模板</el-button>
      </div>
      <div class="listWrap">
        <div class="tableBox">
          <el-table :data="tableData" tooltip-effect="dark" style="width: 100%">
            <el-table-column prop="propId" label="ID" min-width="70"></el-table-column>
            <el-table-column label="图像" min-width="80" >
              <template slot-scope="scope">
                <el-image
                  :src="scope.row.picUrl"
                  fit="cover"
                  :preview-src-list="scope.row.previewImgs"
                ></el-image>
              </template>
            </el-table-column>
            <el-table-column prop="propName" label="名称" ></el-table-column>
            <el-table-column prop="attack" label="攻击力" min-width="70"></el-table-column>
            <el-table-column prop="crit" label="暴击率" min-width="70"></el-table-column>
            <el-table-column prop="criticalDamage" label="暴击伤害" min-width="80"></el-table-column>
            <el-table-column prop="physicalPowerAdd" label="体力加成" min-width="80"></el-table-column>
            <el-table-column prop="physicalPowerRecoveryRate" label="体力恢复率" min-width="90"></el-table-column>
            <el-table-column prop="fightingCapacity" label="战力值" min-width="70"></el-table-column>
            <el-table-column prop="propType" label="道具类型" min-width="80"></el-table-column>
            <el-table-column prop="sellPrice" label="售价" min-width="70"></el-table-column>
            <el-table-column prop="isShow" label="显示" min-width="70"></el-table-column>
            <el-table-column label="操作" min-width="140" fixed="right" >
              <template slot-scope="scope">
                <el-button type="primary" size="mini" @click="onEdit(scope.row)">编辑</el-button>
                <el-button type="danger" size="mini" @click="onDel(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <Pagination :currentPage.sync="pagination.currentPage" :total="pagination.total" @currentChange="currentChange" />
      </div>
  </div>
</template>

<script>
import GoodsHeaderComp from '@/views/goods/components/goodsHeaderComp'
import Pagination from '@/components/pagination'
import { getEquipType } from '@/filters/transformTwo'
export default {
  name: '',
  data () {
    return {
      pagination: {
        currentPage: 1,
        total: 0
      },
      tableData: [],
      formOptions: [
        {
          label: '装备类型',
          prop: 'equipType',
          element: 'el-select',
          options: getEquipType(),
          initValue: '',
          placeholder: '请选择',
          rules: [{ required: true, message: '请选择装备类型', trigger: 'change' }]
        },
        {
          label: '装备名称',
          prop: 'equipName',
          element: 'el-input',
          initValue: '',
          placeholder: '请选择装备名称',
          rules: [{ required: true, message: '请输入装备名称', trigger: 'blur' }]
        }
      ]
    }
  },
  components: { GoodsHeaderComp, Pagination },
  created () {
    this.getData()
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    handleSearch (data) {
      this.getSearchData(data)
    },
    onExport () {
      this.$message({
        message: '即将导入表格',
        type: 'info',
        showClose: true
      })
    },
    onDownload () {
      this.$message({
        message: '即将下载模板',
        type: 'info',
        showClose: true
      })
    },
    onEdit (row) {
      console.log(row)
      const { propId } = row
      this.$router.push({ name: 'AddProp', query: { propId } })
    },
    onDel (row) {

    },
    currentChange (data) {
      this.getData(data)
    },
    getSearchData (data) {
      console.log('-search-', data)
    },
    getData (currentPage) {
      currentPage = currentPage || 1
      console.log('-currentPage-', currentPage)
      let res = {
        code: 0,
        data: {
          list: [],
          total: 21
        }
      }
      // rate 比例
      // recovery 恢复
      res.data.list = [
        {
          propId: '16800',
          picUrl: 'https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png',
          propName: '小李飞刀',
          attack: '106',
          crit: '36%',
          criticalDamage: '100',
          physicalPowerAdd: '20%',
          physicalPowerRecoveryRate: '30%',
          fightingCapacity: '2000',
          propType: '武器',
          sellPrice: '168',
          isShow: '不显示',
          previewImgs: ['https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png']
        }
      ]
      this.pagination.total = res.data.total
      this.tableData = res.data.list
    }
  }
}
</script>

<style lang='less' scoped>
.operateBtnBox {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  p {
    padding-right: 10px;
  }
}
.el-table {
  /deep/ .cell {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.el-button+.el-button {
    margin-left: 5px;
}
.el-image {
  width: 60px;
  height: 60px;
}
</style>
