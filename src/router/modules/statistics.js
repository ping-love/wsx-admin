/**
 * 数据统计
*/
import Layout from '@/views/layout'

// 操作点统计
const OperateStat = () => import(/* webpackChunkName: 'operateStat' */ '@/views/statistics/operateStat')

const BaseStat = () => import(/* webpackChunkName: 'baseStat' */ '@/views/statistics/operateStat/baseStat')
const BaseStatIndex = () => import(/* webpackChunkName: 'baseStatIndex' */ '@/views/statistics/operateStat/baseStat/indexPage')

// 电商数据
const DirsirData = () => import(/* webpackChunkName: 'dirsirData' */ '@/views/statistics/dirsirData')

const DealSum = () => import(/* webpackChunkName: 'dealSum' */ '@/views/statistics/dirsirData/dealSum')
const DealCount = () => import(/* webpackChunkName: 'dealCount' */ '@/views/statistics/dirsirData/dealCount')
const RefundSum = () => import(/* webpackChunkName: 'refundSum' */ '@/views/statistics/dirsirData/refundSum')
const RefundCount = () => import(/* webpackChunkName: 'refundCount' */ '@/views/statistics/dirsirData/refundCount')
const ReturnsSum = () => import(/* webpackChunkName: 'returnsSum' */ '@/views/statistics/dirsirData/returnsSum')
const ReturnsCount = () => import(/* webpackChunkName: 'returnsCount' */ '@/views/statistics/dirsirData/returnsCount')
const FunnelModel = () => import(/* webpackChunkName: 'funnelModel' */ '@/views/statistics/dirsirData/funnelModel')
const OrderAddress = () => import(/* webpackChunkName: 'orderAddress' */ '@/views/statistics/dirsirData/orderAddress')

// 游戏数据
const GameData = () => import(/* webpackChunkName: 'gameData' */ '@/views/statistics/gameData')

const GameTopup = () => import(/* webpackChunkName: 'gameTopup' */ '@/views/statistics/gameData/gameTopup')
const GameTopupIndex = () => import(/* webpackChunkName: 'gameTopupIndex' */ '@/views/statistics/gameData/gameTopup/indexPage')

// 收入统计
const IncomeStat = () => import(/* webpackChunkName: 'incomeStat' */ '@/views/statistics/incomeStat')

const FlowStat = () => import(/* webpackChunkName: 'flowStat' */ '@/views/statistics/incomeStat/flowStat')
const FlowStatIndex = () => import(/* webpackChunkName: 'flowStatIndex' */ '@/views/statistics/incomeStat/flowStat/indexPage')

// 用户属性
const UserAttr = () => import(/* webpackChunkName: 'userAttr' */ '@/views/statistics/userAttr')

const InvoiceList = () => import(/* webpackChunkName: 'invoiceList' */ '@/views/statistics/userAttr/invoiceList')
const InvoiceListIndex = () => import(/* webpackChunkName: 'invoiceListIndex' */ '@/views/statistics/userAttr/invoiceList/indexPage')
const AverageAtk = () => import(/* webpackChunkName: 'averageAtk' */ '@/views/statistics/userAttr/averageAtk')

// 用户统计
const UserStat = () => import(/* webpackChunkName: 'userStat' */ '@/views/statistics/userStat')

const AddUser = () => import(/* webpackChunkName: 'addUser' */ '@/views/statistics/userStat/addUser')
const ExtractRecord = () => import(/* webpackChunkName: 'extractRecord' */ '@/views/statistics/userStat/extractRecord')
const UserDataStat = () => import(/* webpackChunkName: 'userDataStat' */ '@/views/statistics/userStat/userDataStat')
const ChannelUserStat = () => import(/* webpackChunkName: 'channelUserStat' */ '@/views/statistics/userStat/channelUserStat')

