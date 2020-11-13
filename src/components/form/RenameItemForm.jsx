import React from 'react'
import { useForm } from 'react-hook-form'

// Services
import { renameItem } from '../../services/api'

// Card
import Card from '../AuthCard'

// Input
import Text from '../input/Text'

// Button
import SubmitButton from '../button/SubmitButton'

function RenameItemForm({ itemData }) {
  const { handleSubmit, register } = useForm()

  function callRenameItem(data) {
    renameItem(itemData.id, data)
  }

  return (
    <Card cardTitle="Rename Item">
      <form onSubmit={handleSubmit(callRenameItem)}>
        <Text labelTest="Item Name :" inputName="InputName" value={itemData.name} inputId="inputName" inputRef={register} />
        <SubmitButton>Rename Item</SubmitButton>
      </form>
    </Card>
  )
}

export default RenameItemForm
