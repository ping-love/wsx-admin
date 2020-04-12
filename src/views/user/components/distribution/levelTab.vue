/**
 * 等级设置
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
      <el-form-item label="分销等级：" prop="category">
        <!-- 庄主 -->
        <div class="levelBox">
          <div class="title">
            庄主
          </div>
          <div class="level">
            游戏等级>=
            <el-input-number
              v-model="formData.suzerain.level"
              controls-position="right"
              :min="0"
            ></el-input-number> 级的
          </div>
          <div class="player">
            <el-select v-model="formData.suzerain.type">
                <el-option
                  label="直属玩家"
                  :value="1">
                </el-option>
              </el-select>
          </div>
          <div class="num">
            <el-input-number
              v-model="formData.suzerain.number"
              controls-position="right"
              :min="0"
            ></el-input-number> 个
          </div>
        </div>

        <!-- 星级庄主 -->
        <div class="levelBox">
          <div class="title">
            星级庄主
          </div>
          <div class="level">
            游戏等级>=
            <el-input-number
              v-model="formData.starSuzerain.level"
              controls-position="right"
              :min="0"
            ></el-input-number> 级的
          </div>
          <div class="player">
            <el-select v-model="formData.starSuzerain.type">
                <el-option
                  label="直属玩家"
                  :value="1">
                </el-option>
              </el-select>
          </div>
          <div class="num">
            <el-input-number
              v-model="formData.starSuzerain.number"
              controls-position="right"
              :min="0"
            ></el-input-number> 个
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
export default {
  props: {},

  data () {
    return {
      formData: {
        suzerain: {
          level: 1,
          type: 1,
          number: 1
        },
        starSuzerain: {
          level: 1,
          type: 1,
          number: 2
        }
      },
      rules: {}
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
  .el-select {
    width: 130px;
  }
  .el-input-number {
    width: 80px;
  }
  /deep/ .el-form-item__label {
    font-weight: 700;
  }
}
.levelBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;

  .title {
    min-width: 100px;
  }
}
</style>
