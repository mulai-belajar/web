import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'
import'../../App.css'

export default class MenuExampleSizeLarge extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu  className="navigasiright">
        <Menu.Menu position='right'>
          <Menu.Item className='menu'>
             List Daftar Kelas
          </Menu.Item>
          <Menu.Item>
             <Button color='teal'>Buat Kelas</Button>
          </Menu.Item>
          <Dropdown className='dropmenu' item text='fikri'>
            <Dropdown.Menu>
              <Dropdown.Item>Ubah Data</Dropdown.Item>
              <Dropdown.Item>Keluar</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    )
  }
}
