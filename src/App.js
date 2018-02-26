
import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react'
import { Button, Dropdown, Menu,Grid, Image } from 'semantic-ui-react'
import './App.css'


import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Homepage from './pages/homepage'

const GridExampleVerticallyDivided = () => (
  <Router>
    <div className="App">
            <Route exact path='/' component={Homepage} />

    </div>
  </Router>
)
export default GridExampleVerticallyDivided
