import React, { Component } from 'react'
import { Menu, Message } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

export default class MenuExampleLinkItem extends Component {
  handleClick = () => this.setState({ message: 'onClick handled' })

  render() {
    const { message } = this.state || {}

    return (
      <div>
        <Menu vertical>
          <Link to='/'><Menu.Item href=''>Beranda</Menu.Item></Link>
          <Link to='/kelas-user'><Menu.Item>Kelas Saya</Menu.Item></Link>
        <Link to='/donasi-user'><Menu.Item>Donasi Saya</Menu.Item></Link>
      <Link to='/user'><Menu.Item>Akun saya</Menu.Item></Link>
    <Link to='/'><Menu.Item>Keluar</Menu.Item></Link>
        </Menu>

        {message && <Message content={message} />}
      </div>
    )
  }
}
