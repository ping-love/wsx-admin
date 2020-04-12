/**
 * 地摊人员基础信息
 */
<template>
  <div class=''>
    <div class="infoBox">
      <h4>基础信息：</h4>
      <ul>
        <li>
          <div class="title">二维码编号：</div>
          <div class="content">67297</div>
        </li>
        <li class="qrCodeImg">
          <div class="title">二维码图片：</div>
          <div class="content">
            <img src="https://img.51k1k.com/Uploads/image/miniwx/2019-10/20191012163202_45474.png" alt="">
          </div>
        </li>
      </ul>
    </div>

    <div class="infoBox">
      <h4>推广详情：</h4>
      <ul>
        <li>
          <div class="title">地推二维码编号：</div>
          <div class="content">D64725T6</div>
        </li>
        <li>
          <div class="title">邀请人总数：</div>
          <div class="content">3</div>
        </li>
        <li>
          <div class="title">充值用户数—地推用户充值率：</div>
          <div class="content">0-0%</div>
        </li>
        <li>
          <div class="title">购买用户数——地推用户购买率：</div>
          <div class="content">0-0%</div>
        </li>
        <li>
          <div class="title">累计充值额：</div>
          <div class="content">0.00</div>
        </li>
        <li>
          <div class="title">累计购物总额：</div>
          <div class="content">0.00</div>
        </li>
        <li>
          <div class="title">本月拉新用户：</div>
          <div class="content">23</div>
        </li>
        <li>
          <div class="title">本月充值用户数：</div>
          <div class="content">23</div>
        </li>
        <li>
          <div class="title">本月购物用户数：</div>
          <div class="content">23</div>
        </li>
        <li>
          <div class="title">本月充值额：</div>
          <div class="content">0.00</div>
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
  .qrCodeImg {
    height: 240px;
    line-height: 240px;

    .content {
      padding-top: 20px;
      padding-bottom: 20px;
    }
    img {
      width: auto;
      height: 100%;
    }
  }
}
</style>
