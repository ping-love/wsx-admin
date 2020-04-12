/**
 * 消息资讯
 */
import Layout from '@/views/layout'

// 文章管理
const ArticleManage = () => import(/* webpackChunkName: "articleManage" */ '@/views/message/articleManage')

const ArticleList = () => import(/* webpackChunkName: "articleList" */ '@/views/message/articleManage/articleList')
const ArticleListIndex = () => import(/* webpackChunkName: "articleListIndex" */ '@/views/message/articleManage/articleList/indexPage')
const EditArticle = () => import(/* webpackChunkName: "editArticle" */ '@/views/message/articleManage/articleList/editArticle')

const AddArticle = () => import(/* webpackChunkName: "addArticle" */ '@/views/message/articleManage/addArticle')

const ArticleCategory = () => import(/* webpackChunkName: "articleCategory" */ '@/views/message/articleManage/articleCategory')

// 公告管理
const NoticeManage = () => import(/* webpackChunkName: "noticeManage" */ '@/views/message/noticeManage')

const NoticeList = () => import(/* webpackChunkName: "noticeList" */ '@/views/message/noticeManage/noticeList')
const NoticeListIndex = () => import(/* webpackChunkName: "noticeListIndex" */ '@/views/message/noticeManage/noticeList/indexPage')
const EditNotice = () => import(/* webpackChunkName: "editNotice" */ '@/views/message/noticeManage/noticeList/editNotice')

const AddNotice = () => import(/* webpackChunkName: "addNotice" */ '@/views/message/noticeManage/addNotice')

const NoticeCategory = () => import(/* webpackChunkName: "noticeCategory" */ '@/views/message/noticeManage/noticeCategory')

// 使用帮助
const UsingHelp = () => import(/* webpackChunkName: "usingHelp" */ '@/views/message/usingHelp')

const HelpList = () => import(/* webpackChunkName: "helpList" */ '@/views/message/usingHelp/helpList')
const HelpListIndex = () => import(/* webpackChunkName: "helpListIndex" */ '@/views/message/usingHelp/helpList/indexPage')
const EditHelp = () => import(/* webpackChunkName: "editHelp" */ '@/views/message/usingHelp/helpList/editHelp')

const AddHelp = () => import(/* webpackChunkName: "addHelp" */ '@/views/message/usingHelp/addHelp')

const HelpCategory = () => import(/* webpackChunkName: "helpCategory" */ '@/views/message/usingHelp/helpCategory')

// 消息管理
const MessageManage = () => import(/* webpackChunkName: "messageManage" */ '@/views/message/messageManage')

const MessageList = () => import(/* webpackChunkName: "messageList" */ '@/views/message/messageManage/messageList')

const CreditConsume = () => import(/* webpackChunkName: "creditConsume" */ '@/views/message/messageManage/creditConsume')

const CreditRule = () => import(/* webpackChunkName: "creditRule" */ '@/views/message/messageManage/creditRule')

const messageRouter = {
  path: '/message',
  component: Layout,
  redirect: '/message/articleManage/articleList',
  name: 'Message',
  meta: {
    title: '消息资讯',
    icon: 'message'
  },
  children: [
    {
      path: 'articleManage',
      component: ArticleManage,
      name: 'ArticleManage',
      meta: { title: '文章管理', icon: 'menu' },
      redirect: '/message/articleManage/articleList',
      children: [
        {
          path: 'articleList',
          component: ArticleList,
          name: 'ArticleList',
          meta: { title: '文章列表' },
          redirect: '/message/articleManage/articleList/articleListIndex',
          children: [
            {
              path: 'articleListIndex',
              component: ArticleListIndex,
              name: 'ArticleListIndex',
              meta: { title: '文章列表', breadcrumb: false }
            },
            {
              path: 'editArticle',
              component: EditArticle,
              name: 'EditArticle',
              meta: {
                title: '编辑文章',
                activeMenu: '/message/articleManage/articleList/articleListIndex'
              },
              hidden: true
            }
          ]
        },
        {
          path: 'addArticle',
          component: AddArticle,
          name: 'AddArticle',
          meta: { title: '添加文章' }
        },
        {
          path: 'articleCategory',
          component: ArticleCategory,
          name: 'ArticleCategory',
          meta: { title: '文章分类' }
        }
      ]
    },
    {
      path: 'noticeManage',
      component: NoticeManage,
      name: 'NoticeManage',
      meta: { title: '公告管理', icon: 'menu' },
      redirect: '/message/noticeManage/noticeList',
      children: [
        {
          path: 'noticeList',
          component: NoticeList,
          name: 'NoticeList',
          meta: { title: '公告列表' },
          redirect: '/message/noticeManage/noticeList/noticeListIndex',
          children: [
            {
              path: 'noticeListIndex',
              component: NoticeListIndex,
              name: 'NoticeListIndex',
              meta: { title: '公告列表', breadcrumb: false }
            },
            {
              path: 'editNotice',
              component: EditNotice,
              name: 'EditNotice',
              meta: {
                title: '编辑公告',
                activeMenu: '/message/noticeManage/noticeList/noticeListIndex'
              },
              hidden: true
            }
          ]
        },
        {
          path: 'addNotice',
          component: AddNotice,
          name: 'AddNotice',
          meta: { title: '添加公告' }
        },
        {
          path: 'noticeCategory',
          component: NoticeCategory,
          name: 'NoticeCategory',
          meta: { title: '公告栏目列表' }
        }
      ]
    },
    {
      path: 'usingHelp',
      component: UsingHelp,
      name: 'UsingHelp',
      meta: { title: '使用帮助', icon: 'menu' },
      redirect: '/message/usingHelp/helpList',
      children: [
        {
          path: 'helpList',
          component: HelpList,
          name: 'HelpList',
          meta: { title: '使用帮助列表' },
          redirect: '/message/usingHelp/helpList/helpListIndex',
          children: [
            {
              path: 'helpListIndex',
              component: HelpListIndex,
              name: 'HelpListIndex',
              meta: { title: '使用帮助列表', breadcrumb: false }
            },
            {
              path: 'editHelp',
              component: EditHelp,
              name: 'EditHelp',
              meta: {
                title: '编辑使用帮助',
                activeMenu: '/message/usingHelp/helpList/helpListIndex'
              },
              hidden: true
            }
          ]
        },
        {
          path: 'addHelp',
          component: AddHelp,
          name: 'AddHelp',
          meta: { title: '添加使用帮助' }
        },
        {
          path: 'helpCategory',
          component: HelpCategory,
          name: 'HelpCategory',
          meta: { title: '使用帮助分类' }
        }
      ]
    },
    {
      path: 'messageManage',
      component: MessageManage,
      name: 'MessageManage',
      meta: { title: '消息管理', icon: 'menu' },
      redirect: '/message/messageManage/messageList',
      children: [
        {
          path: 'messageList',
          component: MessageList,
          name: 'MessageList',
          meta: { title: '消息列表' }
        },
        {
          path: 'creditConsume',
          component: CreditConsume,
          name: 'CreditConsume',
          meta: { title: '积分消费' }
        },
        {
          path: 'creditRule',
          component: CreditRule,
          name: 'CreditRule',
          meta: { title: '积分方案' }
        }
      ]
    }
  ]
}

export default messageRouter
