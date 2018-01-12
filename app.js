'use strict';
const express = require('express');
const bodyParser = require('body-parser');
let console = require('./lib/console-logger');
require('./lib/firebase/firebase-connect');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

const routes = require('./api/routes/routes');

routes(app);

app.listen(port, (err) => {
    if (err) console.log(err);
    else {
        console.log(`server started on port ${port}`);
    }
});
