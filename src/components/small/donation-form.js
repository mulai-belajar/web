import React from 'react'
import { Button, Card, Form } from 'semantic-ui-react'

const DonationForm = () => (
 <div className='donation-form'>
  <Card.Group>
     <Card textAlign='center'>
       <Card.Content>
         <Card.Header as='h1'>
           <h2>Donasi Untuk Mereka</h2>
         </Card.Header>
         <Card.Header as='h1'>
            <h3>Masukkan Nominal</h3>
         </Card.Header>
         <Form>
          <Form.Field>
           <span>Rp </span>
           <input className='' placeholder='0' type='number'/>
          </Form.Field>
        </Form>
           <Button className='' color='green'>Donasi Sekarang</Button>
       </Card.Content>
     </Card>
  </Card.Group>
 </div>
)

export default DonationForm
