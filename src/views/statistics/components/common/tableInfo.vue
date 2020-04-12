/**
* 统计表格信息
*/
<template>
  <div class='info'>
      <ul class="infoBox">
        <li v-for="(item, idx) in infoData" :key="idx">
          <p>{{ item.name }}</p>
          <p>{{ item.value }}</p>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  },
  props: {
    infoData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {

  },
  created () {

  },
  mounted () {

  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang='less' scoped>
.infoBox {
  width: 50%;
  li {
    display: flex;
    p {
      flex: 1;
      line-height: 36px;
      text-align: center;
    }
  }
}
</style>
