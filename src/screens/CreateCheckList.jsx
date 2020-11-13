import React from 'react'

// Layout
import LayoutDashboard from '../layout/LayoutDashboard'

// Form
import CreateCheckListForm from '../components/form/CreateCheckListForm'

function CreateCheckList() {
  return (
    <LayoutDashboard>
      <CreateCheckListForm />
    </LayoutDashboard>
  )
}

export default CreateCheckList
