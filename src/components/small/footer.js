import React, { Component } from 'react'
import { Image, Grid, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  render() {
    return (
        <Grid columns={3} className='footer'>
        <Grid.Row>
        <Grid.Column >
          <a href="www.mulaibelajar.com" title='Mulaibelajar.com' rel="noopener noreferrer" target="_blank">
            <Image src='/images/logo-mb.png' className="footer-logo" position='left' alt='Mulaibelajar.com'/>
          </a>
        </Grid.Column>
        <Grid.Column>
          <div className="ui center aligned container footer">
            <h5 className="ui center inverted footer">Developed by Mulai Belajar Team</h5>
          </div>
        </Grid.Column>
        <Grid.Column textAlign='right'>
          <List link className='footer-menu'>
            <Link to='/faq'><List.Item as='a' color='white'>FAQ</List.Item></Link>
            <Link to='/team'><List.Item as='a' color='white'>Team</List.Item></Link>
            <Link to='/tentang'><List.Item as='a' color='white'>Tentang</List.Item></Link>
          </List>
        </Grid.Column>
      </Grid.Row>
      </Grid>
    )
  }
}
