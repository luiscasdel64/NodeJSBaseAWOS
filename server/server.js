require('./config/config');
require('colors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', require('./routes/index'));

mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(resp => {
    console.log('[SERVER]'.green, `Base de datos ONLINE`);
}).catch(err => {
    console.log('[SERVER]'.red, `Conexion fallida: ${err}`);
});

app.listen(process.env.PORT, () => {
    console.log('[SERVER]'.green, `Escuchando en puerto: ${process.env.PORT}`);
});