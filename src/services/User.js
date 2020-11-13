/* eslint-disable import/no-anonymous-default-export */
import Cookies from 'js-cookie'

function logIn(token) {
  Cookies.set('token', token)
}

function getToken() {
  return Cookies.get('token')
}

function logOut() {
  Cookies.remove('token')
}

function isLogin() {
  return !!getToken()
}

export default {
  logIn,
  getToken,
  isLogin,
  logOut,
}
