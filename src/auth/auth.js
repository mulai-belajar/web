import auth0 from 'auth0-js'

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'mulaibelajar.auth0.com',
    clientID: 'TbBJGkV7h56W44anhWogEwsOeWmVwoXh',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://mulaibelajar.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  })

  login() {
    this.auth0.authorize()
  }
}
