import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

function RedirectToLogin({ children }) {
  const isLogin = useSelector(state => state.login.isLogIn)
  return (
    <>
      {
        isLogin ? children : <Redirect to="/login" />
      }
    </>
  )
}

export default RedirectToLogin
