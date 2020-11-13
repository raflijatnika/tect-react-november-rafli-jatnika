import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getCheckList } from '../services/api'

// Layout
import Layout from '../layout/LayoutDashboard'

function CheckList() {
  const [data, setData] = useState([])

  useEffect(() => {
    getCheckList().then(
      (response) => setData(response.data.data)
    )
  }, [])

  return (
    <Layout navTitle="Check List">
      <div className="row">
        <div className="col-lg-2">
          <Link className="btn btn-success mt-3 ml-3" to="/create-checklist">
            <i className="fa fa-plus" />
            {' '}
            Add New
          </Link>
        </div>
      </div>
      {
        data.length > 0 && data.map((value) => (
          <div key={value.id} className="card m-3">
            <div className="card-body">
              <div className="card-title">
                {value.name}
                <Link className="float-right btn btn-primary" to={`/checklist/${value.id}`}>Detail</Link>
              </div>
            </div>
          </div>
        ))
      }
      {
        data.length < 1 && (<h3>Data Kosong</h3>)
      }
    </Layout>
  )
}

export default CheckList
