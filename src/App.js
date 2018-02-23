import React, {Component} from 'react';

import Navbar from './components/small/navbar'
import Iconfeature from './components/small/icon-feature'
import Sidebar from './components/medium/sidebar'
import Kelaslist from './components/medium/kelaslist'
import {Grid} from 'semantic-ui-react'
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

class App extends Component {
  render() {
    return (<Router>
      <Grid columns={1}>
        <Grid.Column>
        <Navbar/>
        </Grid.Column>


    <Grid.Row columns={1}>
      <Grid.Column>
        <Iconfeature/>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1}>
      <Grid.Column width={3}>
        <Sidebar/>
      </Grid.Column>

      <Grid.Column width={13}>
        <Kelaslist/>
      </Grid.Column>
    </Grid.Row>
  </Grid>

    </Router>
    );
  }
}

export default App;
