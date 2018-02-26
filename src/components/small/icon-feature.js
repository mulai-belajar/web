import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const Iconfeature = () => (
  <Grid>

    <Grid.Row className='Featured' columns={4}>
      <Grid.Column>
        <Image src='/images/care.png' />
        <p>Kemudahan berbagi</p>
      </Grid.Column>
      <Grid.Column>
        <Image src='/img/003-money.png' />
        <p>Sistem transparan</p>
      </Grid.Column>
      <Grid.Column>
        <Image src='/img/002-payment-method.png' />
        <p>Transaksi aman</p>
      </Grid.Column>
      <Grid.Column>
        <Image src='/img/001-teamwork.png' />
        <p>Kontribusi untuk negeri</p>
      </Grid.Column>
    </Grid.Row>

  </Grid>
)
export default Iconfeature
