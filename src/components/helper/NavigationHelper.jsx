/* eslint-disable no-sequences */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import LogoutButton from '../button/LogoutButton'

const nav = [
  ['/', 'Home'],
  ['/register', 'Register'],
  ['/login', 'Login'],
  ['/checklist', 'CheckList'],
  ['/detail-checklist', 'Detail CheckList'],
  ['/item-rename', 'Item Rename'],
  ['/create-checklist', 'Create CheckList'],
]

const style = {
  position: 'fixed',
  right: '10px',
  bottom: '10px',
}

function NavigationHelper() {
  const [show, setShow] = useState(false)
  return (
    <nav style={style}>
      <div className="list-goup">
        <LogoutButton />
        {
          show && nav.map(([to, path]) => (
            <Link key={to} to={to} className="list-group-item">{path}</Link>
          ))
        }
        <button type="button" className="btn btn-primary" onClick={() => (setShow(!show))}>{show ? 'Hide' : 'Show'}</button>
      </div>
    </nav>
  )
}

export default NavigationHelper
