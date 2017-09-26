const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/pulse');
mongoose
    .connection
    .once('open', () => console.log('connected to mongodb://localhost/pulse'))
    .on('error', (err) => console.warn('unable to connection to mongodb://localhost/pulse'));

const port = process.env.PORT || 3050;

app.use(bodyParser.json());
routes(app);
app.use((err, req, res, next) => {
    err && req.status(err.status || 500);
});

app.listen(port, err => {
    err
        ? console.warn('connection to port 3050 UNSUCCESSFUL', err)
        : console.log('connection to port 3050 SUCCESSFUL')
});