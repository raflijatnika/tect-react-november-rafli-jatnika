import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

// Security
import RedirectToHome from './secure/RedirectToHome'
import RedirectToLogin from './secure/RedirectToLogin'

// Helper
// import NavigationHelper from './helper/NavigationHelper'

// Screen
import Home from '../screens/Home'
import Login from '../screens/Login'
import Register from '../screens/Register'
import CheckList from '../screens/CheckList'
import CreateCheckList from '../screens/CreateCheckList'
import CheckListItem from '../screens/CheckListItem'
import RenameItem from '../screens/RenameItem'

function Base() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <RedirectToLogin>
            <Home />
          </RedirectToLogin>
        </Route>
        <Route path="/register">
          <RedirectToHome>
            <Register />
          </RedirectToHome>
        </Route>
        <Route path="/login">
          <RedirectToHome>
            <Login />
          </RedirectToHome>
        </Route>
        <Route exact path="/checklist">
          <RedirectToLogin>
            <CheckList />
          </RedirectToLogin>
        </Route>
        <Route path="/create-checklist">
          <RedirectToLogin>
            <CreateCheckList />
          </RedirectToLogin>
        </Route>
        <Route path="/checklist/:id">
          <RedirectToLogin>
            <CheckListItem />
          </RedirectToLogin>
        </Route>
        <Route path="/item-rename/:itemId">
          <RedirectToLogin>
            <RenameItem />
          </RedirectToLogin>
        </Route>
      </Switch>
      {/* <NavigationHelper /> */}
    </Router>
  )
}

export default Base
