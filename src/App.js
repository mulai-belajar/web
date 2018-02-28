import React, {Component} from 'react'
import {Button, Menu, Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  login() {
    this.props.auth.login()
  }

  logout() {
    this.props.auth.logout()
  }

  render() {
    const { isAuthenticated } = this.props.auth

    return (
      <div>
      <Menu inverted className='no-border-radius teal'>
        <Menu.Menu position='left'>
          <Image src='/images/logo-mb.png' className="App-logo" alt="logo"/>
        </Menu.Menu>
        <Menu.Menu position='right'>
              <Menu.Item>
                <Link to='/'><Button primary>Beranda</Button></Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/tentang'><Button primary>Tentang</Button></Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/faq'><Button primary>FAQ</Button></Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/team'><Button primary>Team</Button></Link>
              </Menu.Item>
          {
            !isAuthenticated() && (
              <Menu.Item>
                <Button onClick={this.login.bind(this)} positive>Masuk</Button>
              </Menu.Item>
            )
          }
          {
            isAuthenticated() && (
              <Menu.Item>
                <Link to='/profil'><Button primary>Profil</Button></Link>
              </Menu.Item>
            )
          }
          {
            isAuthenticated() && (
              <Menu.Item>
                <Link to='/buat-kelas'><Button positive>Buat Kelas</Button></Link>
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

    </div>)
  }
}
