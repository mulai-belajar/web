import '../App.css'
import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExampleCelledInternally = () => (
  <Grid celled='internally'>
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='/assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='/assets/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>


  </Grid>
)

export default GridExampleCelledInternally
