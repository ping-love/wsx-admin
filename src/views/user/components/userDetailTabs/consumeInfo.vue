/**
 * 消费信息
 */
<template>
  <div class=''>
    <div class="infoBox info">
      <h4>基本信息：</h4>
      <ul>
        <li>
          <div class="title">用户昵称：</div>
          <div class="content">小鱼爱打洞</div>
        </li>
        <li>
          <div class="title">UID：</div>
          <div class="content">67348</div>
        </li>
        <li>
          <div class="title">最后一次消费时间：</div>
          <div class="content">2019-12-31 14:04:31</div>
        </li>
        <li>
          <div class="title">最后一次消费金额：</div>
          <div class="content">31</div>
        </li>
        <li>
          <div class="title">常用支付方式：</div>
          <div class="content">支付嘎</div>
        </li>
        <li>
          <div class="title">注册时间与首次消费时间间隔：</div>
          <div class="content">1小时</div>
        </li>
        <li>
          <div class="title">售后评价次数：</div>
          <div class="content">0</div>
        </li>
        <li>
          <div class="title">好评次数：</div>
          <div class="content">0</div>
        </li>
        <li>
          <div class="title">差评次数：</div>
          <div class="content">100</div>
        </li>
        <li>
          <div class="title">好评率：</div>
          <div class="content">0%</div>
        </li>
        <li>
          <div class="title">差评率：</div>
          <div class="content">0%</div>
        </li>
        <li>
          <div class="title">退款次数：</div>
          <div class="content">0</div>
        </li>
        <li>
          <div class="title">退/换货次数：</div>
          <div class="content">0</div>
        </li>
        <li>
          <div class="title">退款率：</div>
          <div class="content">0%</div>
        </li><li>
          <div class="title">退/换货率：</div>
          <div class="content">0%</div>
        </li>
      </ul>
    </div>

    <div class="infoBox time">
      <h4>日内消费信息：</h4>
      <ul>
        <li>
          <div class="title">时间：</div>
          <div class="content">
            <div class="timeContent">3日内</div>
            <div class="timeContent">5日内</div>
            <div class="timeContent">15日内</div>
            <div class="timeContent">30日内</div>
            <div class="timeContent">60日内</div>
          </div>
        </li>
        <li>
          <div class="title">购物金额：</div>
          <div class="content">
            <div class="timeContent">0.00</div>
            <div class="timeContent">0.00</div>
            <div class="timeContent">0.00</div>
            <div class="timeContent">0.00</div>
            <div class="timeContent">0.00</div>
          </div>
        </li>
        <li>
          <div class="title">消费次数：</div>
          <div class="content">
            <div class="timeContent">100</div>
            <div class="timeContent">100</div>
            <div class="timeContent">100</div>
            <div class="timeContent">100</div>
            <div class="timeContent">100</div>
          </div>
        </li>
        <li>
          <div class="title">退款次数：</div>
          <div class="content">
            <div class="timeContent">10</div>
            <div class="timeContent">10</div>
            <div class="timeContent">10</div>
            <div class="timeContent">10</div>
            <div class="timeContent">10</div>
          </div>
        </li>
        <li>
          <div class="title">退/换货次数：</div>
          <div class="content">
            <div class="timeContent">10</div>
            <div class="timeContent">10</div>
            <div class="timeContent">10</div>
            <div class="timeContent">10</div>
            <div class="timeContent">10</div>
          </div>
        </li>
        <li>
          <div class="title">提现次数：</div>
          <div class="content">
            <div class="timeContent">10</div>
            <div class="timeContent">10</div>
            <div class="timeContent">10</div>
            <div class="timeContent">10</div>
            <div class="timeContent">10</div>
          </div>
        </li>
        <li>
          <div class="title">提现金额：</div>
          <div class="content">
            <div class="timeContent">10</div>
            <div class="timeContent">10</div>
            <div class="timeContent">10</div>
            <div class="timeContent">10</div>
            <div class="timeContent">10</div>
          </div>
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
.infoBox {
  li {
    .title {
      width: 220px;
    }
  }
}
</style>
