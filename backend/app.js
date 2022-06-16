const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = 3001;
// const indexRouter = require('./routes/indexRouter');

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server is started on port: ${PORT}`);
});
