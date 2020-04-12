/**
 * 配送方式列表
 */
<template>
  <div class=''>
    <el-form
      label-position="right"
      label-width="180px"
      :model="formData"
      class="formBox"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item label="是否启用全国统一邮费：" prop="globalCost">
        <el-checkbox v-model="formData.isGlobal">启用统一费用</el-checkbox>
        <el-tooltip
          content="当启用统一运费设置时，所有商品配送费用跟重量无关，按设置的费用计算。"
          placement="top"
        >
          <i class="el-icon-question"></i>
        </el-tooltip>
        <div class="setCoin">
          配送费用为<el-input v-model="formData.globalCost"></el-input>元
          <el-button type="primary" class="saveCoin">保存</el-button>
        </div>
      </el-form-item>

      <el-form-item label="选择默认物流：" prop="deliveryComp" v-if="!formData.isGlobal">
        <el-select v-model="formData.deliveryComp" placeholder="选择物流公司">
          <el-option
            v-for="item in compData"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-tooltip
          content="仅当关闭统一运费设置时，该选项有效。选择某物流公司后，前台计算将以该物流公司的运费计算模板计算运费。"
          placement="top"
        >
          <i class="el-icon-question"></i>
        </el-tooltip>
        <el-button type="primary" class="saveComp">保存</el-button>
      </el-form-item>
    </el-form>

    <div class="tableBox">
      <div class="addBtn">
        <el-button type="primary" @click="toAdd">添加配送方式</el-button>
      </div>
      <el-table
        :data="tableData"
      >
        <el-table-column prop="num" label="序号" width="100"></el-table-column>
        <el-table-column prop="name" label="物流名称" width="200"></el-table-column>
        <el-table-column prop="description" label="配送方式描述" min-width="250"></el-table-column>
        <el-table-column prop="coin" label="配送费用" width="150"></el-table-column>
        <el-table-column prop="status" label="状态" width="150"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button size="mini" :type="scope.row.status ? 'danger' : 'success'">{{scope.row.status ? '关闭' : '开启'}}</el-button>
            <el-button size="mini" type="primary" @click="toEdit(scope)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

export default {
  props: {},

  data () {
    return {
      formData: {
        isGlobal: 0,
        globalCost: '',
        deliveryComp: ''
      },
      compData: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      rules: {},
      tableData: [
        {
          num: 1,
          name: '京东',
          description: '上海市普陀区金沙江路 1518 弄',
          coin: '12',
          status: 1
        }, {
          num: 2,
          name: '京东',
          description: '上海市普陀区金沙江路 1518 弄',
          coin: '12',
          status: 1
        }, {
          num: 3,
          name: '京东',
          description: '上海市普陀区金沙江路 1518 弄',
          coin: '12',
          status: 0
        }, {
          num: 4,
          name: '京东',
          description: '上海市普陀区金沙江路 1518 弄',
          coin: '12',
          status: 1
        }
      ]
    }
  },

  computed: {},

  created () {},

  methods: {
    onSubmit () {
      this.$refs.formRef.validate(valid => {
        if (valid) {
          console.log('提交成功')
          console.log(this.formData)
        }
      })
    },
    onReset () {
      this.$refs.formRef.resetFields()
    },
    toAdd () {
      this.$router.push({
        name: 'AddDelivType'
      })
    },
    toEdit (scope) {
      this.$router.push({
        name: 'EditDelivType',
        id: scope.id
      })
    }
  },

  components: { }
}
</script>

<style lang='less' scoped>

.el-form {
  margin-bottom: 30px;

  i {
    font-size: 24px;
    vertical-align: middle;
    color: #999;
  }
  .el-input {
    width: 70px;
    margin: 0 5px;
  }
  /deep/ .el-form-item__label {
    font-weight: 700;
  }
  .el-select {
    width: 300px;
  }
}
.setCoin {
  display: inline-block;
  color: #666;
  padding: 0 0 10px 20px;
}
.saveCoin {
  margin-left: 50px;
}
.saveComp {
  margin-left: 45px;
}

.tableBox {
  background-color: #fff;

  .addBtn {
    padding: 10px;
    border-bottom: 1px solid #eee;
  }
}
</style>
