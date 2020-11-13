import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

function RedirectToHome({ children }) {
  const isLogin = useSelector(state => state.login.isLogIn)
  return (
    <>
      {
        isLogin ? <Redirect to="/" /> : children
      }
    </>
  )
}

export default RedirectToHome
