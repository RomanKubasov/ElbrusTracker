/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-shadow */
/* eslint-disable camelcase */
const express = require('express');
require('dotenv').config();
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors');
const morgan = require('morgan');
const { WebSocketServer } = require('ws');
const path = require('path');
const http = require('http');

const userRouter = require('./routes/userRouter');
const progressRouter = require('./routes/progressRouter');
const teamMatesRouter = require('./routes/teamMatesRouter');
const feedBackRouter = require('./routes/feedBackRouter');
const myFeedBackRouter = require('./routes/myFeedBackRouter');
const randomizerRouter = require('./routes/randomizerRouter');
const myProgressRouter = require('./routes/myProgressRouter');

const app = express();
const PORT = 3001;

const sessionParser = session({
  store: new FileStore(),
  key: 'sid',
  secret: 'helloworld',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 24 * 60 * 60e3,
    httpOnly: true,
  },
});

app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(morgan('dev'));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(sessionParser);

app.use('/user', userRouter);
app.use('/progress', progressRouter);
app.use('/myprogress', myProgressRouter);
app.use('/teammates', teamMatesRouter);
app.use('/feedback', feedBackRouter);
app.use('/myfeedback', myFeedBackRouter);
app.use('/randomizer', randomizerRouter);

/* Web Socket Server */
const map = new Map();

const server = http.createServer(app);
const wss = new WebSocketServer({ clientTracking: false, noServer: true });

/* lostbutton code */
let students = [];
let lostStudents = [];
let likes = 0;
/* end of lostbutton code */

server.on('upgrade', (request, socket, head) => {
  sessionParser(request, {}, () => {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request);
    });
  });
});

wss.on('connection', async (ws, request) => {
  let id = 'guest';
  if (request.session.user) {
    id = request.session.user.id;
  }
  map.set(id, ws);

  ws.on('message', (message) => {
    let { fromUser, data } = JSON.parse(message);
    if (fromUser === undefined) fromUser = 'гость';

    /* lostbutton code */
    switch (data) {
      case 'join': {
        // if (!students.includes(fromUser)) {
        students.push(fromUser);
        for (const [id, clientWs] of map) {
          console.log('SENT--->');
          clientWs.send(JSON.stringify({
            message: `Пользователь ${fromUser} присоединился`, students: students.length, lostStudents: lostStudents.length, likes,
          }));
        }
        // }
        break;
      }
      case 'lost': {
        // if (!lostStudents.includes(fromUser)) {
        lostStudents.push(fromUser);
        for (const [id, clientWs] of map) {
          console.log('SENT--->');
          clientWs.send(JSON.stringify({
            message: `Пользователь ${fromUser} отвалился`, students: students.length, lostStudents: lostStudents.length, likes,
          }));
        }
        // }
        break;
      }
      case 'like': {
        likes++;
        for (const [id, clientWs] of map) {
          clientWs.send(JSON.stringify({
            message: `Пользователь ${fromUser} Like`, students: students.length, lostStudents: lostStudents.length, likes,
          }));
        }
        break;
      }
      default: { break; }
    }
    /* end of lostbutton code */
  });

  ws.on('close', () => {
    map.delete(id);
  });
});

server.listen(PORT, () => {
  console.log(`Server is started on port: ${PORT}`);
});
