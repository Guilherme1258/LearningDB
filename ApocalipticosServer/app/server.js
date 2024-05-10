const express = require('express');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const router = require('./routes/router');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

module.exports = app;
