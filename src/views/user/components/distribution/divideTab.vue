/**
 * 分佣设置
 */
<template>
  <div class=''>
    <el-form
      label-position="right"
      label-width="100px"
      :model="formData"
      class="formBox"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item label="分销总开关：" prop="isDrpOpen" class="flex">
        <el-switch v-model="formData.isDrpOpen"></el-switch>
        <span class="tips">设置为关闭后，分销模式庄主管理入口关闭、分佣提成比例关闭</span>
      </el-form-item>

      <el-form-item label="分佣开关：" prop="isDivideOpen">
        <el-switch v-model="formData.isDivideOpen"></el-switch>
        <span class="tips">设置为关闭后，分销模式中将不再进行分佣比例计算</span>
      </el-form-item>

      <el-form-item label="分佣比例：" prop="category">
        <!-- 庄主 -->
        <div class="ratioBox">
          <div class="title">
            <p>1、二级分销顶级为庄主</p>
            <p>
              <span class="playerType">庄主</span>获得直属玩家
              <el-select v-model="formData.suzerain.globalDivideType" clearable>
                <el-option
                  v-for="item in divideTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-input-number
                v-model="formData.suzerain.globalRatio"
                controls-position="right"
                :min="0"
              ></el-input-number> %
            </p>
          </div>
          <div class="ifTip">
            <p>若该直属玩家是玩家</p>
            <p>若该直属玩家是庄主</p>
            <p>若该直属玩家是星级庄主</p>
          </div>
          <div class="getTip">
            <p>获得该玩家的直属玩家</p>
            <p>获得该庄主的直属玩家</p>
            <p>获得该星级庄主的直属玩家</p>
          </div>
          <div class="setting">
            <p>
              <el-select v-model="formData.suzerain.playerDivideType">
                <el-option
                  v-for="item in divideTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-input-number
                v-model="formData.suzerain.playerRatio"
                controls-position="right"
                :min="0"
              ></el-input-number> %
            </p>
            <p>
              <el-select v-model="formData.suzerain.suzerainDivideType">
                <el-option
                  v-for="item in divideTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-input-number
                v-model="formData.suzerain.suzerainRatio"
                controls-position="right"
                :min="0"
              ></el-input-number> %
            </p>
            <p>
              <el-select v-model="formData.suzerain.starSuzerainDivideType">
                <el-option
                  v-for="item in divideTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-input-number
                v-model="formData.suzerain.starSuzerainRatio"
                controls-position="right"
                :min="0"
              ></el-input-number> %
            </p>
          </div>
        </div>

        <!-- 星级庄主 -->
        <div class="ratioBox">
          <div class="title">
            <p>2、二级分销顶级为星级庄主</p>
            <p>
              <span class="playerType">星级庄主</span>获得直属玩家
              <el-select v-model="formData.starSuzerain.globalDivideType" clearable>
                <el-option
                  v-for="item in divideTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-input-number
                v-model="formData.starSuzerain.globalRatio"
                controls-position="right"
                :min="0"
              ></el-input-number> %
            </p>
          </div>
          <div class="ifTip">
            <p>若该直属玩家是玩家</p>
            <p>若该直属玩家是庄主</p>
            <p>若该直属玩家是星级庄主</p>
          </div>
          <div class="getTip">
            <p>获得该玩家的直属玩家</p>
            <p>获得该庄主的直属玩家</p>
            <p>获得该星级庄主的直属玩家</p>
          </div>
          <div class="setting">
            <p>
              <el-select v-model="formData.starSuzerain.playerDivideType">
                <el-option
                  v-for="item in divideTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-input-number
                v-model="formData.starSuzerain.playerRatio"
                controls-position="right"
                :min="0"
              ></el-input-number> %
            </p>
            <p>
              <el-select v-model="formData.starSuzerain.suzerainDivideType">
                <el-option
                  v-for="item in divideTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-input-number
                v-model="formData.starSuzerain.suzerainRatio"
                controls-position="right"
                :min="0"
              ></el-input-number> %
            </p>
            <p>
              <el-select v-model="formData.starSuzerain.starSuzerainDivideType">
                <el-option
                  v-for="item in divideTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-input-number
                v-model="formData.starSuzerain.starSuzerainRatio"
                controls-position="right"
                :min="0"
              ></el-input-number> %
            </p>
          </div>
        </div>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getDivideType } from '@/filters/transform'

export default {
  props: {},

  data () {
    return {
      formData: {
        isDrpOpen: false,
        isDivideOpen: false,
        suzerain: {
          globalDivideType: 1,
          globalRatio: 30,
          playerDivideType: 1,
          playerRatio: 30,
          suzerainDivideType: 1,
          suzerainRatio: 10,
          starSuzerainDivideType: 1,
          starSuzerainRatio: 0
        },
        starSuzerain: {
          globalDivideType: 1,
          globalRatio: 35,
          playerDivideType: 1,
          playerRatio: 35,
          suzerainDivideType: 1,
          suzerainRatio: 10,
          starSuzerainDivideType: 1,
          starSuzerainRatio: 0
        }
      },
      rules: {},
      divideTypeOptions: getDivideType()
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
    }
  },

  components: {}
}
</script>

<style lang='less' scoped>
.el-form {
  // .el-input {
  //   width: 500px;
  // }
  .el-select {
    width: 130px;
  }
  .el-input-number {
    width: 80px;
  }
  /deep/ .el-form-item__label {
    font-weight: 700;
  }
  .tips {
    color: #999;
    position: absolute;
    top: 0;
    right: 0;
  }
}
.ratioBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;

  p {
    padding: 5px 0;
  }
  .title {
    .playerType {
      display: inline-block;
      font-weight: 700;
      width: 70px;
    }
  }
}
</style>
