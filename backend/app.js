const express = require('express');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

<<<<<<< HEAD
const progressRouter = require('./routes/progressRouter');





=======
const teamMatesRouter = require('./routes/teamMatesRouter');
const feedBackRouter = require('./routes/feedBackRouter');
const myFeedBackRouter = require('./routes/myFeedBackRouter');
>>>>>>> c0c3f020465eff9bf200068c121b70ee472ea2b4

const app = express();
const PORT = 3001;

app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(morgan('dev'));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
<<<<<<< HEAD

app.use('/progress', progressRouter);






=======
>>>>>>> c0c3f020465eff9bf200068c121b70ee472ea2b4

app.use('/teammates', teamMatesRouter);
app.use('/feedback', feedBackRouter);
app.use('/myfeedback', myFeedBackRouter);

app.listen(PORT, () => {
  console.log(`Server is started on port: ${PORT}`);
});
