import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import '../../App.css'
import Logo from '../small/logo';
import MenuRight from '../small/menu';

const GridExamplePadded = () => (
  <div className="navigasi">
    <Grid columns={2} padded>
      <Grid.Column>
           <Logo />
      </Grid.Column>
      <Grid.Column>
        <MenuRight />
      </Grid.Column>
    </Grid>
  </div>
)

export default GridExamplePadded
