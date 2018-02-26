import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const Iconfeature = () => (
  <Grid>

    <Grid.Row className='Featured' columns={4}>
      <Grid.Column>
        <Image src='/images/care.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/care.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/care.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/care.png' />
      </Grid.Column>
    </Grid.Row>

  </Grid>
)
export default Iconfeature
