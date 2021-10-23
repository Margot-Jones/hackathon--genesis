module.exports = {
  port: process.env.PORT || 5000,
  audience: process.env.AUTH0_AUDIENCE || '',
  issuer: process.env.AUTH0_ISSUER || '',
  domain: process.env.AUTH0_DOMAIN || '',
  mongoURI: process.env.MONGODB_URI || '',
  jwksUri: process.env.AUTH0_JWKS || '',
  roles: process.env.AUTH0_ROLES || ''
}
