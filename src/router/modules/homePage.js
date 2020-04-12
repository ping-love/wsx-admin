/**
 * 首页管理
 * */

import Layout from '@/views/layout'

// banner管理
const BannerManage = () => import(/* webpackChunkName: 'bannerManage' */ '@/views/homePage/bannerManage')

const HomeBanner = () => import(/* webpackChunkName: 'homeBanner' */ '@/views/homePage/bannerManage/homeBanner')
const HomeBannerIndex = () => import(/* webpackChunkName: 'homeBannerIndex' */ '@/views/homePage/bannerManage/homeBanner/indexPage')
const AddHomeBanner = () => import(/* webpackChunkName: 'addHomeBanner' */ '@/views/homePage/bannerManage/homeBanner/addHomeBanner')
const EditHomeBanner = () => import(/* webpackChunkName: 'editHomeBanner' */ '@/views/homePage/bannerManage/homeBanner/editHomeBanner')

const ClassifyBanner = () => import(/* webpackChunkName: 'classifyBanner' */ '@/views/homePage/bannerManage/classifyBanner')
const ClassifyBannerIndex = () => import(/* webpackChunkName: 'classifyBannerIndex' */ '@/views/homePage/bannerManage/classifyBanner/indexPage')
const AddClassifyBanner = () => import(/* webpackChunkName: 'addClassifyBanner' */ '@/views/homePage/bannerManage/classifyBanner/addClassifyBanner')
const EditClassifyBanner = () => import(/* webpackChunkName: 'editClassifyBanner' */ '@/views/homePage/bannerManage/classifyBanner/editClassifyBanner')

// 导航管理
const NavManage = () => import(/* webpackChunkName: 'navManage' */ '@/views/homePage/navManage')
const NavList = () => import(/* webpackChunkName: 'navList' */ '@/views/homePage/navManage/navList')
const NavListIndex = () => import(/* webpackChunkName: 'navListIndex' */ '@/views/homePage/navManage/navList/indexPage')
const AddNav = () => import(/* webpackChunkName: 'addNav' */ '@/views/homePage/navManage/navList/addNav')
const EditNav = () => import(/* webpackChunkName: 'editNav' */ '@/views/homePage/navManage/navList/editNav')

// 宣传横幅管理
const PublicityBanners = () => import(/* webpackChunkName: 'publicityBanners' */ '@/views/homePage/publicityBanners')
const BannersList = () => import(/* webpackChunkName: 'bannersList' */ '@/views/homePage/publicityBanners/bannersList')
const BannersListIndex = () => import(/* webpackChunkName: 'bannersListIndex' */ '@/views/homePage/publicityBanners/bannersList/indexPage')
const AddBanners = () => import(/* webpackChunkName: 'addBanners' */ '@/views/homePage/publicityBanners/bannersList/addBanners')
const EditBanners = () => import(/* webpackChunkName: 'editBanners' */ '@/views/homePage/publicityBanners/bannersList/editBanners')

// 服务承诺管理
const ServeCommitment = () => import(/* webpackChunkName: 'serveCommitment' */ '@/views/homePage/serveCommitment')
const CommitmentList = () => import(/* webpackChunkName: 'commitmentList' */ '@/views/homePage/serveCommitment/commitmentList')
const CommitmentListIndex = () => import(/* webpackChunkName: 'commitmentListIndex' */ '@/views/homePage/serveCommitment/commitmentList/indexPage')
const AddCommitment = () => import(/* webpackChunkName: 'addCommitment' */ '@/views/homePage/serveCommitment/commitmentList/addCommitment')
const EditCommitment = () => import(/* webpackChunkName: 'editCommitment' */ '@/views/homePage/serveCommitment/commitmentList/editCommitment')

// 商品推荐 goodsRecommend  goodsRecommend/recommendList
const GoodsRecommend = () => import(/* webpackChunkName: 'goodsRecommend' */ '@/views/homePage/goodsRecommend')
const RecommendList = () => import(/* webpackChunkName: 'recommendList' */ '@/views/homePage/goodsRecommend/recommendList')
const RecommendListIndex = () => import(/* webpackChunkName: 'recommendListIndex' */ '@/views/homePage/goodsRecommend/recommendList/indexPage')
const AddGoodsRecommend = () => import(/* webpackChunkName: 'addGoodsRecommend' */ '@/views/homePage/goodsRecommend/recommendList/addGoodsRecommend')
const EditGoodsRecommend = () => import(/* webpackChunkName: 'editGoodsRecommend' */ '@/views/homePage/goodsRecommend/recommendList/editGoodsRecommend')

