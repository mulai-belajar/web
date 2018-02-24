import React, {Component} from 'react'

import Navbar from './components/small/navbar'
//import Iconfeature from './components/small/icon-feature'
//import Sidebar from './components/medium/sidebar'
//import Kelaslist from './components/medium/kelaslist'
import Donationheader from './components/small/donation-header'
import Donationform from './components/small/donation-form'
import DonationContent from './components/small/donation-content'
import Footer from './components/small/footer'
import {Grid} from 'semantic-ui-react'
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

export default class App extends Component {
  render() {
    return (<Router>
      <div>
        <Navbar/>
        <Grid columns={2}>
          <Grid.Column>
            <Donationheader/>
          </Grid.Column>
          <Grid.Column>
            <Donationform/>
          </Grid.Column>
        </Grid>
        <Grid columns={2}>
          <Grid.Column>
            <DonationContent/>
          </Grid.Column>
        </Grid>
        <Footer/>
      </div>
    </Router>);
  }
}
