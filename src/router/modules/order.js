/*
 * @Descripttion:
 * @version:
 * @Author: wangshengxian
 * @Date: 2020-01-10 15:12:03
 * @LastEditors  : wangshengxian
 * @LastEditTime : 2020-01-11 10:14:57
 */
/**
 * 订单管理
*/
import Layout from '@/views/layout'

// 待处理订单
const WaitDispose = () => import(/* webpackChunkName: 'waitDispose' */ '@/views/order/waitDispose')
// 全部订单
const TotalOrder = () => import(/* webpackChunkName: 'totalOrder' */ '@/views/order/waitDispose/totalOrder')
const TotalOrderIndex = () => import(/* webpackChunkName: 'totalOrderIndex' */ '@/views/order/waitDispose/totalOrder/indexPage')
const OrderDetails = () => import(/* webpackChunkName: 'orderDetails */ '@/views/order/waitDispose/totalOrder/orderDetails')
// 待付款订单
const WaitPayOrder = () => import(/* webpackChunkName: 'waitPayOrder */ '@/views/order/waitDispose/waitPayOrder')
// 已付款/待发货订单
const AlreadyPayOrder = () => import(/* webpackChunkName: 'alreadyPayOrder */ '@/views/order/waitDispose/alreadyPayOrder')
// 已发货订单
const ShippedOrder = () => import(/* webpackChunkName: 'shippedOrder */ '@/views/order/waitDispose/shippedOrder')
// 售后订单
const AfterSaleOrder = () => import(/* webpackChunkName: 'afterSaleOrder' */ '@/views/order/waitDispose/afterSaleOrder')

// 历史订单
const HistoryOrder = () => import(/* webpackChunkName: 'historyOrder' */ '@/views/order/historyOrder')
// 所有取消订单
const AllCancelOrder = () => import(/* webpackChunkName: 'allCancelOrder' */ '@/views/order/historyOrder/allCancelOrder')
const AllCompleteOrder = () => import(/* webpackChunkName: 'allCompleteOrder' */ '@/views/order/historyOrder/allCompleteOrder')
const AllOrder = () => import(/* webpackChunkName: 'allOrder' */ '@/views/order/historyOrder/allOrder')

// 订单统计
const OrderStatistics = () => import(/* webpackChunkName: 'orderStatistics' */ '@/views/order/orderStatistics')
// 订单日统计
const DailyStat = () => import(/* webpackChunkName: 'dailyStat' */ '@/views/order/orderStatistics/dailyStat')
// 订单月统计
const MonthlyStat = () => import(/* webpackChunkName: 'monthlyStat' */ '@/views/order/orderStatistics/monthlyStat')
// 订单年统计
const YearlyStat = () => import(/* webpackChunkName: 'yearlyStat' */ '@/views/order/orderStatistics/yearlyStat')
// 导出订单
const ExportOrder = () => import(/* webpackChunkName: 'exportOrder' */ '@/views/order/orderStatistics/exportOrder')

// 砍价记录
const BargainRecord = () => import(/* webpackChunkName: 'bargainRecord' */ '@/views/order/bargainRecord')
// 砍价记录列表
const RecordList = () => import(/* webpackChunkName: 'recordList' */ '@/views/order/bargainRecord/recordList')
const RecordListIndex = () => import(/* webpackChunkName: 'recordListIndex' */ '@/views/order/bargainRecord/recordList/indexPage')

// 评价管理
const EvaluateManage = () => import(/* webpackChunkName: 'evaluateManage' */ '@/views/order/evaluateManage')
// 评价列表
const EvaluateList = () => import(/* webpackChunkName: 'evaluateList */ '@/views/order/evaluateManage/evaluateList')
const EvaluateListIndex = () => import(/* webpackChunkName: 'evaluateListIndex */ '@/views/order/evaluateManage/evaluateList/indexPage')

