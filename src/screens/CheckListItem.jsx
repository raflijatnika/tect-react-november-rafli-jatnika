/* eslint-disable no-sequences */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import { getItem, setComplete, deleteItem } from '../services/api'

import Layout from '../layout/LayoutDashboard'

import CreateCheckListItem from '../components/form/CreateCheckListItem'
import clsx from 'clsx'

function CheckListItem() {
  const { id } = useParams()
  const [data, setData] = useState([])
  const [change, setChange] = useState(1)

  useEffect(() => {
    getItem(id).then(
      (response) => {
        const { data } = response.data
        data.map((value) => {
          if (value.id === parseInt(id)) {
            return setData(value.items)
          }
          return value
        }
        )
      }
    )
  }, [change])

  function callSetComplete(id){
    setComplete(id).then(
      setChange(change+1)
    )
  }

  return (
    <Layout navTitle="Detail Check List">
      <CreateCheckListItem />
      {
        data && data.map((val) => (
          <div key={val.id} className="card mt-3">
            <div className="card-body">
              <div className="card-title">
                {
                  val.itemCompletionStatus ? <del>{val.name}</del> : val.name
                }
                <button className={clsx('float-right btn btn-sm', val.itemCompletionStatus ? 'btn-secondary' : 'btn-success')} onClick={() => (callSetComplete(val.id))}><i className={clsx('fa', val.itemCompletionStatus ? 'fa-times' : 'fa-check')} /></button>
                <button className="float-right btn btn-sm btn-danger mr-2" onClick={() => deleteItem(val.id)}><i className="fa fa-trash" /></button>
                <Link className="float-right btn btn-sm btn-warning mr-2" to={`/item-rename/${val.id}`}><i className="fa fa-edit"/></Link>
              </div>
            </div>
          </div>
        ))
      }
    </Layout>
  )
}

export default CheckListItem
