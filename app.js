require('dotenv').config();
const express = require('express')
var hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine','hbs'); 
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//servir contenido estático

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home',{
        nombre:'Neydi Portilla',
        titulo:'Curso de Node'
    });
});

app.get('/generic', function (req, res) {
    res.render('generic',{
        nombre:'Generic-Neydi Portilla',
        titulo:'Curso de Node'
    });
});

app.get('/elements', function (req, res) {
    res.render('elements',{
        nombre:'Elements-Neydi Portilla',
        titulo:'Curso de Node'
    });
});

// app.get('/generic', function (req, res) {
//     res.sendFile(__dirname + '/public/generic.html');
// });

// app.get('/elements', function (req, res) {
//     res.sendFile(__dirname + '/public/elements.html');
// });

// app.get('*', function (req, res) {
//     res.sendFile(__dirname + '/public/404.html');
// });

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})