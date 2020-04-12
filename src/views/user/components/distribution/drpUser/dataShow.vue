/**
 * 数据呈现组件
 */
<template>
  <div class='dataShow'>
    <ul>
      <li class="cardItem">
        <div class="title">玩家总数（人）</div>
        <div class="number">70</div>
      </li>
      <li class="cardItem">
        <div class="title">10级玩家数（人）</div>
        <div class="number">4</div>
      </li>
      <li class="cardItem">
        <div class="title">下载人数（人）</div>
        <div class="number">65</div>
      </li>
      <li class="cardItem">
        <div class="title">充值总数（人）</div>
        <div class="number">11</div>
      </li>
      <li class="cardItem">
        <div class="title">充值金额</div>
        <div class="number">2525</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {},

  data () {
    return {}
  },

  computed: {},

  created () {},

  methods: {},

  components: {}
}
</script>

<style lang='less' scoped>
@import '~@/assets/styles/variables';

.dataShow {
  padding-bottom: 15px;
}

ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
  }
  .cardItem {
    width: 135px;
    padding: 10px 0;
    color: #fff;
    border-radius: 5px;
    margin-right: 10px;

    .title {
      padding-bottom: 10px;
    }
    &:nth-child(1) {
      background-color: @red;
    }
    &:nth-child(2) {
      background-color: @orange;
    }
    &:nth-child(3) {
      background-color: @green;
    }
    &:nth-child(4) {
      background-color: @cyan;
    }
    &:nth-child(5) {
      background-color: @blue;
    }
    &:hover {
      // cursor: pointer;
      transition: transform 0.1s ease;
      transform: scale(1.1);
    }
  }
</style>
