import React, { Component } from 'react'
import { Grid, Card, Image, Button, Header, Modal, Divider } from 'semantic-ui-react'
import axios from 'axios'
import Auth from '../auth/auth'
import Currency from 'react-currency-formatter'

const auth = new Auth()

export default class Profile extends Component {
  componentWillMount() {
    this.setState({
      classes: [],
      profile: {}
    })

    const { getAccessToken } = auth

    const config = {
      headers: {
        'Authorization' : `Bearer ${getAccessToken()}`
      }
    }

    const { userProfile, getProfile } = this.props.auth
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile })

        axios.get(`http://localhost:3333/api/class/user/${this.state.profile.nickname}`, config)
          .then(response => this.setState({ classes: response.data.data }))
          .catch(error => this.setState({ message: error.message }))
      })
    } else {
      this.setState({ profile: userProfile })
    }
  }

  render() {
    const { profile, classes } = this.state
    return(
      <Grid centered columns={1} padded>
        <Grid.Column width={4}>
          <Card fluid>
            <Image src={profile.picture} fluid />
            <Card.Content>
              <Card.Header>
                {profile.name}
              </Card.Header>
              <Card.Meta>
                {profile.nickname}
              </Card.Meta>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={8}>
          <Header size='large'>Daftar kelas yang telah dibuat</Header>
        {classes.map(classes =>
          <Card fluid>
            <Card.Content>
              <Grid columns={2} padded={true}>
              <Grid.Column width={13}>
                <Card.Header>
                  <Header size='medium'>{classes.name}</Header>
                  <Header size='tiny'>Dibuat pada : {classes.createdAt}</Header>
                  <Header size='tiny'>
                    Donasi :
                    IDR&nbsp;
                    <Currency
                      quantity={classes.now_donation}
                      pattern="##,### "
                      group="."
                    />
                    /
                    IDR&nbsp;
                    <Currency
                      quantity={classes.total_donation}
                      pattern="##,### "
                      group="."
                    />
                  </Header>
                </Card.Header>
              </Grid.Column>
              <Grid.Column width={3}>
                <Modal className='modal-box' dimmer='blurring' trigger={<Button positive fluid>Detail</Button>}>
                   <Modal.Header>{classes.name}</Modal.Header>
                   <Modal.Content scrolling>
                     <Modal.Description>
                        <Grid columns={1} padded>
                           <Grid.Column width={12}>
                              {classes.description}
                              <Divider />
                              <Header size='tiny'>Target Donasi</Header>
                                IDR&nbsp;
                                <Currency
                                  quantity={classes.total_donation}
                                  pattern="##,### "
                                  group="."
                                />
                              <Header size='tiny'>Donasi Terkumpul</Header>
                                IDR&nbsp;
                                <Currency
                                  quantity={classes.now_donation}
                                  pattern="##,### "
                                  group="."
                                />
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
              </Grid.Column>
              </Grid>
            </Card.Content>
          </Card>
        )}
        </Grid.Column>
      </Grid>
    )
  }
}
