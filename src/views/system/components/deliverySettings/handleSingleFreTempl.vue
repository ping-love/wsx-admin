/** * 添加或编辑单品运费模板 */
<template>
  <div class="handleFreightTempl">
    <el-form
      label-position="right"
      label-width="120px"
      :model="formData"
      class="formBox"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item label="运费模板名称：" prop="name">
        <el-input v-model="formData.name" placeholder="可输入汉字，字母或数字"></el-input>
      </el-form-item>

      <el-form-item label="宝贝地址：" prop="goodsArea">
        <el-cascader
          :options="areaData"
          :props="propsGoods"
          v-model="formData.goodsArea"
          collapse-tags
          clearable
          filterable
        ></el-cascader>
      </el-form-item>

      <el-form-item label="是否包邮" prop="isFreightFree">
        <el-radio v-model="formData.isFreightFree" :label="0">买家承担运费</el-radio>
        <el-radio v-model="formData.isFreightFree" :label="1">卖家包邮</el-radio>
      </el-form-item>

      <el-form-item label="计费规则" prop="calcType">
        <el-radio v-model="formData.calcType" :label="1">按件</el-radio>
        <el-radio v-model="formData.calcType" :label="2">按重量</el-radio>
        <el-radio v-model="formData.calcType" :label="3">按体积</el-radio>
      </el-form-item>

      <el-form-item label="配送方式：" prop="deliveryType">
        <el-radio v-model="formData.deliveryType" :label="1">快递</el-radio>
        <el-radio v-model="formData.deliveryType" :label="2">EMS</el-radio>
        <el-radio v-model="formData.deliveryType" :label="3">平邮</el-radio>
      </el-form-item>

      <el-form-item label="运费设置：" prop="deliveryArea">
        <!-- 默认运费和地区设置 -->
        <div class="freightWrap">
          <div class="defaultFreight">
              <span class="defaultTitle">默认运费：</span>
              <el-input-number
                v-model="formData.deliveryDefault.firNum"
                controls-position="right"
                :min="0"
              ></el-input-number>件内
              <el-input-number
                v-model="formData.deliveryDefault.firFreight"
                controls-position="right"
                :min="0"
              ></el-input-number>元
              <span class="defaultMore">每增加</span>
              <el-input-number
                v-model="formData.deliveryDefault.secNum"
                controls-position="right"
                :min="0"
              ></el-input-number>件，运费增加
              <el-input-number
                v-model="formData.deliveryDefault.secFreight"
                controls-position="right"
                :min="0"
              ></el-input-number>元
          </div>

          <!-- 地区运费设置 -->
          <ul class="deliveryArr">
            <li>
              <div class="area">运送到</div>
              <div class="firNum">首件（件）</div>
              <div class="firFre">首费（元）</div>
              <div class="secNum">续件（个）</div>
              <div class="secFre">续费（元）</div>
              <div class="btn">操作</div>
            </li>
            <!-- 指定地区运费遍历 -->
            <li v-for="item in formData.deliveryArr" :key="item.id">
              <div class="area">
                <div>{{transArea(item) || '未设置地区'}}</div>
                <div>
                  <el-button type="primary" size="mini" @click="onEditAreaFreight(item)">编辑</el-button>
                  <remainArea v-model="item.area" :cityDataDid="cityDataDidFreight" :visible.sync="isVisible" v-show="item.id === visibleIdFreight"/>
                </div>
              </div>
              <div class="firNum">
                <el-input-number
                  v-model="item.firNum"
                  controls-position="right"
                  :min="0"
                  size="mini"
                ></el-input-number>
              </div>
              <div class="firFre">
                <el-input-number
                  v-model="item.firFreight"
                  controls-position="right"
                  :min="0"
                  size="mini"
                ></el-input-number>
              </div>
              <div class="secNum">
                <el-input-number
                  v-model="item.secNum"
                  controls-position="right"
                  :min="0"
                  size="mini"
                ></el-input-number>
              </div>
              <div class="secFre">
                <el-input-number
                  v-model="item.secFreight"
                  controls-position="right"
                  :min="0"
                  size="mini"
                ></el-input-number>
              </div>
              <div class="btn">
                <el-button type="danger" size="mini" @click="onDeleteDelivArea(item)">删除</el-button>
              </div>
            </li>
            <!-- 添加项 -->
            <li><el-button @click="addNewFreight">为指定地区设置运费</el-button></li>
          </ul>

          <div class="tips">备注：运费按照订单金额－优惠－返现之后的订单金额收取</div>
        </div>

        <!-- 指定地区包邮 -->
        <div class="freeWrap">
          <div>
            <el-switch v-model="formData.isConditionalFree"></el-switch> 指定条件包邮（可选）
          </div>

          <!-- 指定地区包邮配置 -->
          <ul class="conditionalArr">
            <li>
              <div class="area">选择地区</div>
              <div class="condition">设置包邮条件</div>
              <div class="btn">操作</div>
            </li>
            <!-- 指定地区包邮遍历 -->
            <li v-for="item in formData.conditionalArr" :key="item.id">
              <div class="area">
                <div>{{transArea(item) || '未设置地区'}}</div>
                <div>
                  <el-button type="primary" size="mini" @click="onEditAreaFree(item)">编辑</el-button>
                  <remainArea v-model="item.area" :cityDataDid="cityDataDidFree" :visible.sync="isVisible" v-show="item.id === visibleIdFree"/>
                </div>
              </div>
              <div class="condition">
                <el-select v-model="item.type" placeholder="请选择">
                  <el-option
                    v-for="ite in selectOptions"
                    :key="ite.value"
                    :label="ite.label"
                    :value="ite.value">
                  </el-option>
                </el-select>
                <div>
                  <!-- 按件 -->
                  <template v-if="item.type === 1">
                    满
                    <el-input-number
                      v-model="item.num"
                      controls-position="right"
                      :min="0"
                      size="mini"
                    ></el-input-number>
                    {{selectTxt}}包邮
                  </template>
                  <!-- 按重量 -->
                  <template v-else-if="item.type === 2">
                    满
                    <el-input-number
                      v-model="item.freight"
                      controls-position="right"
                      :min="0"
                      size="mini"
                    ></el-input-number>
                    {{'元'}}包邮
                  </template>
                  <!-- 按体积 -->
                  <template v-else>
                    满
                    <el-input-number
                      v-model="item.num"
                      controls-position="right"
                      :min="0"
                      size="mini"
                    ></el-input-number>
                    {{selectTxt}}<span class="split"></span>
                    <el-input-number
                      v-model="item.freight"
                      controls-position="right"
                      :min="0"
                      size="mini"
                    ></el-input-number>
                    元包邮
                  </template>
                </div>
              </div>
              <div class="btn">
                <el-button type="danger" size="mini" @click="onDeleteCondArea(item)">删除</el-button>
              </div>
            </li>
            <!-- 添加项 -->
            <li><el-button @click="addNewFree">为指定地区设置包邮条件</el-button></li>
          </ul>
        </div>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import areaData from '@/utils/areaData'
