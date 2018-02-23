import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'
import MenuNav from './components/medium/navigation'
import ListKelas from './components/medium/list-kelas'
import BoxOverview from './components/medium/box-overview'

export default class MenuExampleSizeLarge extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <ListKelas />
      </div>

    )
  }
}
