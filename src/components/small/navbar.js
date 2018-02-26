import React, { Component } from 'react'
import { Button, Segment, Menu, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom"


export default class Navbar extends Component {
  render() {
    return (
  <div>
    <Menu inverted className='no-border-radius' color='teal'>
      <Menu.Menu position='left'>
        <Image src='/images/logo-mb.png' className="App-logo" alt="logo"/>
      </Menu.Menu>
      <Menu.Menu position='right'>
        <Menu.Item name='Tentang'></Menu.Item>
        <Menu.Item name='Kontak'></Menu.Item>
        <Menu.Item>
          <Button positive>Daftar</Button>
        </Menu.Item>
        <Menu.Item>
          <Button primary>Masuk</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>

  </div>
    )
  }
}
