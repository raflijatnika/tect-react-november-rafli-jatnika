/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useForm } from 'react-hook-form'
import { useParams, Link, useHistory } from 'react-router-dom'

import { joiResolver } from '@hookform/resolvers/joi'
import ItemValidation from '../../validations/itemValidation'

import { saveItem, deleteCheckList } from '../../services/api'

import Card from '../AuthCard'

import Text from '../input/Text'

import SubmitButton from '../button/SubmitButton'

function CreateCheckListItem() {
  const history = useHistory()
  const { id } = useParams()
  const { handleSubmit, register, errors } = useForm({
    resolver: joiResolver(ItemValidation)
  })

  function callSaveItem(data) {
    data.checklistId = parseInt(id)
    saveItem(data).then(
      history.go(0)
    )
  }

  function callDeleteCheckList(id){
    deleteCheckList(id).then(
      history.push('/checklist')
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
          <li className="breadcrumb-item active">Check List Detail</li>
        </ol>
      </nav>

      <Card cardTitle="Check List Detail">
        <button onClick={() => callDeleteCheckList(id)} className="btn btn-danger"><i className="fa fa-trash" /> Delete Check List</button>
        <form onSubmit={handleSubmit(callSaveItem)}>
          <Text labelTest="Item Name" inputName="itemName" inputId="itemName" inputRef={register} error={errors.itemName && errors.itemName.message}/>
          <SubmitButton>Add Item</SubmitButton>
        </form>
      </Card >
    </>
  )
}

export default CreateCheckListItem
