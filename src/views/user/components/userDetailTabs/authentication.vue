/**
 * 实名信息
 */
<template>
  <div class=''>
    <div class="infoBox">
      <h4>用户信息：</h4>
      <ul>
        <li>
          <div class="title">用户昵称：</div>
          <div class="content">小鱼爱打洞</div>
        </li>
        <li>
          <div class="title">UID：</div>
          <div class="content">67354</div>
        </li>
        <li>
          <div class="title">绑定手机号：</div>
          <div class="content">13721342181</div>
        </li>
      </ul>
    </div>

    <div class="infoBox">
      <h4>实名信息：</h4>
      <ul>
        <li>
          <div class="title">姓名：</div>
          <div class="content">
            <el-input size="mini" v-model="formData.name"></el-input>
          </div>
        </li>
        <li>
          <div class="title">身份证号码：</div>
          <div class="content">
            <el-input size="mini" v-model="formData.idCard"></el-input>
          </div>
        </li>
        <li>
          <div class="title">状态：</div>
          <div class="content">
            <el-switch v-model="formData.status"></el-switch>
            <span v-if="authStatus">认证成功</span>
            <span v-else>未认证</span>
          </div>
        </li>
        <li>
          <div class="title">认证时间：</div>
          <div class="content">
            <span v-if="formData.currentStatus">{{formData.time}}</span>
            <span v-else>未认证</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="submit">
      <el-button type="primary" @click="onSubmit">提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {},

  data () {
    return {
      formData: {
        name: '',
        idCard: '',
        currentStatus: 0,
        time: ''
      }
    }
  },

  computed: {
    authStatus: {
      get () {
        return !!this.formData.status
      },
      set (val) {
        this.formData.status = +val
      }
    }
  },

  created () {},

  methods: {
    onSubmit () {
      console.log(this.formData)
    }
  },

  components: {}
}
</script>

<style lang='less' scoped>
@import '~@/views/user/styles/infoBox.less';
</style>
