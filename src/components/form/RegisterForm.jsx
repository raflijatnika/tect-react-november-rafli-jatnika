import React from 'react'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'

import registerValidation from '../../validations/registerValidation'

// Services
import { registerUser } from '../../services/api'

// Card
import Card from '../AuthCard'

// Button
import SubmitButton from '../button/SubmitButton'

// Input
import Email from '../input/Email'
import Username from '../input/Text'
import Password from '../input/Password'
import { Link } from 'react-router-dom'

function RegisterForm() {
  const { handleSubmit, register, errors } = useForm({
    resolver: joiResolver(registerValidation)
  })
  return (
    <Card cardTitle="Register">
      <form onSubmit={handleSubmit(registerUser)}>
        <Username labelText="Username :" inputName="username" inputId="username" inputRef={register} error={errors.username && errors.username.message} />
        <Email labelText="Email :" inputName="email" inputId="email" inputRef={register} error={errors.email && errors.email.message} />
        <Password labelText="Password :" inputName="password" inputId="password" inputRef={register} error={errors.password && errors.password.message} />
        Already Have An Account? <Link to="/login">Login Here!</Link>
        <SubmitButton>Register</SubmitButton>
      </form>
    </Card>
  )
}

export default RegisterForm