const statisticsRouter = {
  path: '/statistics',
  component: Layout,
  name: 'Statistics',
  meta: { title: '数据统计', icon: 'statistics' },
  redirect: '/statistics/operateStat/baseStat',
  children: [
    {
      path: 'operateStat',
      component: OperateStat,
      name: 'OperateStat',
      meta: { title: '操作点统计', icon: 'menu' },
      redirect: '/statistics/operateStat/baseStat',
      children: [
        {
          path: 'baseStat',
          component: BaseStat,
          name: 'BaseStat',
          meta: { title: '基础操作统计' },
          redirect: '/statistics/operateStat/baseStat/baseStatIndex',
          children: [
            {
              path: 'baseStatIndex',
              component: BaseStatIndex,
              name: 'BaseStatIndex',
              meta: { title: '基础操作统计' }
            }
          ]
        }
      ]
    },
    {
      path: 'dirsirData',
      component: DirsirData,
      name: 'DirsirData',
      meta: { title: '电商数据', icon: 'menu' },
      redirect: '/statistics/dirsirData/dealSum',
      children: [
        {
          path: 'dealSum',
          component: DealSum,
          name: 'DealSum',
          meta: { title: '商城交易金额概况' }
        },
        {
          path: 'dealCount',
          component: DealCount,
          name: 'DealCount',
          meta: { title: '商城交易数量概况' }
        },
        {
          path: 'refundSum',
          component: RefundSum,
          name: 'RefundSum',
          meta: { title: '商城退款金额概况' }
        },
        {
          path: 'refundCount',
          component: RefundCount,
          name: 'RefundCount',
          meta: { title: '商城退款数量概况' }
        },
        {
          path: 'returnsSum',
          component: ReturnsSum,
          name: 'ReturnsSum',
          meta: { title: '商城退货金额概况' }
        },
        {
          path: 'returnsCount',
          component: ReturnsCount,
          name: 'ReturnsCount',
          meta: { title: '商城退货数量概况' }
        },
        {
          path: 'funnelModel',
          component: FunnelModel,
          name: 'FunnelModel',
          meta: { title: '漏斗模型' }
        },
        {
          path: 'OrderAddress',
          component: OrderAddress,
          name: 'OrderAddress',
          meta: { title: '订单地址统计' }
        }
      ]
    },
    {
      path: 'gameData',
      component: GameData,
      name: 'GameData',
      meta: { title: '游戏数据', icon: 'menu' },
      redirect: '/statistics/gameData/gameTopup',
      children: [
        {
          path: 'gameTopup',
          component: GameTopup,
          name: 'GameTopup',
          meta: { title: '游戏充值概况' },
          redirect: '/statistics/gameData/gameTopup/gameTopupIndex',
          children: [
            {
              path: 'gameTopupIndex',
              component: GameTopupIndex,
              name: 'GameTopupIndex',
              meta: { title: '游戏充值概况' }
            }
          ]
        }
      ]
    },
    {
      path: 'incomeStat',
      component: IncomeStat,
      name: 'IncomeStat',
      meta: { title: '收入统计', icon: 'menu' },
      redirect: '/statistics/incomeStat/flowStat',
      children: [
        {
          path: 'flowStat',
          component: FlowStat,
          name: 'FlowStat',
          meta: { title: '流水统计' },
          redirect: '/statistics/incomeStat/flowStat/flowStatIndex',
          children: [
            {
              path: 'flowStatIndex',
              component: FlowStatIndex,
              name: 'FlowStatIndex',
              meta: { title: '流水统计' }
            }
          ]
        }
      ]
    },
    {
      path: 'userAttr',
      component: UserAttr,
      name: 'UserAttr',
      meta: { title: '用户属性', icon: 'menu' },
      redirect: '/statistics/userAttr/invoiceList',
      children: [
        {
          path: 'invoiceList',
          component: InvoiceList,
          name: 'InvoiceList',
          meta: { title: '订单开票列表' },
          redirect: '/statistics/userAttr/invoiceList/invoiceListIndex',
          children: [
            {
              path: 'invoiceListIndex',
              component: InvoiceListIndex,
              name: 'InvoiceListIndex',
              meta: { title: '订单开票列表' }
            }
          ]
        },
        {
          path: 'averageAtk',
          component: AverageAtk,
          name: 'AverageAtk',
          meta: { title: '平均攻击力' }
        }
      ]
    },
    {
      path: 'userStat',
      component: UserStat,
      name: 'UserStat',
      meta: { title: '用户统计', icon: 'menu' },
      redirect: '/statistics/userStat/addUser',
      children: [
        {
          path: 'addUser',
          component: AddUser,
          name: 'AddUser',
          meta: { title: '新增/活跃用户' }
        },
        {
          path: 'extractRecord',
          component: ExtractRecord,
          name: 'ExtractRecord',
          meta: { title: '提现记录' }
        },
        {
          path: 'userDataStat',
          component: UserDataStat,
          name: 'UserDataStat',
          meta: { title: '用户数据统计' }
        },
        {
          path: 'channelUserStat',
          component: ChannelUserStat,
          name: 'ChannelUserStat',
          meta: { title: '渠道用户数据统计' }
        }
      ]
    }
  ]
}

export default statisticsRouter
