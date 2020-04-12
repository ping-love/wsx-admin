<template>
  <!-- 导航列表 -->
  <div class='navList'>

    <HeaderComp
      :formOptions="formOptions"
      :addBtnObj="addBtnObj"
      @onSearch="handleSearch"
    />

    <div class="listBox">
      <div class="tableBox">
        <p
          style="color: red;line-height: 36px;font-weight: 600"
        >导航列表</p>
        <el-table
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
        >
          <el-table-column
           prop="id"
           label="ID"
           :min-width="minWidths.idWid"
          ></el-table-column>
          <el-table-column
           prop="title"
           label="导航名"
           :min-width="minWidths.titleWid"
          ></el-table-column>
          <el-table-column
           label="图标"
           :min-width="minWidths.imgWid"
           >
            <template slot-scope="scope">
              <el-image
                :src="scope.row.imgUrl"
                fit="cover"
                :preview-src-list="previewImgs"
              ></el-image>
            </template>
          </el-table-column>
          <el-table-column
           prop="linkType"
           label="链接类型"
           :min-width="minWidths.linkTypeWid"
          ></el-table-column>
          <el-table-column
           prop="linkUrl"
           label="链接至"
           :min-width="minWidths.linkUrlWid"
          ></el-table-column>
          <el-table-column
           prop="sortNum"
           label="排序号"
           :min-width="minWidths.sortNumWid"
          ></el-table-column>
          <el-table-column
           prop="isShow"
           label="是否显示在首页"
           :min-width="minWidths.isShowWid"
          ></el-table-column>
          <el-table-column
           prop="startTime"
           label="开始时间"
           :min-width="minWidths.startTimeWid"
          ></el-table-column>
          <el-table-column
           prop="endTime"
           label="结束时间"
           :min-width="minWidths.endTimeWid"
          ></el-table-column>
          <el-table-column
           prop="creator"
           label="创建人"
           :min-width="minWidths.creatorWid"
          ></el-table-column>
          <!-- 按钮操作 -->
          <el-table-column
            label="操作"
            fixed="right"
            :min-width="minWidths.operateWid"
          >
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button>
              <el-button
               size="mini"
               type="danger"
               @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button>
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
import HeaderComp from '@/views/homePage/components/headerComp'
import Pagination from '@/components/pagination'

import { getIsShow } from '@/filters/transform'
import { getHomeLinkType } from '@/filters/transformTwo'

export default {
  name: '',
  data () {
    return {
      minWidths: {
        idWid: '60',
        titleWid: '100',
        imgWid: '100',
        linkTypeWid: '100',
        linkUrlWid: '300',
        sortNumWid: '80',
        isShowWid: '120',
        startTimeWid: '150',
        endTimeWid: '150',
        creatorWid: '100',
        operateWid: '140'
      },
      tableData: [],
      previewImgs: [],
      pagination: {
        currentPage: 1,
        total: 0
      },
      addBtnObj: {
        text: '添加导航',
        name: 'AddNav'
      },
      formOptions: [
        {
          label: '导航名',
          prop: 'navName',
          element: 'el-input',
          initValue: '',
          placeholder: '请输入导航名'
          // rules: [{ required: true, message: '请输入标题', trigger: 'blur' }]
        },
        {
          label: '是否显示',
          prop: 'isShow',
          element: 'el-select',
          options: getIsShow(),
          initValue: '',
          placeholder: '全部'
          // rules: [{ required: true, message: '请选择显示状态', trigger: 'change' }]
        },
        {
          label: '链接类型',
          prop: 'linkType',
          element: 'el-select',
          options: getHomeLinkType(),
          initValue: '',
          placeholder: '全部'
          // rules: [{ required: true, message: '请选择链接类型', trigger: 'change' }]
        },
        {
          label: '显示时间',
          prop: 'times',
          element: 'el-date-picker',
          initValue: '',
          placeholder: ''
          // rules: [{ required: true, message: '请选择显示的时间', trigger: 'change' }]
        }
      ]
    }
  },
  components: { HeaderComp, Pagination },
  created () {
    this.getData()
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    // 搜索
    handleSearch (data) {
      console.log('search参数对象:', data)
      // TODO ==> 搜索请求, 参数为data
    },
    // 下一页
    currentChange (data) {
      console.log(data)
    },
    // 编辑处理
    handleEdit (index, row) {
      console.log('编辑:', index, row)
      setTimeout(() => {
        this.$router.push({ name: 'EditNav' })
      }, 1000)
    },
    // 删除处理
    handleDelete (index, row) {
      console.log('删除:', index, row)
      this.$confirm('是否确认删除导航?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          setTimeout(() => {
            this.$message({
              type: 'success',
              message: '删除成功'
            })
            this.getData()
            // this.tableData.splice(idx, 1) // TODO 不适用分页删除
          }, 1000)
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    // 数据请求
    getData () {
      let res = {
        data: {
          total: 21,
          list: []
        }
      }
      res.data.list = [
        {
          id: 1,
          title: '家具日用',
          imgUrl: 'https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png',
          linkType: '承接页',
          linkUrl: 'http://test.51k1k.com/activity_page/template-one/html/index.html?page_id=1571993305',
          sortNum: 9,
          isShow: '显示',
          startTime: '2019-10-28 09:25:45',
          endTime: '2019-10-28 16:25:45',
          creator: '小那'
        },
        {
          id: 2,
          title: '家具日用',
          imgUrl: 'https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png',
          linkType: '承接页',
          linkUrl: 'http://test.51k1k.com/activity_page/template-one/html/index.html?page_id=1571993305',
          sortNum: 9,
          isShow: '显示',
          startTime: '2019-10-28 09:25:45',
          endTime: '2019-10-28 16:25:45',
          creator: '小那'
        },
        {
          id: 3,
          title: '家具日用',
          imgUrl: 'https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png',
          linkType: '承接页',
          linkUrl: 'http://test.51k1k.com/activity_page/template-one/html/index.html?page_id=1571993305',
          sortNum: 9,
          isShow: '显示',
          startTime: '2019-10-28 09:25:45',
          endTime: '2019-10-28 16:25:45',
          creator: '小那'
        }
      ]
      setTimeout(() => {
        this.$message({
          message: '请求成功',
          type: 'success'
        })
        this.pagination.total = res.data.total
        this.previewImgs = ['https://img.51k1k.com/Uploads/image/default/2019-10/20191025142204_76816_560_184.png']
        this.tableData = res.data.list
      }, 500)
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
  /deep/ th,
  td {
    text-align: center !important;
  }
}
.el-image {
  width: 60px;
  height: 60px;
  border-radius: 30px;
}
</style>
