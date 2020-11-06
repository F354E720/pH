var fs = require("fs");
const express = require('express');
const expressLayouts = require('express-ejs-layouts'); // Express layouts
const favicon = require('serve-favicon');
const app = express();
const path = require('path');

// Listen to a specific port OR :3000:
const configPort = (process.env.PORT || 24767);

// Listen:
app.listen(configPort, console.log(`Server started on ${configPort}`));

// Set the static route:
app.use('/static', express.static(path.join(__dirname, '/static')));

// EJS (Embedded JavaScript):
app.use(expressLayouts); // Use the Express Layouts
app.set('view engine', 'ejs'); // Use EJS View Engine
app.set('views', path.join(__dirname, '/views')); // Directory for views:

app.get('/', (request, response) => {
    response.render('index');
});

app.get('/index', (request, response) => {
    response.render('index');
});

app.get('/robots.txt', (request, response) => { 
    response.type('text/plain');
    response.sendFile('robots.txt', { root: __dirname });
});

app.get('*', (request, response) => {
    response.sendFile('/static/html/50x.html', { root: __dirname }); 
});

app.use(favicon(path.join(__dirname, 'static', 'img', 'favicon.ico.png')));

// https://stackoverflow.com/a/6528951
// https://stackoverflow.com/a/26079640
// https://stackoverflow.com/a/20265155