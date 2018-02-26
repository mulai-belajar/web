import React, { Component } from 'react'
import axios from 'axios'
import { Grid, Card } from 'semantic-ui-react'

export default class Home extends Component {
  componentWillMount() {
    this.setState({
      classes: [],
      categories: []
    })
  }

  componentDidMount() {
    axios.get(`http://localhost:3333/api/class`)
      .then(response => this.setState({ classes: response.data.data }))
      .catch(error => this.setState({ message: error.message }))

    axios.get(`http://localhost:3333/api/category`)
      .then(response => this.setState({ categories: response.data.data }))
      .catch(error => this.setState({ message: error.message }))
  }

  login() {
    this.props.auth.login()
  }
  render() {
    const { isAuthenticated } = this.props.auth
    const { classes, categories } = this.state
    return (
      <Grid columns={5} padded>
        <Grid.Column width={3}>
          <Card fluid>
            <Card.Content>
              <Card.Description>
                { categories.map( category =>
                  <a><p>{ category.name }</p></a>
                ) }
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        {classes.map(classes =>
          <Grid.Column>
            <Card fluid>
              <Card.Content>
                <Card.Header textAlign='center'>
                  { classes.name }
                </Card.Header>
                <Card.Meta textAlign='center'>
                  { classes.category.name }
                </Card.Meta>
                <Card.Description>
                  { classes.description }
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                { classes.address }
              </Card.Content>
              <Card.Content extra>
                { classes.now_donation } from { classes.total_donation }
              </Card.Content>
              {
                isAuthenticated() && (
                  <Card.Content extra textAlign='center'>
                    <h4>Donatur</h4>
                    { classes.donatur.map( donatur =>
                      <p>{ donatur.donatur }</p>
                    ) }
                  </Card.Content>
                )
              }
            </Card>
          </Grid.Column>
        )}
      </Grid>
    );
  }
}
