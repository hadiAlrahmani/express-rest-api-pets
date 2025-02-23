const dotenv = require('dotenv');

dotenv.config();
require('./config/database');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Controllers
const petsCtrl = require('./controllers/pets');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Public Routes
app.use('/pets', petsCtrl);

app.listen(3000, () => {
  console.log('The express app is ready!');
});
