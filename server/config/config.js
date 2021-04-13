//Puerto
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

if (process.env.NODE_ENV === 'dev') {
    //Si el servidor de encuentra en un entorno de desarrollo.
    process.env.URLDB = 'mongodb://localhost:27017/starbucks';
} else {
    //Si el servidor se encuentra en un entorno de producción.
    process.env.URLDB = 'mongodb://localhost:27017/starbucks';
}