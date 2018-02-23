import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import MenPro from '../small/menuprofile'
import UserMen from '../small/user-profile-box'

const GridExampleColumns = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={10}>
      <UserMen />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={8}>
      <MenPro />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleColumns
