import React from 'react'
import { Grid, Image, Header } from 'semantic-ui-react'

const Iconfeature = () => (
  <Grid centered columns={1} padded>
    <Grid.Column textAlign='center'>
      <Header size='huge'>Kenapa Mulai Belajar ?</Header>
    </Grid.Column>
    <Grid.Row className='Featured' columns={4}>
      <Grid.Column>
        <Image src='/images/care.png' />
        <h4>Kemudahan berbagi</h4>
      </Grid.Column>
      <Grid.Column>
        <Image src='/img/003-money.png' />
        <h4>Sistem transparan</h4>
      </Grid.Column>
      <Grid.Column>
        <Image src='/img/002-payment-method.png' />
        <h4>Transaksi aman</h4>
      </Grid.Column>
      <Grid.Column>
        <Image src='/img/001-teamwork.png' />
        <h4>Kontribusi untuk negeri</h4>
      </Grid.Column>
    </Grid.Row>

  </Grid>
)
export default Iconfeature
