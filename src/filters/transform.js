/**
 * 字段转中文
 */
// 传v时返回匹配的label(用于转换中文)，不传v时返回data数组(用于el-select等数据)
const getData = (data, v) => {
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

/**
 * 反馈状态 （字段简介）
 * 系统管理 - 意见反馈管理 （一二级菜单路径）
 */
export function getFeedbackStatus (v) {
  const data = [
    { value: 1, label: '未读' },
    { value: 2, label: '无用' },
    { value: 3, label: '有待商榷' },
    { value: 4, label: '有用' },
    { value: 5, label: '将更新到系统中' }
  ]
  return getData(data, v)
}

/**
 * 推荐类型
 * 首页管理 - 商品推荐
 */
export function getRecommendCategory (v) {
  const data = [
    { value: 1, label: '老用户可见' },
    { value: 2, label: '新用户可见' }
  ]
  return getData(data, v)
}

/**
 * 弹框分类
 * 首页管理 - 首页弹框
 */
export function getDialogCategory (v) {
  const data = [
    { value: 1, label: '活动广告' },
    { value: 2, label: '普通优惠卷' },
    { value: 3, label: '赠品卷' }
  ]
  return getData(data, v)
}

/**
 * 弹框状态
 * 首页管理 - 首页弹框
 */
export function getDialogStatus (v) {
  const data = [
    { value: 1, label: '未开始' },
    { value: 2, label: '进行中' },
    { value: 3, label: '已结束' }
  ]
  return getData(data, v)
}

/**
 * 链接类型
 * 首页管理 - 浮层管理
 */
export function getLinkCategory (v) {
  const data = [
    { value: 1, label: '承接页' },
    { value: 2, label: '内置商品' },
    { value: 3, label: '跳转游戏' }
  ]
  return getData(data, v)
}

/**
 * 是否显示
 * 全局适用
 */
export function getIsShow (v) {
  const data = [
    { value: 1, label: '是' },
    { value: 2, label: '否' }
  ]
  return getData(data, v)
}

/**
 * 任务触发类型
 * 奖励管理 - 任务管理
 */
export function getTaskTriggerType (v) {
  const data = [
    { value: 1, label: '每日任务' },
    { value: 2, label: '周期任务' }
  ]
  return getData(data, v)
}

/**
 * 跳转类型
 * 奖励管理 - 任务管理
 */
export function getJumpType (v) {
  const data = [
    { value: 1, label: '商城' },
    { value: 2, label: '红包庄园' },
    { value: 3, label: '砍价' }
  ]
  return getData(data, v)
}

/**
 * 任务奖励
 * 奖励管理 - 任务管理
 */
export function getTaskReward (v) {
  const data = [
    { value: 1, label: '打家劫舍' },
    { value: 2, label: '拔刀相助' },
    { value: 3, label: '友情互助' },
    { value: 4, label: '家财万贯' },
    { value: 5, label: '走马观花' },
    { value: 6, label: '物美价廉' }
  ]
  return getData(data, v)
}

/**
 * 装备类型
 * 奖励管理 - 奖励管理
 * 用户管理 - 用户管理
 */
export function getEquipType (v) {
  const data = [
    { value: 1, label: '武器' },
    { value: 2, label: '帽子' },
    { value: 3, label: '衣服' },
    { value: 4, label: '裤子' },
    { value: 5, label: '鞋子' },
    { value: 6, label: '戒指' },
    { value: 7, label: '药水' }
  ]
  return getData(data, v)
}

/**
 * 评论状态
 * 用户管理 - 用户管理
 */
export function getCommentType (v) {
  const data = [
    { value: 1, label: '好评' },
    { value: 2, label: '中评' },
    { value: 3, label: '差评' }
  ]
  return getData(data, v)
}

/**
 * 操作方式
 * 用户管理 - 用户管理
 */
export function getOperateType (v) {
  const data = [
    { value: 1, label: '全部' },
    { value: 2, label: '增加' },
    { value: 3, label: '修改' },
    { value: 4, label: '删除' },
    { value: 5, label: '访问' }
  ]
  return getData(data, v)
}

/**
 * 分佣类型
 * 用户管理 - 分销管理
 */
export function getDivideType (v) {
  const data = [
    { value: 1, label: '游戏充值金额' }
  ]
  return getData(data, v)
}

/**
 * 分销体系玩家类型
 * 用户管理 - 分销管理
 */
export function getDrpLevel (v) {
  const data = [
    { value: 0, label: '全部' },
    { value: 1, label: '玩家' },
    { value: 2, label: '庄主' },
    { value: 3, label: '星级庄主' }
  ]
  return getData(data, v)
}

/**
 * 分销体系用户状态
 * 用户管理 - 分销管理
 */
export function getDrpUserStatus (v) {
  const data = [
    { value: 0, label: '全部' },
    { value: 1, label: '待晋升' },
    { value: 2, label: '待审核' },
    { value: 3, label: '正常' },
    { value: 4, label: '冻结' }
  ]
  return getData(data, v)
}
