import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import '../../App.css'
import Logo from '../small/logo';
import Menuhomepage from '../small/menu-home-page';

const Headerhomepage = () => (
  <div className="navigasi">
    <Grid columns={2} padded>
      <Grid.Column>
           <Logo />
      </Grid.Column>
      <Grid.Column>
        <Menuhomepage />
      </Grid.Column>
    </Grid>
  </div>
)

export default Headerhomepage
