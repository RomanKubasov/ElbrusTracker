/* eslint-disable camelcase */
const express = require('express');
require('dotenv').config();
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const fetch = require('node-fetch');

const userRouter = require('./routes/userRouter');
const progressRouter = require('./routes/progressRouter');
const teamMatesRouter = require('./routes/teamMatesRouter');
const feedBackRouter = require('./routes/feedBackRouter');
const myFeedBackRouter = require('./routes/myFeedBackRouter');

const app = express();
const PORT = 3001;

const client_id = '58ed0551023e8ee6b590';
const redirect_uri = 'http://localhost:3000/login';
const client_secret = '888bb261ecc1e6b4abd27b5996b15c28fc12325c';

const sessionConfig = {
  store: new FileStore(),
  key: 'sid',
  secret: 'helloworld',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 24 * 60 * 60e3,
    httpOnly: true,
  },
};

app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(morgan('dev'));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));

app.use('/user', userRouter);
app.use('/progress', progressRouter);
app.use('/teammates', teamMatesRouter);
app.use('/feedback', feedBackRouter);
app.use('/myfeedback', myFeedBackRouter);

app.post('/authenticate', (req, res) => {
  const { code } = req.body;

  const string = `?client_id=${client_id}&client_secret=${client_secret}&code=${code}&redirect_uri=${redirect_uri}`;

  // Request to exchange code for an access token
  fetch(`https://github.com/login/oauth/access_token/${string}`, {
    method: 'POST',
  })
    .then((response) => response.text())
    .then((paramsString) => {
      const params = new URLSearchParams(paramsString);
      const access_token = params.get('access_token');
      // Request to return data of a user that has been authenticated
      return fetch('https://api.github.com/user', {
        headers: {
          Authorization: `token ${access_token}`,
        },
      });
    })
    .then((response) => response.json())
    .then((response) => { console.log('RES--->', response); res.status(200).json(response); })
    .catch((error) => res.status(400).json(error));
});

app.listen(PORT, () => {
  console.log(`Server is started on port: ${PORT}`);
});
