import React from 'react'

function Email(props) {
  const { labelText, inputName, inputId, inputRef, error } = props

  return (
    <div className="form-group">
      <label htmlFor={inputId}>{ labelText }</label>
      <input type="email" name={inputName} id={inputId} ref={inputRef} autoComplete="off" spellCheck="false" className="form-control" />
      <small id={inputId} className="form-text text-muted">
        { error || '\u0020' }
      </small>
    </div>
  )
}

export default Email
