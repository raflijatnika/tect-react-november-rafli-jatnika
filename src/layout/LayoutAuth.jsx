import React from 'react'

function LayoutAuth({ children }) {
  return (
    <div className="container vh-100">
      <div className="row vh-100">
        <div className="col align-self-center">{children}</div>
      </div>
    </div>
  )
}

export default LayoutAuth
