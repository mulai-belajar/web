import React, { Component } from 'react'
import { Form, Button, Card, Segment, Sticky } from 'semantic-ui-react'

export default class DonationForm2 extends Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state

    return (
      <div className='donation-form' ref={this.handleContextRef}>
          <Sticky context={contextRef}>
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
          </Sticky>
        </div >
    )
  }
}
