const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
require('dotenv/config');

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useUnifiedTopology: true },
    () => console.log('Connected to DB !')
);

//Import routes
const router = require('./controllers/router');

//Routes middlewares
app.use('/', router);

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} ...`);
});