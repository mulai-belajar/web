import React, { Component } from 'react';
import Iconfeature from './components/small/icon-feature'
import Sidebar from './components/medium/sidebar'
import {Grid} from 'semantic-ui-react'
import Headerhomepage from './components/medium/header-homepage'
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

import Kelaslist from './components/medium/kelaslist'

class App extends Component {
    render() {
     return (
       <div className="App">
         <Headerhomepage/>
       <Grid columns={1}>

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
         <Kelaslist/>
       </Grid.Column>
     </Grid.Row>
   </Grid>
</div>

      );
    }
  }

export default App
