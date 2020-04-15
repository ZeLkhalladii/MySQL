const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './views')));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.get('/', (request, response) => {
    response.render('index.ejs', {title: 'Home Page'});
})


app.get('/contact', (request, response) => {
    response.render('contact.ejs');
})

app.get('/apis/citation', (request, response) => {
    response.render('add.ejs');
})

app.use('/apis', require('./Source/routes/backend.js'));



const port = 3000;
app.listen(port, () => {
    console.log(`the server is running on the port: ${port}`);
    
})