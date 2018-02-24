import React from 'react'
import { Image, Grid, Header, Feed } from 'semantic-ui-react'

const DonationHeader = () => (
    <Grid columns={1} padded>
      <div className='donation-header'>
        <Header size='large'>
          Kelas belajar Bahasa Inggris untuk anak-anak di Desa Sukrawetan
        </Header>
        <Image src='/images/anaksekolah.jpg' size='large' />
          <Feed>
           <Feed.Event>
             <Feed.Label>
              <Image src='/images/andrew.jpg' />
             </Feed.Label>
             <Feed.Content>
               Inisiator: <a>Andrew</a>
             </Feed.Content>
            </Feed.Event>
          </Feed>
      </div>
    </Grid>
  )

export default DonationHeader
