const express = require('express');
require('dotenv').config();
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const userRouter = require('./routes/userRouter');
const progressRouter = require('./routes/progressRouter');
const teamMatesRouter = require('./routes/teamMatesRouter');
const feedBackRouter = require('./routes/feedBackRouter');
const myFeedBackRouter = require('./routes/myFeedBackRouter');

const app = express();
const PORT = 3001;

const sessionConfig = {
  store: new FileStore(),
  key: 'sid',
  secret: 'helloworld',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 24 * 60 * 60e3,
    httpOnly: true,
    // secure: true,
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

app.listen(PORT, () => {
  console.log(`Server is started on port: ${PORT}`);
});
