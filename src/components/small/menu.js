import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'

export default class MenuExampleSizeLarge extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>

        <Menu.Menu position='right'>
          <Menu.Item name='Tentang' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='Kontak' active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <Menu.Item name='Faq' active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <Dropdown item text='Masuk'>
            <Dropdown.Menu>
              <Dropdown.Item>Masuk Sebagai Donatur</Dropdown.Item>
              <Dropdown.Item>Masuk Sebagai Pengajar</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Daftar</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