const orderRouter = {
  path: '/order',
  component: Layout,
  redirect: '/order/waitDispose/totalOrder',
  name: 'Order',
  meta: {
    title: '订单管理',
    icon: 'shopping'
  },
  children: [
    {
      path: 'waitDispose',
      component: WaitDispose,
      name: 'WaitDispose',
      meta: { title: '待处理订单', icon: 'menu' },
      redirect: '/order/waitDispose/totalOrder',
      children: [
        {
          path: 'totalOrder',
          component: TotalOrder,
          name: 'TotalOrder',
          meta: { title: '全部订单' },
          redirect: '/order/waitDispose/totalOrder/totalOrderIndex',
          children: [
            {
              path: 'totalOrderIndex',
              component: TotalOrderIndex,
              name: 'TotalOrderIndex',
              meta: { title: '全部订单' }
            },
            {
              path: 'orderDetails',
              component: OrderDetails,
              name: 'OrderDetails',
              meta: { title: '订单详情', activeMenu: '/order/waitDispose/totalOrder/totalOrderIndex' },
              hidden: true
            }
          ]
        },
        {
          path: 'waitPayOrder',
          component: WaitPayOrder,
          name: 'WaitPayOrder',
          meta: { title: '待付款订单' }
        },
        {
          path: 'alreadyPayOrder',
          component: AlreadyPayOrder,
          name: 'AlreadyPayOrder',
          meta: { title: '已付款/待发货订单' }
        },
        {
          path: 'shippedOrder',
          component: ShippedOrder,
          name: 'ShippedOrder',
          meta: { title: '已发货订单' }
        },
        {
          path: 'afterSaleOrder',
          component: AfterSaleOrder,
          name: 'AfterSaleOrder',
          meta: { title: '售后订单' }
        }
      ]
    },
    {
      path: 'historyOrder',
      component: HistoryOrder,
      name: 'HistoryOrder',
      meta: { title: '历史订单', icon: 'menu' },
      redirect: '/order/historyOrder/allCancelOrder',
      children: [
        {
          path: 'allCancelOrder',
          component: AllCancelOrder,
          name: 'AllCancelOrder',
          meta: { title: '所有取消订单' }
        },
        {
          path: 'allCompleteOrder',
          component: AllCompleteOrder,
          name: 'AllCompleteOrder',
          meta: { title: '所有完成订单' }
        },
        {
          path: 'allOrder',
          component: AllOrder,
          name: 'AllOrder',
          meta: { title: '所有订单' }
        }
      ]
    },
    {
      path: 'orderStatistics',
      component: OrderStatistics,
      name: 'OrderStatistics',
      meta: { title: '订单统计', icon: 'menu' },
      redirect: '/order/orderStatistics/dailyStat',
      children: [
        {
          path: 'dailyStat',
          component: DailyStat,
          name: 'DailyStat',
          meta: { title: '订单日统计' }
        },
        {
          path: 'monthlyStat',
          component: MonthlyStat,
          name: 'MonthlyStat',
          meta: { title: '订单月统计' }
        },
        {
          path: 'yearlyStat',
          component: YearlyStat,
          name: 'YearlyStat',
          meta: { title: '订单年统计' }
        },
        {
          path: 'exportOrder',
          component: ExportOrder,
          name: 'ExportOrder',
          meta: { title: '导出订单' }
        }
      ]
    },
    {
      path: 'bargainRecord',
      component: BargainRecord,
      name: 'BargainRecord',
      meta: { title: '砍价记录', icon: 'menu' },
      redirect: '/order/bargainRecord/recordList',
      children: [
        {
          path: 'recordList',
          component: RecordList,
          name: 'RecordList',
          meta: { title: '砍价记录列表' },
          redirect: '/order/bargainRecord/recordList/recordListIndex',
          children: [
            {
              path: 'recordListIndex',
              component: RecordListIndex,
              name: 'RecordListIndex',
              meta: { title: '砍价记录列表' }
            }
          ]
        }
      ]
    },
    {
      path: 'evaluateManage',
      component: EvaluateManage,
      name: 'EvaluateManage',
      meta: { title: '评价管理', icon: 'menu' },
      redirect: '/order/evaluateManage/evaluateList',
      children: [
        {
          path: 'evaluateList',
          component: EvaluateList,
          name: 'EvaluateList',
          meta: { title: '评价列表' },
          redirect: '/order/evaluateManage/evaluateList/evaluateListIndex',
          children: [
            {
              path: 'evaluateListIndex',
              component: EvaluateListIndex,
              name: 'EvaluateListIndex',
              meta: { title: '评价列表' }
            }
          ]
        }
      ]
    }
  ]
}

export default orderRouter
