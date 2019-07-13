require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('server/_helpers/jwt');
const errorHandler = require('server/_helpers/error-handler');
const path = require ('path');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// global error handler
app.use(errorHandler);

// Serve only the static files form the dist directory
app.use(express.static('./dist'));

const rutasAccesibles = ['/', '/electivas', '/home', '/deportes', '/login', '/tarjetas'];

app.get(rutasAccesibles, function(req,res) {
  res.sendFile(path.join(__dirname,'/dist/index.html'));
});

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./server/users/users.controller'));
app.use('/cards', require('./server/cards/cards.controller'));
app.use('/api/electivas', require('./server/electivas/electivas.controller'));
app.use('/api/keys', require('server/keys/keys.controller'));

// Start the app by listening on the default Heroku port
const port = process.env.PORT ? process.env.PORT : 4000;
const server = app.listen(port, function () {
  console.log('Server listening on port ' + port);
});
