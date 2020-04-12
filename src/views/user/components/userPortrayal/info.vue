/**
 * 信息完善情况组件
 */
<template>
  <div class=''>
    <div class="info">
      <div class="wrap">
        <ul>
          <li>
            <div class="title">当前注册人数</div>
            <div class="content">4509人</div>
          </li>
          <li>
            <div class="title">信息完善人数</div>
            <div class="content">60人</div>
          </li>
          <li>
            <div class="title">信息完善率</div>
            <div class="content">1.33%</div>
          </li>
          <li>
            <div class="title">实名认证率</div>
            <div class="content">3.22%</div>
          </li>
        </ul>
      </div>
    </div>
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
.info {
  padding-bottom: 15px;

  .wrap {
    display: inline-block;
  }
  ul {
    display: flex;
    // border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;

    li {
      width: 200px;
      text-align: center;
      // border-right: 1px solid #eee;

      .title {
        // background-color: #eee;
        height: 30px;
        line-height: 30px;
        color: #909399;
        border-bottom: 1px solid #eee;
        font-weight: 700;
      }
      .content {
        height: 30px;
        line-height: 30px;
        color: #606266;
      }
    }
  }
}
</style>
