const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const config = require("./config");
// const { requiredScopes } = require("express-oauth2-jwt-bearer");

// const checkScopes = scopes => requiredScopes(scopes);

module.exports.checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: config.jwksUri
  }),
  audience: config.audience,
  algorithms: [ 'RS256' ]
});

module.exports.checkIfUserIsAdmin = user => user[config.roles].some(role => role === 'admin')
