import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import axios from 'axios'

export default class Api extends Component {
  componentWillMount() {
    this.setState({
      message: ' '
    })
  }
  ping() {
    axios.get(`http://localhost:3333/public`)
      .then(response => this.setState({ message: response.data.message }))
      .catch(error => this.setState({ message: error.message }))
  }
  securedPing() {
    const { getAccessToken } = this.props.auth;
    const headers = { 'Authorization': `Bearer ${getAccessToken()}`}
    axios.get(`http://localhost:3333/private-scopes`, { headers })
      .then(response => this.setState({ message: response.data.message }))
      .catch(error => this.setState({ message: error.message }));
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    const { message } = this.state;
    return (
      <div>
        <h1>Make a Call to the Server</h1>
        {
          !isAuthenticated() &&
            <p>Log in to call a private (secured) server endpoint.</p>
        }
        <Button onClick={this.ping.bind(this)} primary>Ping</Button>
        {' '}
        {
          isAuthenticated() && (
              <Button onClick={this.securedPing.bind(this)} primary>Call Private</Button>
            )
         }
         <h2>{message}</h2>
       </div>
    );
  }
}
