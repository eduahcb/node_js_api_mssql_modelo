require('dotenv').load();

const express = require('express');
const validator = require('express-validator');
const bodyParser = require('body-parser');

module.exports = () => {

    const app = express();

    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(bodyParser.json());
    app.use(validator());

    require('../src/connection/configDatabase.js')();
    require('../src/routes/routes')(app);

    return app;
}