import React from 'react'

function AuthCard(props) {
  const { cardTitle, children } = props
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title text-center"><h4>{cardTitle}</h4></div>
        { children }
      </div>
    </div>
  )
}

export default AuthCard
