import { Component } from 'react'

import authService from './auth/auth'

export default class App extends Component {
  render() {
    const auth = new authService()
    return(
      auth.login()
    )
  }
}
