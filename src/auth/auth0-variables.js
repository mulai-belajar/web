export const AUTH_CONFIG = {
  domain: process.env.REACT_APP_AUTH_DOMAIN || "mulaibelajar.auth0.com",
  clientId:
    process.env.REACT_APP_AUTH_CLIENT_ID || "Fk8GynHevgwu6sa1CFD4WDOgsuv6Veno",
  callbackUrl:
    process.env.REACT_APP_AUTH_CALLBACK_URL ||
    "http://mulaibelajar.netlify.com/callback",
  audience: process.env.REACT_APP_AUTH_AUDIENCE || "http://api.mulaibelajar.com"
}
