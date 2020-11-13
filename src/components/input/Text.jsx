import React from 'react'

function Text(props) {
  const { labelText, inputName, inputId, inputRef, value, error } = props

  return (
    <div className="form-group">
      <label htmlFor={inputId}>{ labelText }</label>
      <input type="text" name={inputName} id={inputId} ref={inputRef} defaultValue={value} autoComplete="off" spellCheck="false" className="form-control" />
      <small id={inputId} className="form-text text-muted">
        { error || '\u0020' }
      </small>
    </div>
  )
}

export default Text
