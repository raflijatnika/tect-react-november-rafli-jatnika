import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'

import loginValidation from '../../validations/loginValidation'

// Services
import { loginUser } from '../../services/api'

// Card
import Card from '../AuthCard'

// Button
import SubmitButton from '../button/SubmitButton'

// Input
import Username from '../input/Text'
import Password from '../input/Password'

function LoginForm() {
  const { handleSubmit, register, errors } = useForm({
    resolver: joiResolver(loginValidation)
  })

  const dispatch = useDispatch()

  function callLoginUser(data) {
    loginUser(data).then(
      (isLogin) => {
        if(isLogin){
          dispatch({ type: 'loggedIn' })
        }
      }
    )
  }

  return (
    <Card cardTitle="Login">
      <form onSubmit={handleSubmit(callLoginUser)}>
        <Username labelText="Username :" inputName="username" inputId="username" inputRef={register} error={errors.username && errors.username.message} />
        <Password labelText="Password :" inputName="password" inputId="password" inputRef={register} error={errors.password && errors.password.message} />
        Don't Have An Accoutn? <Link to="/register">Register Here !</Link>
        <SubmitButton>Login</SubmitButton>
      </form>
    </Card>
  )
}

export default LoginForm
