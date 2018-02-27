import React, { Component } from 'react'
import { Grid, Card, Image } from 'semantic-ui-react'

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
        <Grid.Column>
          <Card>
            <Image src={profile.picture} fluid />
            <Card.Content>
              <Card.Header>
                {profile.name}
              </Card.Header>
              <Card.Meta>
                {profile.nickname}
              </Card.Meta>
              <Card.Description>
                {profile.updated_at}
                {JSON.stringify(profile, null, 2)}
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}
