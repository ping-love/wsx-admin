/**
 * 商品管理
 * */
import Layout from '@/views/layout'

// 1、商品管理
const GoodsManage = () => import(/* webpackChunkName: 'goodsManage' */ '@/views/goods/goodsManage')
// 全部商品
const GoodsTotal = () => import(/* webpackChunkName: 'goodsTotal' */ '@/views/goods/goodsManage/goodsTotal')
const GoodsTotalIndex = () => import(/* webpackChunkName: 'goodsTotalIndex' */ '@/views/goods/goodsManage/goodsTotal/indexPage')
const EditGoods = () => import(/* webpackChunkName: 'editGoods' */ '@/views/goods/goodsManage/goodsTotal/editGoods')
const GoodsRecord = () => import(/* webpackChunkName: 'goodsRecord' */ '@/views/goods/goodsManage/goodsTotal/goodsRecord')

// 出售中的商品
const GoodsSell = () => import(/* webpackChunkName: 'goodsSell' */ '@/views/goods/goodsManage/goodsSell')
const GoodsSellIndex = () => import(/* webpackChunkName: 'goodsSellIndex' */ '@/views/goods/goodsManage/goodsSell/indexPage')

// 仓库中的商品
const GoodsStock = () => import(/* webpackChunkName: 'goodsStock' */ '@/views/goods/goodsManage/goodsStock')
const GoodsStockIndex = () => import(/* webpackChunkName: 'goodsStockIndex' */ '@/views/goods/goodsManage/goodsStock/indexPage')

// 库存报警的商品
const GoodsUnderStock = () => import(/* webpackChunkName: 'goodsUnderStock' */ '@/views/goods/goodsManage/goodsUnderStock')
const GoodsUnderStockIndex = () => import(/* webpackChunkName: 'goodsUnderStockIndex' */ '@/views/goods/goodsManage/goodsUnderStock/indexPage')

// 售罄的商品
const GoodsSellOut = () => import(/* webpackChunkName: 'goodsSellOut' */ '@/views/goods/goodsManage/goodsSellOut')
const GoodsSellOutIndex = () => import(/* webpackChunkName: 'goodsSellOutIndex' */ '@/views/goods/goodsManage/goodsSellOut/indexPage')

// 抢购的商品
const GoodsSnapUp = () => import(/* webpackChunkName: 'goodsSnapUp' */ '@/views/goods/goodsManage/goodsSnapUp')
const GoodsSnapUpIndex = () => import(/* webpackChunkName: 'goodsSnapUpIndex' */ '@/views/goods/goodsManage/goodsSnapUp/indexPage')
const SnapUpActivityDetails = () => import(/* webpackChunkName: 'snapUpActivityDetails' */ '@/views/goods/goodsManage/goodsSnapUp/snapUpActivityDetails')

// 添加商品
const GoodsAdd = () => import(/* webpackChunkName: 'goodsAdd' */ '@/views/goods/goodsManage/goodsAdd')
const GoodsAddIndex = () => import(/* webpackChunkName: 'goodsAddIndex' */ '@/views/goods/goodsManage/goodsAdd/indexPage')

// 供应商列表
const ProvidersList = () => import(/* webpackChunkName: 'providersList' */ '@/views/goods/goodsManage/providersList')
const ProvidersListIndex = () => import(/* webpackChunkName: 'providersListIndex' */ '@/views/goods/goodsManage/providersList/indexPage')

// 2、商品品牌
const GoodsBrand = () => import(/* webpackChunkName: 'goodsBrand' */ '@/views/goods/goodsBrand')
// 品牌列表
const BrandList = () => import(/* webpackChunkName: 'brandList' */ '@/views/goods/goodsBrand/brandList')
const BrandListIndex = () => import(/* webpackChunkName: 'brandListIndex' */ '@/views/goods/goodsBrand/brandList/indexPage')
const AddGoodsBrand = () => import(/* webpackChunkName: 'addGoodsBrand' */ '@/views/goods/goodsBrand/brandList/addGoodsBrand')
const EditGoodsBrand = () => import(/* webpackChunkName: 'editGoodsBrand' */ '@/views/goods/goodsBrand/brandList/editGoodsBrand')

