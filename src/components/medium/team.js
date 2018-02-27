import React from 'react'
import { Image, Grid, Icon } from 'semantic-ui-react'

const ImageExampleCircular = () => (
  <div className='box-team'>
    <h1 className='contact-header'>Bertemu dengan Tim</h1>
  <Grid columns={3} padded>
   <Grid.Row >
    <Grid.Column>
      <Image src='./images/miftah.jpg' size='small' circular />
      <div className='contact-content'>
       <h3>Miftahul Agtamas F.</h3>
       <p >Lead & Fullstack Developer</p>
       <a href='https://www.facebook.com/agtamasmiftahul' rel="noopener noreferrer" target='_blank'><Icon name='facebook f'></Icon></a>
      </div>
    </Grid.Column>
    <Grid.Column>
      <Image src='./images/fahri.jpg' size='small' circular />
      <div className='contact-content'>
       <h3>Fahri Abd Hakim</h3>
       <p>Frontend Developer</p>
       <a href='https://www.facebook.com/fahriabdulhakim' rel="noopener noreferrer" target='_blank'><Icon name='facebook f'></Icon></a>
      </div>
    </Grid.Column>
    <Grid.Column>
        <Image src='./images/dono.jpg' size='small' circular />
        <div className='contact-content'>
         <h3>Aditia Darmadi J.</h3>
         <p>Frontend Developer</p>
         <a href='https://www.facebook.com/aditiadj' rel="noopener noreferrer" target='_blank'><Icon name='facebook f'></Icon></a>
        </div>
    </Grid.Column>
   </Grid.Row>
  </Grid>

  <Grid columns={3} padded centered>
   <Grid.Row>
    <Grid.Column>
      <Image src='./images/fikri.jpg' size='small' circular />
      <div className='contact-content'>
       <h3>Fikri Muhammad S.</h3>
       <p>Frontend Engineer</p>
       <a href='https://www.facebook.com/fikri.muhammad.520' rel="noopener noreferrer" target='_blank'><Icon name='facebook f'></Icon></a>
      </div>
    </Grid.Column>
    <Grid.Column>
      <Image src='./images/oliver.jpg' size='small' circular />
      <div className='contact-content'>
       <h3>Mr. Oliver Audhie</h3>
       <p>Tester & Investor</p>
       <a href='https://www.facebook.com/oliver8899' rel="noopener noreferrer" target='_blank'><Icon name='facebook f'></Icon></a>
      </div>
    </Grid.Column>
   </Grid.Row>
  </Grid>
  </div>
)

export default ImageExampleCircular
