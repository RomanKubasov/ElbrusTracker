const express = require('express');
const ClientOAuth2 = require('client-oauth2');
// const { users } = require('../db/models');
// const GitHubStrategy = require('passport-github-oauth20').Strategy;

const router = express.Router();

// простая аутентификация
// router.post('/auth', async (req, res) => {
//   const { name } = req.body;
//   const { pass } = req.body;
//   const currentUser = await users.findOne({ where: { name } });
//   if (currentUser) {
//     const validationPass = await currentUser.compare(pass, currentUser.pass);
//     if (validationPass) {
//       req.session.userName = currentUser.name;
//       req.session.userId = currentUser.id;
//       res.sendStatus(200);
//     } else {
//       res.sendStatus(403);
//     }
//   } else {
//     res.sendStatus(403);
//   }
// });

// гитхабная аутентификация

const githubAuth = new ClientOAuth2({
  clientId: '58ed0551023e8ee6b590',
  clientSecret: '0c45186e1609d7cb4db6a4d03ad9bb2d650a10ae',
  accessTokenUri: 'https://github.com/login/oauth/access_token',
  authorizationUri: 'https://github.com/login/oauth/authorize',
  redirectUri: 'http://localhost:3001/auth/github/callback',
  // scopes: ['notifications', 'gist'],
});

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,DELETE,UPDATE,POST,OPTIONS');
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.header('Access-control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});

router.get('/auth/github', (req, res) => {
  console.log('>>>>> we ar here', githubAuth.code.getUri());
  const uri = githubAuth.code.getUri();
  res.redirect(uri);
});

router.get('/auth/github/callback', (req, res) => {
  console.log('>>>>> also here');
  githubAuth.code.getToken(req.originalUrl)
    .then((user) => {
      console.log(user); //= > { accessToken: '...', tokenType: 'bearer', ... }

      // Refresh the current users access token.
      user.refresh().then((updatedUser) => {
        console.log(updatedUser !== user); //= > true
        console.log(updatedUser.accessToken);
      });

      // Sign API requests on behalf of the current user.
      user.sign({
        method: 'get',
        url: 'http://example.com',
      });

      // We should store the token into a database.
      return res.send(user.accessToken);
    });
});

module.exports = router;
