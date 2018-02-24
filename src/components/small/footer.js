import React, {Component} from 'react'
import {Image, Grid, List} from 'semantic-ui-react'
export default class Footer extends Component {
  render() {
    return (<div className="ui inverted teal vertical footer segment">
      <Grid columns={3}>
        <Grid.Column>
          <Image src='/images/logo-mb.png' className="App-logo" alt="logo" position='left'/>
        </Grid.Column>
        <Grid.Column>
          <div className="ui center aligned container">
            <h5 className="ui center inverted header">&copy; Copyright 2018 Mulai Belajar All Rights Reserved
            </h5>
          </div>
        </Grid.Column>
          <List link>
            <List.Item as='a'>Apa itu Mulai Belajar?</List.Item>
            <List.Item as='a'>FAQ</List.Item>
            <List.Item as='a'>Team</List.Item>
            <List.Item as='a'>Github</List.Item>
          </List>
        <Grid.Column>
        </Grid.Column>
      </Grid>
    </div>)
  }
}
