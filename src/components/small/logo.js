import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import '../App.css';

const GridExampleVerticallyDivided = () => (
  <Grid divided='vertically'>
    <Grid.Row columns={1}>
      <Grid.Column>
        <Image className="logo" src='../img/seventhLogo.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleVerticallyDivided
