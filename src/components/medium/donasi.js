import React, { Component } from 'react'
import { Grid, Modal, Form, Button, Icon, Input } from 'semantic-ui-react'

export default class Donasi extends Component {
  render() {
    return(
      <Modal className='modal-box' dimmer='blurring' trigger={
        <Button icon labelPosition='right' fluid positive>
            Donasi
          <Icon name='right arrow' />
        </Button>
      }>
         <Modal.Header>Ayo bantu mereka. Donasi Sekarang !</Modal.Header>
         <Modal.Content>
           <Modal.Description>
              <Grid columns={1} padded>
                 <Grid.Column>
                    <Form>
                      <Form.Field id='form-input-control-first-name' control={Input} label='Donatur' text='Nama' disabled />
                      <Form.Field id='form-input-control-first-name' control={Input} label='Jumlah Donasi' placeholder='IDR' />
                      <Form.Field id='form-button-control-public' control={Button} content='Donasi Sekarang' positive/>
                    </Form>
                 </Grid.Column>
              </Grid>
           </Modal.Description>
         </Modal.Content>
      </Modal>
    )
  }
}
