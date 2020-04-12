/**
 * 添加和编辑配送时间管理组件
 */
<template>
  <div class="handleDelivTime">
    <el-form
      label-position="right"
      label-width="120px"
      :model="formData"
      class="formBox"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item label="模板名称：" prop="name">
        <el-input v-model="formData.name" placeholder="可输入汉字，字母或数字"></el-input>
      </el-form-item>

      <el-form-item label="宝贝地址：" prop="areaFrom">
        <el-select v-model="formData.areaFrom" placeholder="请选择">
          <el-option
            v-for="item in provinceData"
            :key="item.id"
            :label="item.value"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="配送区域：" prop="deliveryArea">
        <ul class="areaAll">
          <li v-for="item in areaData" :key="item.id">
            <el-checkbox v-model="item.isOpen">
              {{getAreaById(item.id)}}
            </el-checkbox>
            <el-input-number
              v-model="item.time"
              controls-position="right"
              :min="0"
            ></el-input-number>天
          </li>
        </ul>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import areaData from '@/utils/areaData'

export default {
  props: {
    // add：添加  edit：编辑
    type: {
      type: String,
      default: 'add'
    },
    formData: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  data () {
    return {
      rules: {
        name: [
          { required: true, message: '请输入模板名称', trigger: 'blur' }
        ]
      },
      provinceData: areaData.getProvince(),
      areaData: []
    }
  },

  computed: {},

  created () {
    this.getAreaData()
  },

  methods: {
    onSubmit () {
      // 处理time字段的undefined
      this.formData.areaTime = this.areaData.map(v => {
        return {
          id: v.id,
          time: v.time || 0,
          isOpen: v.isOpen
        }
      })
      console.log(this.formData)
      this.$refs.formRef.validate(valid => {
        if (valid) {
          console.log('提交成功')
        }
      })
    },
    // 省由id转为文字
    getAreaById (id) {
      let res = ''
      this.provinceData.forEach(v => {
        if (v.id === id) {
          res = v.value
        }
      })
      return res
    },
    // 获取所有省的配送数据
    getAreaData () {
      const res = this.provinceData.map(v => {
        return {
          id: v.id,
          time: undefined,
          isOpen: false
        }
      })
      this.areaData = res
    }
  },

  components: {}
}
</script>

<style lang="less" scoped>
@width: 300px;

.handleDelivTime {

  .el-input {
    width: @width;
  }
  /deep/ .el-form-item__label {
    font-weight: 700;
  }
  .el-input-number {
    margin-right: 10px;
    width: 90px;
  }
  .el-form-item {
    color: #666;
  }
  .el-select {
    width: @width;
  }

  .areaAll {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border: 1px solid #ccc;
    padding: 10px;

    li {
      padding: 5px 50px;

      .el-checkbox {
        width: 155px;
      }
    }
  }
}
</style>
