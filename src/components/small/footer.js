import React, { Component } from 'react'
import { Image, Grid, List } from 'semantic-ui-react'
export default class Footer extends Component {
  render() {
    return (
        <Grid columns={3}>
        <Grid.Row color='teal'>
        <Grid.Column>
          <a href="www.mulaibelajar.com" title='Mulaibelajar.com' rel="noopener noreferrer" target="_blank">
            <Image src='/images/logo-mb.png' className="footer-logo" position='left' alt='Mulaibelajar.com'/>
          </a>
        </Grid.Column>
        <Grid.Column>
          <div className="ui center aligned container footer">
            <h5 className="ui center inverted footer">Made with ❤ developed by Mulai Belajar</h5>
          </div>
        </Grid.Column>
        <Grid.Column textAlign='right'>
          <List link className='footer-menu'>
            <List.Item as='a' color='white'><a href="https://mulaibelajar.gitbooks.io/preparation/" rel="noopener noreferrer" target="_blank">Apa itu Mulai Belajar?</a></List.Item>
            <List.Item as='a'><a href="www.siteyouwishtolinkto.com">FAQ</a></List.Item>
            <List.Item as='a'><a href="https://mulaibelajar.gitbooks.io/preparation/chapter1.html" rel="noopener noreferrer" target="_blank">Team</a></List.Item>
            <List.Item as='a'><a href="https://github.com/mulaibelajar" rel="noopener noreferrer" target="_blank">Github</a></List.Item>
          </List>
        </Grid.Column>
      </Grid.Row>
      </Grid>
    )
  }
}
