import React, { Component } from 'react';
import Iconfeature from '../components/small/icon-feature'
import Sidebar from '../components/medium/sidebar'
import {Grid} from 'semantic-ui-react'
import Footer from '../components/small/footer'
import '../App.css';
import Navbar from '../components/small/navbar'
import Kelaslist from '../components/medium/kelaslist'

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
         <Iconfeature/>
       </Grid.Column>
     </Grid.Row>

     <Grid.Row columns={2}>
       <Grid.Column width={3}>
         <Sidebar/>
       </Grid.Column>
        <Grid.Column width={13}>
          <Kelaslist/>
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
