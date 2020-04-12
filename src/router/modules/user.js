/**
 * 用户管理
 */
import Layout from '@/views/layout'

// 用户管理
const UserManage = () => import(/* webpackChunkName: "userManage" */ '@/views/user/userManage')

const UserList = () => import(/* webpackChunkName: "userList" */ '@/views/user/userManage/userList')
const UserListIndex = () => import(/* webpackChunkName: "userListIndex" */ '@/views/user/userManage/userList/indexPage')
const UserDetail = () => import(/* webpackChunkName: "userDetail" */ '@/views/user/userManage/userList/userDetail')

const DisabledList = () => import(/* webpackChunkName: "disabledList" */ '@/views/user/userManage/disabledList')
const DisabledListIndex = () => import(/* webpackChunkName: "disabledListIndex" */ '@/views/user/userManage/disabledList/indexPage')

const RefundRank = () => import(/* webpackChunkName: "refundRank" */ '@/views/user/userManage/refundRank')

// 等级配置
const LevelConfig = () => import(/* webpackChunkName: "levelConfig" */ '@/views/user/levelConfig')

const LevelList = () => import(/* webpackChunkName: "levelList" */ '@/views/user/levelConfig/levelList')
const LevelListIndex = () => import(/* webpackChunkName: "levelListIndex" */ '@/views/user/levelConfig/levelList/indexPage')
const EditLevel = () => import(/* webpackChunkName: "editLevel" */ '@/views/user/levelConfig/levelList/editLevel')

const AddLevel = () => import(/* webpackChunkName: "addLevel" */ '@/views/user/levelConfig/addLevel')

// 供应商管理
const SupplierManage = () => import(/* webpackChunkName: "supplierManage" */ '@/views/user/supplierManage')

const SupplierList = () => import(/* webpackChunkName: "supplierList" */ '@/views/user/supplierManage/supplierList')
const SupplierListIndex = () => import(/* webpackChunkName: "supplierListIndex" */ '@/views/user/supplierManage/supplierList/indexPage')
const EditSupplier = () => import(/* webpackChunkName: "editSupplier" */ '@/views/user/supplierManage/supplierList/editSupplier')

const AddSupplier = () => import(/* webpackChunkName: "addSupplier" */ '@/views/user/supplierManage/addSupplier')

// 用户信用
const UserCredit = () => import(/* webpackChunkName: "userCredit" */ '@/views/user/userCredit')

const CreditLog = () => import(/* webpackChunkName: "creditLog" */ '@/views/user/userCredit/creditLog')

// 地摊管理
const StallManage = () => import(/* webpackChunkName: "stallManage" */ '@/views/user/stallManage')

const StallList = () => import(/* webpackChunkName: "stallList" */ '@/views/user/stallManage/stallList')
const StallListIndex = () => import(/* webpackChunkName: "stallListIndex" */ '@/views/user/stallManage/stallList/indexPage')
const EditStall = () => import(/* webpackChunkName: "editStall" */ '@/views/user/stallManage/stallList/editStall')
const AddStall = () => import(/* webpackChunkName: "addStall" */ '@/views/user/stallManage/stallList/addStall')
const StaffList = () => import(/* webpackChunkName: "staffList" */ '@/views/user/stallManage/stallList/staffList')
const NewUserList = () => import(/* webpackChunkName: "newUserList" */ '@/views/user/stallManage/stallList/newUserList')
const StaffBaseInfo = () => import(/* webpackChunkName: "staffBaseInfo" */ '@/views/user/stallManage/stallList/staffBaseInfo')

// 用户行为分析
const UserBehavior = () => import(/* webpackChunkName: "userBehavior" */ '@/views/user/userBehavior')

const RedBagBehavior = () => import(/* webpackChunkName: "redBagBehavior" */ '@/views/user/userBehavior/redBagBehavior')

const WithdrawBehavior = () => import(/* webpackChunkName: "withdrawBehavior" */ '@/views/user/userBehavior/withdrawBehavior')

const WithdrawData = () => import(/* webpackChunkName: "withdrawData" */ '@/views/user/userBehavior/withdrawData')

const RefundBehavior = () => import(/* webpackChunkName: "refundBehavior" */ '@/views/user/userBehavior/refundBehavior')

// 用户画像
const UserPortrayal = () => import(/* webpackChunkName: "userPortrayal" */ '@/views/user/userPortrayal')

const BaseData = () => import(/* webpackChunkName: "baseData" */ '@/views/user/userPortrayal/baseData')

const UserPrefer = () => import(/* webpackChunkName: "userPrefer" */ '@/views/user/userPortrayal/userPrefer')

