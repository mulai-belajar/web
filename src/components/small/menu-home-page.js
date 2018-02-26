import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'
import'../../App.css'

export default class Menuhomepage extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu  className="navigasiright">
        <Menu.Menu position='right'>
          <Menu.Item className='menu'>
             Tentang
          </Menu.Item>
          <Menu.Item className='menu'>
             Kontak
          </Menu.Item>
          <Menu.Item>
             <Button color='teal'>Daftar</Button>
          </Menu.Item>
          <Menu.Item>
             <Button color='teal'>masuk</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
