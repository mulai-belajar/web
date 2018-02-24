import React, { Component } from 'react'
import { Grid, Menu } from 'semantic-ui-react'

export default class Sidebar extends Component {
  handleItemClick = name => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state || {}

    return (
      <Grid columns={1} padded>
      <Grid.Column>
      <Menu vertical>
        <Menu.Item>
          <Menu.Header>Kategori</Menu.Header>

          <Menu.Menu>
            <Menu.Item name='IT dan Software' active={activeItem === 'IT Software'} onClick={this.handleItemClick} />
            <Menu.Item name='Seni dan Desain' active={activeItem === 'Seni Desain'} onClick={this.handleItemClick} />
            <Menu.Item name='Bahasa' active={activeItem === 'IT Software'} onClick={this.handleItemClick} />
            <Menu.Item name='Bisnis dan Marketing' active={activeItem === 'Seni Desain'} onClick={this.handleItemClick} />
            <Menu.Item name='Akademik' active={activeItem === 'IT Software'} onClick={this.handleItemClick} />
            <Menu.Item name='Pengembangan Diri' active={activeItem === 'Seni Desain'} onClick={this.handleItemClick} />
            <Menu.Item name='Hobi dan Gaya Hidup' active={activeItem === 'IT Software'} onClick={this.handleItemClick} />
            <Menu.Item name='Agama' active={activeItem === 'Seni Desain'} onClick={this.handleItemClick} />
            <Menu.Item name='Persiapan Ujian' active={activeItem === 'IT Software'} onClick={this.handleItemClick} />
            <Menu.Item name='Kesehatan' active={activeItem === 'Seni Desain'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    </Grid.Column>
    </Grid>
    )
  }
}
