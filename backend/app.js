const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = 3001;
// const indexRouter = require('./routes/indexRouter');
const userRouter = require('./routes/userRouter');

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
// const corsOptions = {
//   origin: '*',
//   credentials: true,
//   optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/', indexRouter);
app.use('/', userRouter);

app.listen(PORT, () => {
  console.log(`Server is started on port: ${PORT}`);
});
