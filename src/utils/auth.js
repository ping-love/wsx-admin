/**
 * token、username等用户认证信息
 */
import storage from './storage'

// token存取----------------------------------------------
const TokenKey = 'Admin-Token'
// token过期时间 (小时)
const TokenExpire = 24

export function getToken () {
  return storage.getItem(TokenKey)
}

export function setToken (token) {
  storage.setItem(TokenKey, token, TokenExpire)
}

export function removeToken () {
  storage.removeItem(TokenKey)
}

// username存取------------------------------------------
const UsernameKey = 'username'

export function getUsername () {
  return storage.getItem(UsernameKey)
}

export function setUsername (username) {
  storage.setItem(UsernameKey, username)
}

export function removeUsername () {
  storage.removeItem(UsernameKey)
}
