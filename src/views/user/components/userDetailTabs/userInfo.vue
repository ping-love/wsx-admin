/**
 * 用户详情tabs子组件
 */
<template>
  <div class=''>
    <div class="infoBox">
      <h4>基本信息：</h4>
      <ul>
        <li>
          <div class="title">用户名：</div>
          <div class="content">67297</div>
        </li>
        <li>
          <div class="title">手机号：</div>
          <div class="content">15812340200</div>
        </li>
        <li>
          <div class="title">注册时间：</div>
          <div class="content">2019-12-31 14:04:31</div>
        </li>
        <li>
          <div class="title">战力：</div>
          <div class="content">0</div>
        </li>
        <li>
          <div class="title">攻击加成：</div>
          <div class="content">0</div>
        </li>
        <li>
          <div class="title">暴击率：</div>
          <div class="content">0</div>
        </li>
        <li>
          <div class="title">暴击伤害：</div>
          <div class="content">0</div>
        </li>
        <li>
          <div class="title">体力上限：</div>
          <div class="content">100</div>
        </li>
        <li>
          <div class="title">体力恢复：</div>
          <div class="content">0</div>
        </li>
        <li>
          <div class="title">第三方登入渠道：</div>
          <div class="content">微信公众号、QQ、微信APP</div>
        </li>
      </ul>
    </div>

    <div class="infoBox">
      <h4>财务信息：</h4>
      <ul>
        <li>
          <div class="title">用户等级：</div>
          <div class="content">1</div>
        </li>
        <li>
          <div class="title">剩余红包：</div>
          <div class="content">0.00</div>
        </li>
        <li>
          <div class="title">金币：</div>
          <div class="content">100.00</div>
        </li>
        <li>
          <div class="title">钻石：</div>
          <div class="content">0.00</div>
        </li>
      </ul>
    </div>

    <div class="infoBox">
      <h4>收货信息：</h4>
      <ul>
        <li>
          <div class="title">收货地址：</div>
          <div class="content">没有收货地址</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {},

  data () {
    return {
    }
  },

  computed: {},

  created () {},

  methods: {
  },

  components: {
  }
}
</script>

<style lang='less' scoped>
@import '~@/views/user/styles/infoBox.less';
</style>
