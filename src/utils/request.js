/**
 * axios请求配置
 */
import axios from 'axios'
import store from '@/store'
import { MessageBox, Message } from 'element-ui'

// 基础配置
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '' : '/cs',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

/**
 * 请求拦截 config配置项
 * @params {string} url 接口地址
 * @params {string} method 请求方式
 * @params {object} data 参数数据
 * @params {boolean} isSelf 控制是否自行处理接口错误
 */
service.interceptors.request.use(
  config => {
    // 携带token
    if (store.getters && store.getters.token) {
      config.headers['token'] = store.getters.token
    }
    // get方式 data转params
    if (config.method === 'get') {
      if (!config.params && config.data) {
        config.params = config.data
        config.data = undefined
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 20000) return res
    // 响应错误处理
    if (res.code === 2001 || res.code === 1155) {
      MessageBox.alert('登录失效，请重新登录', '提示', {
        confirmButtonText: '重新登录',
        type: 'warning'
      }).then(() => {
        // store.dispatch('user/resetToken').then(() => {
        //   window.location.reload()
        // })
      })
    } else {
      // isSelf为true，返回数据
      if (response.config.isSelf) return res
      // 不符合预期，抛出错误
      Message({
        message: 'Error：' + res.msg,
        type: 'error',
        duration: 5 * 1000
      })
    }
    return Promise.reject(res.msg)
  },
  error => {
    Message({
      message: 'Error：' + error.msg,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
