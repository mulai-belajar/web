import React, { Component } from 'react'
import { Menu, Message } from 'semantic-ui-react'

export default class MenuExampleLinkItem extends Component {
  handleClick = () => this.setState({ message: 'onClick handled' })

  render() {
    const { message } = this.state || {}

    return (
      <div>
        <Menu vertical>
          <Menu.Item href=''>Beranda</Menu.Item>
          <Menu.Item>Kelas Saya</Menu.Item>
          <Menu.Item>Donasi Saya</Menu.Item>
          <Menu.Item>Akun saya</Menu.Item>
          <Menu.Item>Keluar</Menu.Item>
        </Menu>

        {message && <Message content={message} />}
      </div>
    )
  }
}
