/**
 * 编辑任务
 */
<template>
  <div class=''>
    <handleTask :formData="formData" type="edit"/>
  </div>
</template>

<script>
import handleTask from '@/views/reward/components/task/handleTask'

export default {
  props: {},

  data () {
    return {
      formData: {
        id: '',
        title: '',
        icon: '',
        taskTriggerType: '',
        desc: '',
        condition: '',
        jumpType: '',
        activeStatus: 0,
        taskReward: ''
      }
    }
  },

  computed: {},

  created () {},

  methods: {},

  components: { handleTask }
}
</script>

<style lang='less' scoped>

</style>
