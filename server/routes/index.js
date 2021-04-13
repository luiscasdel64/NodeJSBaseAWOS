const express = require('express');
const app = express();

app.use('/usuario', require('./usuario'));
app.use('/categoria', require('./categoria'));
app.use('/producto', require('./producto'));

module.exports = app;