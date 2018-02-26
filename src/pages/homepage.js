import React, { Component } from 'react';
import Navbar from '../components/small/navbar'
import Iconfeature from '../components/small/icon-feature'
import Sidebar from '../components/medium/sidebar'
import {Grid} from 'semantic-ui-react'
import '../App.css';
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
