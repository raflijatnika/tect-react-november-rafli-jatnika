import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory, Link } from 'react-router-dom'

import ListValidation from '../../validations/listValidation'
import { joiResolver } from '@hookform/resolvers/joi'


// Services
import { saveCheckList } from '../../services/api'

// Card
import Card from '../AuthCard'

// Input
import Text from '../input/Text'

// Button
import SubmitButton from '../button/SubmitButton'

function CreateCheckLIstForm() {
  const history = useHistory()
  const { handleSubmit, register, errors } = useForm({
    resolver: joiResolver(ListValidation)
  })

  function callSaveCheckList(data) {
    saveCheckList(data).then(
      (response) => {
        if (response.status === 200 || response.status === 201) {
          history.goBack()
        }
      }
    )
  }

  return (
    <>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/checklist">
              <i className="fa fa-arrow-left" />
              {' '}
              Check List
            </Link>
          </li>
          <li className="breadcrumb-item active">Create Check List</li>
        </ol>
      </nav>

      <Card cardTitle="Create Check List">
        <form onSubmit={handleSubmit(callSaveCheckList)}>
          <Text labelText="Name :" inputName="name" inputId="name" inputRef={register} error={errors.name && errors.name.message}/>
          <SubmitButton>Save</SubmitButton>
        </form>
      </Card>
    </>
  )
}

export default CreateCheckLIstForm
