import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import './App.css'

import Navbar from './components/small/navbar'
import Sidebar from './components/medium/sidebar'
import Boxclasslist from './components/medium/box-class-list'
import Footer from './components/small/footer'

import { BrowserRouter as Router } from 'react-router-dom'

export default class App extends Component {
  render() {
    return(
  <Router>
      <div>
        <Navbar/>
        <Grid columns={2}>
          <Grid.Column width={5}>
            <Sidebar/>
          </Grid.Column>
          <Grid.Column>
            <Boxclasslist/>
          </Grid.Column>
        </Grid>
        <Footer/>
      </div>
    </Router>
   )
  }
}
