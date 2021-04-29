const express = require('express');
const hbs = require('hbs');
const helpers = require('./hbs/helpers');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/public'));

// Express hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'HOME'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'ABOUT'
    });
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto: ${port}`);
});