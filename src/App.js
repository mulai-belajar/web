import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'

export default class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login()
  }

  logout() {
    this.props.auth.logout()
  }

  render() {
    const { isAuthenticated } = this.props.auth

    return(
      <Menu color='teal' fluid>
        <Menu.Menu position='left'>
          <Menu.Item name='Mulai Belajar'></Menu.Item>
        </Menu.Menu>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Button onClick={this.goTo.bind(this, 'home')} primary>Home</Button>
          </Menu.Item>
          {
            !isAuthenticated() && (
              <Menu.Item>
                <Button onClick={this.login.bind(this)} primary>Login</Button>
              </Menu.Item>
            )
          }
          {
            isAuthenticated() && (
              <Menu.Item>
                <Button onClick={this.goTo.bind(this, 'profile')} primary>Profile</Button>
              </Menu.Item>
            )
          }
          {
            isAuthenticated() && (
              <Menu.Item>
                <Button onClick={this.logout.bind(this)} negative>Logout</Button>
              </Menu.Item>
            )
          }
        </Menu.Menu>
      </Menu>
    )
  }
}
