'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
let console = require('./lib/console-logger');

// import * as firebase from "firebase-admin";
// const serviceAccount = require("./../serviceAccountKey.json");

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


/*
firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://name-of.firebaseio.com"
  });
  */
