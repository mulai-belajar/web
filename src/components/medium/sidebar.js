import React, { Component } from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import axios from 'axios'

export default class Sidebar extends Component {
  componentWillMount() {
    this.setState({
      categories: []
    })
  }

  componentDidMount() {
    axios.get(`http://localhost:3333/api/category`)
      .then(response => this.setState({ categories: response.data.data }))
      .catch(error => this.setState({ message: error.message }))
  }

  handleItemClick = name => this.setState({ activeItem: name })

  render() {
    const { categories } = this.state

    return (
      <Grid columns={1} padded>
      <Grid.Column>
      <Menu vertical>
        <Menu.Item>
          <Menu.Header>Kategori</Menu.Header>

          <Menu.Menu>
            {categories.map(category =>
              <Menu.Item name={category.name} onClick={this.handleItemClick} />
            )}
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    </Grid.Column>
    </Grid>
    )
  }
}