// 活动card
const ActivityCard = () => import(/* webpackChunkName: 'activityCard' */ '@/views/homePage/activityCard')
const ActivityCardList = () => import(/* webpackChunkName: 'activityCardList' */ '@/views/homePage/activityCard/activityCardList')
const ActivityCardListIndex = () => import(/* webpackChunkName: 'activityCardListIndex' */ '@/views/homePage/activityCard/activityCardList/indexPage')
const AddActivityCard = () => import(/* webpackChunkName: 'addActivityCard' */ '@/views/homePage/activityCard/activityCardList/addActivityCard')
const EditActivityCard = () => import(/* webpackChunkName: 'editActivityCard' */ '@/views/homePage/activityCard/activityCardList/editActivityCard')

// 商品楼层
const GoodsFloor = () => import(/* webpackChunkName: 'goodsFloor' */ '@/views/homePage/goodsFloor')
const GoodsFloorList = () => import(/* webpackChunkName: 'goodsFloorList' */ '@/views/homePage/goodsFloor/goodsFloorList')
const GoodsFloorListIndex = () => import(/* webpackChunkName: 'goodsFloorListIndex' */ '@/views/homePage/goodsFloor/goodsFloorList/indexPage')
const AddGoodsFloor = () => import(/* webpackChunkName: 'addGoodsFloor' */ '@/views/homePage/goodsFloor/goodsFloorList/addGoodsFloor')
const EditGoodsFloor = () => import(/* webpackChunkName: 'editGoodsFloor' */ '@/views/homePage/goodsFloor/goodsFloorList/editGoodsFloor')

// 商品推荐导航
const GoodsRecommendNav = () => import(/* webpackChunkName: 'goodsRecommendNav' */ '@/views/homePage/goodsRecommendNav')
const RecommendNavList = () => import(/* webpackChunkName: 'recommendNavList' */ '@/views/homePage/goodsRecommendNav/recommendNavList')
const RecommendNavListIndex = () => import(/* webpackChunkName: 'recommendNavListIndex' */ '@/views/homePage/goodsRecommendNav/recommendNavList/indexPage')
const AddGoodsRecommendNav = () => import(/* webpackChunkName: 'addGoodsRecommendNav' */ '@/views/homePage/goodsRecommendNav/recommendNavList/addGoodsRecommendNav')
const EditGoodsRecommendNav = () => import(/* webpackChunkName: 'editGoodsRecommendNav' */ '@/views/homePage/goodsRecommendNav/recommendNavList/editGoodsRecommendNav')
const CheckGoodsList = () => import(/* webpackChunkName: 'checkGoodsList' */ '@/views/homePage/goodsRecommendNav/recommendNavList/checkGoodsList')

// 首页弹框
const HomeDialog = () => import(/* webpackChunkName: 'homeDialog' */ '@/views/homePage/homeDialog')
const HomeDialogList = () => import(/* webpackChunkName: 'homeDialogList' */ '@/views/homePage/homeDialog/homeDialogList')
const HomeDialogListIndex = () => import(/* webpackChunkName: 'homeDialogListIndex' */ '@/views/homePage/homeDialog/homeDialogList/indexPage')
const AddHomeDialog = () => import(/* webpackChunkName: 'addHomeDialog' */ '@/views/homePage/homeDialog/homeDialogList/addHomeDialog')
const EditHomeDialog = () => import(/* webpackChunkName: 'editHomeDialog' */ '@/views/homePage/homeDialog/homeDialogList/editHomeDialog')

// 浮层管理
const FloatTierManage = () => import(/* webpackChunkName: 'floatTierManage' */ '@/views/homePage/floatTierManage')
const FloatTierList = () => import(/* webpackChunkName: 'floatTierList' */ '@/views/homePage/floatTierManage/floatTierList')
const FloatTierListIndex = () => import(/* webpackChunkName: 'floatTierListIndex' */ '@/views/homePage/floatTierManage/floatTierList/indexPage')
const AddFloatTier = () => import(/* webpackChunkName: 'addFloatTier' */ '@/views/homePage/floatTierManage/floatTierList/addFloatTier')
const EditFloatTier = () => import(/* webpackChunkName: 'editFloatTier' */ '@/views/homePage/floatTierManage/floatTierList/editFloatTier')

