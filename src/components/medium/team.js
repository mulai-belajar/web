import React from 'react'
import { Image, Grid, Icon, Card } from 'semantic-ui-react'

const ImageExampleCircular = () => (
  <div>
  <Grid columns={1} padded>
   <Grid.Column textAlign='center'>
     <h1 className='contact-header'>Tim Mulai Belajar</h1>
   </Grid.Column>
  </Grid>
  <Grid columns={5} padded>
   <Grid.Column>
     <Card>
       <Image src='./images/miftah.jpg' circular />
        <Card.Content textAlign='center'>
         <Card.Header>
           Miftahul Agtamas
         </Card.Header>
         <Card.Description>
           Lead & Fullstack Developer
         </Card.Description>
        </Card.Content>
        <Card.Content textAlign='center'>
          <a href='https://www.facebook.com/agtamasmiftahul' rel="noopener noreferrer" target='_blank'><Icon name='facebook f'></Icon></a>
        </Card.Content>
     </Card>
   </Grid.Column>

   <Grid.Column>
     <Card>
      <Image src='./images/fahri.jpg'/>
       <Card.Content textAlign='center'>
        <Card.Header>
          Fahri Abd Hakim
        </Card.Header>
        <Card.Description>
          Frontend Developer
        </Card.Description>
       </Card.Content>
       <Card.Content textAlign='center'>
         <a href='https://www.facebook.com/fahriabdulhakim' rel="noopener noreferrer" target='_blank'><Icon name='facebook f'></Icon></a>
       </Card.Content>
     </Card>
   </Grid.Column>

   <Grid.Column>
     <Card>
      <Image src='./images/dono.jpg'/>
       <Card.Content textAlign='center'>
        <Card.Header>
          Aditia Darmadi
        </Card.Header>
        <Card.Description>
          Frontend Developer
        </Card.Description>
       </Card.Content>
       <Card.Content textAlign='center'>
         <a href='https://www.facebook.com/aditiadj' rel="noopener noreferrer" target='_blank'><Icon name='facebook f'></Icon></a>
       </Card.Content>
     </Card>
   </Grid.Column>

   <Grid.Column>
     <Card>
       <Image src='./images/fikri.jpg'/>
        <Card.Content textAlign='center'>
         <Card.Header>
           Fikri Muhammad
         </Card.Header>
         <Card.Description>
           Frontend Developer
         </Card.Description>
        </Card.Content>
        <Card.Content textAlign='center'>
          <a href='https://www.facebook.com/fikri.muhammad.520' rel="noopener noreferrer" target='_blank'><Icon name='facebook f'></Icon></a>
        </Card.Content>
     </Card>
   </Grid.Column>

   <Grid.Column>
     <Card>
       <Image src='./images/oliver.jpg'/>
        <Card.Content textAlign='center'>
         <Card.Header>
           Oliver Audhie
         </Card.Header>
         <Card.Description>
            Tester
         </Card.Description>
        </Card.Content>
        <Card.Content textAlign='center'>
          <a href='https://www.facebook.com/oliver8899' rel="noopener noreferrer" target='_blank'><Icon name='facebook f'></Icon></a>
        </Card.Content>
     </Card>
   </Grid.Column>
  </Grid>
 </div>
)

export default ImageExampleCircular
