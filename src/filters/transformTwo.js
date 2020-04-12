/**
 * 字段转中文
 * TODO ==> 只作开发阶段临时使用，后期直接并入transform.js文件中
 */
// 传v时返回匹配的label(用于转换中文)，不传v时返回data数组(用于el-select数据)
function getData (data, v) {
  if (v === undefined) {
    return data
  } else {
    for (let i = 0; i < data.length; i++) {
      if (data[i].value === v) {
        return data[i].label
      }
    }
  }
}

// 首页管理
export function getHomeLinkType (v) {
  const data = [
    { value: 1, label: '承接页' },
    { value: 2, label: '分类页' }
  ]
  return getData(data, v)
}

// 首页管理 - 活动card - 活动card列表
export function getCardPlace (v) {
  const data = [
    { value: 1, label: '左侧竖图' },
    { value: 2, label: '右侧横图-上' },
    { value: 3, label: '右侧横图-下' }
  ]
  return getData(data, v)
}

// 商品管理 - 商品分类数据
export function getGoodsCategory (v) {
  const data = [
    { value: 1, label: '零食水饮' },
    { value: 2, label: '乳品冲调' },
    { value: 3, label: '家居日用' },
    { value: 4, label: '美妆个护' },
    { value: 5, label: '服饰箱包' },
    { value: 6, label: '母婴用品' },
    { value: 7, label: '数码电器' },
    { value: 8, label: '会飞的个' }
  ]
  return getData(data, v)
}

// 商品管理 - 商品状态数据
export function getGoodsStatus (v) {
  const data = [
    { value: 1, label: '出售中' },
    { value: 2, label: '库存报警' },
    { value: 3, label: '缺货中' }
  ]
  return getData(data, v)
}

// 商品管理 - 商品同步状态数据
export function getSyncStatus (v) {
  const data = [
    { value: 1, label: '未同步' },
    { value: 2, label: '已同步' }
  ]
  return getData(data, v)
}

// 商品管理 - 商品操作记录 - 操作方式
export function getOperateMode (v) {
  const data = [
    { value: 1, label: '增加' },
    { value: 2, label: '修改' },
    { value: 3, label: '删除' },
    { value: 4, label: '访问' }
  ]
  return getData(data, v)
}

// 商品管理 - 商品品牌 - 品牌banner列表
export function getBrandBanner (v) {
  const data = [
    { value: 1, label: '全幅大图（600px*600px)' },
    { value: 2, label: '半幅中图(300px*300px)' },
    { value: 3, label: '1/3小图(200px*200px)' }
  ]
  return getData(data, v)
}

/**
 * 装备类型
 * 商品管理 - 道具管理 - 道具列表
*/
export function getEquipType (v) {
  const data = [
    { value: 1, label: '武器' },
    { value: 2, label: '帽子' },
    { value: 3, label: '衣服' },
    { value: 4, label: '裤子' },
    { value: 5, label: '鞋子' },
    { value: 6, label: '戒子' },
    { value: 7, label: '药水' },
    { value: 8, label: '宝石' },
    { value: 9, label: '金币' }
  ]
  return getData(data, v)
}

/**
 * 订单状态
 * 订单管理 - 待处理订单/历史订单 - 订单列表
*/
export function getOrderStatus (v) {
  const data = [
    { value: 0, label: '待付款' },
    { value: 1, label: '已付款' },
    { value: 2, label: '待收货' },
    { value: 3, label: '待评价' },
    { value: 4, label: '已关闭' },
    { value: 5, label: '退款成功' }
  ]
  return getData(data, v)
}

/**
 * 申请状态
 * 订单管理 - 待处理订单 - 售后订单
*/
export function getApplyStatus (v) {
  const data = [
    { value: 1, label: '未处理' },
    { value: 2, label: '已退款' },
    { value: 3, label: '已拒绝' },
    { value: 4, label: '已撤销' }
  ]
  return getData(data, v)
}
/**
 * 退货退款状态
 * 订单管理 - 待处理订单 - 售后订单
 * */
export function getReturnGoodsStatus (v) {
  const data = [
    { value: 1, label: '未处理' },
    { value: 2, label: '等待填写退换物流' },
    { value: 3, label: '货物寄回中' },
    { value: 4, label: '货物已收到,等待退款' },
    { value: 5, label: '已退款' },
    { value: 6, label: '已拒绝' },
    { value: 7, label: '已撤销' }
  ]
  return getData(data, v)
}

/**
 * 换货状态
 * 订单管理 - 待处理订单 - 售后订单
 * */
export function getExchangeGoodsStatus (v) {
  const data = [
    { value: 1, label: '未处理' },
    { value: 2, label: '等待填写退换物流' },
    { value: 3, label: '货物寄回中' },
    { value: 4, label: '货物已收到,等待换货' },
    { value: 5, label: '已退款' },
    { value: 6, label: '已拒绝' },
    { value: 7, label: '已撤销' }
  ]
  return getData(data, v)
}

/**
 * 历史订单状态
 * 订单管理 - 订单统计 - 导出订单
*/
export function getHistoryOrderStatus (v) {
  const data = [
    { value: 1, label: '已完成' },
    { value: 2, label: '已关闭' },
    { value: 3, label: '已退货' }
  ]
  return getData(data, v)
}

/**
 * 评论状态
 * 订单管理 - 评论管理 - 评论列表
*/
export function getEvaluateStatus (v) {
  const data = [
    { value: 1, label: '所有人显示' },
    { value: 2, label: '对自己显示' }
  ]
  return getData(data, v)
}
