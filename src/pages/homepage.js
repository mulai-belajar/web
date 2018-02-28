import React, { Component } from 'react';
import Iconfeature from '../components/small/icon-feature'
import {Grid} from 'semantic-ui-react'
import Footer from '../components/small/footer'
import '../App.css';
import Kelaslist from '../components/medium/kelaslist'
import Slides from '../components/medium/slides'

class Homepage extends Component {
      render() {
     return (
       <div className="App">
       <Grid centered columns={1}>
         <Grid.Column>
           <Slides />
         </Grid.Column>
     <Grid.Row columns={1}>
       <Grid.Column>
         <Iconfeature/>
       </Grid.Column>
     </Grid.Row>

     <Grid.Row columns={1}>
        <Grid.Column>
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
