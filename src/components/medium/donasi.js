import React, { Component } from 'react'
import { Grid, Modal, Form, Button, Icon, Input } from 'semantic-ui-react'

export default class Donasi extends Component {
  state = {
    class: '',
    donatur: '',
    amount: '',
  }

  handleChange = event => {
    this.setState({
      class: document.getElementById('class').value,
      donatur: document.getElementById('donatur').value,
      amount: document.getElementById('amount').value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const data = {
      class : this.state.class,
      donatur : this.state.donatur,
      amount : this.state.amount,
    }

    const { getAccessToken } = this.props.auth

    const config = {
      headers: {
        'Authorization' : `Bearer ${getAccessToken()}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }
    }

    axios.post('http://api-mulaibelajar.herokuapp.com/api/donation', querystring.stringify(data), config)
    console.log(this.state);
  }

  render() {
    const { classes } = this.state
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
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Field id='class' control={Input} label='Kelas' value={classes.name} disabled onChange={this.handleChange}/>
                      <Form.Field id='donatur' control={Input} label='Donatur' placeholder='Donatur' onChange={this.handleChange}/>
                      <Form.Field id='amount' control={Input} label='Jumlah Donasi' placeholder='IDR' onChange={this.handleChange}/>
                      <Button type='submit' positive>Donasi Sekarang</Button>
                    </Form>
                 </Grid.Column>
              </Grid>
           </Modal.Description>
         </Modal.Content>
      </Modal>
    )
  }
}
