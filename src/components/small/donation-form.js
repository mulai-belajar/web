import React, { Component } from 'react'
import CurrencyInput from 'react-currency-input'
import { Button, Card, Form, Modal, Progress } from 'semantic-ui-react'

class DonationForm extends Component {
  state = { open: false, percent: 100 }
  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })
  increment = () => this.setState({
   percent: this.state.percent >= 100 ? 0 : this.state.percent + 20,
  })

 render() {
    const { open, size } = this.state

 return(
 <div className='donation-form'>
  <Card.Group>
     <Card textAlign='center'>
       <Card.Content>
         <Card.Header as='h1'>
           <h2>Donasi Untuk Mereka</h2>
         </Card.Header>
         <div className='amount'>
          <h2 className='amount-now'>Rp163.000.000</h2>
          <h5 className='amount-target'>terkumpul dari target Rp120.000.000</h5>
         </div>
         <div>
          <Progress percent={this.state.percent} indicating />
         </div>
         <div className="donation-button">
           <Button inverted color='green' onClick={this.show('tiny')}>Donasi Sekarang</Button>
          <Modal className='donation-modal' size={size} open={open} onClose={this.close}>
             <Modal.Header>
               Masukkan Nominal
             </Modal.Header>
             <Modal.Content>
              <div className='donation-button'>
             <Form>
              <Form.Field>
                <input type='text' placeholder='User'/>
              </Form.Field>
             </Form>
             </div>
            <Form>
             <Form.Field>
              <CurrencyInput className='form-control' precision="0" thousandSeparator="." prefix="Rp"/>
             </Form.Field>
            </Form>
            </Modal.Content>
             <Modal.Actions>
             <Button negative>
               Tidak
             </Button>
             <Button positive icon='checkmark' labelPosition='right' content='Ya' onActionClick />
            </Modal.Actions>
         </Modal>
         </div>
       </Card.Content>
     </Card>
  </Card.Group>
 </div>
)
}
}

export default DonationForm
