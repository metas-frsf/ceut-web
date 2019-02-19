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
app.use(express.static('./dist/brillante'));

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname,'/dist/brillante/index.html'));
});

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./server/users/users.controller'));

//serve current port
app.get('/backend', (req, res) => {
  res.json([
    {url: process.env.BACKEND_URL ? process.env.BACKEND_URL : 'http://localhost:4000'},
    {env: process.env}
    ]);
});

// // start server
// const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
// const server = app.listen(port, function () {
//     console.log('Server listening on port ' + port);
// });

// Start the app by listening on the default Heroku port
const port = process.env.PORT ? process.env.PORT : 4000;
const server = app.listen(port, function () {
  console.log('Server listening on port ' + port);
});
