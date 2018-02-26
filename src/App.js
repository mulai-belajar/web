
import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react'
import { Button, Dropdown, Menu,Grid, Image } from 'semantic-ui-react'
import './App.css'
import MenuNav from './components/medium/header-user'
import MenuProUser from './components/medium/profile-menu-user'

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import HomeUser from './pages/home'
import KelasUser from './pages/kelas-saya'
import DonasiUser from './pages/donasi-saya'

const GridExampleVerticallyDivided = () => (
  <Router>
    <div>
      <MenuNav />
      <div  className="box-user-page">
      <Grid>
        <Grid.Row  className="box-noborder">
          <Grid.Column width={3}>
            <MenuProUser />
          </Grid.Column>
          <Grid.Column width={13}>
            <Route exact path='/' component={HomeUser} />
            <Route path='/kelas-user' component={KelasUser} />
            <Route path='/donasi-user' component={DonasiUser} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    </div>
  </Router>
)
export default GridExampleVerticallyDivided

import React, { Component } from 'react';
import Navbar from './components/small/navbar'
import Iconfeature from './components/small/icon-feature'
import Sidebar from './components/medium/sidebar'
import {Grid} from 'semantic-ui-react'
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

class App extends Component {
    render() {
     return (
       <div className="App">
         <header className="App-header">

         </header>
         <p className="App-intro">
         </p>


       <Grid columns={1}>
         <Grid.Column>
         <Navbar/>
         </Grid.Column>


     <Grid.Row columns={1}>
       <Grid.Column>
         <Iconfeature/>
       </Grid.Column>
     </Grid.Row>

     <Grid.Row columns={2}>
       <Grid.Column>
         <Sidebar/>
       </Grid.Column>

       <Grid.Column>
         <Sidebar/>
       </Grid.Column>
     </Grid.Row>
   </Grid>
</div>

      );
    }
  }

export default App
