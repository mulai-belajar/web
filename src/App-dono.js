import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react'

import Navbar from './components/small/navbar'
import Team from './components/medium/team'
import Footer from './components/small/footer'

import './App.css'


class Homepage extends Component {
    render() {
     return (
      <div className="App">
       <Grid columns={1}>
         <Grid.Column>
           <Navbar/>
         </Grid.Column>
        <Grid.Row columns={1}>
         <Grid.Column>
           <Team/>
         </Grid.Column>
        </Grid.Row>
        <Grid.Row>
         <Grid.Column>
          <Footer />
         </Grid.Column>
        </Grid.Row>
       </Grid>
      </div>
      );
    }
  }

export default Homepage
