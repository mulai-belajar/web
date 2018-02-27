import React, { Component } from 'react'
import { Grid, Card, Image } from 'semantic-ui-react'
import ListKelas from '../components/medium/list-kelas'
import BoxOverview from '../components/medium/box-overview'
import Table from '../components/medium/table-donasi'

export default class Profile extends Component {
  componentWillMount() {
    this.setState({ profile: {} })
    const { userProfile, getProfile } = this.props.auth
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile })
      })
    } else {
      this.setState({ profile: userProfile })
    }
  }

  render() {
    const { profile } = this.state
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
        <Grid.Column width={12}>
          <BoxOverview />
          <ListKelas />
          <Table />
        </Grid.Column>
      </Grid>
    )
  }
}
