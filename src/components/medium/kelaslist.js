import React,{Component}  from "react"
import { Grid, Card, Progress, Button, Icon, Modal, Header } from 'semantic-ui-react'
import axios from 'axios'
import '../../App.css'

export default class Kelaslist extends Component {
  componentWillMount() {
    this.setState({
      percent : 20,
      classes: []
    })
  }

  componentDidMount() {
    axios.get(`http://localhost:3333/api/class`)
      .then(response => this.setState({ classes: response.data.data }))
      .catch(error => this.setState({ message: error.message }))
  }

  show = size => () => this.setState({ size, open: true })

  increment = () => this.setState({
    percent: this.state.classes.now_donation >= 100 ? 0 : this.state.classes.total_donation + 10,
  })

  render() {
    const { classes } = this.state

    return(
      <Grid columns={3} padded>
      {classes.map(classes =>
        <Grid.Column>
          <Card>
            <Card.Content padded>
             <Card.Header textAlign='center'>
              <div>
                <Modal className='modal-box' dimmer='blurring' trigger={<a><Header size='small'>{classes.name}</Header></a>}>
                   <Modal.Header>{classes.name}</Modal.Header>
                   <Modal.Content>
                     <Modal.Description>
                        <Grid columns={1} padded>
                           <Grid.Column width={12}>
                              {classes.description}
                           </Grid.Column>
                           <Grid.Column width={4}>
                              <Header size='mini'>Donatur</Header>
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
                <h4>{classes.category.name}</h4>
              </Card.Meta>
              <Card.Content>
                <div>
                 <h5 className='name'>{classes.created_by}</h5>
                </div>
              </Card.Content>
              <div className='indicator'>
               <Progress percent={classes.now_donation} indicating />
              </div>
              <Grid columns={2}>
               <Grid.Column>
                <Card.Content>
                  <h5 className='collected'>Terkumpul</h5>
                  <h5 className='collect-amount'>IDR {classes.now_donation}</h5>
                </Card.Content>
               </Grid.Column>
               <Grid.Column>
                <Card.Content>
                  <h5 className='day-left'>Target Donasi</h5>
                  <h5 className='day'>IDR {classes.total_donation}</h5>
                </Card.Content>
               </Grid.Column>
              </Grid>
           </Card.Content>
           <Card.Content extra>
             <Button icon labelPosition='right' fluid positive>
               Donasi
               <Icon name='right arrow' />
             </Button>
           </Card.Content>
          </Card>
        </Grid.Column>
      )}
    </Grid>
    )
  }
}