// 品牌banner列表
const BrandBannerList = () => import(/* webpackChunkName: 'brandBannerList' */ '@/views/goods/goodsBrand/brandBannerList')
const BrandBannerListIndex = () => import(/* webpackChunkName: 'brandBannerListIndex' */ '@/views/goods/goodsBrand/brandBannerList/indexPage')
const AddBrandBanner = () => import(/* webpackChunkName: 'addBrandBanner' */ '@/views/goods/goodsBrand/brandBannerList/addBrandBanner')
const EditBrandBanner = () => import(/* webpackChunkName: 'editBrandBanner' */ '@/views/goods/goodsBrand/brandBannerList/editBrandBanner')

// 出售中的商品
const BrandGoodsSell = () => import(/* webpackChunkName: 'brandGoodsSell' */ '@/views/goods/goodsBrand/brandGoodsSell')
const BrandGoodsSellIndex = () => import(/* webpackChunkName: 'brandGoodsSellIndex' */ '@/views/goods/goodsBrand/brandGoodsSell/indexPage')

// 仓库中的商品
const BrandGoodsStock = () => import(/* webpackChunkName: 'brandGoodsStock' */ '@/views/goods/goodsBrand/brandGoodsStock')
const BrandGoodsStockIndex = () => import(/* webpackChunkName: 'brandGoodsStockIndex' */ '@/views/goods/goodsBrand/brandGoodsStock/indexPage')

// 3、商品分类
const GoodsCategory = () => import(/* webpackChunkName: 'goodsCategory' */ '@/views/goods/goodsCategory')
// 分类列表
const CategoryList = () => import(/* webpackChunkName: 'categoryList' */ '@/views/goods/goodsCategory/categoryList')
const CategoryListIndex = () => import(/* webpackChunkName: 'categoryListIndex' */ '@/views/goods/goodsCategory/categoryList/indexPage')

// 4、商品规格属性
const GoodsSpecification = () => import(/* webpackChunkName: 'goodsSpecification' */ '@/views/goods/goodsSpecification')
// 分类列表
const CategoryListNew = () => import(/* webpackChunkName: 'categoryListNew' */ '@/views/goods/goodsSpecification/categoryListNew')
const CategoryListNewIndex = () => import(/* webpackChunkName: 'categoryListNewIndex' */ '@/views/goods/goodsSpecification/categoryListNew/indexPage')
const SecondLevelCategory = () => import(/* webpackChunkName: 'secondLevelCategory' */ '@/views/goods/goodsCategory/categoryList/secondLevelCategory')
const ThreeLevelCategory = () => import(/* webpackChunkName: 'threeLevelCategory' */ '@/views/goods/goodsCategory/categoryList/threeLevelCategory')
const AddCategory = () => import(/* webpackChunkName: 'addCategory' */ '@/views/goods/goodsCategory/categoryList/addCategory')
const EditCategory = () => import(/* webpackChunkName: 'editCategory' */ '@/views/goods/goodsCategory/categoryList/editCategory')

// 5、道具管理
const PropManage = () => import(/* webpackChunkName: 'propManage' */ '@/views/goods/propManage')
// 道具列表
const PropList = () => import(/* webpackChunkName: 'propList' */ '@/views/goods/propManage/propList')
// 添加道具
const AddProp = () => import(/* webpackChunkName: 'addProp' */ '@/views/goods/propManage/addProp')

// 6、竞价管理
const BiddingManage = () => import(/* webpackChunkName: 'biddingManage' */ '@/views/goods/biddingManage')
// 竞价中的
const InBidding = () => import(/* webpackChunkName: 'inBidding' */ '@/views/goods/biddingManage/inBidding')
const InBiddingIndex = () => import(/* webpackChunkName: 'inBiddingIndex' */ '@/views/goods/biddingManage/inBidding/indexPage')
const BiddingDetail = () => import(/* webpackChunkName: 'biddingDetail' */ '@/views/goods/biddingManage/inBidding/biddingDetail')
// 竞拍结束的
const EndBidding = () => import(/* webpackChunkName: 'endBidding */ '@/views/goods/biddingManage/endBidding')

// 7、库存管理
const StockManage = () => import(/* webpackChunkName: 'stockManage' */ '@/views/goods/stockManage')
// 库存明细
const StockDetail = () => import(/* webpackChunkName: 'stockDetail' */ '@/views/goods/stockManage/stockDetail')
// 新增库存
const AddStock = () => import(/* webpackChunkName: 'addStock' */ '@/views/goods/stockManage/addStock')

