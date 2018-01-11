'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
let console = require('./console-logger.js');

// import * as firebase from "firebase-admin";
// const serviceAccount = require("./../serviceAccountKey.json");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

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
