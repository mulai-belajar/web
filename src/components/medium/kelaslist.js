import React,{Component}  from "react"
import { Grid, Card, Progress, Button, Icon, Modal, Label, Header, Form, Input } from 'semantic-ui-react'
import axios from 'axios'
import '../../App.css'
import Auth from '../../auth/auth'
import querystring from 'querystring'
import swal from 'sweetalert'
import Currency from 'react-currency-formatter'
import { Redirect } from 'react-router-dom'

const auth = new Auth()

export default class Kelaslist extends Component {
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

    const { getAccessToken } = auth

    const config = {
      headers: {
        'Authorization' : `Bearer ${getAccessToken()}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }
    }

    axios.post(`${process.env.REACT_APP_API_URL}/donation`, querystring.stringify(data), config)
    .then((response) => {
      swal({
        title: 'Terima Kasih',
        text: 'Anda telah membantu kelas mereka',
        icon: 'success',
        button: 'Kembali'
      }).then(okay => {
         if (okay) {
          <Redirect to='/' push />
        }
      })
    }).catch((error) => {
      swal('Maaf', 'Silakan coba kembali', 'error')
    })
  }

  componentWillMount() {
    this.setState({
      classes: []
    })
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/class`)
      .then(response => this.setState({ classes: response.data.data }))
      .catch(error => this.setState({ message: error.message }))
  }

  login() {
    auth.login()
  }

  render() {
    const { classes } = this.state

    return(
      <div>
      <Grid centered columns={1} padded>
        <Grid.Column textAlign='center'>
          <Header size='huge'>Ayo donasi sekarang!</Header>
        </Grid.Column>
      </Grid>
      <Grid centered columns={4} padded={true}>
      {classes.map(classes =>
        <Grid.Column>
          <Card fluid>
            <Card.Content>
             <Card.Header textAlign='center'>
              <div>
                <Modal className='modal-box' dimmer='blurring' trigger={<a><Header size='tiny'>{classes.name}</Header></a>}>
                   <Modal.Header>{classes.name}</Modal.Header>
                   <Modal.Content scrolling>
                     <Modal.Description>
                        <Grid columns={1} padded>
                           <Grid.Column width={12}>
                              {classes.description}
                           </Grid.Column>
                           <Grid.Column width={4}>
                              <Header size='small'>Donatur</Header>
                              {classes.donatur.map(donatur =>
                                <p>{donatur.donatur}</p>
                              )}
                           </Grid.Column>
                        </Grid>
                     </Modal.Description>
                   </Modal.Content>
                 </Modal>
              </div>
              </Card.Header>
              <Card.Meta textAlign='center'>
                <h4>{classes.address}</h4>
              </Card.Meta>
              <Card.Content>
                <div>
                 <h5 className='name'>{classes.created_by}</h5>
                </div>
              </Card.Content>
              <div className='indicator'>
               <Progress value={classes.now_donation} total={classes.total_donation} indicating />
              </div>
              <Grid columns={2}>
               <Grid.Column>
                <Card.Content>
                  <h5 className='collected'>Terkumpul</h5>
                  <h5 className='collect-amount'>
                    IDR&nbsp;
                    <Currency
                      quantity={classes.now_donation}
                      pattern="##,### "
                      group="."
                    />
                  </h5>
                </Card.Content>
               </Grid.Column>
               <Grid.Column>
                <Card.Content>
                  <h5 className='day-left'>Target Donasi</h5>
                  <h5 className='day'>
                    IDR&nbsp;
                    <Currency
                      quantity={classes.total_donation}
                      pattern="##,### "
                      group="."
                    />
                  </h5>
                </Card.Content>
               </Grid.Column>
              </Grid>
           </Card.Content>
           <Card.Content extra>
             {
               auth.isAuthenticated() && (
                 <Modal className='modal-box' trigger={
                   <Button icon labelPosition='right' fluid positive>
                       Donasi
                     <Icon name='right arrow' />
                   </Button>
                 }>
                    <Modal.Header>Ayo bantu mereka. Donasi sekarang!</Modal.Header>
                    <Modal.Content>
                      <Modal.Description>
                         <Grid columns={1} padded>
                            <Grid.Column>
                               <Form onSubmit={this.handleSubmit}>
                                 <Form.Field id='class' control={Input} label='Kelas' value={classes._id} disabled onChange={this.handleChange}/>
                                 <Form.Field id='donatur' control={Input} label='Donatur' placeholder='Nama Lengkap' onChange={this.handleChange}/>
                                 <Form.Field>
                                   <label>Target Donasi</label>
                                   <Input id='amount' labelPosition='right' type='number' onChange={this.handleChange}>
                                     <Label basic>IDR</Label>
                                     <input/>
                                   </Input>
                                  </Form.Field>
                                 <Button type='submit' positive>Donasi Sekarang</Button>
                               </Form>
                            </Grid.Column>
                         </Grid>
                      </Modal.Description>
                    </Modal.Content>
                 </Modal>
               )
             }
             {
               !auth.isAuthenticated() && (
                 <Button onClick={this.login.bind(this)} icon labelPosition='right' fluid positive>
                     Donasi
                   <Icon name='right arrow' />
                 </Button>
               )
             }
           </Card.Content>
          </Card>
        </Grid.Column>
      )}
    </Grid>
    </div>
    )
  }
}
