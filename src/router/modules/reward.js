/**
 * 奖励管理
 */
import Layout from '@/views/layout'

// 任务管理
const TaskManage = () => import(/* webpackChunkName: "taskManage" */ '@/views/reward/taskManage')

const TaskList = () => import(/* webpackChunkName: "taskList" */ '@/views/reward/taskManage/taskList')
const TaskListIndex = () => import(/* webpackChunkName: "taskListIndex" */ '@/views/reward/taskManage/taskList/indexPage')
const EditTask = () => import(/* webpackChunkName: "editTask" */ '@/views/reward/taskManage/taskList/editTask')

const AddTask = () => import(/* webpackChunkName: "addTask" */ '@/views/reward/taskManage/addTask')

// 奖励管理
const RewardManage = () => import(/* webpackChunkName: "rewardManage" */ '@/views/reward/rewardManage')

const RewardList = () => import(/* webpackChunkName: "rewardList" */ '@/views/reward/rewardManage/rewardList')
const RewardListIndex = () => import(/* webpackChunkName: "rewardListIndex" */ '@/views/reward/rewardManage/rewardList/indexPage')
const EditReward = () => import(/* webpackChunkName: "editReward" */ '@/views/reward/rewardManage/rewardList/editReward')

const AddReward = () => import(/* webpackChunkName: "addReward" */ '@/views/reward/rewardManage/addReward')

const RewardLog = () => import(/* webpackChunkName: "rewardLog" */ '@/views/reward/rewardManage/rewardLog')

// 充值管理
const RechargeManage = () => import(/* webpackChunkName: "rechargeManage" */ '@/views/reward/rechargeManage')

const RechargeList = () => import(/* webpackChunkName: "rechargeList" */ '@/views/reward/rechargeManage/rechargeList')
const RechargeListIndex = () => import(/* webpackChunkName: "rechargeListIndex" */ '@/views/reward/rechargeManage/rechargeList/indexPage')
const EditRecharge = () => import(/* webpackChunkName: "editRecharge" */ '@/views/reward/rechargeManage/rechargeList/editRecharge')

const AddRecharge = () => import(/* webpackChunkName: "addRecharge" */ '@/views/reward/rechargeManage/addRecharge')

const RechargeLog = () => import(/* webpackChunkName: "rechargeLog" */ '@/views/reward/rechargeManage/rechargeLog')

const messageRouter = {
  path: '/reward',
  component: Layout,
  redirect: '/reward/taskManage/taskList',
  name: 'Reward',
  meta: {
    title: '奖励管理',
    icon: 'reward'
  },
  children: [
    {
      path: 'taskManage',
      component: TaskManage,
      name: 'TaskManage',
      meta: { title: '任务管理', icon: 'menu' },
      redirect: '/reward/taskManage/taskList',
      children: [
        {
          path: 'taskList',
          component: TaskList,
          name: 'TaskList',
          meta: { title: '任务列表' },
          redirect: '/reward/taskManage/taskList/taskListIndex',
          children: [
            {
              path: 'taskListIndex',
              component: TaskListIndex,
              name: 'TaskListIndex',
              meta: { title: '任务列表', breadcrumb: false }
            },
            {
              path: 'editTask',
              component: EditTask,
              name: 'EditTask',
              meta: {
                title: '编辑任务',
                activeMenu: '/reward/taskManage/taskList/taskListIndex'
              },
              hidden: true
            }
          ]
        },
        {
          path: 'addTask',
          component: AddTask,
          name: 'AddTask',
          meta: { title: '添加任务' }
        }
      ]
    },
    {
      path: 'rewardManage',
      component: RewardManage,
      name: 'RewardManage',
      meta: { title: '奖励管理', icon: 'menu' },
      redirect: '/reward/rewardManage/rewardList',
      children: [
        {
          path: 'rewardList',
          component: RewardList,
          name: 'RewardList',
          meta: { title: '奖励列表' },
          redirect: '/reward/rewardManage/rewardList/rewardListIndex',
          children: [
            {
              path: 'rewardListIndex',
              component: RewardListIndex,
              name: 'RewardListIndex',
              meta: { title: '奖励列表', breadcrumb: false }
            },
            {
              path: 'editReward',
              component: EditReward,
              name: 'EditReward',
              meta: {
                title: '编辑奖励',
                activeMenu: '/reward/rewardManage/rewardList/rewardListIndex'
              },
              hidden: true
            }
          ]
        },
        {
          path: 'addReward',
          component: AddReward,
          name: 'AddReward',
          meta: { title: '添加奖励' }
        },
        {
          path: 'rewardLog',
          component: RewardLog,
          name: 'RewardLog',
          meta: { title: '奖励发放明细' }
        }
      ]
    },
    {
      path: 'rechargeManage',
      component: RechargeManage,
      name: 'RechargeManage',
      meta: { title: '充值管理', icon: 'menu' },
      redirect: '/reward/rechargeManage/rechargeLog',
      children: [
        {
          path: 'rechargeLog',
          component: RechargeLog,
          name: 'RechargeLog',
          meta: { title: '充值记录' }
        },
        {
          path: 'rechargeList',
          component: RechargeList,
          name: 'RechargeList',
          meta: { title: '充值模板' },
          redirect: '/reward/rechargeManage/rechargeList/rechargeListIndex',
          children: [
            {
              path: 'rechargeListIndex',
              component: RechargeListIndex,
              name: 'RechargeListIndex',
              meta: { title: '充值模板', breadcrumb: false }
            },
            {
              path: 'editRecharge',
              component: EditRecharge,
              name: 'EditRecharge',
              meta: {
                title: '编辑模板',
                activeMenu: '/reward/rechargeManage/rechargeList/rechargeListIndex'
              },
              hidden: true
            }
          ]
        },
        {
          path: 'addRecharge',
          component: AddRecharge,
          name: 'AddRecharge',
          meta: { title: '添加模板' }
        }

      ]
    }
  ]
}

export default messageRouter
