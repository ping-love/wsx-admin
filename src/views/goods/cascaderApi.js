// 级联选择器动态加载config配置，通过leaf字段来判断是否有下一级
// ==> leaf ==> true 没有下一级，反之有下一级

// 商品管理 ==> 添加商品 ==> 商品前端分类 动态获取数据
export function cascaderGoodsCategory (node) {
  let { data, level } = node
  console.log('111', data)
  let res = {
    code: 0,
    data: {
      list: [
        { value: '11', label: '分类-坚果1', leaf: level >= 2, children: [] },
        { value: '12', label: '分类-薯片1', leaf: level >= 2, children: [] }
      ]
    }
  }
  data['children'] = res.data.list
  console.log('222', data)
  return data
}
/**
 * 商品管理 ==> 添加商品 ==> 商品类型 动态获取数据
 * */
export function cascaderGoodsType (data) {
  console.log('111', data)
  let res = {
    code: 0,
    data: {
      list: [
        { value: '11', label: '类别-坚果2', leaf: true },
        { value: '12', label: '类别-薯片3', leaf: true }
      ]
    }
  }
  data['children'] = res.data.list
  console.log('222', data)
  return data
}
