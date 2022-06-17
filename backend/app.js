const express = require('express');
require('dotenv').config();
// const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(morgan('dev'));
// app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// const { users } = require('./db/models');

// users.findAll().then(console.log);

app.use((req, res) => {
  res.status(404).send('router doesnt exist');
});

app.listen(PORT, () => {
  console.log(`Server is started on port: ${PORT}`);
});
