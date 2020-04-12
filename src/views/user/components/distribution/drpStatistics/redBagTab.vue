/**
 * 红包数据tab
 */
<template>
  <div class=''>
    <ul>
      <li>
        <div class="title">红包发放数量</div>
        <div class="content">34</div>
      </li>
      <li>
        <div class="title">实际支出红包数量</div>
        <div class="content">34</div>
      </li>
      <li>
        <div class="title">待使用红包数</div>
        <div class="content">34</div>
      </li>
      <li>
        <div class="title">新增玩家数</div>
        <div class="content">34</div>
      </li>
      <li>
        <div class="title">玩家获客成本</div>
        <div class="content">34</div>
      </li>
    </ul>

    <ul>
      <li>
        <div class="title">红包发放金额</div>
        <div class="content">34</div>
      </li>
      <li>
        <div class="title">实际支出红包金额</div>
        <div class="content">34</div>
      </li>
      <li>
        <div class="title">待使用红包金额</div>
        <div class="content">34</div>
      </li>
      <li>
        <div class="title">新增10级玩家数</div>
        <div class="content">34</div>
      </li>
      <li>
        <div class="title">10级玩家获客成本</div>
        <div class="content">34</div>
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
ul {
  display: flex;
  border-left: 1px solid #ddd;
  border-top: 1px solid #ddd;
  margin: 0 0 30px;

  li {
    flex: 1;
    text-align: center;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;

    .title {
      background-color: #eee;
      height: 50px;
      line-height: 50px;
      color: #909399;
      font-weight: 700;
      border-bottom: 1px solid #ddd;
    }
    .content {
      height: 60px;
      line-height: 60px;
      color: #606266;
    }
  }
}
</style>
