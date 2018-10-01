require('dotenv').load();

const express = require('express');
const validator = require('express-validator');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {

    const app = express();

    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(bodyParser.json());
    app.use(validator());

    consign( {cwd : 'src'})
        .include('routes')
        .then('connection')
        .into(app);

    return app;
}