import remainArea from '@/views/system/components/deliverySettings/remainArea'
import tools from '@/utils/tools'

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
          { required: true, message: '请输入运费模板名称', trigger: 'blur' }
        ]
      },
      propsGoods: {
        value: 'id',
        label: 'value',
        children: 'child'
      },
      areaData: areaData.getArea(),
      // 运费栏的模态框编辑项id标记
      visibleIdFreight: '',
      // 包邮栏的模态框编辑项id标记
      visibleIdFree: '',
      // 模态框是否显示
      isVisible: false
    }
  },

  computed: {
    // 运费设置已选中地区数据
    cityDataDidFreight () {
      let arr = []
      this.formData.deliveryArr.forEach(v => {
        if (v.id !== this.visibleIdFreight) {
          arr = [...arr, ...v.area]
        }
      })
      return arr
    },
    // 包邮设置已选中地区数据
    cityDataDidFree () {
      let arr = []
      this.formData.conditionalArr.forEach(v => {
        if (v.id !== this.visibleIdFree) {
          arr = [...arr, ...v.area]
        }
      })
      return arr
    },
    // 设置包邮条件 文字显示
    selectTxt () {
      let txt = ''
      switch (this.formData.calcType) {
        case 1:
          txt = '件'
          break
        case 2:
          txt = 'kg'
          break
        case 3:
          txt = 'm³'
          break
        default:
          txt = ''
      }
      return txt
    },
    // 设置包邮条件 select选项数据
    selectOptions () {
      return [
        { value: 1, label: this.selectTxt },
        { value: 2, label: '金额' },
        { value: 3, label: this.selectTxt + ' + 金额' }
      ]
    }
  },

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
    // 省市id转文字
    transArea (item) {
      return areaData.getAreaByIds(item.area)
    },
    // 指定地区运费，点击编辑按钮
    onEditAreaFreight (item) {
      this.visibleIdFree = ''
      this.isVisible = true
      this.visibleIdFreight = item.id
    },
    // 指定地区包邮，点击编辑按钮
    onEditAreaFree (item) {
      this.visibleIdFreight = ''
      this.isVisible = true
      this.visibleIdFree = item.id
    },
    // 指定地区运费 添加项
    addNewFreight () {
      this.formData.deliveryArr.push({
        id: tools.createUniqueString(),
        area: [],
        firNum: undefined,
        firFreight: undefined,
        secNum: undefined,
        secFreight: undefined
      })
    },
    // 指定地区包邮 添加项
    addNewFree () {
      this.formData.conditionalArr.push({
        id: tools.createUniqueString(),
        area: [],
        type: 1,
        num: undefined,
        freight: undefined
      })
    },
    // 运费栏 删除项
    onDeleteDelivArea (item) {
      this.formData.deliveryArr.forEach((v, i) => {
        if (v.id === item.id) {
          this.formData.deliveryArr.splice(i, 1)
        }
      })
    },
    // 包邮栏 删除项
    onDeleteCondArea (item) {
      this.formData.conditionalArr.forEach((v, i) => {
        if (v.id === item.id) {
          this.formData.conditionalArr.splice(i, 1)
        }
      })
    }
  },

  components: { remainArea }
}
</script>

