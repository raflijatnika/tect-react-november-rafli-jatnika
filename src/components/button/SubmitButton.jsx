import React from 'react'

function SubmitButton({ children }) {
  return (
    <button type="submit" className="btn btn-primary btn-block mt-3">{children}</button>
  )
}

export default SubmitButton
