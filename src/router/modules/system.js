/**
 * 系统管理
 */
import Layout from '@/views/layout'

// 系统设置
const SystemSettings = () => import(/* webpackChunkName: "systemSettings" */ '@/views/system/systemSettings')

const ModifyPwd = () => import(/* webpackChunkName: "modifyPwd" */ '@/views/system/systemSettings/modifyPwd')

const BaseSettings = () => import(/* webpackChunkName: "baseSettings" */ '@/views/system/systemSettings/baseSettings')

const MessageSettings = () => import(/* webpackChunkName: "messageSettings" */ '@/views/system/systemSettings/messageSettings')

const PaySettings = () => import(/* webpackChunkName: "paySettings" */ '@/views/system/systemSettings/paySettings')
const PaySettingsIndex = () => import(/* webpackChunkName: "paySettingsIndex" */ '@/views/system/systemSettings/paySettings/indexPage')
const PaySettingsEdit = () => import(/* webpackChunkName: "paySettingsEdit" */ '@/views/system/systemSettings/paySettings/paySettingsEdit')

const FreightSettings = () => import(/* webpackChunkName: "freightSettings" */ '@/views/system/systemSettings/freightSettings')

// 其他设置
const OtherSettings = () => import(/* webpackChunkName: "otherSettings" */ '@/views/system/otherSettings')

const UserLevelSettings = () => import(/* webpackChunkName: "userLevelSettings" */ '@/views/system/otherSettings/userLevelSettings')

// 配送设置
const DeliverySettings = () => import(/* webpackChunkName: "deliverySettings" */ '@/views/system/deliverySettings')

const DelivTypeList = () => import(/* webpackChunkName: "delivTypeList" */ '@/views/system/deliverySettings/delivTypeList')
const DelivTypeListIndex = () => import(/* webpackChunkName: "delivTypeListIndex" */ '@/views/system/deliverySettings/delivTypeList/indexPage')
const AddDelivType = () => import(/* webpackChunkName: "addDelivType" */ '@/views/system/deliverySettings/delivTypeList/addDelivType')
const EditDelivType = () => import(/* webpackChunkName: "editDelivType" */ '@/views/system/deliverySettings/delivTypeList/editDelivType')

const DelivOrdertempl = () => import(/* webpackChunkName: "delivOrdertempl" */ '@/views/system/deliverySettings/delivOrdertempl')

const DelivManage = () => import(/* webpackChunkName: "delivManage" */ '@/views/system/deliverySettings/delivManage')
const DelivManageIndex = () => import(/* webpackChunkName: "delivManageIndex" */ '@/views/system/deliverySettings/delivManage/indexPage')
const AddShopFreTempl = () => import(/* webpackChunkName: "addShopFreTempl" */ '@/views/system/deliverySettings/delivManage/addShopFreTempl')
const EditShopFreTempl = () => import(/* webpackChunkName: "editShopFreTempl" */ '@/views/system/deliverySettings/delivManage/editShopFreTempl')
const AddSingleFreTempl = () => import(/* webpackChunkName: "addSingleFreTempl" */ '@/views/system/deliverySettings/delivManage/addSingleFreTempl')
const EditSingleFreTempl = () => import(/* webpackChunkName: "editSingleFreTempl" */ '@/views/system/deliverySettings/delivManage/editSingleFreTempl')

const DelivTimeManage = () => import(/* webpackChunkName: "delivTimeManage" */ '@/views/system/deliverySettings/delivTimeManage')
const DelivTimeManageIndex = () => import(/* webpackChunkName: "delivTimeManageIndex" */ '@/views/system/deliverySettings/delivTimeManage/indexPage')
const AddDelivTimeTempl = () => import(/* webpackChunkName: "addDelivTimeTempl" */ '@/views/system/deliverySettings/delivTimeManage/addDelivTimeTempl')
const EditDelivTimeTempl = () => import(/* webpackChunkName: "editDelivTimeTempl" */ '@/views/system/deliverySettings/delivTimeManage/editDelivTimeTempl')

const FreightDescSettings = () => import(/* webpackChunkName: "freightDescSettings" */ '@/views/system/deliverySettings/freightDescSettings')

