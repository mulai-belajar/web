import React from 'react'
import { Redirect, Route, Router } from 'react-router-dom'
import Navbar from '../components/large/navbar'
import Callback from '../callback/callback'
import Auth from '../auth/auth'
import history from '../auth/history'
import User from '../pages/home'
import Homepage from '../pages/homepage'

const auth = new Auth()

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication()
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Navbar />
          <Route path="/" render={(props) => <Homepage auth={auth} {...props} />} />
          <Route path="/profile" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/"/>
            ) : (
              <User auth={auth} {...props} />
            )
          )} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
        </div>
      </Router>
  );
}