// 分销管理
const Distribution = () => import(/* webpackChunkName: "distribution" */ '@/views/user/distribution')

const DrpSet = () => import(/* webpackChunkName: "drpSet" */ '@/views/user/distribution/drpSet')

const DrpUser = () => import(/* webpackChunkName: "drpUser" */ '@/views/user/distribution/drpUser')
const DrpUserIndex = () => import(/* webpackChunkName: "drpUserIndex" */ '@/views/user/distribution/drpUser/indexPage')

const DrpStatistics = () => import(/* webpackChunkName: "drpStatistics" */ '@/views/user/distribution/drpStatistics')

const DrpMessage = () => import(/* webpackChunkName: "drpMessage" */ '@/views/user/distribution/drpMessage')

const userRouter = {
  path: '/user',
  component: Layout,
  redirect: '/user/userManage/userList',
  name: 'User',
  meta: { title: '用户管理', icon: 'peoples' },
  children: [
    {
      path: 'userManage',
      component: UserManage,
      name: 'UserManage',
      meta: { title: '用户管理', icon: 'menu' },
      redirect: '/user/userManage/userList',
      children: [
        {
          path: 'userList',
          component: UserList,
          name: 'UserList',
          meta: { title: '用户列表' },
          redirect: '/user/userManage/userList/userListIndex',
          children: [
            {
              path: 'userListIndex',
              component: UserListIndex,
              name: 'UserListIndex',
              meta: { title: '用户列表', breadcrumb: false }
            },
            {
              path: 'userDetail',
              component: UserDetail,
              name: 'UserDetail',
              meta: {
                title: '查看用户详情',
                activeMenu: '/user/userManage/userList/userListIndex'
              },
              hidden: true
            }
          ]
        },
        {
          path: 'disabledList',
          component: DisabledList,
          name: 'DisabledList',
          meta: { title: '禁用列表' },
          redirect: '/user/userManage/disabledList/disabledListIndex',
          children: [
            {
              path: 'disabledListIndex',
              component: DisabledListIndex,
              name: 'DisabledListIndex',
              meta: { title: '禁用列表', breadcrumb: false }
            }
          ]
        },
        {
          path: 'refundRank',
          component: RefundRank,
          name: 'RefundRank',
          meta: { title: '退款排行榜' }
        }
      ]
    },
    {
      path: 'levelConfig',
      component: LevelConfig,
      name: 'LevelConfig',
      meta: { title: '等级配置', icon: 'menu' },
      redirect: '/user/levelConfig/levelList',
      children: [
        {
          path: 'levelList',
          component: LevelList,
          name: 'LevelList',
          meta: { title: '等级列表' },
          redirect: '/user/levelConfig/levelList/levelListIndex',
          children: [
            {
              path: 'levelListIndex',
              component: LevelListIndex,
              name: 'LevelListIndex',
              meta: { title: '等级列表', breadcrumb: false }
            },
            {
              path: 'editLevel',
              component: EditLevel,
              name: 'EditLevel',
              meta: {
                title: '编辑等级',
                activeMenu: '/user/levelConfig/levelList/levelListIndex'
              },
              hidden: true
            }
          ]
        },
        {
          path: 'addLevel',
          component: AddLevel,
          name: 'AddLevel',
          meta: { title: '添加等级' }
        }
      ]
    },
    {
      path: 'supplierManage',
      component: SupplierManage,
      name: 'SupplierManage',
      meta: { title: '供应商管理', icon: 'menu' },
      redirect: '/user/supplierManage/levelList',
      children: [
        {
          path: 'supplierList',
          component: SupplierList,
          name: 'SupplierList',
          meta: { title: '供应商列表' },
          redirect: '/user/supplierManage/supplierList/supplierListIndex',
          children: [
            {
              path: 'supplierListIndex',
              component: SupplierListIndex,
              name: 'SupplierListIndex',
              meta: { title: '供应商列表', breadcrumb: false }
            },
            {
              path: 'editSupplier',
              component: EditSupplier,
              name: 'EditSupplier',
              meta: {
                title: '编辑供应商',
                activeMenu: '/user/supplierManage/supplierList/supplierListIndex'
              },
              hidden: true
            }
          ]
        },
        {
          path: 'addSupplier',
          component: AddSupplier,
          name: 'AddSupplier',
          meta: { title: '添加供应商' }
        }
      ]
    },
    {
      path: 'userCredit',
      component: UserCredit,
      name: 'UserCredit',
      meta: { title: '用户信用', icon: 'menu' },
      redirect: '/user/userCredit/creditLog',
      alwaysShow: true,
      children: [
        {
          path: 'creditLog',
          component: CreditLog,
          name: 'CreditLog',
          meta: { title: '信用日志' }
        }
      ]
    },
    {
      path: 'stallManage',
      component: StallManage,
      name: 'StallManage',
      meta: { title: '地摊管理', icon: 'menu' },
      redirect: '/user/stallManage/levelList',
      children: [
        {
          path: 'stallList',
          component: StallList,
          name: 'StallList',
          meta: { title: '地摊公司列表' },
          redirect: '/user/stallManage/stallList/stallListIndex',
          children: [
            {
              path: 'stallListIndex',
              component: StallListIndex,
              name: 'StallListIndex',
              meta: { title: '地摊公司列表', breadcrumb: false }
            },
            {
              path: 'editStall',
              component: EditStall,
              name: 'EditStall',
              meta: {
                title: '编辑地摊公司',
                activeMenu: '/user/stallManage/stallList/stallListIndex'
              },
              hidden: true
            },
            {
              path: 'addStall',
              component: AddStall,
              name: 'AddStall',
              meta: {
                title: '添加地摊公司',
                activeMenu: '/user/stallManage/stallList/stallListIndex'
              },
              hidden: true
            },
            {
              path: 'staffList',
              component: StaffList,
              name: 'StaffList',
              meta: {
                title: '地摊人员列表',
                activeMenu: '/user/stallManage/stallList/stallListIndex'
              },
              hidden: true
            },
            {
              path: 'newUserList',
              component: NewUserList,
              name: 'NewUserList',
              meta: {
                title: '成员列表',
                activeMenu: '/user/stallManage/stallList/stallListIndex'
              },
              hidden: true
            },
            {
              path: 'staffBaseInfo',
              component: StaffBaseInfo,
              name: 'StaffBaseInfo',
              meta: {
                title: '基础信息',
                activeMenu: '/user/stallManage/stallList/stallListIndex'
              },
              hidden: true
            }
          ]
        }
      ]
    },
    {
      path: 'userBehavior',
      component: UserBehavior,
      name: 'UserBehavior',
      meta: { title: '用户行为分析', icon: 'menu' },
      redirect: '/user/userBehavior/redBagBehavior',
      alwaysShow: true,
      children: [
        {
          path: 'redBagBehavior',
          component: RedBagBehavior,
          name: 'RedBagBehavior',
          meta: { title: '红包相关行为统计' }
        },
        {
          path: 'withdrawBehavior',
          component: WithdrawBehavior,
          name: 'WithdrawBehavior',
          meta: { title: '提现行为统计' }
        },
        {
          path: 'withdrawData',
          component: WithdrawData,
          name: 'WithdrawData',
          meta: { title: '提现数据统计' }
        },
        {
          path: 'refundBehavior',
          component: RefundBehavior,
          name: 'RefundBehavior',
          meta: { title: '退换货行为统计' }
        }
      ]
    },
    {
      path: 'userPortrayal',
      component: UserPortrayal,
      name: 'UserPortrayal',
      meta: { title: '用户画像', icon: 'menu' },
      redirect: '/user/userPortrayal/creditLog',
      alwaysShow: true,
      children: [
        {
          path: 'baseData',
          component: BaseData,
          name: 'BaseData',
          meta: { title: '基础信息统计' }
        },
        {
          path: 'userPrefer',
          component: UserPrefer,
          name: 'UserPrefer',
          meta: { title: '用户偏好属性' }
        }
      ]
    },
    {
      path: 'distribution',
      component: Distribution,
      name: 'Distribution',
      meta: { title: '分销管理', icon: 'menu' },
      redirect: '/user/distribution/drpUser',
      alwaysShow: true,
      children: [
        {
          path: 'drpSet',
          component: DrpSet,
          name: 'DrpSet',
          meta: { title: '分销设置' }
        },
        {
          path: 'drpUser',
          component: DrpUser,
          name: 'DrpUser',
          meta: { title: '玩家管理' },
          redirect: '/user/distribution/drpUser/drpUserIndex',
          children: [
            {
              path: 'drpUserIndex',
              component: DrpUserIndex,
              name: 'DrpUserIndex',
              meta: { title: '玩家管理', breadcrumb: false }
            }
          ]
        },
        {
          path: 'drpStatistics',
          component: DrpStatistics,
          name: 'DrpStatistics',
          meta: { title: '数据统计' }
        },
        {
          path: 'drpMessage',
          component: DrpMessage,
          name: 'DrpMessage',
          meta: { title: '消息配置' }
        }
      ]
    }
  ]
}

export default userRouter