// 管理员与权限
const Permission = () => import(/* webpackChunkName: "permission" */ '@/views/system/permission')

const AdminList = () => import(/* webpackChunkName: "adminList" */ '@/views/system/permission/adminList')
const AdminListIndex = () => import(/* webpackChunkName: "adminListIndex" */ '@/views/system/permission/adminList/indexPage')
const AddAdmin = () => import(/* webpackChunkName: "addAdmin" */ '@/views/system/permission/adminList/addAdmin')
const EditAdmin = () => import(/* webpackChunkName: "editAdmin" */ '@/views/system/permission/adminList/editAdmin')
const OperationLog = () => import(/* webpackChunkName: "operationLog" */ '@/views/system/permission/adminList/operationLog')

const RoleList = () => import(/* webpackChunkName: "roleList" */ '@/views/system/permission/roleList')
const RoleListIndex = () => import(/* webpackChunkName: "roleListIndex" */ '@/views/system/permission/roleList/indexPage')
const AddRole = () => import(/* webpackChunkName: "addRole" */ '@/views/system/permission/roleList/addRole')
const EditRole = () => import(/* webpackChunkName: "editRole" */ '@/views/system/permission/roleList/editRole')

// App端通知管理
const Notification = () => import(/* webpackChunkName: "notification" */ '@/views/system/notification')

const NotificationList = () => import(/* webpackChunkName: "notificationList" */ '@/views/system/notification/notificationList')

const SendNotification = () => import(/* webpackChunkName: "sendNotification" */ '@/views/system/notification/sendNotification')

// 系统版本管理
const Version = () => import(/* webpackChunkName: "version" */ '@/views/system/version')

const UpdateLog = () => import(/* webpackChunkName: "updateLog" */ '@/views/system/version/updateLog')
const UpdateLogIndex = () => import(/* webpackChunkName: "updateLogIndex" */ '@/views/system/version/updateLog/indexPage')
const AddUpdateLog = () => import(/* webpackChunkName: "addUpdateLog" */ '@/views/system/version/updateLog/addUpdateLog')

// 意见反馈管理
const Feedback = () => import(/* webpackChunkName: "feedback" */ '@/views/system/feedback')

const FeedbackList = () => import(/* webpackChunkName: "feedbackList" */ '@/views/system/feedback/feedbackList')

