import React from 'react'

// Navbar
import NavigationBar from '../components/NavigationBar'

function LayoutDashboard({ children, navTitle }) {
  return (
    <>
      <NavigationBar navTitle={navTitle} />
      <div className="container vh-100">
        {children}
      </div>
    </>
  )
}

export default LayoutDashboard
