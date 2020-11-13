import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getItemById } from '../services/api'

import Layout from '../layout/LayoutDashboard'

import RenameItemForm from '../components/form/RenameItemForm'

function RenameItem() {
  const { itemId } = useParams()
  const [item, setItem] = useState([])

  useEffect(() => {
    getItemById(itemId).then(
      (response) => setItem(response.data.data)
    )
  }, [itemId])

  return (
    <Layout navTitle="Rename Item">
      <RenameItemForm itemData={item} />
    </Layout>
  )
}

export default RenameItem