const systemRouter = {
  path: '/system',
  component: Layout,
  redirect: '/system/systemSettings/modifyPwd',
  name: 'System',
  meta: {
    title: '系统管理',
    icon: 'system'
  },
  children: [
    {
      path: 'systemSettings',
      component: SystemSettings,
      name: 'SystemSettings',
      meta: { title: '系统设置', icon: 'menu' },
      redirect: '/system/systemSettings/modifyPwd',
      children: [
        {
          path: 'modifyPwd',
          component: ModifyPwd,
          name: 'ModifyPwd',
          meta: { title: '修改密码' }
        },
        {
          path: 'baseSettings',
          component: BaseSettings,
          name: 'BaseSettings',
          meta: { title: '基础设置' }
        },
        {
          path: 'messageSettings',
          component: MessageSettings,
          name: 'MessageSettings',
          meta: { title: '短信设置' }
        },
        {
          path: 'paySettings',
          component: PaySettings,
          name: 'PaySettings',
          meta: { title: '支付方式设置' },
          redirect: '/system/systemSettings/paySettings/indexPage',
          children: [
            {
              path: 'indexPage',
              component: PaySettingsIndex,
              name: 'PaySettingsIndex',
              meta: { title: '支付方式设置', breadcrumb: false }
            },
            {
              path: 'paySettingsEdit',
              component: PaySettingsEdit,
              name: 'PaySettingsEdit',
              meta: {
                title: '支付接口参数设置',
                activeMenu: '/system/systemSettings/paySettings/indexPage'
              },
              hidden: true
            }
          ]
        },
        {
          path: 'freightSettings',
          component: FreightSettings,
          name: 'FreightSettings',
          meta: { title: '运费设置' }
        }

      ]
    },
    {
      path: 'otherSettings',
      component: OtherSettings,
      name: 'OtherSettings',
      meta: { title: '其他设置', icon: 'menu' },
      redirect: '/system/otherSettings/userLevelSettings',
      alwaysShow: true,
      children: [
        {
          path: 'userLevelSettings',
          component: UserLevelSettings,
          name: 'UserLevelSettings',
          meta: { title: '用户等级设置' }
        }
      ]
    },
    {
      path: 'deliverySettings',
      component: DeliverySettings,
      name: 'DeliverySettings',
      meta: { title: '配送设置', icon: 'menu' },
      redirect: '/system/deliverySettings/delivTypeList',
      children: [
        {
          path: 'delivTypeList',
          component: DelivTypeList,
          name: 'DelivTypeList',
          meta: { title: '配送方式列表' },
          redirect: '/system/deliverySettings/delivTypeList/indexPage',
          children: [
            {
              path: 'indexPage',
              component: DelivTypeListIndex,
              name: 'DelivTypeListIndex',
              meta: { title: '配送方式列表', breadcrumb: false }
            },
            {
              path: 'addDelivType',
              component: AddDelivType,
              name: 'AddDelivType',
              meta: { title: '添加配送方式', activeMenu: '/system/deliverySettings/delivTypeList/indexPage' },
              hidden: true
            },
            {
              path: 'editDelivType',
              component: EditDelivType,
              name: 'EditDelivType',
              meta: { title: '编辑配送方式', activeMenu: '/system/deliverySettings/delivTypeList/indexPage' },
              hidden: true
            }
          ]
        },
        {
          path: 'delivOrdertempl',
          component: DelivOrdertempl,
          name: 'DelivOrdertempl',
          meta: { title: '快递单模板' }
        },
        {
          path: 'delivManage',
          component: DelivManage,
          name: 'DelivManage',
          meta: { title: '配送管理' },
          redirect: '/system/deliverySettings/delivManage/indexPage',
          children: [
            {
              path: 'indexPage',
              component: DelivManageIndex,
              name: 'DelivManageIndex',
              meta: { title: '配送管理', breadcrumb: false }
            },
            {
              path: 'addShopFreTempl',
              component: AddShopFreTempl,
              name: 'AddShopFreTempl',
              meta: { title: '添加店铺运费模板', activeMenu: '/system/deliverySettings/delivManage/indexPage' },
              hidden: true
            },
            {
              path: 'editShopFreTempl',
              component: EditShopFreTempl,
              name: 'EditShopFreTempl',
              meta: { title: '编辑店铺运费模板', activeMenu: '/system/deliverySettings/delivManage/indexPage' },
              hidden: true
            },
            {
              path: 'addSingleFreTempl',
              component: AddSingleFreTempl,
              name: 'AddSingleFreTempl',
              meta: { title: '添加单品运费模板', activeMenu: '/system/deliverySettings/delivManage/indexPage' },
              hidden: true
            },
            {
              path: 'editSingleFreTempl',
              component: EditSingleFreTempl,
              name: 'EditSingleFreTempl',
              meta: { title: '编辑单品运费模板', activeMenu: '/system/deliverySettings/delivManage/indexPage' },
              hidden: true
            }
          ]
        },
        {
          path: 'delivTimeManage',
          component: DelivTimeManage,
          name: 'DelivTimeManage',
          meta: { title: '配送时间管理' },
          redirect: '/system/deliverySettings/delivTimeManage/indexPage',
          children: [
            {
              path: 'indexPage',
              component: DelivTimeManageIndex,
              name: 'DelivTimeManageIndex',
              meta: { title: '配送时间管理', breadcrumb: false }
            },
            {
              path: 'addDelivTimeTempl',
              component: AddDelivTimeTempl,
              name: 'AddDelivTimeTempl',
              meta: { title: '添加配送时间模板', activeMenu: '/system/deliverySettings/delivTimeManage/indexPage' },
              hidden: true
            },
            {
              path: 'editDelivTimeTempl',
              component: EditDelivTimeTempl,
              name: 'EditDelivTimeTempl',
              meta: { title: '编辑配送时间模板', activeMenu: '/system/deliverySettings/delivTimeManage/indexPage' },
              hidden: true
            }

          ]
        },
        {
          path: 'freightDescSettings',
          component: FreightDescSettings,
          name: 'FreightDescSettings',
          meta: { title: '运费说明设置' }
        }
      ]
    },
    {
      path: 'permission',
      component: Permission,
      name: 'Permission',
      meta: { title: '管理员与权限', icon: 'menu' },
      redirect: '/system/permission/adminList',
      alwaysShow: true,
      children: [
        {
          path: 'adminList',
          component: AdminList,
          name: 'AdminList',
          meta: { title: '管理员列表' },
          redirect: '/system/permission/adminList/adminListIndex',
          children: [
            {
              path: 'adminListIndex',
              component: AdminListIndex,
              name: 'AdminListIndex',
              meta: { title: '管理员列表', breadcrumb: false }
            },
            {
              path: 'addAdmin',
              component: AddAdmin,
              name: 'AddAdmin',
              meta: { title: '添加管理员', activeMenu: '/system/permission/adminList/adminListIndex' },
              hidden: true
            },
            {
              path: 'editAdmin',
              component: EditAdmin,
              name: 'EditAdmin',
              meta: { title: '编辑管理员', activeMenu: '/system/permission/adminList/adminListIndex' },
              hidden: true
            },
            {
              path: 'operationLog',
              component: OperationLog,
              name: 'OperationLog',
              meta: { title: '管理员操作记录', activeMenu: '/system/permission/adminList/adminListIndex' },
              hidden: true
            }
          ]
        },
        {
          path: 'roleList',
          component: RoleList,
          name: 'RoleList',
          meta: { title: '角色列表' },
          redirect: '/system/permission/roleList/roleListIndex',
          children: [
            {
              path: 'roleListIndex',
              component: RoleListIndex,
              name: 'RoleListIndex',
              meta: { title: '角色列表', breadcrumb: false }
            },
            {
              path: 'addRole',
              component: AddRole,
              name: 'AddRole',
              meta: { title: '添加角色', activeMenu: '/system/permission/roleList/roleListIndex' },
              hidden: true
            },
            {
              path: 'editRole',
              component: EditRole,
              name: 'EditRole',
              meta: { title: '编辑角色', activeMenu: '/system/permission/roleList/roleListIndex' },
              hidden: true
            }
          ]
        }
      ]
    },
    {
      path: 'notification',
      component: Notification,
      name: 'Notification',
      meta: { title: 'App端通知管理', icon: 'menu' },
      redirect: '/system/notification/notificationList',
      alwaysShow: true,
      children: [
        {
          path: 'notificationList',
          component: NotificationList,
          name: 'NotificationList',
          meta: { title: '通知列表' }
        },
        {
          path: 'sendNotification',
          component: SendNotification,
          name: 'SendNotification',
          meta: { title: '发送通知' }
        }
      ]
    },
    {
      path: 'version',
      component: Version,
      name: 'Version',
      meta: { title: '系统版本管理', icon: 'menu' },
      redirect: '/system/version/updateLog',
      alwaysShow: true,
      children: [
        {
          path: 'updateLog',
          component: UpdateLog,
          name: 'UpdateLog',
          meta: { title: '版本更新日志' },
          redirect: '/system/version/updateLog/updateLogIndex',
          children: [
            {
              path: 'updateLogIndex',
              component: UpdateLogIndex,
              name: 'UpdateLogIndex',
              meta: { title: '版本更新日志', breadcrumb: false }
            },
            {
              path: 'addUpdateLog',
              component: AddUpdateLog,
              name: 'AddUpdateLog',
              meta: { title: '添加新版本', activeMenu: '/system/version/updateLog/updateLogIndex' },
              hidden: true
            }
          ]
        }
      ]
    },
    {
      path: 'feedback',
      component: Feedback,
      name: 'Feedback',
      meta: { title: '意见反馈管理', icon: 'menu' },
      redirect: '/system/feedback/feedbackList',
      alwaysShow: true,
      children: [
        {
          path: 'feedbackList',
          component: FeedbackList,
          name: 'FeedbackList',
          meta: { title: '意见反馈列表' }
        }
      ]
    }
  ]
}

export default systemRouter
