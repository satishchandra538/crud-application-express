const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');

const User = require('./routes/users');
const Exercise = require('./routes/exercises');

const app = express();
const port = process.env.PORT || 3000;
const URI = process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json({ type: 'application/*+json' }));

mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log("database connected"));

mongoose.connection.once('open', () => console.log("db connected"));

app.use('/user', User);
app.use('/exercise', Exercise);

app.listen(port)