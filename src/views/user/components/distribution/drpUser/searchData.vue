/**
 * 搜索组件
 */
<template>
  <div class='drpUser-search'>
    <el-form
      :model="formData"
      ref="formRef"
      :inline="true"
    >
      <el-form-item label="搜索方式：" prop="searchType">
        <el-select v-model="formData.searchType" size="small">
          <el-option label="按输入搜索" :value="1"></el-option>
          <el-option label="按玩家状态" :value="2"></el-option>
          <el-option label="按玩家等级" :value="3"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="输入搜索：" prop="userInput" v-if="formData.searchType===1">
        <el-input
          v-model="formData.userInput"
          placeholder="玩家名称/联系方式/玩家ID"
          size="small"
        >
          <template slot="append">
            <csvUpload @onSuccess="onUploadSuccess">ID批量导入</csvUpload>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item label="玩家状态：" prop="userStatus" v-if="formData.searchType===2">
        <el-select v-model="formData.userStatus" size="small">
          <el-option
            v-for="item in userStatusOptions"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="玩家等级：" prop="userLevel" v-if="formData.searchType===3">
        <el-select v-model="formData.userLevel" size="small">
          <el-option
            v-for="item in userLevelOptions"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>

    <div class="btn-box">
      <el-button
        size="small"
        type="primary"
        class="btn-query"
        @click="onSearch"
      >查询</el-button>
      <el-button
        size="small"
        type="default"
        class="btn-query"
        @click="onReset"
      >重置</el-button>
    </div>
  </div>
</template>

<script>
import { getDrpUserStatus, getDrpLevel } from '@/filters/transform'
import { getToken } from '@/utils/auth'
import csvUpload from '@/components/csvUpload'

export default {
  props: {},

  data () {
    return {
      formData: {
        searchType: 1,
        userInput: '',
        userStatus: 0,
        userLevel: 0
      },
      userStatusOptions: getDrpUserStatus(),
      userLevelOptions: getDrpLevel(),
      headers: { token: getToken() }
    }
  },

  computed: {},

  created () {},

  methods: {
    onSearch () {
      this.$emit('onSearch', { ...this.formData })
    },
    onReset () {
      this.$refs.formRef.resetFields()
    },
    onUploadSuccess (res) {
      console.log(res)
    }
  },

  components: { csvUpload }
}
</script>

<style lang='less' scoped>
.drpUser-search {
  display: flex;
  margin-bottom: 15px;

  .btn-box {
    padding-top: 3px;
    display: flex;
    padding-left: 10px;

    button {
      height: 32px;
    }
  }
  .el-form {
    /deep/ .el-form-item__label {
      padding-right: 0;
    }
    .el-form-item {
      margin-bottom: 0;

      &.is-error {
        margin-bottom: 22px;
      }
    }
    .el-input {
      width: 300px;
      vertical-align: bottom;
    }
    .el-select {
      width: 120px;
    }
  }
}
</style>