const goodsRouter = {
  path: '/goods',
  component: Layout,
  redirect: '/goods/goodsManage/goodsTotal',
  name: 'Goods',
  meta: {
    title: '商品管理',
    icon: 'goods'
  },
  children: [
    {
      path: 'goodsManage',
      component: GoodsManage,
      name: 'GoodsManage',
      meta: { title: '商品管理', icon: 'menu' },
      redirect: '/goods/goodsManage/goodsTotal',
      children: [
        {
          path: 'goodsTotal',
          component: GoodsTotal,
          name: 'GoodsTotal',
          meta: { title: '全部商品' },
          redirect: '/goods/goodsManage/goodsTotal/goodsTotalIndex',
          children: [
            {
              path: 'goodsTotalIndex',
              component: GoodsTotalIndex,
              name: 'GoodsTotalIndex',
              meta: { title: '全部商品' }
            },
            {
              path: 'editGoods',
              component: EditGoods,
              name: 'EditGoods',
              meta: { title: '编辑商品', activeMenu: '/goods/goodsManage/goodsTotal/goodsTotalIndex' },
              hidden: true
            },
            {
              path: 'goodsRecord',
              component: GoodsRecord,
              name: 'GoodsRecord',
              meta: { title: '商品操作记录', activeMenu: '/goods/goodsManage/goodsTotal/goodsTotalIndex' },
              hidden: true
            }
          ]
        },
        {
          path: 'goodsSell',
          component: GoodsSell,
          name: 'GoodsSell',
          meta: { title: '出售中的商品' },
          redirect: '/goods/goodsManage/goodsSell/goodsSellIndex',
          children: [
            {
              path: 'goodsSellIndex',
              component: GoodsSellIndex,
              name: 'GoodsSellIndex',
              meta: { title: '出售中的商品' }
            }
          ]
        },
        {
          path: 'goodsStock',
          component: GoodsStock,
          name: 'GoodsStock',
          meta: { title: '仓库中的商品' },
          redirect: '/goods/goodsManage/goodsStock/goodsStockIndex',
          children: [
            {
              path: 'goodsStockIndex',
              component: GoodsStockIndex,
              name: 'GoodsStockIndex',
              meta: { title: '仓库中的商品' }
            }
          ]
        },
        {
          path: 'goodsUnderStock',
          component: GoodsUnderStock,
          name: 'GoodsUnderStock',
          meta: { title: '仓库报警的商品' },
          redirect: '/goods/goodsManage/goodsUnderStock/goodsUnderStockIndex',
          children: [
            {
              path: 'goodsUnderStockIndex',
              component: GoodsUnderStockIndex,
              name: 'GoodsUnderStockIndex',
              meta: { title: '仓库报警的商品' }
            }
          ]
        },
        {
          path: 'goodsSellOut',
          component: GoodsSellOut,
          name: 'GoodsSellOut',
          meta: { title: '售罄的商品' },
          redirect: '/goods/goodsManage/goodsSellOut/goodsSellOutIndex',
          children: [
            {
              path: 'goodsSellOutIndex',
              component: GoodsSellOutIndex,
              name: 'GoodsSellOutIndex',
              meta: { title: '售罄的商品' }
            }
          ]
        },
        {
          path: 'goodsSnapUp',
          component: GoodsSnapUp,
          name: 'GoodsSnapUp',
          meta: { title: '抢购的商品' },
          redirect: '/goods/goodsManage/goodsSnapUp/goodsSnapUpIndex',
          children: [
            {
              path: 'goodsSnapUpIndex',
              component: GoodsSnapUpIndex,
              name: 'GoodsSnapUpIndex',
              meta: { title: '抢购的商品' }
            },
            {
              path: 'snapUpActivityDetails',
              component: SnapUpActivityDetails,
              name: 'SnapUpActivityDetails',
              meta: { title: '抢购活动明细', activeMenu: '/goods/goodsManage/goodsSnapUp/goodsSnapUpIndex' },
              hidden: true
            }
          ]
        },
        {
          path: 'goodsAdd',
          component: GoodsAdd,
          name: 'GoodsAdd',
          meta: { title: '添加商品' },
          redirect: '/goods/goodsManage/goodsAdd/goodsAddIndex',
          children: [
            {
              path: 'goodsAddIndex',
              component: GoodsAddIndex,
              name: 'GoodsAddIndex',
              meta: { title: '添加商品' }
            }
          ]
        },
        {
          path: 'providersList',
          component: ProvidersList,
          name: 'ProvidersList',
          meta: { title: '供应商列表' },
          redirect: '/goods/goodsManage/providersList/providersListIndex',
          children: [
            {
              path: 'providersListIndex',
              component: ProvidersListIndex,
              name: 'ProvidersListIndex',
              meta: { title: '供应商列表' }
            }
          ]
        }
      ]
    },
    {
      path: 'goodsBrand',
      component: GoodsBrand,
      name: 'GoodsBrand',
      meta: { title: '商品品牌', icon: 'menu' },
      redirect: '/goods/goodsBrand/brandList',
      children: [
        {
          path: 'brandList',
          component: BrandList,
          name: 'BrandList',
          meta: { title: '品牌列表' },
          redirect: '/goods/goodsBrand/brandList/brandListIndex',
          children: [
            {
              path: 'brandListIndex',
              component: BrandListIndex,
              name: 'BrandListIndex',
              meta: { title: '品牌列表' }
            },
            {
              path: 'addGoodsBrand',
              component: AddGoodsBrand,
              name: 'AddGoodsBrand',
              meta: { title: '添加商品品牌', activeMenu: '/goods/goodsBrand/brandList/brandListIndex' },
              hidden: true
            },
            {
              path: 'editGoodsBrand',
              component: EditGoodsBrand,
              name: 'EditGoodsBrand',
              meta: { title: '编辑商品品牌', activeMenu: '/goods/goodsBrand/brandList/brandListIndex' },
              hidden: true
            }
          ]
        },
        {
          path: 'brandBannerList',
          component: BrandBannerList,
          name: 'BrandBannerList',
          meta: { title: '品牌banner列表' },
          redirect: '/goods/goodsBrand/brandBannerList/brandBannerListIndex',
          children: [
            {
              path: 'brandBannerListIndex',
              component: BrandBannerListIndex,
              name: 'BrandBannerListIndex',
              meta: { title: '品牌banner列表', activeMenu: '/goods/goodsBrand/brandBannerList/brandBannerListIndex' }
            },
            {
              path: 'addBrandBanner',
              component: AddBrandBanner,
              name: 'AddBrandBanner',
              meta: { title: '添加品牌banner', activeMenu: '/goods/goodsBrand/brandBannerList/brandBannerListIndex' },
              hidden: true
            },
            {
              path: 'editBrandBanner',
              component: EditBrandBanner,
              name: 'EditBrandBanner',
              meta: { title: '编辑品牌banner', activeMenu: '/goods/goodsBrand/brandBannerList/brandBannerListIndex' },
              hidden: true
            }
          ]
        },

        {
          path: 'brandGoodsSell',
          component: BrandGoodsSell,
          name: 'BrandGoodsSell',
          meta: { title: '出售中的商品' },
          redirect: '/goods/goodsBrand/brandGoodsSell/brandGoodsSellIndex',
          children: [
            {
              path: 'brandGoodsSellIndex',
              component: BrandGoodsSellIndex,
              name: 'BrandGoodsSellIndex',
              meta: { title: '出售中的商品', activeMenu: '/goods/goodsBrand/brandGoodsSell/brandGoodsSellIndex' }
            }
          ]
        },

        {
          path: 'brandGoodsStock',
          component: BrandGoodsStock,
          name: 'BrandGoodsStock',
          meta: { title: '仓库中的商品' },
          redirect: '/goods/goodsBrand/brandGoodsStock/brandGoodsStockIndex',
          children: [
            {
              path: 'brandGoodsStockIndex',
              component: BrandGoodsStockIndex,
              name: 'BrandGoodsStockIndex',
              meta: { title: '仓库中的商品', activeMenu: '/goods/goodsBrand/brandGoodsStock/brandGoodsStockIndex' }
            }
          ]
        }

      ]
    },
    {
      path: 'goodsCategory',
      component: GoodsCategory,
      name: 'GoodsCategory',
      meta: { title: '商品分类', icon: 'menu' },
      redirect: '/goods/goodsCategory/categoryList',
      children: [
        {
          path: 'categoryList',
          component: CategoryList,
          name: 'CategoryList',
          meta: { title: '分类列表' },
          redirect: '/goods/goodsCategory/categoryList/categoryListIndex',
          children: [
            {
              path: 'categoryListIndex',
              component: CategoryListIndex,
              name: 'CategoryListIndex',
              meta: { title: '分类列表' }
            },
            {
              path: 'secondLevelCategory',
              component: SecondLevelCategory,
              name: 'SecondLevelCategory',
              meta: { title: '二级分类列表', activeMenu: '/goods/goodsCategory/categoryList/categoryListIndex' },
              hidden: true
            },
            {
              path: 'threeLevelCategory',
              component: ThreeLevelCategory,
              name: 'ThreeLevelCategory',
              meta: { title: '三级分类列表', activeMenu: '/goods/goodsCategory/categoryList/categoryListIndex' },
              hidden: true
            },
            {
              path: 'addCategory',
              component: AddCategory,
              name: 'AddCategory',
              meta: { title: '添加分类', activeMenu: '/goods/goodsCategory/categoryList/categoryListIndex' },
              hidden: true
            },
            {
              path: 'editCategory',
              component: EditCategory,
              name: 'EditCategory',
              meta: { title: '编辑分类', activeMenu: '/goods/goodsCategory/categoryList/categoryListIndex' },
              hidden: true
            }
          ]
        }
      ]
    },
    {
      path: 'goodsSpecification',
      component: GoodsSpecification,
      name: 'GoodsSpecification',
      meta: { title: '商品规格属性', icon: 'menu' },
      redirect: '/goods/goodsSpecification/categoryListNew',
      children: [
        {
          path: 'categoryListNew',
          component: CategoryListNew,
          name: 'CategoryListNew',
          meta: { title: '商品类型列表(新)' },
          redirect: '/goods/goodsCategory/categoryListNew/categoryListNewIndex',
          children: [
            {
              path: 'categoryListNewIndex',
              component: CategoryListNewIndex,
              name: 'CategoryListNewIndex',
              meta: { title: '商品类型列表(新)', activeMenu: '/goods/goodsCategory/categoryListNew/categoryListNewIndex' }
            }
          ]
        }
      ]
    },
    {
      path: 'propManage',
      component: PropManage,
      name: 'PropManage',
      meta: { title: '道具管理', icon: 'menu' },
      redirect: '/goods/propManage/propList',
      children: [
        {
          path: 'propList',
          component: PropList,
          name: 'PropList',
          meta: { title: '道具列表' }
        },
        {
          path: 'addProp',
          component: AddProp,
          name: 'AddProp',
          meta: { title: '添加道具' }
        }
      ]
    },
    {
      path: 'biddingManage',
      component: BiddingManage,
      name: 'BiddingManage',
      meta: { title: '竞价管理', icon: 'menu' },
      redirect: '/goods/biddingManage/inBidding',
      children: [
        {
          path: 'inBidding',
          component: InBidding,
          name: 'InBidding',
          meta: { title: '竞价中的' },
          redirect: '/goods/biddingManage/inBidding/inBiddingIndex',
          children: [
            {
              path: 'inBiddingIndex',
              component: InBiddingIndex,
              name: 'InBiddingIndex',
              meta: { title: '竞价中的' }
            },
            {
              path: 'biddingDetail',
              component: BiddingDetail,
              name: 'BiddingDetail',
              meta: { title: '查看竞价详情', activeMenu: '/goods/biddingManage/inBidding/inBiddingIndex' },
              hidden: true
            }
          ]
        },
        {
          path: 'endBidding',
          component: EndBidding,
          name: 'EndBidding',
          meta: { title: '竞拍结束的' }
        }
      ]
    },
    {
      path: 'stockManage',
      component: StockManage,
      name: 'StockManage',
      meta: { title: '库存管理', icon: 'menu' },
      redirect: '/goods/stockManage/stockDetail',
      children: [
        {
          path: 'stockDetail',
          component: StockDetail,
          name: 'StockDetail',
          meta: { title: '库存明细' }
        },
        {
          path: 'addStock',
          component: AddStock,
          name: 'AddStock',
          meta: { title: '新增库存' }
        }
      ]
    }
  ]
}

export default goodsRouter