<style lang="less" scoped>
@width: 500px;

.handleFreightTempl {
  .el-input {
    width: @width;
  }
  /deep/ .el-form-item__label {
    font-weight: 700;
  }
  .el-input-number {
    margin-right: 5px;
    width: 120px;
  }
  .el-form-item {
    color: #666;
  }
  .el-cascader {
    width: @width;
  }
}

.defaultFreight {
  padding-bottom: 10px;
  .defaultTitle {
    width: 70px;
    color: #409EFF;
  }
  .defaultMore {
    margin-left: 30px;
  }
}

.deliveryArr, .conditionalArr {
  background-color: #fff;
  width: 960px;
  border: 1px solid #ccc;

  li {
    display: flex;
    text-align: center;
    justify-content: center;

    & > div {
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px 0;

      &:last-child {
        border-right: none;
      }
    }

    &:first-child {
      background-color: #EBEEF5;

      & > div {
        padding: 0 10px;
      }
    }
    &:last-child {
      padding: 5px 0;

      & > div {
        border-bottom: none;
      }
      .el-button {
        border: none;
        color: #4096ff;
      }
    }
    .area {
      text-align: left;
      padding: 0 10px;
      justify-content: space-between;

      > div:first-child {
        max-width: 70%;
        word-break: break-all;
        line-height: 1.5;
      }
    }
  }
}

.deliveryArr {
  .area {
    width: 30%;
  }
  .firNum {
    width: 15%;
  }
  .firFre {
    width: 15%;
  }
  .secNum {
    width: 15%;
  }
  .secFre {
    width: 15%;
  }
  .btn {
    width: 10%;
  }
}
.tips {
  width: 960px;
  text-align: right;
}

.conditionalArr {
  .area {
    width: 50%;
  }
  .condition {
    width: 40%;
    flex-direction: column;
    .split {
      display: inline-block;
      width: 10px;
    }
  }
  .btn {
    width: 10%;
  }
}

.freeWrap {
  padding-top: 40px;
}
</style>
