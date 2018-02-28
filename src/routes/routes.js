import React from 'react'
import { Redirect, Route, Router } from 'react-router-dom'
import App from '../App'
import Callback from '../callback/callback'
import Auth from '../auth/auth'
import history from '../auth/history'
import Profile from '../pages/profile'
import Home from '../pages/homepage'
import Kelas from '../components/medium/form-buat-kelas'
import Faq from '../components/medium/faq'
import Tentang from '../pages/tentang'
import Team from '../components/medium/team'

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
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/profile" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/"/>
            ) : (
              <Profile auth={auth} {...props} />
            )
          )} />
        <Route path="/buat-kelas" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/"/>
            ) : (
              <Kelas auth={auth} {...props} />
            )
          )} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
        <Route path="/faq" render={(props) => <Faq auth={auth} {...props} />} />
        <Route path="/tentang" render={(props) => <Tentang auth={auth} {...props} />} />
        <Route path="/team" render={(props) => <Team auth={auth} {...props} />} />
        </div>
      </Router>
  );
}
