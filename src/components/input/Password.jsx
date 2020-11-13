import React, { useState } from 'react'

function Email(props) {
  const [toggle, setToggle] = useState(false)
  const { labelText, inputName, inputId, inputRef, error } = props

  return (
    <div className="form-group">
      <label htmlFor={inputId}>{labelText}</label>
      <div className="input-group">
        <input type={toggle ? 'text' : 'password'} name={inputName} id={inputId} ref={inputRef} autoComplete="off" spellCheck="false" className="form-control" />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" onClick={() => (setToggle(!toggle))}><i className={`fa ${toggle ? 'fa-eye-slash' : 'fa-eye'}`} /></button>
        </div>
      </div>
      <small id={inputId} className="form-text text-muted">
        {error || '\u0020'}
      </small>
    </div>
  )
}

export default Email