const homeRouter = {
  path: '/homePage',
  component: Layout,
  redirect: '/homePage/bannerManage/homeBanner',
  name: 'HomePage',
  meta: {
    title: '首页管理',
    icon: 'documentation'
  },
  children: [
    {
      path: 'bannerManage',
      component: BannerManage,
      name: 'BannerManage',
      meta: { title: 'banner管理', icon: 'menu' },
      redirect: '/homePage/bannerManage/homeBanner',
      children: [
        {
          path: 'homeBanner',
          component: HomeBanner,
          name: 'HomeBanner',
          meta: { title: '首页banner列表' },
          redirect: '/homePage/bannerManage/homeBanner/indexPage',
          children: [
            {
              path: 'indexPage',
              component: HomeBannerIndex,
              name: 'HomeBannerIndex',
              meta: { title: '首页banner列表' }
            },
            {
              path: 'addHomeBanner',
              component: AddHomeBanner,
              name: 'AddHomeBanner',
              meta: { title: '添加首页banner', activeMenu: '/homePage/bannerManage/homeBanner/indexPage' },
              hidden: true
            },
            {
              path: 'editHomeBanner',
              component: EditHomeBanner,
              name: 'EditHomeBanner',
              meta: { title: '编辑首页banner', activeMenu: '/homePage/bannerManage/homeBanner/indexPage' },
              hidden: true
            }
          ]
        },
        {
          path: 'classifyBanner',
          component: ClassifyBanner,
          name: 'ClassifyBanner',
          meta: { title: '分类banner列表' },
          redirect: '/homePage/bannerManage/classifyBanner/indexPage',
          children: [
            {
              path: 'indexPage',
              component: ClassifyBannerIndex,
              name: 'ClassifyBannerIndex',
              meta: { title: '分类banner列表' }
            },
            {
              path: 'addClassifyBanner',
              component: AddClassifyBanner,
              name: 'AddClassifyBanner',
              meta: { title: '添加分类banner', activeMenu: '/homePage/bannerManage/classifyBanner/indexPage' },
              hidden: true
            },
            {
              path: 'editClassifyBanner',
              component: EditClassifyBanner,
              name: 'EditClassifyBanner',
              meta: { title: '编辑分类banner', activeMenu: '/homePage/bannerManage/classifyBanner/indexPage' },
              hidden: true
            }
          ]
        }
      ]
    },
    {
      path: 'navManage',
      component: NavManage,
      name: 'NavManage',
      alwaysShow: true,
      meta: { title: '导航管理', icon: 'menu' },
      redirect: '/homePage/navManage/navList',
      children: [
        {
          path: 'navList',
          component: NavList,
          name: 'NavList',
          meta: { title: '导航列表' },
          redirect: '/homePage/navManage/navList/indexPage',
          children: [
            {
              path: 'indexPage',
              component: NavListIndex,
              name: 'NavListIndex',
              meta: { title: '导航列表' }
            },
            {
              path: 'addNav',
              component: AddNav,
              name: 'AddNav',
              meta: { title: '添加导航', activeMenu: '/homePage/navManage/navList/indexPage' },
              hidden: true
            },
            {
              path: 'editNav',
              component: EditNav,
              name: 'EditNav',
              meta: { title: '编辑导航', activeMenu: '/homePage/navManage/navList/indexPage' },
              hidden: true
            }
          ]
        }
      ]
    },
    {
      path: 'publicityBanners',
      component: PublicityBanners,
      name: 'PublicityBanners',
      alwaysShow: true,
      meta: { title: '宣传横幅管理', icon: 'menu' },
      redirect: '/homePage/publicityBanners/bannersList',
      children: [
        {
          path: 'bannersList',
          component: BannersList,
          name: 'BannersList',
          meta: { title: '宣传横幅列表' },
          redirect: '/homePage/publicityBanners/bannersList/indexPage',
          children: [
            {
              path: 'indexPage',
              component: BannersListIndex,
              name: 'BannersListIndex',
              meta: { title: '宣传横幅列表' }
            },
            {
              path: 'addBanners',
              component: AddBanners,
              name: 'AddBanners',
              meta: { title: '添加宣传横幅', activeMenu: '/homePage/publicityBanners/bannersList/indexPage' },
              hidden: true
            },
            {
              path: 'editBanners',
              component: EditBanners,
              name: 'EditBanners',
              meta: { title: '编辑宣传横幅', activeMenu: '/homePage/publicityBanners/bannersList/indexPage' },
              hidden: true
            }
          ]
        }
      ]
    },
    {
      path: 'serveCommitment',
      component: ServeCommitment,
      name: 'ServeCommitment',
      alwaysShow: true,
      meta: { title: '服务承诺管理', icon: 'menu' },
      redirect: '/homePage/serveCommitment/commitmentList',
      children: [
        {
          path: 'commitmentList',
          component: CommitmentList,
          name: 'CommitmentList',
          meta: { title: '服务承诺列表' },
          redirect: '/homePage/serveCommitment/commitmentList/indexPage',
          children: [
            {
              path: 'indexPage',
              component: CommitmentListIndex,
              name: 'CommitmentListIndex',
              meta: { title: '服务承诺列表' }
            },
            {
              path: 'addCommitment',
              component: AddCommitment,
              name: 'AddCommitment',
              meta: { title: '添加服务承诺', activeMenu: '/homePage/serveCommitment/commitmentList/indexPage' },
              hidden: true
            },
            {
              path: 'editCommitment',
              component: EditCommitment,
              name: 'EditCommitment',
              meta: { title: '编辑服务承诺', activeMenu: '/homePage/serveCommitment/commitmentList/indexPage' },
              hidden: true
            }
          ]
        }
      ]
    },
    {
      path: 'goodsRecommend',
      component: GoodsRecommend,
      name: 'GoodsRecommend',
      alwaysShow: true,
      meta: { title: '商品推荐', icon: 'menu' },
      redirect: '/homePage/goodsRecommend/recommendList',
      children: [
        {
          path: 'recommendList',
          component: RecommendList,
          name: 'RecommendList',
          meta: { title: '商品推荐列表' },
          redirect: '/homePage/goodsRecommend/recommendList/indexPage',
          children: [
            {
              path: 'indexPage',
              component: RecommendListIndex,
              name: 'RecommendListIndex',
              meta: { title: '商品推荐列表' }
            },
            {
              path: 'addGoodsRecommend',
              component: AddGoodsRecommend,
              name: 'AddGoodsRecommend',
              meta: { title: '添加商品推荐', activeMenu: '/homePage/goodsRecommend/recommendList/indexPage' },
              hidden: true
            },
            {
              path: 'editGoodsRecommend',
              component: EditGoodsRecommend,
              name: 'EditGoodsRecommend',
              meta: { title: '编辑商品推荐', activeMenu: '/homePage/goodsRecommend/recommendList/indexPage' },
              hidden: true
            }
          ]
        }
      ]
    },
    {
      path: 'activityCard',
      component: ActivityCard,
      name: 'ActivityCard',
      alwaysShow: true,
      meta: { title: '活动card', icon: 'menu' },
      redirect: '/homePage/activityCard/activityCardList',
      children: [
        {
          path: 'activityCardList',
          component: ActivityCardList,
          name: 'ActivityCardList',
          meta: { title: '活动card列表' },
          redirect: '/homePage/activityCard/activityCardList/indexPage',
          children: [
            {
              path: 'indexPage',
              component: ActivityCardListIndex,
              name: 'ActivityCardListIndex',
              meta: { title: '活动card列表' }
            },
            {
              path: 'addActivityCard',
              component: AddActivityCard,
              name: 'AddActivityCard',
              meta: { title: '添加活动card', activeMenu: '/homePage/activityCard/activityCardList/indexPage' },
              hidden: true
            },
            {
              path: 'editActivityCard',
              component: EditActivityCard,
              name: 'EditActivityCard',
              meta: { title: '编辑活动card', activeMenu: '/homePage/activityCard/activityCardList/indexPage' },
              hidden: true
            }
          ]
        }
      ]
    },
    {
      path: 'goodsFloor',
      component: GoodsFloor,
      name: 'GoodsFloor',
      alwaysShow: true,
      meta: { title: '商品楼层', icon: 'menu' },
      redirect: '/homePage/goodsFloor/goodsFloorList',
      children: [
        {
          path: 'goodsFloorList',
          component: GoodsFloorList,
          name: 'GoodsFloorList',
          meta: { title: '商品楼层列表' },
          redirect: '/homePage/goodsFloor/goodsFloorList/indexPage',
          children: [
            {
              path: 'indexPage',
              component: GoodsFloorListIndex,
              name: 'GoodsFloorListIndex',
              meta: { title: '商品楼层列表' }
            },
            {
              path: 'addGoodsFloor',
              component: AddGoodsFloor,
              name: 'AddGoodsFloor',
              meta: { title: '添加商品楼层', activeMenu: '/homePage/goodsFloor/goodsFloorList/indexPage' },
              hidden: true
            },
            {
              path: 'editGoodsFloor',
              component: EditGoodsFloor,
              name: 'EditGoodsFloor',
              meta: { title: '编辑商品楼层', activeMenu: '/homePage/goodsFloor/goodsFloorList/indexPage' },
              hidden: true
            }
          ]
        }
      ]
    },
    {
      path: 'goodsRecommendNav',
      component: GoodsRecommendNav,
      name: 'GoodsRecommendNav',
      alwaysShow: true,
      meta: { title: '商品推荐导航', icon: 'menu' },
      redirect: '/homePage/goodsRecommendNav/recommendNavList',
      children: [
        {
          path: 'recommendNavList',
          component: RecommendNavList,
          name: 'RecommendNavList',
          meta: { title: '商品推荐导航列表' },
          redirect: '/homePage/goodsRecommendNav/recommendNavList/indexPage',
          children: [
            {
              path: 'indexPage',
              component: RecommendNavListIndex,
              name: 'RecommendNavListIndex',
              meta: { title: '商品推荐导航列表' }
            },
            {
              path: 'addGoodsRecommendNav',
              component: AddGoodsRecommendNav,
              name: 'AddGoodsRecommendNav',
              meta: { title: '添加商品推荐导航', activeMenu: '/homePage/goodsRecommendNav/recommendNavList/indexPage' },
              hidden: true
            },
            {
              path: 'editGoodsRecommendNav',
              component: EditGoodsRecommendNav,
              name: 'EditGoodsRecommendNav',
              meta: { title: '编辑商品推荐导航', activeMenu: '/homePage/goodsRecommendNav/recommendNavList/indexPage' },
              hidden: true
            },
            {
              path: 'checkGoodsList',
              component: CheckGoodsList,
              name: 'CheckGoodsList',
              meta: { title: '查看商品列表', activeMenu: '/homePage/goodsRecommendNav/recommendNavList/indexPage' },
              hidden: true
            }
          ]
        }
      ]
    },
    {
      path: 'homeDialog',
      component: HomeDialog,
      name: 'HomeDialog',
      alwaysShow: true,
      meta: { title: '首页弹框', icon: 'menu' },
      redirect: '/homePage/homeDialog/homeDialogList',
      children: [
        {
          path: 'homeDialogList',
          component: HomeDialogList,
          name: 'HomeDialogList',
          meta: { title: '首页弹框列表' },
          redirect: '/homePage/homeDialog/homeDialogList/indexPage',
          children: [
            {
              path: 'indexPage',
              component: HomeDialogListIndex,
              name: 'HomeDialogListIndex',
              meta: { title: '首页弹框列表' }
            },
            {
              path: 'addHomeDialog',
              component: AddHomeDialog,
              name: 'AddHomeDialog',
              meta: { title: '添加首页弹框', activeMenu: '/homePage/homeDialog/homeDialogList/indexPage' },
              hidden: true
            },
            {
              path: 'editHomeDialog',
              component: EditHomeDialog,
              name: 'EditHomeDialog',
              meta: { title: '编辑首页弹框', activeMenu: '/homePage/homeDialog/homeDialogList/indexPage' },
              hidden: true
            }
          ]
        }
      ]
    },
    {
      path: 'floatTierManage',
      component: FloatTierManage,
      name: 'FloatTierManage',
      alwaysShow: true,
      meta: { title: '浮层管理', icon: 'menu' },
      redirect: '/homePage/floatTierManage/floatTierList',
      children: [
        {
          path: 'floatTierList',
          component: FloatTierList,
          name: 'FloatTierList',
          meta: { title: '浮层列表' },
          redirect: '/homePage/floatTierManage/floatTierList/floatTierListIndex',
          children: [
            {
              path: 'floatTierListIndex',
              component: FloatTierListIndex,
              name: 'FloatTierListIndex',
              meta: { title: '浮层列表' }
            },
            {
              path: 'addFloatTier',
              component: AddFloatTier,
              name: 'AddFloatTier',
              meta: { title: '添加浮层', activeMenu: '/homePage/floatTierManage/floatTierList/floatTierListIndex' },
              hidden: true
            },
            {
              path: 'editFloatTier',
              component: EditFloatTier,
              name: 'EditFloatTier',
              meta: { title: '编辑浮层', activeMenu: '/homePage/floatTierManage/floatTierList/floatTierListIndex' },
              hidden: true
            }
          ]
        }
      ]
    }
  ]
}

export default homeRouter
