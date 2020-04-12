/**
 * Created by hanxueqiang on 19/12/09
 * 剩余省市选择组件
 */
<template>
  <div class='remainArea'>
    <el-dialog
      title="选择剩余省市"
      :visible.sync="visible"
      :before-close="onClose"
      @open="openDialog"
    >
      <div class="deliveryArea-t">
        <div class="switch">
          全选：
          <el-switch
            v-model="isChooseAll"
            @change="switchChange"
          ></el-switch>
        </div>
      </div>
      <el-cascader
        :options="cityData"
        :props="propsDeliv"
        v-model="deliveryArea"
        collapse-tags
        clearable
        filterable
        @change="cascaderChange"
        :key="key"
      ></el-cascader>
      <span slot="footer" class="dialog-footer">
        <el-button @click="onClose">取 消</el-button>
        <el-button type="primary" @click="onConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import areaData from '@/utils/areaData'

export default {
  props: {
    // v-model绑定 当前选择的省市数据
    value: {
      type: Array,
      default () {
        return []
      }
    },
    // 已选择过的省市数据
    cityDataDid: {
      type: Array,
      default () {
        return []
      }
    },
    // 模态框的显示隐藏
    visible: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      // 级联选择器配置项
      propsDeliv: {
        multiple: true,
        emitPath: false,
        value: 'id',
        label: 'value',
        children: 'child'
      },
      // 省市全数据
      cityData: areaData.getCity(),
      // 是否全选
      isChooseAll: 0,
      // 当前选择的省市
      deliveryArea: this.value,
      // 控制级联选择器重新加载
      key: 1
    }
  },

  computed: {},

  watch: {
    visible (val) {
      if (val) {
        this.deliveryArea = this.value
      }
    },
    cityDataDid: {
      handler (val) {
        this.handleCityDataDeliv()
        this.key++
      },
      deep: true
    }
  },

  created () {
    this.handleCityDataDeliv()
  },

  methods: {
    // 是否全选剩余区域
    switchChange (val) {
      if (val) {
        let res = []
        this.cityData.forEach(v => {
          v.child.forEach(item => {
            res.push(item.id)
          })
        })
        this.deliveryArea = res
      } else {
        this.deliveryArea = []
      }
    },
    cascaderChange () {
      this.isChooseAll = false
    },
    // 获取剩余配送区域
    handleCityDataDeliv () {
      // 去重，获取剩余的省市
      const res = []
      areaData.getCity().forEach(v => {
        const temp = { ...v }
        temp.child = []
        v.child.forEach(item => {
          if (this.cityDataDid.indexOf(item.id) === -1) {
            temp.child.push(item)
          }
        })
        if (temp.child.length > 0) {
          res.push(temp)
        }
      })
      this.cityData = res
    },
    // 取消
    onClose () {
      this.$emit('update:visible', false)
    },
    // 确定
    onConfirm () {
      this.$emit('input', this.deliveryArea)
      this.onClose()
    },
    // 解决内容被遮罩层遮挡的bug
    openDialog () {
      this.$nextTick(vm => {
        document.querySelector('.v-modal').style.zIndex = 1000
      })
    }
    // 区域去重
    /* getUniqueArea (listAll, listSome) {
      const res = []
      listAll.forEach(v => {
        const temp = { ...v }
        if (listSome.indexOf(v.id) === -1) {
          if (temp.child) {
            temp.child = this.getUniqueArea(v.child, listSome)
          }
          res.push(temp)
        }
      })
      return res
    }, */
  },

  components: {}
}
</script>

<style lang='less' scoped>
/deep/ .el-dialog {
  width: 500px;
}
/deep/ .el-dialog__footer {
  padding-top: 100px;
}

.deliveryArea-t {
  .switch {
    padding: 0 0 10px;
  }
}
.el-cascader {
  width: 100%;
}
</style>
